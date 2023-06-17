import React, { useState, useEffect } from "react";
import "../stylesheets/signUp.css";
import { useFormik } from "formik";
import validate from "../FormikValidation/FormikSignUp";
import { AiFillLinkedin } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import "hover.css/css/hover.css";
import AOS from 'aos'

const Register = () => {
  const [formStyle, setFormStyle] = useState("getEmail");
  const [count, setCounter] = useState(1);
  const [formLabel, setLabel] = useState("");
  const [isDisabledPrev, setDisabledPrev] = useState(false);
  const [isPrev, setPrev] = useState(false);
  const [isNext, setNext] = useState(true);
  const [isDisabledNext, setDisabledNext] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  const { linkedInLogin } = useLinkedIn({
    clientId: "77h81856rzraf6",
    redirectUri: `http://localhost:3000/login`,
    onSuccess: () => {
      console.log("nothing");
    },
    onError: () => {
      console.log("nothings");
    },
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      axios.post("url", values);
      setSubmitClicked(true);
    },
  });
  

  const getNextForm = () => {
    setCounter(count + 1);
  };
  const getPrevForm = () => {
    setCounter(count - 1);
  };
  useEffect(() => {
    const nameError = Object.keys(formik.errors).includes("Name");
    const emailError = Object.keys(formik.errors).includes("email");
    const passwordError = Object.keys(formik.errors).includes("password");
    const addressError = Object.keys(formik.errors).includes("Address");
    const phoneError = Object.keys(formik.errors).includes("Phone");
    if (nameError && count === 1) {
      const err = Object.values(formik.errors);
      for (let i = 0; i < err.length; i++) {
        toast.error(err[i], { position: toast.POSITION.TOP_RIGHT });
        break;
      }
      setDisabledNext(true);
    }
    if (emailError && count === 2) {
      const err = Object.values(formik.errors);
      for (let i = 0; i < err.length; i++) {
        toast.error(err[i], { position: toast.POSITION.TOP_RIGHT });
        break;
      }
      setDisabledNext(true);
    }
    if (passwordError && count === 3) {
      const err = Object.values(formik.errors);
      for (let i = 0; i < err.length; i++) {
        toast.error(err[i], { position: toast.POSITION.TOP_RIGHT });
        break;
      }
      setDisabledNext(true);
    }
    if (addressError && count === 4) {
      const err = Object.values(formik.errors);
      for (let i = 0; i < err.length; i++) {
        toast.error(err[i], { position: toast.POSITION.TOP_RIGHT });
        break;
      }
      setDisabledNext(true);
    }
    if (phoneError && count === 5) {
      const err = Object.values(formik.errors);
      for (let i = 0; i < err.length; i++) {
        toast.error(err[i], { position: toast.POSITION.TOP_RIGHT });
        break;
      }
      setDisabledNext(true);
    }
    
    if (!passwordError || !emailError) {
      setDisabledNext(false);
      setDisabledPrev(false);
      setNext(true)
      setPrev(true)
    }
    if (count === 1 && !nameError) {
      setLabel("Full Name");
      setFormStyle("getFullName");
    } else if (count === 2 && !nameError) {
      setLabel("Email");
      setFormStyle("getEmail");
    } else if (count === 3 && !emailError) {
      setLabel("Password");
      setFormStyle("getPassword");
    } else if (count === 4 && !passwordError) {
      setLabel("Address");
      setFormStyle("getAddress");
    } else if (count === 5 && !addressError) {
      setLabel("Phone Number" );
      setFormStyle("getPhone" );
    } else if (count === 6&& !phoneError ) {
      setDisabledNext(true);
    }
  }, [count, formik.errors]);
  
  //use effect for preving the next to the previous inputs
  useEffect(() => {
    if (count <= 1) {
      setDisabledPrev(true);
      setNext(true);
      setPrev(false);
    } else if (count > 1) {
      setDisabledPrev(false);
    }
  }, [count]);
  useEffect(() => {
    if (count < 6) {
      setNext(true);
    }
  }, [count]);
  // use effect for getting the next
  useEffect(() => {
    if (count > 1) {
      setPrev(true);
    }
    if (count >= 6) {
      setDisabledNext(true);
      setNext(false);
    }
    if (count < 6) {
      setDisabledNext(false);
    }
  }, [count]);

  useEffect(() => {
    if (count === 6) {
      const err = Object.values(formik.errors);
      for (let i = 0; i < err.length; i++) {
        toast.error(err[i], { position: toast.POSITION.TOP_RIGHT });
        break;
      }
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [count, formik.errors]);

  //Error checking begins here, I hope you understand
  useEffect(() => {
    if (submitClicked) {
      console.log("I am Here");
      console.log(Object.keys(formik.errors));
      if (Object.keys(formik.errors).length > 0) {
        Object.values(formik.errors).forEach((error) => {
          toast.error(error, { position: toast.POSITION.TOP_RIGHT });
        });
        window.location("/login");
      } else {
        console.log(formik.values);
        toast.success("User logged in successfully");
      }
      setSubmitClicked(false);
    }
  }, [submitClicked, formik.errors, formik.values]);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="signUpContainer">
        <ToastContainer />
        <div className="signUpLogo">
          <p className="tradeName">
            <span id="tradeName">
              We are ready to take your business to the next level.
            </span>
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="signUpForm" data-aos="zoom-in-up">
          <p className="signUpLabel">{formLabel}</p>
          {formStyle === "getFullName" && (
            <div>
              <input
                type="text"
                className="signUpInput"
                placeholder="Full Name"
                name="fullName"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                onBlur={formik.handleBlur}
              />
              <br />
            </div>
          )}
          {formStyle === "getEmail" && (
            <div>
              <input
                type="email"
                className="signUpInput"
                placeholder="Email"
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <br />
            </div>
          )}
          {formStyle === "getPassword" && (
            <div>
              <input
                className="signUpInput"
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              <br />
            </div>
          )}
          {formStyle === "getAddress" && (
            <div>
              <input
                type="text"
                className="signUpInput"
                placeholder="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
            </div>
          )}
          {formStyle === "getPhone" && (
            <div>
              <input
                type="phone"
                className="signUpInput"
                placeholder="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
            </div>
          )}
          <div className="signUpParser">
            <div>
              <a
                id="loginLink"
                className="hvr-underline-from-left"
                href="/login"
              >
                Login
              </a>
            </div>
          </div>
          <div className="toNext">
            {isNext && (
              <button
                type="button"
                onClick={getNextForm}
                disabled={isDisabledNext}
                className="signUpButton hvr-float-shadow"
              >
                Next
              </button>
            )}
            {isPrev && (
              <button
                type="button"
                onClick={getPrevForm}
                disabled={isDisabledPrev}
                className="signUpButton hvr-float-shadow"
              >
                Previous
              </button>
            )}
            <br />
          </div>
          <div className="submit">
            {isSubmit && (
              <button type="submit" className="signUpButton hvr-float-shadow">
                Submit
              </button>
            )}
          </div>
          <div className="loginIcons">
            <GoogleLogin
              clientId="378647354767-8c1cnffmod86srv7e6lvbtvcdfc9jdbp.apps.googleusercontent.com"
              cookiePolicy={"single_host_origin"}
              buttonText=""
              className="googleLogin"
            />

            <div className="loginIcon" onClick={linkedInLogin}>
              <AiFillLinkedin id="loginIcon" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
