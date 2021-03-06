import axios from "axios";
import { motion } from "framer-motion";
import React, { FormEvent, useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toast";
import { SpinnerCircularFixed } from "spinners-react";

const inputClassNames =
  "w-full rounded-md border border-gray-200 focus:border-red-500 focus:ring-red-500 placeholder:text-gray-400";
export const MAX_MESSAGE_LENGTH = 500;
const MAX_SUBJECT_LENGTH = 50;
interface FormMessageBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const showSuccessToast = () =>
  toast.success("Message sent successfully!", {
    backgroundColor: "rgb(22 163 74)",
  });
const showErrorToast = () =>
  toast.error("Something went wrong. Please try again.", {
    backgroundColor: "rgb(220 38 38)",
  });

export const ContactForm: React.FC<ContactFormProps> = ({
  children: _,
  ...props
}) => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<FormMessageBody>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const currentMessageLength = useMemo(
    () => formData.message.length,
    [formData]
  );
  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsSending(true);
      const { name, email, subject, message } = formData;
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
          template_params: {
            from_name: name,
            from_email: email,
            from_subject: subject,
            from_message: message,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error();
      }
      showSuccessToast();
      resetForm();
    } catch {
      showErrorToast();
    } finally {
      setIsSending(false);
      setTimeout(() => {
        toast.hideAll();
      }, 7000);
    }
  };
  const resetForm = (): void => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div {...props}>
      <form onSubmit={onFormSubmit}>
        <div className="flex space-x-4">
          <div className="w-full">
            <label htmlFor="name" className="block pb-2">
              Name
            </label>
            <input
              data-testid="name-input"
              id="name"
              type="text"
              placeholder="Your Name"
              className={inputClassNames}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block pb-2">
              Email
            </label>
            <input
              data-testid="email-input"
              id="email"
              type="email"
              placeholder="example@example.com"
              className={inputClassNames}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="w-full">
            <label htmlFor="subject" className="block pb-2">
              Subject
            </label>
            <input
              data-testid="subject-input"
              maxLength={MAX_SUBJECT_LENGTH}
              id="subject"
              type="text"
              className={inputClassNames}
              required
              autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              value={formData.subject}
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="w-full">
            <label htmlFor="message" className="block pb-2">
              Message
            </label>
            <textarea
              data-testid="message-input"
              id="message"
              className={inputClassNames}
              required
              autoComplete="off"
              rows={3}
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
            ></textarea>
          </div>
        </div>
        <div
          className={`py-2 text-sm  ${
            currentMessageLength === MAX_MESSAGE_LENGTH
              ? "text-red-600"
              : "text-gray-500"
          }`}
        >
          {currentMessageLength} / {MAX_MESSAGE_LENGTH} characters
        </div>
        <div className="text-center">
          <motion.button
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-colors duration-150 w-full py-2 text-white rounded-md"
          >
            {isSending ? (
              <SpinnerCircularFixed
                size={30}
                thickness={80}
                speed={300}
                color="rgba(255, 255, 255,1)"
                secondaryColor="rgba(172, 57, 57, 0)"
                className="inline"
              />
            ) : (
              "Send"
            )}
          </motion.button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
