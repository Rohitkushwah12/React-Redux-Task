import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./actions";
import * as Yup from "yup";
import "./bootstrap/css/bootstrap.css";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Task name Required"),
});
const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ name: "" }}
            validationSchema={formSchema}
            onSubmit={({ setSubmitting }) => {
              setTimeout(() => {
                alert("Task Added Successfully");
              }, 1000);
              setSubmitting(false);
            }}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Add Task</h1>
                  </div>
                </div>
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Task Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter Task Name"
                      className={`mt-2 form-control ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="invalid-feedback"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                      onClick={() => dispatch(addTask(values))}
                    >
                      Add Task
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Home;
