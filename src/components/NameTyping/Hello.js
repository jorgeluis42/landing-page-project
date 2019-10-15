import React, { Component } from 'react'
import Avatars from '../avatars/avatars'


export default class Hello extends Component {
    render() {

        return (
            <div>
                <div id="center">
                    <h1>Hello, welcome to my porfolio page - Jorge Luis</h1>

                </div>
                <div>
                    <h1>Skills</h1>
                </div>
                <div>
                    <h1>Description</h1>
                </div>
                <div>
                    <Avatars />
                </div>
            </div>

        )
    }
}

