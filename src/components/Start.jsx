import startImg from "../assets/startImg.svg";
import "./start.css";
function Start() {
  return (
    <>
      <div id="startDiv">
        <h2>Get Started with KoinX for FREE</h2>
        <p>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <div id="imgDiv">
          <img src={startImg}></img>
        </div>
        <button>Get Started for FREE &rarr;</button>
      </div>
    </>
  );
}
export default Start;
