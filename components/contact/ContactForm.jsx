import React, { FC, useState } from 'react';
import {Input} from '../reusable/input';
import FormInput from '../reusable/FormInput';

import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data) => {
    setSubmitting(true); // Indicate form submission in progress
    setSuccessMessage(''); // Clear any previous success message
	const templateParams = {
		      name: data.name,
		      message: data.message,
			  subject:data.subject,
		      email: data.email,
		      url: window.location.href,
		    };
		
		    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
		    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
		
		    if (!serviceId || !templateId || !publicKey) {
		      throw new Error("Environment variables are not set correctly.");
		    }
			console.log(templateParams); 
 
			try {
			const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

			if(response.status === 200) {
				reset();
				toast.success("Your message has been sent successfully! Thanks");
				router.push('/');
			} else {
				toast.error(response.text);
			}
			} catch (error) {
			toast.error("An error occurred while submitting the form. Please try again later.");
			}
   
  };
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form onSubmit={handleSubmit(onSubmit)}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
			 <div className="font-general-regular mb-4">
				<label className="block text-lg text-primary-dark dark:text-primary-light mb-1"
					htmlFor="name" > Full Name </label>
				<Input type="name"   id="name"      placeholder="Name"
         			 {...register("name", { required: true })} />
			</div>
			
			<div className="font-general-regular mb-4">
				<label className="block text-lg text-primary-dark dark:text-primary-light mb-1"
					htmlFor="email" > Email </label>
				<Input type="email"   id="email"      placeholder="Email"
         			 {...register("email", { required: true })} />
			</div>

			<div className="font-general-regular mb-4">
				<label className="block text-lg text-primary-dark dark:text-primary-light mb-1"
					htmlFor="subject" > Subject </label>
				<Input type="subject"   id="subject"      placeholder="Subject"
         			 {...register("subject", { required: true })} />
			</div>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						{...register('message', { required: 'Message is required' })}
						></textarea>
					</div>

					<div className="mt-6">
						<span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						
						

					<button
        type="submit"
        className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        disabled={submitting}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
      {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
</span>
					</div>

				</form>
			</div>
		</div>
	);
}

export default ContactForm;
