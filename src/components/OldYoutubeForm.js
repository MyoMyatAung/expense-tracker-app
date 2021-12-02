import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (value) => {
  console.log("> SUBMITTED VALUE => ", value);
};

const validate = (value) => {
  let error = {};
  if (!value.name) {
    error.name = "Required";
  }
  if (!value.email) {
    error.email = "Required";
  }
  if (!value.channel) {
    error.channel = "Required";
  }
  return error;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name field is required!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  channel: Yup.string().required("Channel name is required"),
});

const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel && (
            <div className="error">{formik.errors.channel}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldYoutubeForm;
