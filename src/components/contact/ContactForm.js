import React from 'react';


class ContactForm extends React.Component {

    state = {
        nameFieldLengthValid: true,
        nameFieldCharactersValid: true,
        fieldIsNotEmpty: []
    }

    handleValidateName = (e) => {
        if (this.checkIfLengthMatches(e.target.value.length, 3)) {
            this.setState({
                nameFieldLengthValid: false
            })
        } else {
            this.setState({
                nameFieldLengthValid: true
            })
        }
        if (!this.checkIfLettersAndDigits(e.target.value)) {
            this.setState({
                nameFieldCharactersValid: false
            })
        } else {
            this.setState({
                nameFieldCharactersValid: true
            })
        }
        if (this.checkIfEmpty(e.target.value)) {
            // dodawanie pola do tabeli błędów
            const name = e.target.name;
            if(this.findInArray(name)) return;
            this.setState((prevState)=>{
                return {
                    fieldIsNotEmpty: [...prevState.fieldIsNotEmpty, name]
                }
            })

        } else {
            // usuwanie pola z tabeli błędów
            if(!this.findInArray(name)) return;
            const newArr = this.state.fieldIsNotEmpty.filter((element)=>{
                return element !== name;
            })
            this.setState({
                    fieldIsNotEmpty: newArr
            })    
        }
    }

    findInArray = (phrase) => {
        return this.state.fieldIsNotEmpty.find((phraseInArray)=>{
            return phraseInArray === phrase;
        })
    }

    checkIfEmpty = (phrase) => {
        return (phrase.trim()) === '' ? true : false;
    }

    checkIfLengthMatches = (phrase, length) =>  phrase < length;
    
    checkIfLettersAndDigits = (phrase) => {
        const regEx = /^[a-zA-Z0-9 ]+$/;
        if(regEx.test(phrase)){
            return true
        }
    }
    render() {
        return (
            <div className="contact-form">
                <form id="contact" action="" method="post">
                    <input type="text" name="name" placeholder="Name" id="name" onBlur={this.handleValidateName}></input>
                    {!this.state.nameFieldLengthValid && <span>Name must be at least 3 characters long</span>}
                    {!this.state.nameFieldCharactersValid && <span>Name field must contain only letters and numbers.</span>}
                    {this.state.fieldIsNotEmpty['name'] && <span>Name field must not be empty.</span>}
                    <input type="email" name="email" placeholder="Email" id="email" onBlur={this.handleValidateName}></input>
                    {this.state.fieldIsNotEmpty.find((element)=> element === 'email') && <span>Email field must not be empty.</span>}
                    <input type="text" name="subject" placeholder="Subject" id="subject" ></input>
                    <span></span>
                    <textarea placeholder="Message" name='message' id="message"></textarea>
                    <button id="submitButton" name="submit" className="button button--green button__contact-form" >Send</button>
                </form>
            </div>
        )
    }

}

export default ContactForm; 