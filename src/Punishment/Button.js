import React from "react";

export default function Button({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-primary w-100">
      Get result
    </button>
  );
}