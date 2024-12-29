"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomepageRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("sign-in");
  }, [router]); 

  return null;
};

export default HomepageRedirect;
