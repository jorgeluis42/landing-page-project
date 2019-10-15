import React, { Component } from 'react'
import Carousel from '../carouseldisplay/carousel';

export default class Projectdisplay extends Component {
    render() {
        return (
            <div>
            <h1 style={{display: 'flex', justifyContent: 'center', fontSize: '50px'}}>These are my projects</h1>
               <Carousel/>
            </div>
        )
    }
}
