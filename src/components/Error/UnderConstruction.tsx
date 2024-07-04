import { ConeStripedIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro";

interface Props {
  position: "absolute" | "relative";
}

export default function UnderConstruction({ position }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="mb-5 screen-center-div shadow-sm"
      style={{ position: position }}
    >
      <div className="p-4">
        <div className="row text-center pt-5 jc-center">
          <ConeStripedIcon color="var(--sidebar-bg)" width={140} height={140} />
          <br />
          <br />
          <br />
          <h2 className="font-weight-bold">
            <b>Page Under Contruction</b>
          </h2>
          <br />
          <br />
          <p className="grey-text break-words">
            This page is under construction. We will be launching this page very
            soon!
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
          <br />
        </div>
      </div>
    </div>
  );
}
