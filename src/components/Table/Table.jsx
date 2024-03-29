import "./Table.css"
import {calculateInvestmentResults, formatter} from "../../util/investment.js";

export function Table({userInput}) {
  
  let values      = calculateInvestmentResults(userInput);
  let totInterest = 0;
  let totCapital  = userInput.initialInvestment;
  
  return (
	<table id={"result"}>
	  <thead>
		<tr>
		  <th>year</th>
		  <th>Investment Value</th>
		  <th>Interest (Year)</th>
		  <th>Total Interest</th>
		  <th>Invested Capital</th>
		</tr>
	  </thead>
	  <tbody>
		{values.map((value, index) => (
		  <tr key={index}>
			<td>{value.year}</td>
			<td>{formatter.format(value.valueEndOfYear)}</td>
			<td>{formatter.format(value.interest)}</td>
			<td>{formatter.format(totInterest += value.interest)} </td>
			<td>{formatter.format(totCapital += userInput.annualInvestment)} </td>
		  </tr>
		))}
	  </tbody>
	
	</table>
  )
}