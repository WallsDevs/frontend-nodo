"use client";
import React, { useState } from "react";
import RegistroForm from "./RegistroForm";
import styles from "../login/loginPage.module.css";

export default function RegistroPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegistro = async (data: any) => {
    setLoading(true);
    setError("");
    // Aquí iría la lógica real de registro (API call)
    setTimeout(() => {
      setLoading(false);
      // setError("Error en el registro");
    }, 1200);
  };

  return (
    <div
      className={styles.bgContainer}
      style={{
        backgroundImage: "url(/bgFooter.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.centeredBox} style={{ filter: "none" }}>
        <RegistroForm
          onSubmit={handleRegistro}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}
