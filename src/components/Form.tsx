// import * as React from 'react';
// import { Formik, Field } from 'formik';
// import { Form, Input, SubmitButton, ResetButton } from 'formik-antd';

// interface MyFormValues {
//   firstName: string;
// }

// const initialValues: MyFormValues = { firstName: '' };

// const requiredValidator = (value: string) => value
//   ? { validateStatus: 'success' , errorMsg: null }
//   : { validateStatus: 'error', errorMsg: 'This field is required.' }

// const validate = (value: string) => value ? '' : 'This field is required.'

// export const Hello: React.FC<{}> = () => {
//   const test = Form.useForm()
//   console.log('test', test)

//   const handleSubmit = React.useCallback((values, actions) => {
//     console.log({ values, actions });
//     alert(JSON.stringify(values, null, 2));
//     actions.setSubmitting(false);
//   }, [])

//   return (
//     <div>
//       <h1>My Example</h1>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//           <Form.Item name="firstName" validate={validate}>
//             <Input name="firstName" />
//           </Form.Item>
//         </Form>
//       </Formik>
//     </div>
//   );
// };