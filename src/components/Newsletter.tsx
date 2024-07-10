"use client";

// Functions
import { useEffect, useState } from "react";

declare global {
  interface Window {
    CustomSubstackWidget: {
      substackUrl: string;
      placeholder: string;
      buttonText: string;
      theme: string;
      colors: {
        primary: string;
        input: string;
        email: string;
        text: string;
      };
    };
  }
}

const Newsletter = () => {
  useEffect(() => {
    // Define the CustomSubstackWidget on the window object
    window.CustomSubstackWidget = {
      substackUrl: "bartekpiekarz.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#FFFFFF",
        input: "#FFFFFF",
        email: "#FFFFFF",
        text: "#FFFFFF",
      },
    };

    // Create a new script element
    const script = document.createElement("script");

    // Set the source of the script to the Substack widget script
    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const widgetForm = document.querySelector(".custom-substack-widget");

      if (widgetForm) {
        const widgetInput = widgetForm.querySelector("input");
        const widgetButton = widgetForm.querySelector("button");
        const widgetSuccess = document.querySelector(".success");
        const widgetError = document.querySelector(".error");

        if (widgetInput && widgetButton) {
          widgetForm.className =
            "flex w-full max-w-sm items-center justify-center gap-x-4 py-6 mx-auto";

          widgetInput.className =
            "h-12 w-56 rounded-2xl border border-input px-3 py-2 text-sm placeholder:text-muted-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

          if (widgetSuccess) {
            widgetSuccess.className = "text-xl text-green-500";
          }

          if (widgetError) {
            widgetError.className = "text-xl text-red-500";
          }

          const buttonWrapper = document.createElement("div");
          buttonWrapper.className = "flex flex-col";

          const motionDiv = document.createElement("div");
          motionDiv.className = "motion-div";

          buttonWrapper.appendChild(motionDiv);
          motionDiv.appendChild(widgetButton);

          widgetForm.appendChild(buttonWrapper);

          widgetButton.className =
            "z-50 h-12 w-28 rounded-2xl text-lg font-bold text-black bg-primary text-black hover:bg-primary/90 transition-transform transform hover:-translate-y-1 active:translate-y-3";

          const extraDiv = document.createElement("div");
          extraDiv.className =
            "mt-[-2rem] h-10 w-28 rounded-2xl bg-primary/35 px-4 py-2";
          buttonWrapper.appendChild(extraDiv);

          clearInterval(interval);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-auto flex w-full flex-col items-center px-10 py-24">
      <h2 className="text-center text-3xl font-bold">
        Stay updated and sign in
      </h2>
      <h2 className="pt-1 text-3xl font-bold">for my newsletter</h2>
      <div
        id="custom-substack-embed"
        className="max-w-[45ch] grid-cols-2 place-content-center place-items-center items-center justify-center gap-4 text-center md:grid md:grid-cols-1 "
      ></div>
      <div>
        <p className="pt-10 text-center text-xl">
          My newsletter includes my recommendations
        </p>
        <p className="pt-1 text-center text-xl">
          about books, technologies, life, travelling,
        </p>
        <p className="pt-1 text-center text-xl">and more...</p>
      </div>
    </div>
  );
};

export default Newsletter;
