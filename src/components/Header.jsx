import investment from "../assets/investment-calculator-logo.png";
import '../index.css'; 

export default function Header(){
    return(
        <div id="header">
            <img  src={investment} alt="Investment Calculator Logo" /> 
            <h1>React Investment Calculator</h1>
        </div>
    );
}