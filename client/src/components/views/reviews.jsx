/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

function Reviews() {
  return (
    <>
      <div className="V_centered">
        <section className="capsule_big flex_center center inverted widthEl">
          <NavLink className="capsule no_dec inverted" to="/map">EXPLORE THIS NOW</NavLink>
        </section>

        <div className="genericBox reviewBox ">
          <h3 className=" mgL12">Best app ever!</h3>
          <div className="smallFont">
            <p className="smallFont mgL12">
              "A must-have for posting and finding city ads. Clean interface and
              smooth experience!"
            </p>
            <p className="smallFont mgL12">Carlos, Madrid</p>
          </div>
        </div>
        <div className="genericBox reviewBox ">
          <h3 className=" mgL12">Totally recommended!</h3>
          <div className="smallFont">
            <p className="smallFont mgL12">
              "Perfect app to post city ads and find services nearby. Fast,
              efficient, and user-friendly!"
            </p>
            <p className="smallFont mgL12">Johann, Berlin</p>
          </div>
        </div>
        <div className="genericBox reviewBox ">
          <h3 className=" mgL12">It helps so much!</h3>
          <div className="smallFont">
            <p className="smallFont mgL12">
              "Great app for posting city ads! Easy to use and connects with
              locals quickly."
            </p>
            <p className="smallFont mgL12">Norma, Paris</p>
          </div>
        </div>

        <div className="flex_center center">
        <section className="capsule_big flex_center center inverted widthEl">
          <NavLink className="capsule no_dec inverted" to="/signin">REGISTER NOW ! ! !</NavLink>
        </section>
        </div>
      </div>
    </>
  );
}

export default Reviews;
