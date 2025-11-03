import React from "react";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="container">
      <div className="h-8 md:h-16"></div>
      <section className="pb-[50px]">
        <div className="rounded-full py-[100px] lg:py-16 bg-accent flex flex-col justify-center px-8 md:px-2.5">
          <p className="text-white font-bold text-2xl md:text-4xl mb-4 text-center tracking-1">
            Oops, this page Not found
          </p>
          <h2 className="text-white text-4xl md:text-5xl xl:text-[64px] font-bold mb-12 leading-[1.2] text-center tracking-1">
            404
          </h2>
          <div className="mx-auto">
            <Button link="/">Back to home</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
