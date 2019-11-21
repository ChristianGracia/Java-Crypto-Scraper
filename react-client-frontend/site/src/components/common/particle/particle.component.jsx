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
                value: 12
              },
              size: {
                value: 3
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#F8F141",
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
