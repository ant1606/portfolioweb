"use client"
import React, { useEffect, useRef } from 'react'
import contactImage from '@/public/contact_image.svg';
import Image from 'next/image';
import Typography from './Typography';
import emailjs from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik, FormikBag, useFormik } from 'formik';

interface FormValues {
  from_name: string;
  from_email: string;
  message: string;
}

const initialValues: FormValues = {
  from_name: '',
  from_email: '',
  message: '',
};

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_s8qbubv', 'template_09dpchi', form.current as HTMLFormElement, 'YJWd6PBfNY7eF35dM')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };

  // const handleSubmit = (values: FormValues, formikBag: FormikBag) => {
  //   console.log('Formulario enviado:', values);
  //   console.log(form.current);
  //   formikBag.resetForm();
  // };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.from_name) {
      errors.from_name = 'Su nombre es requerido';
    } else if (values.from_name.length < 2) {
      errors.from_name = 'Su nombre debe ser mayor a 2 caracteres';
    }

    if (!values.from_email) {
      errors.from_email = 'Su email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.from_email)) {
      errors.from_email = 'El email es inválido';
    }

    if (!values.message) {
      errors.message = 'Debe ingresar su mensaje';
    } else if (values.message.trim().length === 0) {
      errors.message = 'Su mensaje no puede estar vacío';
    }

    return errors;
  };
  return (
    <section id="contact" className='my-16'>
      <Typography variant='h1' className='mb-8'>Dejame un mensaje</Typography>
      <div className='flex'>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values, actions) => {
            console.log("Formulario enviado", values);
            alert("Tu mensaje fue enviado");
            //actions recibe el formikBag que trae diversos props de formik
            // https://formik.org/docs/api/withFormik#handlesubmit-values-values-formikbag-formikbag--void--promiseany
            actions.resetForm();
          }}
        >
          {() => (
            <Form className="flex flex-col gap-2" ref={form}>
              <div className='min-h-[95px]'>
                <Typography variant='label' className='text-web-blue' htmlFor='from_name'>Tu nombre</Typography>
                <Field
                  type="text"
                  name="from_name"
                  className='min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl'
                />
                <ErrorMessage name="from_name" component="div" className='text-red-700 font-bold text-base' />
              </div>
              <div className='min-h-[100px]'>
                <Typography variant='label' className='text-web-blue' htmlFor='from_name'>Tu email</Typography>
                <Field
                  type="email"
                  name="from_email"
                  className='min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl'
                />
                <ErrorMessage name="from_email" component="div" className='text-red-700 font-bold text-base' />
              </div>
              <div className='min-h-[150px]'>
                <Typography variant='label' className='text-web-blue' htmlFor='message'>Tu mensaje</Typography>
                <Field
                  as="textarea"
                  name="message"
                  className='min-w-full rounded-2xl border-web-blue border-2 px-6 text-xl'
                  rows={3}
                />
                <ErrorMessage name="message" component="div" className='text-red-700 font-bold text-base' />
              </div>
              <button type='submit' className='bg-web-blue text-white font-extrabold text-2xl rounded-full w-full py-2 sm:w-fit sm:self-end sm:py-1 sm:px-20 cursor-pointer'>
                Enviar
              </button>
            </Form>
          )}
        </Formik>

        <figure>
          <Image src={contactImage} alt={"imagen de contacto"} className='hidden lg:block' />
        </figure>
      </div>
    </section>
  )
}

export default Contact