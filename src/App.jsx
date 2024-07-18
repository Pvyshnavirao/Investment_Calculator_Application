import Header from "./components/Header" 
import UserInput from "./components/UserInput"
import Output from "./components/Output"
import { useState } from "react";
function App() {

  const [initialState , setState ]=useState({
    initialInvestment : 10000,
    annualInvestment:1200,
    expectedReturn: 6,
    duration: 10,
});

const InputIsValid = initialState.duration >= 1 ;
function handleClick(inputIdentifier , newValue){
// setState((...prevInput) => {
  setState((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue,
  }));
}
  //      {
//         return{...prevInput, 
//             [inputIdentifier]: +newValue,
//         };
//     } );
// }
  return (
    <>
 <Header /> 
<UserInput initialState={initialState} onChange={handleClick}/>
      {InputIsValid ? <Output input={initialState} /> : <p className="center">Enter Duration Greater than 0</p>}
    </>
   
  )
}

export default App
