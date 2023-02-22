import Button from 'views/components/Button/Button'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import styles from './TextForm.module.css'

const initialValue = {
   text: '',
}

const TextSchema = Yup.object().shape({
   text: Yup.string()
      .required('Required')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
})

const TextForm = ({ addText, headerTitle, buttonTitle, ...props }) => {
   const onFormSubmit = (values, { resetForm, setSubmitting }) => {
      setTimeout(() => {
         addText(values.text)
         resetForm()
         setSubmitting(false)
      }, 400)
   }

   return (
      <div className={styles.form}>
         <h2 className={styles.title}>{headerTitle}</h2>
         <Formik
            initialValues={initialValue}
            validationSchema={TextSchema}
            onSubmit={onFormSubmit}
            validateOnMount
         >
            {({
               isSubmitting,
               isValid,
               errors,
               touched,
               values,
               handleChange,
               handleSubmit,
            }) => (
               <Form onSubmit={handleSubmit}>
                  <Field
                     as='textarea'
                     className={styles.text__input}
                     type='textarea'
                     name='text'
                     value={values.text}
                     onChange={handleChange}
                     placeholder={props.placeholder}
                  />

                  {errors.text && touched.text && (
                     <div className={styles.error}>{errors.text}</div>
                  )}

                  <Button type='submit' disabled={isSubmitting || !isValid}>
                     {buttonTitle}
                  </Button>
               </Form>
            )}
         </Formik>
      </div>
   )
}

export { TextForm }








