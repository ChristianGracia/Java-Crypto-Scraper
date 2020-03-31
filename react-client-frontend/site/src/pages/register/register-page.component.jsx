import React from "react";
import "./register-page.styles.scss";

import RegisterField from "../../components/register-field/register-field.component";
import ParticleSmall from "../../components/common/particle/particle.component";

const RegisterPage = () => (
  <div className="container">
    <span className="header">Register</span>
    <div className="m-auto" style={{ width: 320 }}>
      <ParticleSmall number={40} color={"#FE3EA5"} />
    </div>
    <div className="m-auto">
      <div style={{ padding: 16 }}></div>
      <RegisterField />
    </div>
  </div>
);
export default RegisterPage;
