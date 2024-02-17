import {Header}                     from "./components/Header/Header.jsx";
import {UserInput}                  from "./components/UserInput/UserInput.jsx";
import {Table}                      from "./components/Table/Table.jsx";
import {useState}        from "react";

const VALUES = {
  initialInvestment: 15000,
  annualInvestment:  900,
  expectedReturn:    5.5,
  duration:          12,
}

function App() {
  const [values, setValues] = useState(VALUES);
  
  /* Homemade handleChange
  function handleChange(event) {
  
	const value = parseFloat(event.target.value);
	setValues({
				...values,
				[event.target.name]: value
			  });
  }
  */
  
  const validDuration = values.duration > 0;
  
  function handleChange(inputIdentifier, newValue) {
	setValues(prevState => {
	  return {
		...prevState,
		[inputIdentifier]: +newValue,
	  };
	});
  }
  
  return (
	<>
	  <div>
		<Header/>
		<UserInput handleChange={handleChange} userInput={values}/>
		{!validDuration && <p className={"center"}>Duration needs to be above 0</p>}
		{validDuration && <Table userInput={values}/>}
	  </div>
	</>
  );
}

export default App
