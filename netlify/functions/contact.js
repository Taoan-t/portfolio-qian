const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const formDetails = JSON.parse(event.body);
  const name = formDetails.firstName + " " + formDetails.lastName;
  const email = formDetails.email;
  const message = formDetails.message;
  const phone = formDetails.phone;

  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // user: "tinatangcs@gmail.com",
      // pass: "ytge vfam nzan ipel",
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully." }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send message." }),
    };
  }
};
