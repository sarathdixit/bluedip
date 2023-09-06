import Image from "next/image";
import React from "react";

export default function Button(props) {
  const {
    title,
    BtnClassName = "",
    disabledClass = "opacity-[0.6]",
    icon,
    cta,
    loading,
    disabled,
    type = "button",
    form = "",
    iconClassName = "w-[12.27px] h-[12.27px]",
  } = props;

  return (
    <button
      onClick={cta}
      className={`bg-[#CCAB57] cursor-pointer flex items-center justify-center w-[100%] dm-sans  text-white text-[16px] leading-[24px] p-4 rounded-[1000px] font-[500] ${BtnClassName} ${
        (disabled || loading) && disabledClass
      }`}
      disabled={disabled || loading}
      form={form}
      type={type}
    >
      {icon && (
        <div className={`relative mr-1 ${iconClassName}`}>
          <Image src={icon} alt="icons" fill unoptimized />
        </div>
      )}

      {loading ? (
        <div
          className="w-5 h-5 rounded-full animate-spin
                    border-4 border-solid border-white border-t-transparent relative"
        ></div>
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
}
