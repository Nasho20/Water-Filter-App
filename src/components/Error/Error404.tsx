import { ConeStripedIcon } from "../../assets";
import styles from "./Error.module.scss";
import { useNavigate } from "react-router-dom";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro"

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div
      className={`mb-5 screen-center-div ${styles.center_div_block}`}
      style={{ position: "absolute" }}
    >
      <div className="p-4">
        <div className="row text-center pt-5 jc-center">
          <div className="ps-5">
            <ConeStripedIcon
              color="var(--bs-primary)"
              width={140}
              height={140}
            />
          </div>
          <br />
          <br />
          <br />
          <h2 className="font-weight-bold">
            <b>Page Not Found</b>
          </h2>
          <br />
          <br />
          <p className="grey-text break-words">
            This page does not exists! Check the url or contact the
            administrator.
          </p>
          <br />
          <br />
          <br />
          <div className="row mb-4">
            <div className="col-3"></div>
            <div className="col-6 ps-0 webkit-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Go Back
              </button>
            </div>
            <div className="col-3"></div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
