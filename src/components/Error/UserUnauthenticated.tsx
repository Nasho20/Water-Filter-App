import Lock from "../../assets/svg/Lock.svg";
import { useNavigate } from "react-router-dom";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro";

interface Props {
  position: "absolute" | "relative";
  title?: string;
  body?: string;
}

export default function UserUnauthenticated({ position, title, body }: Props) {
  const navigate = useNavigate();

  return (
    <div className="centered-div">
      <div
        className="mb-5 smooth-gradient-grey-bg"
        style={{ position: position ?? "absolute" }}
      >
        <div className="p-4">
          <div className="text-center pt-5 jc-center">
            <img src={Lock} alt="sad-face" width="50" height="50" />
            <br />
            <br />
            <h1 className="font-weight-bold">
              <b>{title ?? <>User Unauthenticated</>}</b>
            </h1>
            <br />
            <br />
            <p className="grey-text break-words">
              {body ?? (
                <>
                  You can not access this page unless you are authenticated.
                  Please loggin or contact site administrator!
                </>
              )}
            </p>
            <br />
            <br />
            <div className="row jc-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Go Back
              </button>{" "}
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
