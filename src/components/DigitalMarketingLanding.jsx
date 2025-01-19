import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const DigitalMarketingLanding = () => {
  const [showQR, setShowQR] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+919826050902";
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/919826050902";
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@parallelpanda.in";
  };

  const handleMap = () => {
    window.location.href = "https://maps.app.goo.gl/Z9zZvvBg4dVzkMrv7";
  };

  const handleWebsite = () => {
    window.location.href = "https://theparallelpanda.com";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div
        className="w-full px-4 pt-8 pb-8"
        style={{
          backgroundImage: "url(/background1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Logo" className="w-48 h-auto mb-4" />
          <h1
            className="text-3xl mb-2 text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Black" }}
          >
            Harshit Dawar
          </h1>
          <h2
            className="text-xl mb-8 text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            Digital Marketing Agency
          </h2>
        </div>
      </div>

      {/* Button Instructions */}
      <div className="bg-[#5d545e] py-6">
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-lg text-white"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            Click on buttons
          </p>
        </div>
      </div>

      {/* Contact Buttons Section */}
      <div
        className="bg-cover bg-center py-8"
        style={{ backgroundImage: "url(/background.png)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 max-w-2xl mx-auto">
            <button
              onClick={handleCall}
              className="bg-[#ffd6d6] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-[#d6ffd6] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
            <button
              onClick={handleEmail}
              className="bg-[#fff6d6] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
            <button
              onClick={handleMap}
              className="bg-[#d6e6ff] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
            <button
              onClick={handleWebsite}
              className="bg-[#f5d6ff] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setShowQR(!showQR)}
              className="bg-[#ffe461] px-6 py-3 rounded-lg hover:bg-opacity-90 text-[#5d545e]"
              style={{ fontFamily: "Satoshi-Medium" }}
            >
              Scan QR Code
            </button>
            {showQR && (
              <div className="mt-4">
                <img
                  src="/qr.png"
                  alt="QR Code"
                  className="mx-auto w-48 h-48"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div
        className="bg-cover bg-center py-12"
        style={{ backgroundImage: "url(/background.png)" }}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2
            className="text-2xl mb-6 text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Black" }}
          >
            Introduction
          </h2>
          <p
            className="text-lg leading-relaxed text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Regular" }}
          >
            A <strong>digital marketing engine</strong> fueled by{" "}
            <strong>27 years of mastery</strong>. From driving{" "}
            <em>targeted leads</em> through Google and Meta ads to igniting
            connections via email and WhatsApp marketing, we deliver a full
            suite of tailored solutions. With{" "}
            <strong>bespoke SEO strategies</strong> and a commitment to
            transparency, we guarantee growth without the guesswork. Let us
            handle the complexity while you focus on what matters most—
            <strong>elevating your business</strong>.
          </p>
        </div>
      </div>

      {/* Key Projects Section */}
      <div className="bg-[#5d545e] py-6">
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-lg text-white"
            style={{ fontFamily: "Satoshi-Black" }}
          >
            Key Projects
          </p>
        </div>
      </div>
      <div
        className="py-12 w-full"
        style={{
          backgroundImage: "url(/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "a.png",
              "b.png",
              "c.png",
              "1.png",
              "2.png",
              "3.png",
              "4.png",
              "5.png",
            ].map((img, index) => (
              <img
                key={index}
                src={`/${img}`}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Share Button (Fixed) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "Digital Marketing Agency",
                url: window.location.href,
              });
            }
          }}
          className="flex items-center gap-2 bg-[#ffe461] px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 text-[#5d545e]"
          style={{ fontFamily: "Satoshi-Medium" }}
        >
          <FontAwesomeIcon icon={faShare} className="w-5 h-5" /> Share this card
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketingLanding;
