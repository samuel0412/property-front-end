"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { createAccount, otpVerifyUser } from "../services/auth";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { addTodo } from "../lib/features/todoSlice";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import OTPInput from "react-otp-input";

const LoginModal = ({ show, setShow }) => {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [toggleEmail, setToggleEmail] = useState(false);
  const [togglePhone, setTogglePhone] = useState(true);
  const [errorShow, setErrorShow] = useState(false);
  const [createNewAccountWithEmail, setCreateNewAccountWithEmail] =
    useState(false);
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    password: "",
    contactNumber: "",
    // profilePic: "",
    role: "user",
  });
  const [errors, setErrors] = useState({
    email: "",
    userName: "",
    password: "",
    contactNumber: "",
  });
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = async (e) => {
    let { name, value } = e.target;
    // if (name === "profilePic") {
    //   let file = e.target.files[0];
    //   const url = await uploadUrl(file, file?.name);
    //   setUserData((prevstate) => {
    //     return { ...prevstate, logoUpload: url.location };
    //   });
    // }
    setUserData((prevstate) => {
      return { ...prevstate, [name]: value };
    });
    setErrors({
      email: "",
      userName: "",
      password: "",
      contactNumber: "",
    });
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    if (userData.userName.trim() === "") {
      newErrors.userName = "Username is required";
      isValid = false;
    } else {
      newErrors.userName = "";
    }
    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (userData.contactNumber.length !== 10) {
      newErrors.contactNumber = "Contact number must be 10 characters";
      isValid = false;
    } else {
      newErrors.contactNumber = "";
    }

    if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const createUserHandler = async () => {
    if (validateForm()) {
      const data = {
        email: userData.email,
        userName: userData.userName,
        password: userData.password,
        contactNumber: userData.contactNumber,
        role: "user",
      };

      try {
        setLoader(true);
        const res = await createAccount(data);

        if (res.ack === 1) {
          toast.success(res.msg);
          setUserData({
            email: "",
            userName: "",
            password: "",
            contactNumber: "",
          });
          setCreateNewAccountWithEmail(false);
          setShowOtpInput(true);
        } else {
          toast.error(res.msg);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoader(false);
      }
    } else {
      toast.error("Please check your from");
    }
  };

  const handleClear = () => {
    setOtp("");
  };

  const handleSubmit = async () => {
    const otpData = {
      code: otp,
    };
    try {
      setLoader(true);
      const res = await otpVerifyUser(otpData);
      if (res.ack === 1) {
        setShow(false);
        toast.success(res.msg);
      } else {
        toast.error(res.msg);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
    console.log("Submitted OTP:", otp);
  };
  const loginHandLer = () => {};
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title>Login or Register</Modal.Title>
        </Modal.Header>
        {togglePhone && (
          <>
            <Modal.Body>
              <div className="details_right p-0">
                <label
                  className="mb-1"
                  htmlFor="Please enter your Phone Number"
                >
                  Please enter your Phone Number
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  placeholder="Phone Number"
                />
              </div>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none" }}>
              <span
                style={{ width: "100%", textAlign: "center" }}
                className="post_properties"
                // onClick={() => setFirst(false)}
              >
                Continue
              </span>
            </Modal.Footer>
            <div className="ph_or_email d-flex align-items-center px-3 justify-content-center">
              <hr /> <span>Or</span> <hr />
            </div>
            <div className=" px-3 mb-4 mt-2 text-center">
              <button
                onClick={() => {
                  setToggleEmail(true);
                  setTogglePhone(false);
                }}
                style={{ border: "none" }}
                className=" post_properties"
              >
                <FontAwesomeIcon icon={faEnvelope} /> {""}
                Continue with Email
              </button>
            </div>
          </>
        )}
        {toggleEmail && (
          <>
            <Modal.Body>
              <div className="details_right p-0">
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Email ID"
                  name="email"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </Modal.Body>
            <Modal.Footer
              style={{
                borderTop: "none",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <button
                onClick={"createUserHandler"}
                style={{ width: "100%", textAlign: "center", border: "none" }}
                className="post_properties"
                type="button"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setToggleEmail(false);
                  setTogglePhone(true);
                }}
                style={{ width: "50%", textAlign: "center", border: "none" }}
                className="post_properties"
                type="button"
              >
                Login using phone number
              </button>
              <div>
                <span>
                  Did not have an account ?{" "}
                  <small
                    style={{ cursor: "pointer", textDecoration: "underLine" }}
                    onClick={() => {
                      setToggleEmail(false);
                      setTogglePhone(false);
                      setCreateNewAccountWithEmail(true);
                    }}
                  >
                    Create new account
                  </small>
                </span>
              </div>
            </Modal.Footer>
          </>
        )}
        {createNewAccountWithEmail ? (
          <>
            <Modal.Body>
              <div className="details_right p-0">
                <input
                  type="text"
                  className="form-control mt-0"
                  placeholder="Full Name"
                  name="userName"
                  onChange={handleChange}
                />
                {errors.userName && (
                  <label className="errorLabel">{errors.userName}</label>
                )}
                <input
                  type="text"
                  className={
                    errorShow
                      ? `error form-control mt-2 `
                      : `form-control mt-2 `
                  }
                  placeholder="Email ID"
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && (
                  <label className="errorLabel">{errors.email}</label>
                )}

                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Contact Number"
                  name="contactNumber"
                  onChange={handleChange}
                />
                {errors.contactNumber && (
                  <label className="errorLabel">{errors.contactNumber}</label>
                )}
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                {errors.password && (
                  <label className="errorLabel">{errors.password}</label>
                )}
                {/* <input
                  type="file"
                  className="form-control mt-2"
                  placeholder="Upload Profile"
                  name="profilePic"
                  onChange={handleChange}
                /> */}
              </div>
            </Modal.Body>
            <Modal.Footer
              className="justify-content-start"
              style={{ borderTop: "none" }}
            >
              <button
                onClick={createUserHandler}
                style={{ width: "100%", border: "none" }}
                className="post_properties"
                type="button"
              >
                Create Account
              </button>
            </Modal.Footer>
          </>
        ) : showOtpInput ? (
          <div style={{ padding: "10px", margin: "auto" }}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "40px",
                height: "40px",
                margin: "8px",
                fontSize: "18px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                outline: "none",
                textAlign: "center",
              }}
            />
            <div className="mt-4 mb-4 text-center">
              {" "}
              <button
                onClick={handleClear}
                className="btn btn-primary "
                style={{ marginRight: "10px" }}
              >
                Clear
              </button>
              <button
                onClick={handleSubmit}
                className="btn btn-primary mr-4"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};

export default LoginModal;
