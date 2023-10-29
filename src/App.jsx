import "./App.css";
import FAQComp from "./components/FAQComp";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import Subscribe from "./components/Subscribe";
import FAQ from "./components/faq";

function App() {
  function getFAQ(faq) {
    return (
      <>
        <FAQComp id={faq.id} question={faq.question} answer={faq.answer} />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div id="mainDiv">
        <div>
          <Form />
          <div id="faqSection">
            <h1>Frequently Asked Questions</h1>
            <div>{FAQ.map((e) => getFAQ(e))}</div>
          </div>
        </div>
        <Start />
      </div>
      <Subscribe />
    </>
  );
}

export default App;
