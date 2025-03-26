import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const PermitCancellationForm = () => {
  const validationSchema = Yup.object({
    permitNumber: Yup.string().required('Permit number is required'),
    reason: Yup.string().required('Reason for cancellation is required'),
  });

  const initialValues = {
    permitNumber: '',
    reason: '',
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
            <label htmlFor="permitNumber">Permit Number</label>
            <Field type="text" id="permitNumber" name="permitNumber" />
          </div>
          <div>
            <label htmlFor="reason">Reason for Cancellation</label>
            <Field as="textarea" id="reason" name="reason" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Cancel Permit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PermitCancellationForm;
