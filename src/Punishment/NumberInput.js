import React from "react";

export default function NumberInput({ value, onChange, placeholder }) {
  return (
    <div className="mb-3">
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)} className="form-control" placeholder={placeholder}/>
    </div>
  );
}