import React from "react";

const InputField = ({
  className,
  style,
  type,
  name,
  label,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        style={style}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
