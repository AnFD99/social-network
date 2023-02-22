import Button from 'views/components/Button/Button'
import React from 'react'
import styles from './RegisterForm.module.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { authOperations, authSelectors } from 'store/ducks/auth'
import { Navigate } from 'react-router-dom'

const initialValue = {
   name: '',
   email: '',
   password: '',
}

const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
   name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
})

const RegisterForm = ({ buttonTitle, ...props }) => {
   const onFormSubmit = async (values, { setSubmitting }) => {
      try {
         await props.registration(values.email, values.password, values.name)
         setSubmitting(false)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <>
         {props.isAuth ? (
            <Navigate to='/' />
         ) : (
            <div className={styles.form}>
               <h2 className={styles.title}>{props.headerTitle}</h2>
               <Formik
                  initialValues={initialValue}
                  validationSchema={SignupSchema}
                  onSubmit={onFormSubmit}
                  validateOnMount
               >
                  {({
                     isSubmitting,
                     isValid,
                     errors,
                     touched,
                     handleChange,
                     handleSubmit,
                     values,
                  }) => (
                     <Form onSubmit={handleSubmit}>
                        <Field
                           className={styles.input}
                           type='text'
                           name='name'
                           value={values.name}
                           onChange={handleChange}
                           placeholder='Your name'
                        />
                        {errors.email && touched.email ? (
                           <div className={styles.error}>{errors.email}</div>
                        ) : null}
                        <Field
                           className={styles.input}
                           type='email'
                           name='email'
                           value={values.email}
                           onChange={handleChange}
                           placeholder='Email'
                        />
                        {errors.email && touched.email ? (
                           <div className={styles.error}>{errors.email}</div>
                        ) : null}
                        <Field
                           className={styles.input}
                           type='password'
                           name='password'
                           value={values.password}
                           onChange={handleChange}
                           placeholder='Password'
                        />
                        {errors.password && touched.password ? (
                           <div className={styles.error}>{errors.password}</div>
                        ) : null}

                        <Button
                           type='submit'
                           disabled={isSubmitting || !isValid}
                        >
                           {buttonTitle}
                        </Button>
                     </Form>
                  )}
               </Formik>
            </div>
         )}
      </>
   )
}

const mapStateToProps = (state) => ({
   isAuth: authSelectors.getIsAuth(state),
})
const mapDispatchToProps = {
   registration: authOperations.getRegistration,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)




