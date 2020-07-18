import React from 'react';
const _ = require('lodash');

class ContactForm extends React.Component {

    state = {
        errors: [],
        messages: {
            isEmpty: 'This field can not be empty.',
            tooShort: 'This field must contain three or mor caracters.',
            lettersAndNumbers: 'Only digit and numbers are allowed',
            containCharacters: 'Invalid email adress.'
        },
        minimumLength: 3
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
            const result = this.state.errors.filter((error)=>{
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
                <form id="contact" action="" method="post">
                    <input type="text" name="name" placeholder="Name" id="name" onKeyUp={this.handleValidateNameAndSubject}></input>
                    {nameErrorsList}
                    <input type="email" name="email" placeholder="Email" id="email" onKeyUp={this.handleValidateEmail}></input>
                    {emailErrorsList}
                    <input type="text" name="subject" placeholder="Subject" id="subject" onKeyUp={this.handleValidateNameAndSubject}></input>
                    {subjectErrorsList}
                    <span></span>
                    <textarea placeholder="Message" name='message' id="message"></textarea>
                    <button id="submitButton" name="submit" className="button button--green button__contact-form" >Send</button>
                </form>
            </div>
        )
    }

}

export default ContactForm; 