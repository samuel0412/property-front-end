"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { createAccount } from "../services/auth";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { addTodo } from "../lib/features/todoSlice";

const LoginModal = ({ show, setShow }) => {
  const [toggleEmailPhone, setToggleEmailPhone] = useState(false);
  const [createNewAccountWithEmail, setCreateNewAccountWithEmail] =
    useState(false);
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    password: "",
    contactNumber: "",
    profilePic: "",
    role: "user",
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
  };

  const createUserHandler = async () => {
    console.log("hello");
    let check = true;
    const data = {
      email: userData.email,
      userName: userData.userName,
      password: userData.password,
      contactNumber: userData.contactNumber,
      profilePic: userData.profilePic,
      role: "user",
    };
    // if (
    //   userData.email === "" ||
    //   userData.userName === "" ||
    //   userData.password === "" ||
    //   userData.contactNumber === ""
    //   // userData.profilePic === ""
    // ) {
    //   check = false;
    // }
    // if (!check) return;
    try {
      setLoader(true);
      const res = await createAccount(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
  };

  const [input, setInput] = useState("hello1");
  const dispatch = useAppDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    // setInput("");
  };
  console.log(useAppSelector((state) => state));
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
        {toggleEmailPhone ? (
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
            <div className="continue_email px-3 mb-4 mt-2 text-center">
              <button
                onClick={() => setToggleEmailPhone(false)}
                style={{ border: "none" }}
                className="post_properties"
              >
                <i className="fa-solid fa-envelope"></i>Continue with Email
              </button>
            </div>
          </>
        ) : (
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
                onClick={() => setToggleEmailPhone(true)}
                style={{ width: "50%", textAlign: "center", border: "none" }}
                className="post_properties"
                type="button"
              >
                Login using phone number
              </button>
              <div onClick={() => setCreateNewAccountWithEmail(true)}>
                <span>
                  Did not have an account ?{" "}
                  <small
                    style={{ cursor: "pointer", textDecoration: "underLine" }}
                  >
                    {" "}
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
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Email ID"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Contact Number"
                  name="contactNumber"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <input
                  type="file"
                  className="form-control mt-2"
                  placeholder="Upload Profile"
                  name="profilePic"
                  onChange={handleChange}
                />
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
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};

export default LoginModal;
