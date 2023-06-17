import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "../stylesheets/login.css";
import validate from "../FormikValidation/FormikLogin";
import { AiFillLinkedin } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import { useLinkedIn } from "react-linkedin-login-oauth2";


const Login = () => {
  const [formStyle, setFormStyle] = useState("getEmail");
  const [count, setCounter] = useState(1);
  const [formLabel, setLabel] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isDisabledPrev, setDisabledPrev] = useState(false);
  const [isPrev, setPrev] = useState(false);
  const [isNext, setNext] = useState(true);
  const [isDisabledNext, setDisabledNext] = useState(false);
  const [isSubmit, setSubmit] = useState(false);

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
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      setSubmitClicked(true);
    },
  });

  useEffect(() => {
    if (submitClicked) {
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

  const getNextForm = () => {
    setCounter(count + 1);
  };
  const getPrevForm = () => {
    setCounter(count - 1);
  };

  useEffect(() => {
    const emailError = Object.keys(formik.errors).includes("email");
    const passwordError = Object.keys(formik.errors).includes("password");
    if (emailError && count === 1) {
      const err = Object.values(formik.errors);
      for (let i = 0; i < err.length; i++) {
        toast.error(err[i], { position: toast.POSITION.TOP_RIGHT });
        break;
      }
      setDisabledNext(true);
    }
    if (passwordError && count === 2) {
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

    if (count === 1 && !emailError) {
      setDisabledNext(false);
      setLabel("Email");
      setFormStyle("getEmail");
    } else if (count === 2 && !emailError) {
      setLabel("Password");
      setFormStyle("getPassword");
    } else if (count === 3) {
      setDisabledNext(true);
    }
  }, [count, formik.errors]);
  //use effect for preving the next
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
    if (count < 3) {
      setNext(true);
    }
  }, [count]);
  useEffect(() => {
    if (count > 1) {
      setPrev(true);
     
    }
    if (count >= 3) {
      setDisabledNext(true);
      setNext(false);
    }
  }, [count]);

  useEffect(() => {
    if (count === 3) {
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
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="loginContainer">
      <ToastContainer />
      <div className="loginLogo">
        <p className="tradeName">
          <span id="tradeName">
            We are ready to take your business to the next level.
          </span>
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="loginForm" data-aos="zoom-in">
        <p className="loginLabel">{formLabel}</p>
        {formStyle === "getEmail" && (
          <div>
            <input
              className="loginInput"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              data-aos="slide-left"
            />
            <br />
          </div>
        )}
        {formStyle === "getPassword" && (
          <div>
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              data-aos="slide-left"
            />
            <br />
          </div>
        )}
        <div className="loginParser">
          <div>
            <a id="loginLink" href="/forgetPassword">
              Forgot password?
            </a>
          </div>
          <div>
            <a id="loginLink" href="/register">
              Register
            </a>
          </div>
        </div>

        <div className="toNext">
          {isNext && (
            <button
              className="loginButton"
              type="button"
              onClick={getNextForm}
              disabled={isDisabledNext}
            >
              Next
            </button>
          )}
          {isPrev && (
            <button
              className="loginButton"
              type="button"
              onClick={getPrevForm}
              disabled={isDisabledPrev}
            >
              Previous
            </button>
          )}
          <br />
        </div>
        <div className="submit">
          {isSubmit && (
            <button className="loginButton" type="submit">
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
  );
};

export default Login;
