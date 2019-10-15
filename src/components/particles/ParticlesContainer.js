import React, {Component} from 'react';
import Particles from 'react-particles-js';


class ParticlesContainer extends Component {
render() {
    return ( 
          <div>
  <Particles
    style={{
      backgroundColor:"#000000",
      position: "absolute",
      zIndex: -10000,
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }}
      params={{
        "particles": {
            "number": {
                "value": 8,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "speed": 6,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "images",
                    "circle"
                ],
                "images": [
                    {
                        "src": "code.b3b4c4f4.png",
                        "height": 20,
                        "width": 23
                    },
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                }
            }
        },
        "retina_detect": false
    }} />
      </div>
    )
    
}
}

export default ParticlesContainer;