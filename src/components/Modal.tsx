import React from "react";
import styles from "./Modal.module.scss";
import { CheckCircleIcon } from "../assets";

interface Props {
  isOpen: boolean;
  closeForm: () => void;
  maxWidth?: number;
  children: React.ReactNode;
  title: any;
  hasCheckIcon?: boolean;
}

export default function Modal({
  closeForm,
  isOpen = false,
  maxWidth = 700,
  children,
  title,
  hasCheckIcon
}: Props) {
  return (
    <>
      {isOpen && (
        <div className={`${styles[`modal-pop`]} flex ai-center jc-center`}>
          <div
            className={`${styles[`modal-pop-opa`]}`}
            onClick={closeForm}
          ></div>

          <div
            className={`${
              styles[`modal-pop-content`]
            } flex fd-column ai-start `}
            style={{ maxWidth: `${maxWidth}px` }}
          >
            {hasCheckIcon && <div className={`flex align-self-center jc-center`}><CheckCircleIcon color="#50ABF0" width={70} height={70}/></div>}
            <div className={`${styles.header} flex ai-center jc-sb jc-center`}>
              <p className="fs-22 fw-600">{title}</p>
            </div>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
