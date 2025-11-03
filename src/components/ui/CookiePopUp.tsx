"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

export const CookiePopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "cookieConsent=accepted; path=/; max-age=31536000";
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed mx-auto right-0 left-0 bottom-4 sm:right-6 sm:left-auto sm:bottom-6 shadow-hover bg-background/85 max-w-[600px] z-[500] rounded-full shadow-2xl px-5 sm:px-8 py-14 sm:py-0">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 absolute top-4 right-0 left-0 sm:left-auto mx-auto sm:right-18 cursor-pointer text-text hover:text-btnbg duration-300"
        onClick={handleDecline}
      >
        <path
          d="M1 1L17 17"
          stroke="#6D6D6D"
          strokeWidth="2"
          stroke-linecap="round"
        />
        <path
          d="M17 1L1 17"
          stroke="#6D6D6D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="p-4 sm:p-4 space-y-4">
        <h2 className="text-title text-center font-bold">Cookie Policy</h2>
        <p className="text-sm text-text ">
          We use cookies to improve your experience, analyze site traffic, and
          personalize content. By continuing to browse our site, you consent to
          our use of cookies. For more information, please review our{" "}
          <a href="/terms" className="underline hover:text-accent duration-500">
            Terms and Conditions
          </a>
          ,{" "}
          <a
            href="/privacy"
            className="underline hover:text-accent duration-500"
          >
            Privacy Policy
          </a>{" "}
          &{" "}
          <a
            href="/cookie"
            className="underline hover:text-accent duration-500"
          >
            Cookie Policy
          </a>
        </p>

        <div className="flex justify-center gap-6">
          <Button onClick={handleDecline} small>
            Decline
          </Button>

          <Button onClick={handleAccept} small>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};
