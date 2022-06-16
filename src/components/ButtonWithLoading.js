import React from "react";
import { Button, Spinner } from "react-bootstrap";

const ButtonWithLoading = ({ spinnerProps, isLoading, children, ...props }) => (
  <Button disabled={isLoading} {...props}>
    {isLoading && (
      <>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          {...spinnerProps}
        />
        &nbsp;&nbsp;
      </>
    )}
    {children}
  </Button>
);

export default ButtonWithLoading;
