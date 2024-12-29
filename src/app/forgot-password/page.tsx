'use client';
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const inputRefs = useRef([]);
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Gunakan efek untuk operasi yang hanya berjalan di klien
  }, []);

  const handleInputChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      setVerificationCode((prev) => {
        const codeArray = prev.split("");
        codeArray[index] = value;
        return codeArray.join("");
      });

      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSendCode = () => {
    setMessage({
      type: "info",
      text: "Reset password success! Please check your email to see the verification code.",
    });
  };

  const handleSubmit = () => {
    const correctCode = "1234";

    if (verificationCode === correctCode) {
      setMessage({
        type: "success",
        text: "Password Reset Success! Check your email to see your new password!",
      });

      setTimeout(() => {
        router.push("/sign-in");
      }, 3000);
    } else {
      setMessage({
        type: "error",
        text: "Verification Failed! Please check your code and try again.",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen shadow-xl bg-white px-4 border border-gray-300">
      <div className="flex justify-center items-center w-full max-w-xs mb-8">
        <Image
          src="/logo.svg"
          width={0}
          height={0}
          sizes="100%"
          alt="logo"
          className="w-full max-w-[250px]"
        />
      </div>

      <div className="w-full max-w-xs">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Alamat email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
          />
        </div>

        <div className="mb-4 text-right text-xs -mt-3">
          <button
            onClick={handleSendCode}
            className="text-blue-500 hover:underline"
          >
            Send code
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mb-6">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-bold outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <div className="flex justify-center w-full">
          <button
            onClick={handleSubmit}
            className="w-52 h-12 bg-gradient-to-r from-cyan-600 to-cyan-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 mt-10"
          >
            Submit
          </button>
        </div>

        {message && (
          <div
            className={`mt-6 p-4 text-center rounded-lg shadow-md ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : message.type === "error"
                ? "bg-red-100 text-red-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
