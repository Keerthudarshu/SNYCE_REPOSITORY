import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const WorkPermitForm = () => {
  const validationSchema = Yup.object({
    workDescription: Yup.string().required('Work description is required'),
    location: Yup.string().required('Location is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date().required('End date is required'),
    supervisor: Yup.string().required('Supervisor name is required'),
  });

  const initialValues = {
    workDescription: '',
    location: '',
    startDate: '',
    endDate: '',
    supervisor: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="workDescription">Work Description</label>
            <Field type="text" id="workDescription" name="workDescription" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <Field type="text" id="location" name="location" />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <Field type="date" id="startDate" name="startDate" />
          </div>
          <div>
            <label htmlFor="endDate">End Date</label>
            <Field type="date" id="endDate" name="endDate" />
          </div>
          <div>
            <label htmlFor="supervisor">Supervisor</label>
            <Field type="text" id="supervisor" name="supervisor" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default WorkPermitForm;
