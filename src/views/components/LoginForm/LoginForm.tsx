import Button from 'views/components/Button/Button'
import React, { FC } from 'react'
import styles from './LoginForm.module.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { authOperations, authSelectors } from 'store/ducks/auth'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { AppStateType } from 'store/store'

type FormValuesType = {
   email: string
   password: string
}

type MapStateType = {
   isAuth: boolean
}

type MapDispatchType = {
   login: (email: string, password: string) => void
}

type OwnPropsType = {
   headerTitle: string
   buttonTitle: string
}

type PropsType = MapStateType & MapDispatchType & OwnPropsType

const initialValue: FormValuesType = {
   email: '',
   password: '',
}

const SigninSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
})

const LoginForm: FC<PropsType> = (props) => {
   const navigate = useNavigate()
   const location = useLocation()
   const fromPage = location.state?.from?.pathname || '/'

   useEffect(() => {
      if (props.isAuth) {
         navigate(fromPage, { replace: true })
      }
   })

   const onFormSubmit = async (values: FormValuesType, { setSubmitting }) => {
      try {
         await props.login(values.email, values.password)
         setSubmitting(false)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <>
         <div className={styles.form}>
            <h2 className={styles.title}>{props.headerTitle}</h2>
            <Formik
               initialValues={initialValue}
               validationSchema={SigninSchema}
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

                     <Button type='submit' disabled={isSubmitting || !isValid}>
                        {props.buttonTitle}
                     </Button>
                  </Form>
               )}
            </Formik>
         </div>
      </>
   )
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
   isAuth: authSelectors.getIsAuth(state),
})
const mapDispatchToProps: MapDispatchType = {
   login: authOperations.getLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

