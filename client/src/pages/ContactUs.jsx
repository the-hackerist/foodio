/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
import UnderConstruction from "../components/UI/UnderConstruction";

// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// import { useAuth } from "./../contexts/UserContext";
// import { sendMail } from "../../../api/sendMail";

// dotenv.config();

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   subject: "",
//   message: "",
// };

// const isAnyPropertyEmpty = (objData) =>
//   Object.values(objData).some((val) => val === "");

function ContactUs() {
  //   const [contactFormData, setContactFormData] = useState(initialState);
  //   const [result, setResult] = useState("");
  //   const [error, setError] = useState("");
  //   const { user } = useAuth();

  //   useEffect(() => {
  //     setContactFormData({
  //       ...contactFormData,
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       email: user.email,
  //     });
  //   }, []);

  //   const onChangeContactFormData = (e) => {
  //     setContactFormData({ ...contactFormData, [e.target.id]: e.target.value });
  //   };

  //   const handleContactForm = async (e) => {
  //     e.preventDefault();
  //     setResult("Sending....");
  //     const formData = new FormData(e.target);
  //     console.log(formData);
  //     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       setResult("Form Submitted Successfully");
  //       e.target.reset();
  //     } else {
  //       console.log("Error", data);
  //       setResult(data.message);
  //     }

  // e.preventDefault();
  // setError("");
  // if (isAnyPropertyEmpty(contactFormData)) {
  //   setError("Any input fields should not be blank!");
  //   return;
  // }
  // setContactFormData(prev=> {...prev,a})
  // contactFormData.append(
  //   "access_key",
  //   "f3cf0132-0cca-42ec-9eed-1432eddf6d2d",
  // );
  // const response = await fetch("https://api.web3forms.com/submit", {
  //   method: "POST",
  //   body: JSON.stringify(contactFormData),
  // });
  // const data = await response.json();
  // if (data.success) {
  //   setResult("Form Submitted Successfully");
  //   setContactFormData(initialState);
  //   return;
  // }
  // setError(data.message);
  // sendMail(contactFormData);
  // };

  // const sendMail = async (userContactData) => {
  //   const { firstName, lastName, email, subject, message } = userContactData;
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     host: "smtp.gmail.com",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: email,
  //       // pass: "sywp eobx sipp nvjp",
  //       // pass: process.env.REACT_APP_APP_PASSWORD,
  //     },
  //   });

  //   const mailOptions = {
  //     from: {
  //       name: `${firstName} ${lastName}`,
  //       address: email,
  //     },
  //     to: "foodioresto@gmail.com",
  //     subject: subject,
  //     text: message,
  //     html: `<b>${message}</b>`,
  //   };

  //   try {
  //     await transporter.sendMail(mailOptions);
  //     console.log("Email has been sent successfully");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return <UnderConstruction />;

  return (
    <div
      onSubmit={handleContactForm}
      className="mx-auto flex max-w-[800px] flex-col items-center justify-center p-20 pt-40"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-center text-5xl font-bold text-[#311F09] md:text-start">
          Contact us
        </h2>
        <p className="mb-10 max-w-[400px] text-center text-lg text-[#6F5439] md:text-xl">
          We love hearing from our customers. Feel free to share your experience
          or ask
          <br /> any questions you may have.
        </p>
      </div>

      <form
        onSubmit={handleContactForm}
        className="flex w-full max-w-[400px] flex-col justify-between gap-6"
      >
        <input
          onChange={onChangeContactFormData}
          value={contactFormData.firstName}
          className="rounded-lg border px-6 py-2 text-base"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First name"
        />

        <input
          onChange={onChangeContactFormData}
          value={contactFormData.lastName}
          className="rounded-lg border px-6 py-2 text-base"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last name"
        />

        <input
          onChange={onChangeContactFormData}
          value={contactFormData.email}
          className="rounded-lg border px-6 py-2 text-base"
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
        />

        <input
          onChange={onChangeContactFormData}
          value={contactFormData.subject}
          className="rounded-lg border px-6 py-2 text-base"
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
        />

        <textarea
          onChange={onChangeContactFormData}
          value={contactFormData.message}
          className="max-h-[200px] min-h-[150px] rounded-lg border px-6 py-2 text-base"
          id="message"
          name="message"
          type="text"
          rows={5}
          placeholder="Message"
        />

        {error && <p className="text-sm font-semibold text-red-500">{error}</p>}

        {result && (
          <p className="text-sm font-semibold text-green-500">{result}</p>
        )}

        <button className="rounded-xl bg-red-500 p-4 text-xl font-semibold text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
