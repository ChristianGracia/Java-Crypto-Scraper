import React from "react";
import "./register-page.styles.scss";

import RegisterField from "../../components/register-field/register-field.component";

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
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,
        color: "#F8F141"
      }}
    >
      Register
    </span>
    <div className="m-auto" style={{ width: "50%" }}>
      <RegisterField />
    </div>
  </div>
);
export default RegisterPage;
