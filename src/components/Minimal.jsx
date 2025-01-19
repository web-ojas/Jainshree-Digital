import React from "react";
import { Phone } from "lucide-react";

const MinimalDigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-center">Digital Marketing</h1>
      <div className="mt-4">
        <button
          onClick={() => console.log("clicked")}
          className="flex items-center justify-center gap-2 bg-yellow-300 p-4 rounded-lg w-full"
        >
          <Phone />
          Call Now
        </button>
      </div>
    </div>
  );
};

export default MinimalDigitalMarketing;
