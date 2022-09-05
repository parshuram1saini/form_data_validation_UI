import React, {useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Formview.css";
import FormWrapper from "../common/FormWrapper";
import InputField from "../common/InputField";

function Formview() {
  const navigate = useNavigate();
  const nameref = useRef();
  const passwordref = useRef();
  const LicenseStartDateref = useRef();
  const LicenseExpiryDateref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      nameref,
      passwordref,
      LicenseExpiryDateref,
      LicenseStartDateref
    );
    const data = JSON.stringify({
      username: nameref.current.value,
      password: passwordref.current.value,
      LicenseStartDate: LicenseStartDateref.current.value,
      LicenseExpiryDate: LicenseExpiryDateref.current.value,
    });
    axios({
      method: "POST",
      url: "/api/user/addstudents",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        if (response.ok) {
          navigate("/signin");
        }
        console.log("successfull submitted", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formFields = [
    {
      label: "Username",
      type: "text",
      ref: nameref,
    },
    {
      label: "Password",
      type: "password",
      ref: passwordref,
    },
    {
      label: "License Start Date",
      type: "date",
      ref: LicenseStartDateref,
    },
    {
      label: "License End Date",
      type: "date",
      ref: LicenseExpiryDateref,
    },
  ];
  return (
    <div>
      <h3 className="text-underline align-center m-bottom-5">
        Sign-up Screen and Activation of Licenses
      </h3>
      <FormWrapper>
        <form>
          {formFields.map((field) => {
            return (
              <InputField
                inputRef={field.ref}
                fieldLabel={field.label}
                inputType={field.type}
              />
            );
          })}
          <div className="d-flex justify-around justify-center m-top-3">
            <input
              type="submit"
              value="Submit"
              className="p-4 b-color-blue border-radius-5 width-30"
              onClick={handleSubmit}
            />
            <button className="p-4 b-color-blue border-radius-5 width-30">
              <Link to="/signin">Sign In</Link>
            </button>
          </div>
        </form>
      </FormWrapper>
    </div>
  );
}

export default Formview;
