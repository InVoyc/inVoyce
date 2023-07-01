import { styled } from "styled-components";
import Button from "./Button.tsx";

export const Navigation = ({ handleOpenModal }) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            InVoyc
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className="nav navbar-nav navbar-right"
            style={{ display: "flex", alignItems: "center" }}
          >
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="/login" className="page-scroll">
                Login
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <SubscribeBtn onClick={handleOpenModal} btnText="SUBSCRIBE" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const SubscribeBtn = styled(Button)`
  margin-top: 1rem;
  background-color: #fff;
  border: 1px solid #000;
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
