import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const PermitClosureForm = () => {
  const validationSchema = Yup.object({
    permitNumber: Yup.string().required('Permit number is required'),
    closeoutDate: Yup.date().required('Closeout date is required'),
    closeoutNotes: Yup.string().required('Closeout notes are required'),
  });

  const initialValues = {
    permitNumber: '',
    closeoutDate: '',
    closeoutNotes: '',
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
            <label htmlFor="closeoutDate">Closeout Date</label>
            <Field type="date" id="closeoutDate" name="closeoutDate" />
          </div>
          <div>
            <label htmlFor="closeoutNotes">Closeout Notes</label>
            <Field as="textarea" id="closeoutNotes" name="closeoutNotes" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Close Permit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PermitClosureForm;
