import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const form = {
  border: "2px solid #cecece",
  background: "white",
  margin: "2rem 0",
};

const formLabel = {
  fontWeight: "600",
  marginBottom: "0",
};

const formInput = {
  marginBottom: "1rem",
  ":focus": {
    boxShadow: `0 0 0 0.25rem #1c7ae6`,
    border: "none",
  },
};

const btn = {
  background: "#0f0f0f",
  border: "none",
};
const btnHvr = {
  background: "#fafafa",
  border: `1px solid '#0f0f0f'`,
  color: "#0f0f0f",
  fontWeight: "500",
  marginTop: "1rem",
};

const ContactForm = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const PHONE_REGEX = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim
  );

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors[name] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors[email] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors[message] = true;
      isValid = false;
    }

    if (PHONE_REGEX.test(phone) === false) {
      tempErrors["phone"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      await fetch("/api/database", {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
          phone: phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
          phone: phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");

      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    }
  };

  return (
    // <Container id="contact" className="py-5">
    //   <Row className="justify-content-center">
    //     <Col md={8} lg={6}>
    //       <h2 className="text-center text-primary mb-4">Get in Touch</h2>
    //       <Form onSubmit={handleSubmit}>
    //         {/* Name Field */}
    //         <Form.Group className="mb-3" controlId="formName">
    //           <Form.Label>Name</Form.Label>
    //           <Form.Control
    //             type="text"
    //             placeholder="Enter your name"
    //             onChange={(e) => {
    //               setName(e.target.value);
    //             }}
    //             value={name}
    //             required
    //           />
    //         </Form.Group>
    //         {errors?.name && <p>Name cannot be empty.</p>}

    //         {/* Email Field */}
    //         <Form.Group className="mb-3" controlId="formEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control
    //             type="email"
    //             placeholder="Enter your email"
    //             onChange={(e) => {
    //               setEmail(e.target.value);
    //             }}
    //             value={email}
    //             required
    //           />
    //         </Form.Group>
    //         {errors?.email && <p>Email cannot be empty.</p>}
    //         {/* Phone Number Field */}
    //         <Form.Group className="mb-3" controlId="formPhone">
    //           <Form.Label>Phone Number</Form.Label>
    //           <Form.Control
    //             type="tel"
    //             placeholder="Enter your phone number"
    //             onChange={(e) => {
    //               setPhone(e.target.value);
    //             }}
    //             required
    //             value={phone}
    //           />
    //         </Form.Group>
    //         {errors?.phone && <p>Please correct your phone input</p>}
    //         {/* Message Field */}
    //         <Form.Group className="mb-3" controlId="formMessage">
    //           <Form.Label>Message</Form.Label>
    //           <Form.Control
    //             onChange={(e) => {
    //               setMessage(e.target.value);
    //             }}
    //             value={message}
    //             required
    //             rows={3}
    //             as="textarea"
    //             placeholder="Enter your message"
    //           />
    //         </Form.Group>
    //         {errors?.message && <p>Message cannot be empty.</p>}
    //         {/* Submit Button */}
    //         <div className="text-center">
    //           <Button
    //             type="submit"
    //             variant="warning"
    //             size="lg"
    //             className="w-100"
    //           >
    //             {buttonText}
    //           </Button>
    //         </div>
    //       </Form>
    //       <Form.Text muted>
    //         We'll never share your personal information with anyone else.
    //       </Form.Text>

    //       {showSuccessMessage && (
    //         <p>Thank You! Your message has been delivered!</p>
    //       )}
    //       {showFailureMessage && <p>Something went wrong, please try again.</p>}
    //     </Col>
    //   </Row>
    // </Container>
    <section id="contact" className="shadow-up-lg py-16 pb-16 bg-white">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center text-5xl font-stix font-bold text-sky-950 mb-3 lg:text-6xl">
          Get in Touch
        </h2>
        <span className="block w-5/6 h-0.5 bg-[#d4b651] mx-auto mb-10"></span>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-[#d4b651] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#cfbc7d] transition-all"
            >
              {buttonText}
            </button>
          </div>
        </form>

        {/* Info Message */}
        <p className="text-center text-gray-600 text-sm mt-4">
          We'll never share your personal information with anyone else.
        </p>

        {/* Success & Failure Messages */}
        {showSuccessMessage && (
          <p className="text-center text-green-600 mt-4">
            Thank You! Your message has been delivered!
          </p>
        )}
        {showFailureMessage && (
          <p className="text-center text-red-600 mt-4">
            Something went wrong, please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
