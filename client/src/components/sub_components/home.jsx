import { useNavigate } from "react-router-dom";

export default function Home({ setClicked }) {
  
  const navigate = useNavigate();

  return (

    <div className="V_centered">
      <section className="capsule_big flex_center center inverted widthEl">
        <h2 onClick={() => setClicked(true)}>EXPLORE THIS NOW </h2>
      </section>
      <section className="">
        <div className="capsule_big bold widthEl flex_center center"
         onClick={() => {
          navigate(`/login`, {
            replace: true,
          });
        }}
        
        >LOG IN</div>
        <div className="capsule_big bold widthEl flex_center center"
        onClick={() => {
          navigate(`/signin`, {
            replace: true,
          });
        }}> SIGN IN</div>
      </section>
    </div>
    
  );
}
