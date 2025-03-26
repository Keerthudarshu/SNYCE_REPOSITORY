import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ConfinedSpaceEntryForm = () => {
  const validationSchema = Yup.object({
    spaceIdentification: Yup.string().required('Space identification is required'),
    entryPurpose: Yup.string().required('Entry purpose is required'),
    entryDate: Yup.date().required('Entry date is required'),
    exitDate: Yup.date().required('Exit date is required'),
    attendants: Yup.string().required('Attendants are required'),
  });

  const initialValues = {
    spaceIdentification: '',
    entryPurpose: '',
    entryDate: '',
    exitDate: '',
    attendants: '',
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
            <label htmlFor="spaceIdentification">Space Identification</label>
            <Field type="text" id="spaceIdentification" name="spaceIdentification" />
          </div>
          <div>
            <label htmlFor="entryPurpose">Entry Purpose</label>
            <Field type="text" id="entryPurpose" name="entryPurpose" />
          </div>
          <div>
            <label htmlFor="entryDate">Entry Date</label>
            <Field type="date" id="entryDate" name="entryDate" />
          </div>
          <div>
            <label htmlFor="exitDate">Exit Date</label>
            <Field type="date" id="exitDate" name="exitDate" />
          </div>
          <div>
            <label htmlFor="attendants">Attendants</label>
            <Field type="text" id="attendants" name="attendants" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ConfinedSpaceEntryForm;
