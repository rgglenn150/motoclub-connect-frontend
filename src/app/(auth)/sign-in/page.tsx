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
      <div className="w-[60%] flex flex-col items-center justify-center p-10">
        <div className="w-full flex flex-col items-center justify-center space-y-3">
          <h1 className="lg:text-4xl font-bold">Motoclub Connect</h1>
          <h3>Connect, Ride and Inspire.</h3>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
