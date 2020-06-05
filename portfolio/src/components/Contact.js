//going to use Formik here!
import React from "react";
import { withFormik } from "formik";

const ContactForm = () =>{
  return (
    <div className="contact-form">
      <h4>This is coming from the contact page</h4>
    </div>
  );
}

const FormikContactForm = withFormik({});

export default ContactForm;
