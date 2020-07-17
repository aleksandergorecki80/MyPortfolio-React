import React from 'react';


class ContactForm extends React.Component {

    state = {
            errors: [],

        // nameFieldLengthValid: true,
        // nameFieldCharactersValid: true,
        
    }

    handleValidateName = (e) => {
        const name = e.target.name;

        const isEmpty = this.checkIfEmpty(e.target.value);
        
        
        if (this.checkIfEmpty(e.target.value)) {
            if(this.findInArray('Is empty', name)) return; // Do nothing
            // Add error to the array
            const errorToAdd = {message: 'Is empty', name: name}
            this.addError(errorToAdd);
        } else {
            console.log('tutaj')
            console.log(name)
                
            // Remove an error
            const newArr = this.state.errors.filter((element)=>{
                return element.message !== 'Is empty' && element.name !== name;
            })
            this.setState({
                     errors: newArr
                }
            )
        }

        // if (this.checkIfLengthMatches(e.target.value, 3)){
        //     const errorToAdd = {message: 'Too short', name: name};
        //     this.addError(errorToAdd);
        // }

        // if(this.checkIfLettersAndDigits(e.target.value)) {
        //     const errorToAdd = {message: 'Only letters and digits are allowed.', name: name};
        //     this.addError(errorToAdd)
        // }





        // if (this.checkIfEmpty(e.target.value)) {
        //     // dodawanie pola do tabeli błędów            
        //     if(this.findInArray(name)) return;
        //     this.setState((prevState)=>{
        //         return {
        //                 fieldIsEmpty: [...prevState.fieldIsEmpty, name]
        //         }
        //     })
        // } else {
        //     // usuwanie pola z tabeli błędów
        //     if(!this.findInArray(name)) return;
        //     const newArr = this.state.fieldIsEmpty.filter((element)=>{
        //         return element !== name;
        //     })
        //     this.setState({
        //                 fieldIsEmpty: newArr
        //         }
        //     )  
        // }
    }

    addError(errorToAdd){
        this.setState((prevState)=>{
            return {
                errors: [ ...prevState.errors, {message: errorToAdd.message , name: errorToAdd.name} ]
            }
        })
    }

    findInArray = (message, name) => {
        return this.state.errors.find((error)=>{
            return error.message === message && error.name === name;
        })
    }

    checkIfEmpty = (phrase) => {
        return (phrase.trim()) === '' ? true : false;
    }

    checkIfLengthMatches = (phrase, length) =>  phrase.length < length;
    
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
                    {/* {this.state.errors.fieldIsNotEmpty['name'] && <span>Name field must not be empty.</span>} */}
                    <input type="email" name="email" placeholder="Email" id="email" onBlur={this.handleValidateName}></input>
                    {/* {this.state.errors.fieldIsNotEmpty.find((element)=> element === 'email') && <span>Email field must not be empty.</span>} */}
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