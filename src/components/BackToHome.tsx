import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const BackToHome: React.FC = () => {
  return (
    <Link
      to="/"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-3 bg-primary text-white rounded-xl shadow-lg hover:bg-primary-dark transition-all duration-300 group hover:shadow-xl"
      aria-label="Back to home page"
    >
      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="hidden sm:inline font-medium pr-1 text-sm">Back to Home</span>
    </Link>
  );
};
