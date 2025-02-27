import React from "react";
import styles from "./Body.module.css";

interface BodyProps {
  heading: string;
  description?: string;
  children?: React.ReactNode;
}

function Body({ heading, description, children }: BodyProps) {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Didot, serif",
          fontWeight: "bold",
          fontSize: "2rem",
          letterSpacing: "0.05em",
          color: "#4a5568",
        }}
      >
        {heading}
      </h1>
      {description && (
        <p className="text-center text-muted mb-3">{description}</p>
      )}
      {children}
    </>
  );
}

export default Body;
