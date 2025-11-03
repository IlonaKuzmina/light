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
    <div className="shadow-hover bg-card fixed right-0 bottom-4 left-0 z-[500] mx-auto max-w-[600px] rounded-[20px] px-5 py-14 shadow-2xl sm:right-6 sm:bottom-6 sm:left-auto sm:px-8 sm:py-0">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-4 right-4 h-4 w-4 cursor-pointer duration-300"
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

      <div className="space-y-4 p-4 sm:p-4">
        <h2 className="text-light font-bartle tracking-1 text-center">
          Cookie Policy
        </h2>
        <p className="text-light text-sm">
          We use cookies to improve your experience, analyze site traffic, and
          personalize content. By continuing to browse our site, you consent to
          our use of cookies. For more information, please review our{" "}
          <a
            href="/terms"
            className="hover:text-primary underline duration-500"
          >
            Terms and Conditions
          </a>
          ,{" "}
          <a
            href="/privacy"
            className="hover:text-primary underline duration-500"
          >
            Privacy Policy
          </a>{" "}
          &{" "}
          <a
            href="/cookie"
            className="hover:text-primary underline duration-500"
          >
            Cookie Policy
          </a>
        </p>

        <div className="flex justify-center gap-6">
          <Button onClick={handleDecline} size={"sm"} variant="outline">
            Decline
          </Button>

          <Button onClick={handleAccept} size={"sm"} variant="ghost">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};
