import React from "react";

type CardWrapperProps = {
  children: React.ReactNode;
};

const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="p-4 md:p-8 rounded-[20px] bg-white flex flex-col gap-6 lg:gap-8 h-full">
      {children}
    </div>
  );
};

export default CardWrapper;
