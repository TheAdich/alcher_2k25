"use client";
import React, { useState, useEffect } from "react";
import styles from "./loading.module.css";

export default function Loading() {

  return (
    <div className={styles.loadingOverlay}>
      <div className="flex flex-col justify-center items-center h-screen bg-#00001F font-stone text-[#FFEBD3]">
        <div className="flex flex-col gap-4">
          <h1 className={styles.loading}>Loading...</h1>
          <div className={styles.frame}>
            <div
              className={styles.bar}
            ></div>
          </div>
          <div className={styles.textbox}>
            <p
              className={styles.text1}
            >
              Hey, hope it will start soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
