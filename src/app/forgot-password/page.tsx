'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [email, setEmail] = useState("");
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [message, setMessage] = useState(""); // Track messages
  const [messageType, setMessageType] = useState<"success" | "error" | "">(""); // Track message type
  const [redirectMessage, setRedirectMessage] = useState(false); // Track redirect message state
  const router = useRouter(); // Next.js router for navigation

  const handleInputChange = (value: string, index: number) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Pindah ke input berikutnya jika ada dan value tidak kosong
      if (value && index < 3) {
        setFocusIndex(index + 1);
      }

      // Jika value kosong, mundur ke input sebelumnya
      if (!value && index > 0) {
        setFocusIndex(index - 1);
      }
    }
  };

  const handleSubmit = () => {
    if (code.join("") === "1234") {
      setMessage("Password Reset Success! Check your email to see your new password.");
      setMessageType("success"); // Set message type to success

      // Tampilkan pesan redirect setelah delay singkat
      setTimeout(() => {
        setMessage(""); // Hapus pesan sukses
        setRedirectMessage(true); // Tampilkan pesan redirect
      }, 1500);

      // Redirect to sign-in page after 3 seconds
      setTimeout(() => {
        router.push("/sign-in"); // Replace "/sign-in" with your actual sign-in route
      }, 3000);
    } else {
      setMessage("Verification Failed! Please check your code and try again.");
      setMessageType("error"); // Set message type to error
    }
  };

  const handleSendCode = () => {
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Reset password success! Please check your email to see the verification code.");
      setMessageType("success"); // Set message type to success
    } else {
      setMessage("Please enter a valid email address.");
      setMessageType("error"); // Set message type to error
    }
  };

  // Gunakan useEffect untuk memindahkan fokus secara otomatis
  useEffect(() => {
    if (focusIndex !== null) {
      const inputElement = document.getElementById(`input-${focusIndex}`);
      if (inputElement) {
        (inputElement as HTMLInputElement).focus();
      }
    }
  }, [focusIndex]);

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
          />
        </div>

        <div className="mb-4 text-right text-xs -mt-3">
          <button
            onClick={handleSendCode}
            disabled={!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)} // Disable button if email is invalid
            className="text-blue-500 hover:underline"
          >
            Send code
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mb-6">
          {[...Array(4)].map((_, index) => (
            <input
              id={`input-${index}`} // Berikan ID untuk setiap input
              key={index}
              type="text"
              value={code[index]}
              onChange={(e) => handleInputChange(e.target.value, index)}
              autoFocus={focusIndex === index} // Fokuskan input yang sesuai dengan focusIndex
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-bold outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
            />
          ))}
        </div>

        <div className="w-full flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
            disabled={code.join("").length !== 4} // Disable submit button if the code is not complete
          >
            Submit
          </button>
        </div>

        {/* Tampilkan pesan di bawah tombol submit */}
        {message && (
          <div className="text-center text-sm mt-4">
            <p className={messageType === "success" ? "text-green-500" : "text-red-500"}>
              {message}
            </p>
          </div>
        )}

        {/* Tampilkan pesan redirect */}
        {redirectMessage && (
          <div className="text-center text-sm mt-4">
            <p className="text-black">Redirecting to Sign-In...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
