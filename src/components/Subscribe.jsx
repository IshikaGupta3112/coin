import subscribe from "../assets/subscribe.svg";
import "./subscribe.css";

function Subscribe() {
  return (
    <>
      <div id="subscribeDiv">
        <div>
          <img src={subscribe}></img>
          <div id="subscribeTextDiv">
            <h2>
              Stay up to date with latest crypto news and events. Subscribe to
              our newsletter
            </h2>
            <p>
              <input
                type="email"
                placeholder="Enter your email address"
              ></input>
              <button id="subscribeBtn">Subscribe</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Subscribe;
