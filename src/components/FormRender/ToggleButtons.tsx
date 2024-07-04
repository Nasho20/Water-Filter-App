import styles from "../FormRender/FormRender.module.scss";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro"

interface FormRenderProps {
  buttonsSize: any;
  toggleDrawer: any;
  submitBtnText: any;
}

const ToggleButtons: React.FC<FormRenderProps> = ({
  buttonsSize,
  toggleDrawer,
  submitBtnText,
}) => {
  return (
    <div className={`row mt-5 mb-5 ${buttonsSize ? "ms-3" : ""}`}>
      <div
        className={`col-md-${
          buttonsSize ?? "6"
        } col-sm-12 flex d-grid gap-2 d-md-block`}
      >
        <button
          type="button"
          className={`${styles["btn-cancel"]} fs-16 fw-500`}
          onClick={toggleDrawer}
        >
          Cancel
        </button>
      </div>
      <div
        className={`col-md-${
          buttonsSize ?? "6"
        } col-sm-12 flex d-grid gap-2 d-md-block`}
      >
        <div className="ms-3">
          <button
            type="submit"
            className={`${styles["btn-submit"]} fs-16 fw-500`}
          >
            {submitBtnText ?? 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleButtons;
