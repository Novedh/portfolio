import React from "react";

interface BodyProps {
  heading: string;
  description?: string;
  children?: React.ReactNode;
}

function Body({ heading, description, children }: BodyProps) {
  return (
    <>
      <h1 className="text-center">{heading}</h1>
      {description && (
        <p className="text-center text-muted mb-3">{description}</p>
      )}
      {children}
    </>
  );
}

export default Body;
