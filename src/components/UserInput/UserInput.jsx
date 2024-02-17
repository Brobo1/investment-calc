import "./UserInput.css"
import {InputField} from "./InputFields/InputField.jsx";

export function UserInput({
							handleChange,
							values,
						  }) {
  
  return (
	<div id={"user-input"}>
	  <div className={"input-group"}>
		<InputField
		  name={"initialInvestment"}
		  labelText={"Initial Investment"}
		  handleChange={handleChange}
		  values={values.initialInvestment}
		/>
		<InputField
		  name={"annualInvestment"}
		  labelText={"Annual Investment"}
		  handleChange={handleChange}
		  values={values.annualInvestment}
		/>
	  </div>
	  <br/>
	  <div className={"input-group"}>
		<InputField
		  name={"expectedReturn"}
		  labelText={"Expected Return"}
		  handleChange={handleChange}
		  values={values.expectedReturn}
		/>
		<InputField
		  name={"duration"}
		  labelText={"Duration"}
		  handleChange={handleChange}
		  values={values.duration}
		/>
	  </div>
	</div>
  )
}