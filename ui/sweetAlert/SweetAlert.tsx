import React, { useState, CSSProperties, FC } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

interface SweetAlertProps {
  confirm: () => void; // Function type for confirm action
  cancel: () => void;  // Function type for cancel action
  title: string;       // Title of the alert
  subtitle: string;    // Subtitle of the alert
  type?: "success" | "danger" | "warning" | undefined; // Alert type (optional)
}

const SweetAlertComponent: FC<SweetAlertProps> = ({
  confirm,
  cancel,
  title,
  subtitle,
  type = "warning", // Default type is 'warning'
}) => {
  const [fadeOut, setFadeOut] = useState(false); // State to control fade-out effect

  const alertStyles: CSSProperties = {
    zIndex: 1,
    fontFamily: "'Roboto', sans-serif",
    transition: "all 0.5s ease-in-out", // Smooth transition for animation
    transform: fadeOut ? "scale(0.9)" : "scale(1)", // Shrink on fade-out
    opacity: fadeOut ? 0 : 1, // Fade-out effect
    borderRadius: "12px", // Rounded corners for a modern look
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Subtle shadow
    padding: "20px",
  };

  const confirmButtonStyles: CSSProperties = {
    backgroundColor: "#e63946",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "1rem",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  };

  const cancelButtonStyles: CSSProperties = {
    backgroundColor: "#a8dadc",
    border: "none",
    color: "#1d3557",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "1rem",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  };

  const handleConfirm = () => {
    setFadeOut(true); // Trigger fade-out animation
    setTimeout(() => {
      confirm(); // Call confirm after fade-out is complete
    }, 500); // Duration should match the CSS transition duration
  };

  const fadeInAnimation: CSSProperties = {
    animation: "fadeIn 0.5s ease-in-out",
  };

  return (
    <SweetAlert
      style={{ ...alertStyles, ...fadeInAnimation }}
      title={<span style={{ color: "#457b9d", fontWeight: "bold" }}>{title}</span>}
      onConfirm={handleConfirm} // Use the new handleConfirm function
      type={type}
      showCancel={true}
      confirmBtnStyle={confirmButtonStyles}
      cancelBtnStyle={cancelButtonStyles}
      onCancel={cancel}
      customIcon={
        <div
          style={{
            fontSize: "3rem",
            color: type === "success" ? "#2a9d8f" : type === "danger" ? "#e63946" : "#e9c46a",
          }}
        >
          {type === "success" ? "✔️" : type === "danger" ? "❌" : "⚠️"}
        </div>
      } // Custom icon based on type
    >
      <p style={{ margin: 0, padding: "10px 0", fontSize: "1.1rem", lineHeight: "1.5" }}>
        {subtitle}
      </p>
    </SweetAlert>
  );
};

export default SweetAlertComponent;