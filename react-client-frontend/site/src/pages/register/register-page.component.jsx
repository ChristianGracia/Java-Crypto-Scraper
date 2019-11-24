import React from "react";
import "./register-page.styles.scss";

import RegisterField from "../../components/register-field/register-field.component";
import ParticleSmall from "../../components/common/particle/particle.component";

const RegisterPage = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    }}
  >
    <span
      style={{
        fontWeight: "bold",
        fontSize: 45,
        textAlign: "center",
        marginTop: 30,
        color: "#F8F141"
      }}
    >
      Register
    </span>
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
