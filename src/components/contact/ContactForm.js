import React from 'react';
const _ = require('lodash');
import axios from 'axios';

const url = window.location.href;
let API_PATH;
if (url.includes('localhost')) {
    API_PATH = 'http://localhost/portfolio-react/api/contact/index.php';
} else if (url.includes('aleksandergorecki.com')) {
    API_PATH = 'http://aleksandergorecki.com/api/contact/index.php';
}

class ContactForm extends React.Component {
    state = {
        errors: [],
        messages: {
            isEmpty: 'This field can not be empty.',
            tooShort: 'This field must contain three or mor caracters.',
            lettersAndNumbers: 'Only digit and numbers are allowed',
            containCharacters: 'Invalid email adress.'
        },
        minimumLength: 3,
        name: '',
        email: '',
        subject: '',
        message: '',
        mailSent: false,
        error: null
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: data
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent,
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            })
            .catch(error => this.setState({
                error: error.message,
            }));
    }

    handleSetName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSetEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSetSubject = (e) => {
        this.setState({
            subject: e.target.value
        })
    }

    handleSetMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleValidateNameAndSubject = (e) => {
        const name = e.target.name;
        if (this.checkIfEmpty(e.target.value)) {
            if (this.findInArray(this.state.messages.isEmpty, name)) return; // Do nothing
            // Add error to the array
            const errorToAdd = { message: this.state.messages.isEmpty, name: name }
            this.addError(errorToAdd);
        } else {
            const errorToRemove = { message: this.state.messages.isEmpty, name: name };
            this.removeError(errorToRemove);
        }
        if (this.checkIfLengthMatches(e.target.value, this.state.minimumLength)) {
            if (this.findInArray(this.state.messages.tooShort, name)) return; // Do nothing
            const errorToAdd = { message: this.state.messages.tooShort, name: name }
            this.addError(errorToAdd);
        } else {
            const errorToRemove = { message: this.state.messages.tooShort, name: name };
            this.removeError(errorToRemove);
        }

        if (!this.checkIfLettersAndDigits(e.target.value)) {
            if (this.findInArray(this.state.messages.lettersAndNumbers, name)) return; // Do nothing
            const errorToAdd = { message: this.state.messages.lettersAndNumbers, name: name }
            this.addError(errorToAdd);
        } else {
            const errorToRemove = { message: this.state.messages.lettersAndNumbers, name: name };
            this.removeError(errorToRemove);
        }
    }
    handleValidateEmail = (e) => {
        const name = e.target.name;
        if (!this.containCharacters(e.target.value)) {
            if (this.findInArray(this.state.messages.containCharacters, name)) return; // Do nothing
            // Add error to the array
            const errorToAdd = { message: this.state.messages.containCharacters, name: name }
            this.addError(errorToAdd);
        } else {
            const errorToRemove = { message: this.state.messages.containCharacters, name: name };
            this.removeError(errorToRemove);
        }
    }

    addError(errorToAdd) {
        this.setState((prevState) => {
            return {
                errors: [...prevState.errors, { message: errorToAdd.message, name: errorToAdd.name }]
            }
        })
    }

    removeError = (errorToRemove) => {
        this.setState((prevState) => {
            const newArr = prevState.errors.filter((element) => {
                return !_.isEqual(element, errorToRemove);
            });
            return {
                errors: newArr
            }
        })

    }

    findInArray = (message, name) => {
        return this.state.errors.find((error) => {
            return error.message === message && error.name === name;
        })
    }

    checkIfEmpty = (phrase) => {
        return (phrase.trim()) === '' ? true : false;
    }

    // checkIfLengthMatches = (phrase, phraseLength) =>  phrase.length < phraseLength;
    checkIfLengthMatches = (phrase, phraseLength) => {
        return phrase.length < phraseLength;
    }

    checkIfLettersAndDigits = (phrase) => {
        const regEx = /^[a-zA-Z0-9 ]+$/;
        if (regEx.test(phrase)) {
            return true
        }
    }

    containCharacters = (phrase) => {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regEx.test(phrase)) {
            return true
        }
    }

    showNameAndSubjectErrors = (name) => {
        const result = this.state.errors.filter((error) => {
            return error.name === name;
        });
        return result;
    }

    showErrors = (name) => {
        return this.showNameAndSubjectErrors(name).map((message, key) => {
            return <li key={key} className="error-message">{message.message}</li>;
        });
    }

    render() {
        const nameErrorsList = this.showErrors('name');
        const emailErrorsList = this.showErrors('email');
        const subjectErrorsList = this.showErrors('subject');

        return (
            <div className="contact-form">
                <div>
                    {this.state.mailSent &&
                        <div className="message-success">Thank you for contcting me.</div>
                    }
                </div>
                <form id="contact" action="" method="post">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        id="name"
                        onKeyUp={this.handleValidateNameAndSubject}
                        onChange={this.handleSetName}
                    ></input>
                    {nameErrorsList}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        id="email"
                        onKeyUp={this.handleValidateEmail}
                        onChange={this.handleSetEmail}
                    ></input>
                    {emailErrorsList}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={this.state.subject}
                        id="subject"
                        onKeyUp={this.handleValidateNameAndSubject}
                        onChange={this.handleSetSubject}
                    ></input>
                    {subjectErrorsList}
                    <textarea
                        placeholder="Message"
                        name='message'
                        value={this.state.message}
                        id="message"
                        onChange={this.handleSetMessage}
                    ></textarea>
                    <button
                        id="submitButton"
                        name="submit"
                        className="button button--green button__contact-form"
                        onClick={this.handleFormSubmit}
                    >Send</button>
                </form>
            </div>
        )
    }

}

export default ContactForm; 