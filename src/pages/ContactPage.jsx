import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../style/contact.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [sentMessage, setSentMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
      setNameError("");
    } else if (inputType === "email") {
      setEmail(inputValue);
      setEmailError("");
    } else {
      setMessage(inputValue);
      setMessageError("");
    }
  };

  // set up validation functions
  const validateName = () => {
    if (!name.trim()) {
      setNameError("Your name is required!");
    }
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("An e-mail is required!");
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address!");
    }
  };

  const validateMessage = () => {
    if (!message) {
      setMessageError("A message is required!");
    }
  };

  // set up blur event handlers, which trigger validation
  // when input field loses focus
  // the user will see an error message when they exit a field
  // that has invalid input
  const handleNameBlur = () => {
    validateName();
  };

  const handleEmailBlur = () => {
    validateEmail();
  };

  const handleMessageBlur = () => {
    validateMessage();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // clear previous error messages
    setNameError("");
    setEmailError("");
    setMessageError("");

    // validate form data
    validateName();
    validateEmail();
    validateMessage();

    // stop here if there are any input errors
    if (nameError || emailError || messageError) {
      setSentMessage(""); // clear sent message if there's an error
      return;
    }

    // no backend yet, so just log the form data
    console.log("Form submitted:", { name, email, message });

    // Display success message if all is good
    setSentMessage("Your message has been sent!");

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    // update sentMessage when errors are cleared
    if (nameError && emailError && messageError) {
      setSentMessage("");
    }
  }, [nameError, emailError, messageError]);

  return (
    <Container fluid>
      <div className="container text-center">
        <h1>Contact Me</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={handleInputChange}
              onBlur={handleNameBlur}
              isInvalid={!!nameError}
            />
            <Form.Control.Feedback type="invalid">
              {nameError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleInputChange}
              onBlur={handleEmailBlur}
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={message}
              onChange={handleInputChange}
              onBlur={handleMessageBlur}
              isInvalid={!!messageError}
            />
            <Form.Control.Feedback type="invalid">
              {messageError}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="none" type="submit">
            Submit
          </Button>
          <br></br>

          <h4>{sentMessage}</h4>
        </Form>
      </div>
    </Container>
  );
}
