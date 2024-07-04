import React from "react";
import styles from "./Login.module.scss";
import { Outlet } from "react-router-dom";
import { LoginImage } from "../../assets";
import { LoginFormBg } from "../../assets";

interface Props {}

const Login: React.FC<Props> = () => {
  let image = require(`../../assets/images/eye.png`);

  return (
    <div
      className={`${styles["login-page"]} flex ai-center row`}
      style={{ backgroundImage: `url(${LoginFormBg})` }}
    >
      <div className={`${styles.left} col-md-6 col-sm-12`}>
        <img src={LoginImage} className={`img-cover`} alt="Login Image" />
      </div>
      <div className={`${styles.right} col-md-6 col-sm-12`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
