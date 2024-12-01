"use client";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup h-screen bg-accent">
      <div className="flex justify-center items-center h-full left-section w-2/5 bg-primary">
        <div className="border-solid border-2 border-gray-500 rounded-xl bg-secondary p-8 w-3/4">
          <h1 className="font-bold text-4xl text-center">REGISTER</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <br />
            <label>
              First name
              <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </label>
            <br />
            <label>
              Last name
              <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </label>
            <br />
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <label>
              Confirm password
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </label>
            <br />
            <button
              type="submit"
              disabled={password !== confirmPassword}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="right-seciton bg-accent" ></div>
    </div>
  );
}
