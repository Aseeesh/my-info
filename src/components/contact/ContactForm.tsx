"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Input } from "../reusable/input";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  // Submit handler to send email
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { email, subject, message } = data;

    try {
      await emailjs.send(
        "service_dhdfd0o", // Replace with your EmailJS service ID
        "template_d8tg098", // Replace with your EmailJS template ID
        {
          user_email: email,
          subject: subject,
          message: message,
        },
        "chjmFvwc3q4ziNXvo", // Replace with your EmailJS user ID
      );
      alert("Email sent successfully!");
      router.push("/");
    } catch (error) {
      alert("There was an error sending the email.");
      router.push("/");
    }
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <div className="leading-loose">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="font-general-medium text-primary-dark dark:text-primary-light mb-8 text-2xl">
            Contact me via Email
          </p>

          <div className="font-general-regular mb-4">
            <label
              className="text-primary-dark dark:text-primary-light mb-1 block text-lg"
              htmlFor="email"
            >
              {" "}
              Email{" "}
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="font-general-regular mb-4">
            <label
              className="text-primary-dark dark:text-primary-light mb-1 block text-lg"
              htmlFor="subject"
            >
              {" "}
              Subject{" "}
            </label>
            <Input
              type="subject"
              id="subject"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>

          <div className="mt-6">
            <label
              className="text-primary-dark dark:text-primary-light mb-2 block text-lg"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="text-md bg-ternary-light text-primary-dark dark:border-primary-dark dark:bg-ternary-dark dark:text-secondary-light w-full rounded-md border border-gray-300 border-opacity-50 px-5 py-2 shadow-sm"
              id="message"
              aria-label="Message"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
          </div>

          <div className="mt-6">
            <span className="font-general-medium mt-6 rounded-lg bg-indigo-500 px-7 py-4 text-center font-medium tracking-wider text-white duration-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900">
              <button
                type="submit"
                disabled={!isValid}
                className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
              >
                Send Email
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
