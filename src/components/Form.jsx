import "./form.css";
import australia from "../assets/australia.svg";
import tick from "../assets/tick.svg";
import { useEffect, useState } from "react";

function Form() {
  const [salePrice, setSalePrice] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [capitalGain, setCapitalGain] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [income, setIncome] = useState();
  const [taxRate, setTaxRate] = useState("0%");
  const [term, setTerm] = useState("longTerm");
  const [netGain, setNetGain] = useState(0);
  let arr = [];
  const [taxPrcnt, setTaxPrcnt] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    console.log(taxRate);
    console.log(income);
    if (taxRate != "0%") {
      arr = taxRate.split(/[+%]/);
      console.log(arr[1]);
      setTaxPrcnt(arr[1]);
    } else {
      console.log(0);
      setTaxPrcnt(0);
    }
  }, [taxRate]);

  function handleIncome(e) {
    setIncome(e.target.value);
    if (e.target.value == "$0 - $18,200") {
      setTaxRate("0%");
    } else if (e.target.value == "$18,201 - $45,000") {
      setTaxRate("Nil + 19% of the excess over $18,200");
    } else if (e.target.value == "$45,001 - $120,000") {
      setTaxRate("$5,092 + 32.5% of the excess over $45,000");
    } else if (e.target.value == "$120,001 - $180,000") {
      setTaxRate("$29,467 + 37% of the excess over $120,000");
    } else if (e.target.value == "$180,001+") {
      setTaxRate("$51,667 + 45% of the excess over $180,000");
    }
  }

  useEffect(() => {
    setCapitalGain(salePrice - purchasePrice - expenses);
    console.log(setCapitalGain);
  }, [salePrice, purchasePrice, expenses]);

  useEffect(() => {
    if (term == "longTerm") {
      document.getElementById("span2").style.backgroundColor = "#0052FE10";
      document.getElementById("span2").style.border = "2px solid #0052FE";
      document.getElementById("span1").style.backgroundColor = "white";
      document.getElementById("span1").style.border = "1px solid  #3E424A";
      document.getElementById("tickImg2").style.visibility = "visible";
      document.getElementById("tickImg1").style.visibility = "hidden";
    }
    if (term == "shortTerm") {
      document.getElementById("span1").style.backgroundColor = "#0052FE10";
      document.getElementById("span1").style.border = "2px solid #0052FE";
      document.getElementById("span2").style.backgroundColor = "white";
      document.getElementById("span2").style.border = "1px solid  #3E424A";
      document.getElementById("tickImg1").style.visibility = "visible";
      document.getElementById("tickImg2").style.visibility = "hidden";
    }
    console.log(term);
  }, [term]);

  useEffect(() => {
    if (term == "longTerm") {
      if (capitalGain > 0) {
        setDiscount(capitalGain / 2);
        setNetGain(capitalGain - capitalGain / 2);
        setTax((taxPrcnt / 100) * (capitalGain - capitalGain / 2));
        console.log((taxPrcnt / 100) * (capitalGain - capitalGain / 2));
      } else {
        setDiscount(0);
        setNetGain(capitalGain - 0);
        setTax((taxPrcnt / 100) * (capitalGain - 0));
        console.log((taxPrcnt / 100) * (capitalGain - 0));
      }
      document.getElementById("discountSpan").style.display = "block";
      document.getElementById("gainSpan").style.display = "block";
      document.getElementById("discountLabel").style.display = "block";
      document.getElementById("gainLabel").style.display = "block";
    }
    if (term == "shortTerm") {
      document.getElementById("discountSpan").style.display = "none";
      document.getElementById("gainSpan").style.display = "none";
      document.getElementById("discountLabel").style.display = "none";
      document.getElementById("gainLabel").style.display = "none";
      setNetGain(salePrice - purchasePrice - expenses);
      setTax((taxPrcnt / 100) * (salePrice - purchasePrice - expenses));
    }
  }, [term, capitalGain, purchasePrice, salePrice, expenses, income, taxPrcnt]);

  return (
    <>
      <div id="formDiv">
        <h1>Free Crypto Tax Calculator Australia</h1>
        <div id="firstrow">
          <div id="yearDiv">
            <label htmlFor="Financial_Year">Financial Year</label>
            <select id="select1">
              <option value="FY 2023-24">FY 2023-24</option>
            </select>
          </div>
          <div id="countryDiv">
            <label htmlFor="Country">Country</label>
            <span>
              <img src={australia} />
            </span>
            <select id="select2">
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>
        <hr id="hr1"></hr>
        <div id="secondRowDiv">
          <div>
            <label>Enter purchase price of Crypto</label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
            ></input>
            <label>Enter your Expenses</label>
            <input
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
            ></input>
            <label>Select Your Annual Income</label>
            <select id="select3" value={income} onChange={handleIncome}>
              <option value="0">--select--</option>
              <option value="$0 - $18,200">$0 - $18,200</option>
              <option value="$18,201 - $45,000">$18,201 - $45,000</option>
              <option value="$45,001 - $120,000">$45,001 - $120,000</option>
              <option value="$120,001 - $180,000">$120,001 - $180,000</option>
              <option value="$180,001+">$180,001+</option>
            </select>
            <label id="gainLabel">Capital gains amount</label>
            <span id="gainSpan">{capitalGain}</span>
            <span id="greenSpan">
              <p>Net Capital gains tax amount</p>
              <p id="para">{netGain}</p>
            </span>
          </div>
          <div>
            <label>Enter sale price of Crypto</label>
            <input
              type="number"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
            ></input>
            <label>Investment Type</label>
            <p id="termsPara">
              <span
                id="span1"
                className="shortTerm"
                onClick={(e) => setTerm(e.target.className)}
              >
                Short Term<img src={tick} id="tickImg1"></img>
              </span>
              <span
                id="span2"
                className="longTerm"
                onClick={(e) => setTerm(e.target.className)}
              >
                Long Term<img src={tick} id="tickImg2"></img>
              </span>
            </p>
            <p id="monthspara">
              <span id="span3">&lt;12 months</span>
              <span id="span4">&gt;12 months</span>
            </p>
            <label id="rateLabel">Tax Rate</label>
            <p id="ratePara">{taxRate}</p>
            <label id="discountLabel">Discount for long term gains</label>
            <span id="discountSpan">{discount}</span>
            <span id="blueSpan">
              <p>The tax you need to pay*</p>
              <p id="para">{tax}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
