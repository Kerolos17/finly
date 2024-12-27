"use client";
import React from "react";
import Link from "next/link";
const Page = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen" >
      <nav className="flex justify-center items-center space-x-4">
        <Link className="text-3xl hover:underline" href="/login">login</Link>
        <Link className="text-3xl hover:underline" href="/register">register</Link>
        <Link className="text-3xl hover:underline" href="/profile">Profile</Link>
      </nav>
    </div>
  );
};

export default Page;
