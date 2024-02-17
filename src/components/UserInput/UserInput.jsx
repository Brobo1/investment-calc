import "./UserInput.css"
import {InputField} from "./InputFields/InputField.jsx";

export function UserInput({handleChange}) {
  
  return (
	<div id={"user-input"}>
	  <div className={"input-group"}>
		<InputField labelText={"Initial Investment"} handleChange={handleChange}/>
		<InputField labelText={"Annual Investment"} handleChange={handleChange}/>
	  </div>
	  <br/>
	  <div className={"input-group"}>
		<InputField labelText={"Expected Return"} handleChange={handleChange}/>
		<InputField labelText={"Duration"} handleChange={handleChange}/>
	  </div>
	</div>
  )
}