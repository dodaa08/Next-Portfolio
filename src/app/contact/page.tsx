// Ensure to import the necessary libraries
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

// Fetch the environment variables
const ServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined;
const TemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined;
const PublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined;

export default async function sendEmail(name: string, email: string, message: string) {
  if (!ServiceId || !TemplateId || !PublicKey) {
    console.error("EmailJS environment variables are not properly set.");
    return;
  }

  try {
    const response = await emailjs.send(
      ServiceId,
      TemplateId,
      {
        from_name: name,
        message: message,
        email: email,
      },
      PublicKey
    );
    console.log(response);
    toast.success("Email sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    toast.error("Failed to send email. Please try again later.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
    });
  }
}
