import {Header}    from "./components/Header/Header.jsx";
import {UserInput} from "./components/UserInput/UserInput.jsx";
import {Table}     from "./components/Table/Table.jsx";
import {useState}  from "react";

const values = [

];

function App() {
  const [values, setValues] = useState();
  
  return (
	<>
	  <div>
		<Header/>
		<UserInput />
		<Table/>
	  </div>
	</>
  );
}

export default App
