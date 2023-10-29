import "./faq.css";
function FAQComp(props) {
  return (
    <>
      <div id="faqDiv">
        <p id="questionPara">
          <span>{props.id}</span>. {props.question}
        </p>
        <p id="answerPara">{props.answer}</p>
      </div>
      <hr id="hr2"></hr>
    </>
  );
}
export default FAQComp;
