import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ElectricalIsolationForm = () => {
  const validationSchema = Yup.object({
    equipmentIdentification: Yup.string().required('Equipment identification is required'),
    isolationPoints: Yup.string().required('Isolation points are required'),
    isolationDate: Yup.date().required('Isolation date is required'),
    isolationTime: Yup.string().required('Isolation time is required'),
    authorizedPersonnel: Yup.string().required('Authorized personnel are required'),
  });

  const initialValues = {
    equipmentIdentification: '',
    isolationPoints: '',
    isolationDate: '',
    isolationTime: '',
    authorizedPersonnel: '',
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
            <label htmlFor="equipmentIdentification">Equipment Identification</label>
            <Field type="text" id="equipmentIdentification" name="equipmentIdentification" />
          </div>
          <div>
            <label htmlFor="isolationPoints">Isolation Points</label>
            <Field type="text" id="isolationPoints" name="isolationPoints" />
          </div>
          <div>
            <label htmlFor="isolationDate">Isolation Date</label>
            <Field type="date" id="isolationDate" name="isolationDate" />
          </div>
          <div>
            <label htmlFor="isolationTime">Isolation Time</label>
            <Field type="text" id="isolationTime" name="isolationTime" />
          </div>
          <div>
            <label htmlFor="authorizedPersonnel">Authorized Personnel</label>
            <Field type="text" id="authorizedPersonnel" name="authorizedPersonnel" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ElectricalIsolationForm;
