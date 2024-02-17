import image from "../../assets/investment-calculator-logo.png";
import "./Header.css";

export function Header() {
  return (
	<header id={"header"}>
	  <img src={image} alt={"Website logo"}/>
	  <h1>Inventment Calculator</h1>
	</header>
  )
}
