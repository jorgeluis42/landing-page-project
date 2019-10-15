import React, { Component } from 'react'



export default class Contactdisplay extends Component {
   
    render() {
        return (
            <div className="contact_container">
            <h3>Contact Form</h3>
            <form  className="contact_form">
                <label for="first_name">First Name</label>
                <input name="first_name" type="text" placeholder="John"/>
                <br/>
                <label for="last_name">Last Name</label>
                <input name="last_name" type="text"  placeholder="Doe"/>
                <br/>
                <label for="email">Email</label>
                <input name="email" type="email"  placeholder="you@domain.com"/>
                <br/>
                <label for="message">Message</label><br/>
                <textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..." > </textarea>
                <div class="center">
                    <input type="submit" value="Submit"/>
                </div>
            </form>	
        </div>
        )
    }
}
