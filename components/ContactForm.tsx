import axios from "axios";
import React, { FormEvent, useState } from "react";

const inputClassNames =
  "w-full rounded-md border border-gray-200 focus:border-red-500 focus:ring-red-500 placeholder:text-gray-400";
const MAX_MESSAGE_LENGTH = 500;

interface FormMessageBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ContactForm: React.FC<ContactFormProps> = ({
  children: _,
  ...props
}) => {
  const [messageBody, setMessageBody] = useState<FormMessageBody>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const currentMessageLength = messageBody.message.length;

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailjsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const { name, email, subject, message } = messageBody;
    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        from_subject: subject,
        from_message: message,
      };
      const data = {
        service_id: emailjsServiceId,
        template_id: emailjsTemplateId,
        user_id: emailjsUserId,
        template_params: templateParams,
      };
      const emailResponse = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      if (emailResponse.status === 200) {
        resetForm();
      }
    } catch {}
  };
  const resetForm = () => {
    setMessageBody({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div {...props}>
      {/* name and email input */}
      <form onSubmit={onFormSubmit}>
        <div className="flex space-x-4">
          {/* name input */}
          <div className="w-full">
            <label htmlFor="name" className="block pb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className={inputClassNames}
              required
              onChange={(e) =>
                setMessageBody({ ...messageBody, name: e.target.value })
              }
            />
          </div>
          {/* email input */}
          <div className="w-full">
            <label htmlFor="email" className="block pb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className={inputClassNames}
              required
              onChange={(e) =>
                setMessageBody({ ...messageBody, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="pt-5">
          {/* subject input */}
          <div className="w-full">
            <label htmlFor="subject" className="block pb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className={inputClassNames}
              required
              autoComplete="off"
              onChange={(e) =>
                setMessageBody({ ...messageBody, subject: e.target.value })
              }
            />
          </div>
        </div>
        <div className="pt-5">
          {/* message input */}
          <div className="w-full">
            <label htmlFor="message" className="block pb-2">
              Message
            </label>
            <textarea
              id="message"
              className={inputClassNames}
              required
              autoComplete="off"
              rows={3}
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={(e) =>
                setMessageBody({ ...messageBody, message: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        {/* message length tracker */}
        <div
          className={`py-2 text-sm  ${
            currentMessageLength === MAX_MESSAGE_LENGTH
              ? "text-red-500"
              : "text-gray-400"
          }`}
        >
          {currentMessageLength} / {MAX_MESSAGE_LENGTH} characters
        </div>
        {/* send button */}
        <button
          type="submit"
          className="bg-red-500 w-full py-2 text-white rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};
