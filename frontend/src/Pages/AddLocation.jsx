import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Col, Row } from 'react-bootstrap';
import { addLocation } from '../locationService';

// Validation schema using Yup
const validationSchema = Yup.object({
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  country: Yup.string().required('Country is required'),
  postalCode: Yup.string().required('Postal code is required'),
});

// Initial form values
const initialValues = {
  city: '',
  state: '',
  country: '',
  postalCode: '',
};

// Form submission handler
const onSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const response = await addLocation(values);
    console.log('Location added successfully:', response.data);
    resetForm(); // Reset the form after successful submission
  } catch (error) {
    console.error('Failed to add location:', error);
  } finally {
    setSubmitting(false);
  }
};

const AddLocationForm = () => {

    
    return (
      <div className="container mt-4">
        <h2>Add Location</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <Field
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="Enter City"
                    />
                    <ErrorMessage name="city" component="div" className="text-danger" />
                  </div>
                </Col>
  
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <Field
                      type="text"
                      name="state"
                      className="form-control"
                      placeholder="Enter State"
                    />
                    <ErrorMessage name="state" component="div" className="text-danger" />
                  </div>
                </Col>
              </Row>
  
              <Row className="mb-3">
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <Field
                      type="text"
                      name="country"
                      className="form-control"
                      placeholder="Enter Country"
                    />
                    <ErrorMessage name="country" component="div" className="text-danger" />
                  </div>
                </Col>
  
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <Field
                      type="text"
                      name="postalCode"
                      className="form-control"
                      placeholder="Enter Postal Code"
                    />
                    <ErrorMessage name="postalCode" component="div" className="text-danger" />
                  </div>
                </Col>
              </Row>
  
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Add Location'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default AddLocationForm;