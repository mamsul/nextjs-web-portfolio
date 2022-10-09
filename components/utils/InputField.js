import React from "react";

export default function InputField({
  label,
  type,
  value,
  name,
  placeholder,
  onChange,
  className,
}) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm text-black font-semibold font-main leading-4"
        >
          {label}
        </label>
      )}
      {type == "text" ? (
        <input
          type={type}
          value={value}
          id={name}
          name={name}
          className="mt-1 h-10 bg-transparent font-main border-[1px] border-[#BFBFE3] focus:outline-none px-1"
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <textarea
          value={value}
          id={name}
          name={name}
          className="mt-1 h-32 sm:h-40 bg-transparent font-main border-[1px] border-[#BFBFE3] focus:outline-none px-1"
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
}
