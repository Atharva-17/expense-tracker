import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BudgetPage = () => {
    const { userSetting, setUserSettingHandler, showToastHandler } =
    useStateContext();  
    const navigate = useNavigate();

  return (
    <>
    <div className="hero min-h-[83.5vh] flex bg-black">
    <div className="card-body items-center">
      <h2 className="card-title text-2xl text-primary">Your Budget</h2>
      <p className="stat-value my-4">${userSetting.budget}</p>
      <div className="form-control">
        <label className="input-group">
          <Formik
            initialValues={{
              budget: 0,
            }}
            validate={(values) => {
              const errors = {};
              if (values.budget === 0) errors.budget = "Cannot be 0";
              return errors;
            }}
            onSubmit={async (values, actions) => {
              try {
                const newSetting = {
                  ...userSetting,
                  budget: values.budget,
                };
                await axios.post("/api/v1/settings/update-setting", {
                  userid: userSetting.userid,
                  payload: {
                    ...newSetting,
                  },
                });
                setUserSettingHandler(newSetting);
                actions.resetForm();
                showToastHandler("Budget updated", "success");
                navigate("/");
                
              } catch (error) {
                showToastHandler("Updating budget failed", "error");
                console.log(error);
              }
            }}
          >
            <Form>
              <Field
                id="budget"
                name="budget"
                type="number"
                className="input input-bordered"
              />
              <button type="submit" className="btn m-2 btn-primary">
                Update Budget
              </button>
              <ErrorMessage
                name="budget"
                className="label-text text-sm text-red-500"
                component={"div"}
              />
            </Form>
          </Formik>
        </label>
      </div>
    </div>
  
  </div>
  </>

  )
}

export default BudgetPage