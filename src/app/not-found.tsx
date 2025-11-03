import React from "react";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="container">
      <section className="section-top-padding">
        <div className="flex flex-col justify-center px-8 py-[100px] md:px-2.5 lg:py-16">
          <p className="section-title text-center">Oops, this page Not found</p>
          <h2 className="section-title my-10 text-center">404</h2>
          <div className="mx-auto">
            <Button link="/" variant="ghost">
              Back to home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
