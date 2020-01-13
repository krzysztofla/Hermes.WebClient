import React from 'react';
import * as yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues {
    email: string;
    password: string;
}


const InnerForm = (props: FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting } = props;
    return (
        <Form>
            <Field type="email" name="email" />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Field type="password" name="password" />
            {touched.password && errors.password && <div>{errors.password}</div>}

            <button type="submit" disabled={isSubmitting}>
                Submit
      </button>
        </Form>
    );
};

interface ILoginForm {
    initialEmail?: string;
}

export const LoginForm = withFormik<ILoginForm, FormValues>({
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },

    validate: (values: FormValues) => {
        let errors: FormikErrors<any> = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    },

    handleSubmit: values => {

    },
})(InnerForm);