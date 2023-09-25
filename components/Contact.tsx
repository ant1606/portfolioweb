"use client"
import React, { useEffect, useRef } from 'react'
import contactImage from '@/public/contact_image.svg';
import Image from 'next/image';
import Typography from './Typography';
import emailjs from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik, FormikBag, useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <section id="contact" className='my-16 w-full'>
      <ToastContainer />
      <Typography variant='h1' className='mb-8'>Dejame un mensaje</Typography>
      <div className='flex justify-between'>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values, actions) => {
            emailjs.sendForm(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
              form.current as HTMLFormElement,
              process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY as string
            )
              .then((result) => {
                toast.success('Gracias! Tu mensaje ha sido enviado.', {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                //actions recibe el formikBag que trae diversos props de formik
                // https://formik.org/docs/api/withFormik#handlesubmit-values-values-formikbag-formikbag--void--promiseany
                actions.resetForm();
              }, (error) => {
                toast.error('Oh no! No se pudo enviar tu mensaje, intentalo más tarde.', {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                //TODO Hacer que me envie escriba en un log
                console.log(error.text);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-2 w-full lg:basis-2/4" ref={form}>
              <div className='min-h-[95px]'>
                <Typography variant='label' className='text-web-blue' htmlFor='from_name'>Tu nombre</Typography>
                <Field
                  type="text"
                  name="from_name"
                  className='w-full rounded-2xl border-web-blue border-2 px-6 text-xl'
                />
                <ErrorMessage name="from_name" component="div" className='text-red-700 font-bold text-base' />
              </div>
              <div className='min-h-[100px]'>
                <Typography variant='label' className='text-web-blue' htmlFor='from_name'>Tu email</Typography>
                <Field
                  type="email"
                  name="from_email"
                  className='w-full rounded-2xl border-web-blue border-2 px-6 text-xl'
                />
                <ErrorMessage name="from_email" component="div" className='text-red-700 font-bold text-base' />
              </div>
              <div className='min-h-[150px]'>
                <Typography variant='label' className='text-web-blue' htmlFor='message'>Tu mensaje</Typography>
                <Field
                  as="textarea"
                  name="message"
                  className='w-full rounded-2xl border-web-blue border-2 px-6 text-xl'
                  rows={3}
                />
                <ErrorMessage name="message" component="div" className='text-red-700 font-bold text-base' />
              </div>
              <button type='submit' className='bg-web-blue hover:bg-web-light-blue transition-colors ease-linear duration-300 text-white font-extrabold text-2xl rounded-full w-full py-2 sm:w-fit sm:self-end sm:py-1 sm:px-20 cursor-pointer'>
                Enviar
              </button>
            </Form>
          )}
        </Formik>

        <div className='relative hidden lg:block lg:basis-2/4'>
          <Image src={contactImage} alt={"imagen de contacto"} fill={true} className='object-scale-fill' />
        </div>
      </div>

    </section>
  )
}

export default Contact