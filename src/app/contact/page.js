"use client";

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/dashboard");
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <button onClick={handleRedirect}>Log In</button>
    </div>
  );
};

export default Contact;
