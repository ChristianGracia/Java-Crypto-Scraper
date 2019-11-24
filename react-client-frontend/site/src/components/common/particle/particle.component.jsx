import React, { Component } from "react";
import Particle from "react-particles-js";

export default class ParticleSmall extends Component {
  render() {
    return (
      <div>
        <Particle
          params={{
            particles: {
              number: {
                value: this.props.number
              },
              size: {
                value: 3
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: this.props.color,
                  blur: 5
                }
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
          style={{
            background: "transparent"
          }}
        />
      </div>
    );
  }
}
