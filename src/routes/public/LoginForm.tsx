import styles from "./Login.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../helpers/useIsMobile";
import { setUser } from "../../store/slices/authSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { BlueFilterLogo } from "../../assets";
import {
  errorToast,
  infoToast,
  successToast,
  warningToast,
} from "../../helpers/toasts";
//api
import { useLoginUserMutation } from "../../store/api/authApi";

type Input = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const schema = yup.object({
    email: yup.string().email("valid_email").required("email_required"),
    password: yup.string().required("password_required"),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(schema),
  });

  const [loginUser] = useLoginUserMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isMobile = useIsMobile();

  let image = require(`../../assets/images/eye.png`);

  const onLogin: SubmitHandler<Input> = async (data: any) => {
    setIsLoading(true);

    // try {
    //   const response = await loginUser(data).unwrap();
    //   if (response?.success) {
    //     response?.info && infoToast(response?.info);
    //     response?.warning && warningToast(response?.warning);
    //     successToast("success_login");

    //     const userRole = response?.data?.role;

    //     const user = {
    //       token: response?.data?.access_token,
    //       role: response?.data?.role,
    //       userId: response?.data?.id,
    //     };

    //     console.log(response);

    //     localStorage.setItem("role", response?.data?.role);
    //     localStorage.setItem("token", response?.data?.access_token);

    //     dispatch(setUser(user));

    navigate("admin/dashboard");
    //   } else {
    //     errorToast(response.error?.message ?? "error_login");
    //   }
    // } catch (error: any) {
    //   errorToast(error?.data?.error.message ?? "error_login");
    //   console.error("loginUser Error:", error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div
        className={`${
          isMobile ? styles["login-form-mobile"] : styles["login-form"]
        } flex fd-column  jc-center`}
      >
        {localStorage.getItem("role") && (
          <div
            className={`${styles.role_badge} text-light text-center p-2 px-4 align-self-end`}
          >
            {localStorage.getItem("role")?.replace("_", " ")}
          </div>
        )}
        <div className="d-flex gap-4">
          <img
            src={BlueFilterLogo}
            className={`mt-1 ${styles.logoFilter}`}
            height={30}
          />
          <h4 className={`fs-41 fw-bold ${styles.blueFilterText}`}>
            Blue Filter
          </h4>
        </div>
        <p className={`${styles.title} fw-700 fs-41 `}>Login</p>
        <p className={`${styles.subtitle} fs-18 fw-500`}>
          If you don't have an account please contact the Admin.
        </p>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className={`${styles.input} flex fd-column ai-start`}>
            <label htmlFor="#">Email</label>
            <input
              type="text"
              placeholder="john.doe@outlook.com"
              {...register("email", {
                required: "Email is required!",
              })}
            />
            {errors.email ? (
              <p className="form-error" style={{ color: "#dc3545" }}>
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className={`${styles.input} flex fd-column ai-start`}>
            <label htmlFor="#">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              {...register("password", {
                required: "Password is required!",
              })}
            />
            {errors.password ? (
              <p className="form-error" style={{ color: "#dc3545" }}>
                {errors.password.message}
              </p>
            ) : null}
          </div>
          <div className="row">
            <div className="col-xs-12 d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Keep me logged in
                </label>
              </div>
              <div>
                <span className="blue-link-text text-underline">
                  Request Password Change
                </span>
              </div>
            </div>
          </div>
          <br />
          <button
            type="submit"
            className={`${styles["btn-submit"]} fs-16 fw-500`}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
