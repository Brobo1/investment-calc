import "./UserInput.css"
import {InputField} from "./InputFields/InputField.jsx";

export function UserInput({
							handleChange,
							userInput,
						  }) {
  
  return (
	<section id={"user-input"}>
	  <div className={"input-group"}>
		<InputField
		  name={"initialInvestment"}
		  labelText={"Initial Investment"}
		  handleChange={(e) => handleChange('initialInvestment', e.target.value)}
		  value={userInput.initialInvestment}
		/>
		<InputField
		  name={"annualInvestment"}
		  labelText={"Annual Investment"}
		  handleChange={(e) => handleChange('annualInvestment', e.target.value)}
		  value={userInput.annualInvestment}
		/>
	  </div>
	  <br/>
	  <div className={"input-group"}>
		<InputField
		  name={"expectedReturn"}
		  labelText={"Expected Return"}
		  handleChange={(e) => handleChange('expectedReturn', e.target.value)}
		  value={userInput.expectedReturn}
		/>
		<InputField
		  name={"duration"}
		  labelText={"Duration"}
		  handleChange={(e) => handleChange('duration', e.target.value)}
		  value={userInput.duration}
		/>
	  </div>
	</section>
  )
}