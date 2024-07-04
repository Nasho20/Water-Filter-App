// React imports
import React from "react";

// error components
import AccessDenied from "./AccessDenied";
import GeneralError from "./GeneralError";
import UserUnauthenticated from "./UserUnauthenticated";
import Error404 from "./Error404";

// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro"

interface Props {
  error: any; // error object returned
  title: any | null | undefined; // error title
  body: any | null | undefined; // error message
}

/**
 * Component to handle errors and render error messages
 * @param Type error: the error object from api,
 * title: the title of the error,
 * body: the body message of the error,
 * @returns Error handling component
 */

export default function HandleError({ error, title, body }: Props) {
  if ("status" in error) {
    const errStatus =
      "error" in error ? error?.error : JSON.stringify(error?.status);
    if (errStatus.charAt(0) == "4") {
      if (errStatus == "401") {
        return (
          <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <UserUnauthenticated
              position="relative"
              title="Session expired"
              body="You can not access this page unless you are loggedin again in our system!"
            />
          </>
        );
      } else {
        if (errStatus == "404") {
          return (
            <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Error404 />
            </>
          );
        } else {
          return (
            <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <AccessDenied position="relative" />
            </>
          );
        }
      }
    }
    if (errStatus.charAt(0) == "5") {
      return (
        <>
          <br />
          <br />
          <br />
          <div>
            <GeneralError
              position="relative"
              title={title ?? <span>Oops something went wrong</span>}
              body={
                body ?? (
                  <span>Please try again or contact the administrator.</span>
                )
              }
              hasButton={false}
              buttonEvent={() => {}}
            />
          </div>
        </>
      );
    }
    return (
      <>
        <br />
        <br />
        <br />
        <div>
          <GeneralError
            position="relative"
            title={title ?? <span>Oops something went wrong</span>}
            body={
              body ?? (
                <span>Please try again or contact the administrator.</span>
              )
            }
            hasButton={false}
            buttonEvent={() => {}}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <br />
        <br />
        <br />
        <div>
          <GeneralError
            position="relative"
            title={title ?? <span>Oops something went wrong</span>}
            body={
              body ?? (
                <span>Please try again or contact the administrator.</span>
              )
            }
            hasButton={false}
            buttonEvent={() => {}}
          />
        </div>
      </>
    );
  }
}
