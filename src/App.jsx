import {Header}                     from "./components/Header/Header.jsx";
import {UserInput}                  from "./components/UserInput/UserInput.jsx";
import {Table}                      from "./components/Table/Table.jsx";
import {useEffect, useState}                   from "react";
import {calculateInvestmentResults} from "./util/investment.js";

const VALUES = {
  initialInvestment: 15000,
  annualInvestment:  900,
  expectedReturn:    5.5,
  duration:          12,
}

function App() {
  const [values, setValues]   = useState(VALUES);
  const [results, setResults] = useState([]);
  
  function handleChange(event) {
	const value = parseFloat(event.target.value);
	setValues({
				...values,
				[event.target.name]: value
			  });
	
  }
  
  useEffect(() => {
	setResults(calculateInvestmentResults(values));
  }, [values]);
  results.map(result => console.log(result));
  
  return (
	<>
	  <div>
		<Header/>
		<UserInput handleChange={handleChange} values={values}/>
		<Table values={results} initialInvest={values}/>
	  </div>
	</>
  );
}

export default App
