"use client";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button onClick={() => signIn("github")}>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </button>
  );
}
