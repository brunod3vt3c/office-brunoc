import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  _id: string;
  user_name: string;
  user_email: string;
  message: string;
}

export const ContactContent = () => {
  const form = useRef<any>();
  const [submitted, setSubmitted] = useState(false);

  const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();

  const [user_name, setName] = useState('');
  const [user_email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail: SubmitHandler<IFormInput> = (event: any) => {

    emailjs.sendForm('service_v6mxx8g', 'template_szdd3d9', form.current, 'm55AnUaODXsKINOTh')
      .then((result) => {
          setSubmitted(true);
          console.log(result.text);
          console.log("message sended");
          setName('');
          setEmail('');
          setMessage('');
      }, (error) => {
          setSubmitted(false);
          console.log(error.text);
          setName('');
          setEmail('');
          setMessage('');
      });
  };

  return (
    <div className="w-full pr-6">
      {submitted ? (
        <div className="flex flex-col max-w-2xl p-10 mx-auto my-10 text-white bg-yellow-500">
          <h3 className="text-3xl font-bold">
            Thank you for submitting your message!
          </h3>
          <p>Nós entraremos em contacto assim que possível!</p>
        </div>
      ) : (
        <form className="flex flex-col max-w-2xl p-5 mx-auto mb-10" ref={form} onSubmit={handleSubmit(sendEmail)}>
          <h3 className="text-3xl text-yellow-500">Contact Us</h3>

          <input {...register("_id")} type="hidden" name="_id" />

          <label className="block mb-5">
            <span className="flex text-gray-700">
              Name
              <p className="ml-1">
                {errors.user_name && (
                  <span className="px-2 text-white bg-red-500 border rounded">is required!</span>
                )}
              </p>
            </span>
            <input 
              {...register("user_name", {required: true})}
              className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-orange-400 focus:ring-2"
              placeholder="Name"
              type="text"
              onChange={event => setName(event.target.value)}
              value={user_name}
            />
          </label>
          <label className="block mb-5">
            <span className="flex text-gray-700">
              Email
              <p className="ml-1">
                {errors.user_email && (
                  <span className="px-2 text-white bg-red-500 border rounded">is required!</span>
                )}
              </p>
            </span>
            <input 
              {...register("user_email", {required: true})}
              className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-orange-400 focus:ring-2"
              placeholder="Email"
              type="email"
              onChange={event => setEmail(event.target.value)}
              value={user_email}
            />
          </label>
          <label className="block mb-5">
            <span className="flex text-gray-700">
              Message
              <p className="ml-1">
                {errors.message && (
                  <span className="px-2 text-white bg-red-500 border rounded">is required!</span>
                )}
              </p>
            </span>
            <textarea 
              {...register("message", {required: true})}
              className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-textarea ring-orange-400 focus:ring-2"
              placeholder="Digite algo..."
              rows={8} 
              onChange={event => setMessage(event.target.value)}
              value={message}
            />
          </label>
          <input type="submit" value="Send" className="px-4 py-2 font-bold text-white bg-yellow-500 rounded shadow cursor-pointer hover:bg-yellow-400 focus:shadow-outline focus:outline-none" />
        </form>
      )}
    </div>
  );
};