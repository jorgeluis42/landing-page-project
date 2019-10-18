import React, { Component } from 'react'

export default class Contactdisplay extends Component {

    render() {
        return (
            <div className="contact_container">
            <h3>Contact Me</h3>
            <form  className="contact_form">
                <label for="last_name" >First Name</label>
                <input name="fn"  type="text" placeholder="John"/>
                <br/>
                <label for="last_name">Last Name</label>
                <input name="last_name" onChange={this.handleChange} type="text"  placeholder="Doe"/>
                <br/>
                <label for="email">Email</label>
                <input name="sender" type="email" onChange={this.handleChange}  placeholder="you@domain.com"/>
                <br/>
                <label for="message">Message</label><br/>
                <textarea name="text"  onChange={this.handleChange} cols="30" rows="10" placeholder="Enter your message here ..." > </textarea>
                <div class="center">
                    <input onClick={this.sendEmail} type="submit" value="Submit"/>
                </div>
            </form>	
        </div>
        )
    }
}
