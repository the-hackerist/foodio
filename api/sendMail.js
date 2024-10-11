import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// let data;

// const retrieveContactData = (userContactData) => (data = userContactData);

// console.log(data);

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: data.email,
//     pass: process.env.APP_PASSWORD,
//   },
// });

// const mailOptions = {
//   from: {
//     name: `${data.firstName} ${data.lastName}`,
//     address: data.email,
//   },
//   to: "foodioresto@gmail.com",
//   subject: data.subject,
//   text: data.message,
//   html: `<b>${data.message}</b>`,
// };

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "foodioresto@gmail.com",
    pass: "sywp eobx sipp nvjp",
    // pass: "iwfn iome fidl mkym",
  },
});

const mailOptions = {
  from: {
    name: "Web Wizard",
    address: "foodioresto@gmail.com",
  },
  to: "vincepena1829@gmail.com",
  subject: "hi",
  text: "hi",
  html: `<b>hi</b>`,
};

// const sendMail = async (userContactData) => {
const sendMail = async (transporter, mailOptions) => {
  //   const { firstName, lastName, email, subject, message } = userContactData;
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     host: "smtp.gmail.com",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: email,
  //       pass: process.env.APP_PASSWORD,
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

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent successfully");
  } catch (error) {
    console.error(error);
  }
};

sendMail(transporter, mailOptions);

// export { sendMail };
