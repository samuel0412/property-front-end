"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ToastContainerHandler() {
  return (
    <div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default ToastContainerHandler;
