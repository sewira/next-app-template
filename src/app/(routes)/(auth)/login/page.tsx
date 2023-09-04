"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      router.replace("/");
    } catch (error) {
      alert("error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="field-username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="Username"
          id="field-username"
        />
        <label htmlFor="field-password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="field-password"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginPage;
