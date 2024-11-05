import { useState } from "react";
import "./nav.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import SignIn from "../../pages/auth/Signin";
import SignUp from "../../pages/auth/Signup";
import AccountMenu from "../account menu/accountMenu";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

const navigate = useNavigate()

  function deactivate() {
    setSignInModal(false);
    setSignUpModal(false);
  }
  return (
    <header className="header__container gutter">
      <div className="logo">
        <h1 onClick={()=> navigate("/")}>sell a lot</h1>
      </div>
      <div className="search">
        <div className="dropdown">
          <button className="dropbtn">
            Category <RiArrowDropDownLine />
          </button>
          <div className="dropdown-content">
            <div className="header">
              <h2>Shop by category</h2>
            </div>
            <div className="row">
              <div className="column">
                <h3>Electronics</h3>
              </div>
              <div className="column">
                <h3>Fashion</h3>
              </div>
              <div className="column">
                <h3>Home</h3>
              </div>
              <div className="column">
                <h3>Cars</h3>
              </div>
              <div className="column">
                <h3>Games</h3>
              </div>
              <div className="column">
                <h3>Musical Instruments</h3>
              </div>
              <div className="column">
                <h3>Toys</h3>
              </div>
              <div className="column">
                <h3>Sports</h3>
              </div>
              <div className="column">
                <h3>Property</h3>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="search__name">
          <input type="text" placeholder="What are you looking for?" />
        </div>
        <div className="search__location">
          <select name="" id="">
            <option value="default">All of South Africa</option>
            <option value="default">Gauteng</option>
            <option value="default">Western Cape</option>
            <option value="default">Eastern Cape</option>
            <option value="default">Kwa Zulu Natal</option>
            <option value="default">Free State</option>
            <option value="default">Mpumalanga</option>
            <option value="default">Limpopo</option>
            <option value="default">North West</option>
            <option value="default">Northern Cape</option>
          </select>
        </div>
        <div>
          <button>search</button>
        </div>
      </div>
      <div className="auth">
        <button onClick={() => setSignInModal(!signInModal)}>log in</button>
        <button onClick={() => setSignUpModal(!signUpModal)}>sign up</button>
      </div>
      <AccountMenu />
      {signInModal && <SignIn deactivate={deactivate} />}
      {signUpModal && <SignUp deactivate={deactivate} />}
    </header>
  );
}

export default Nav;
