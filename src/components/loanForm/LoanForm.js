import React, { useState } from "react";
import "./loanForm.css";
import Modal from "./../Modal/Modal";
const LoanForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  function handleFormSubmit(event) {
    event.preventDefault();
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("the Age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("the phone Number format is incorrect");
    }
    setShowModal(true);
  }
  function handleDevClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  const btnIsDisable =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";

  return (
    <div
      onClick={handleDevClick}
      className="flex-height"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a loan</h1>
        <hr />

        <label>Name</label>
        <input
          type="text"
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />

        <label>Phone Number</label>
        <input
          type="number"
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />

        <label>Age</label>
        <input
          type="number"
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        <label>salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>
        
        <button
          className={btnIsDisable ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisable}
          id="submit-loan-btn"
        >
          submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
};

export default LoanForm;
