import {calculateInvestmentResults , formatter} from "../util/investment";


export default function Output({input}){
  
const rdata = calculateInvestmentResults(input);
const initialInvestment = rdata[0].valueEndOfYear - rdata[0].interest - rdata[0].annualInvestment;
console.log("rdata:", rdata);
return <table id="result">
<thead>
    <tr>
        <th> Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
    </tr>

</thead>
<tbody>
    {rdata.map(yearData => {
        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year- initialInvestment;
const totalAmountInvested = yearData.valueEndOfYear -totalInterest;
          return <tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>{formatter.format(yearData.valueEndOfYear)}</td>
          <td>{formatter.format(yearData.interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    }
      
     )}
</tbody>
</table>;

    }




















//   const initialInvestment = rdata[0].valueEndOfYear -
//   rdata[0].interest - rdata[0].annualInvestment;
  
//     return <table id="result">
//         <thead>
// <tr>
//     <th>
// Year
//     </th>
//     <th>
// Investment Value
//     </th>
//     <th>
// Interest (Year)
//     </th>
//     <th>
// Total Year
//     </th>
//     <th>Invested Capital</th>
// </tr>
//         </thead>
//         <tbody>
//             {rdata.map( yearData => {

//                 const totalInterest = 
//                 yearData.valueEndOfYear - 
//                 yearData.annualInvestment * 
//                 yearData.year -
//                 initialInvestment;
                
//                 const totalAmountInvested =
//                 yearData.valueEndOfYear - 
//                 totalInterest;

//                 return <tr key={yearData.year}>
//                     <td>
//                     {yearData.year}
//                     </td>
//                     <td>{formatter.format(yearData.valueEndOfYear)}</td>
//                     <td>
// {formatter.format(yearData.interest)}
//                     </td>
//                     <td>
// {formatter.format(totalInterest)}
//                     </td>
//                     <td>
// {formatter.format(totalAmountInvested)}
//                     </td>
//                 </tr>
//             }) }
//         </tbody>
//       </table>;
    
