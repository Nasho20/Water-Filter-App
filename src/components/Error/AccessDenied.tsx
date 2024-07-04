import { DeniedIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro";

interface Props {
  position: "absolute" | "relative";
}

export default function AccessDenied({ position }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-5 screen-center-div" style={{ position: position }}>
        <div className="p-4">
          <div className="row text-center pt-5 jc-center">
            <DeniedIcon color="var(--sidebar-bg)" width={120} height={120} />
            <br />
            <br />
            <h2 className="font-weight-bold">
              <b>Access Denied</b>
            </h2>
            <br />
            <br />
            <p className="grey-text break-words">
              You don't have permission to access this page. Please contact
              administrator to request access.
            </p>
            <br />
            <br />
            <br />
            <div className="row mb-4">
              <div className="col-3"></div>
              <div className="col-6 webkit-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Go Back
                </button>{" "}
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
