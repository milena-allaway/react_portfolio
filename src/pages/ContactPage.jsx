import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import "../style/style.css";

export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [sentMessage, setSentMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();
        // clear previous error messages
        setNameError('');
        setEmailError('');
        setMessageError('');
        setSentMessage('');

        if (!name) {
            setNameError("Your name is required!")
            setSentMessage(""); // clear sent message if there's an error
        }
        if (!email) {
            setEmailError("An e-mail is required!")
            setSentMessage(""); // clear sent message if there's an error
        } else if (!email.includes('@')) {
            setEmailError("Please enter a valid email address!")
            setSentMessage(""); 
        }
        if (!message) {
            setMessageError("A message is required!")
            setSentMessage(""); // clear sent message if there's an error
        }
        // stop here if there are any input errors
        if (nameError || emailError || messageError) {
            return;
        }

        // no backend yet, so just log the form data
        console.log('Form submitted:', { name, email, message });
        
        // Display success message if all is good
        setSentMessage("Message sent!");

        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        <Container>
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
                        isInvalid={!!messageError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {messageError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br></br>

                <h4>{sentMessage}</h4>

            </Form>
        </div>
        </Container>
    );
}