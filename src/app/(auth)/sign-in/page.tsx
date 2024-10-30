import { LoginFormComponent } from "@/components/login-form";
import React from "react";

const SignIn = () => {
  return (
    <div className="h-screen w-full flex flex-row">
      <div className="w-[40%] bg-gray-400 rounded-lg flex items-center justify-center ">
        <div className="flex-row w-full items-center justify-center px-10">
          <LoginFormComponent />
        </div>
      </div>
      <div className="w-auto">
        <h1>Sign In</h1>
      </div>
    </div>
  );
};

export default SignIn;
