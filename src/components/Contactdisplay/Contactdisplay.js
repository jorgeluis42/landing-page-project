import React, { Component } from 'react'
import  sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'
dotenv.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default class Contactdisplay extends Component {
    state = {
        me: 'jorge.luis4212@gmail.com',
        sender: '',
        first_name: '',
        last_name: '',
        text: ''
    }

    sendEmail = e => {
        e.preventDefault()
        const { me, sender, text, firstName, lastName } = this.state;
        const msg = {
            to: me,
            from: sender,
            subject: `FROM: ${firstName} ${lastName} - Email from Portfolios.live`,
            text: text,
            html: ''
          };
          sgMail.send(msg);
          console.log('SUCCESSSSSSSSSSSSSS')
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { email } = this.state;
        return (
            <div className="contact_container">
            <h3>Contact Me</h3>
            <form  className="contact_form">
                <label for="last_name" >First Name</label>
                <input name="first_name" onChange={this.handleChange} type="text" placeholder="John"/>
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
