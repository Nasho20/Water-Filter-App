import { SadFaceIcon } from "../../assets";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro";

interface Props {
  title: any;
  body: any;
  hasButton: boolean;
  buttonEvent: () => void;
  removeEmoji?: boolean;
  position: "absolute" | "relative";
}

export default function GeneralError(props: Props) {
  return (
    <>
      <div
        className="mb-5 screen-center-div shadow-sm"
        style={{ position: props.position }}
      >
        <div className="p-4">
          <div className="row text-center pt-5 jc-center">
            {!props.removeEmoji && (
              <SadFaceIcon color="#000" width={35} height={35} />
            )}
            <br />
            <br />
            <h3 className="font-weight-bold fs-22">
              <b>{props.title}</b>
            </h3>
            <br />
            <br />
            <p className="grey-text break-words">{props.body}</p>
            <br />
            <br />
            <br />
            {props.hasButton && (
              <div className="row mb-3">
                <div className="col-4"></div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={props.buttonEvent}
                  >
                    Go Back
                  </button>{" "}
                </div>
                <div className="col-4"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
