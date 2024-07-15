'use client'

import { useState } from 'react';
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Sections from "@/Components/Sections";

export default function Home() {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [messageIcon, setMessageIcon] = useState("https://img.icons8.com/?size=100&id=118377&format=png&color=000000");

  const handleImageClick = () => {
    setShowContactOptions(!showContactOptions);
    setMessageIcon(showContactOptions ? "https://img.icons8.com/?size=100&id=118377&format=png&color=000000" : "https://img.icons8.com/?size=100&id=G73qnboyHDjl&format=png&color=000000");
  };

  return (
    <div>
      <div className="message-icon-container bg-[#eee]" onClick={handleImageClick}>
        <img src={messageIcon} className="message-icon" />
      </div>

      {showContactOptions && (
        <div className="contact-options-container hover:cursor-pointer">
          <div className="contact-option">
            <a href="https://wa.link/ib72qn">
              <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="WhatsApp" className="contact-icon" />
            </a>
          </div>
          <div className="contact-option">
            <a href="mailto:minhajahmed@gmail.com">
              <img src="https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000" alt="Email" className="contact-icon" />
            </a>
          </div>
          <div className="contact-option">
            <a href="tel:9000004910">
              <img src="https://img.icons8.com/?size=100&id=124195&format=png&color=000000" alt="Phone" className="contact-icon" />
            </a>
          </div>
        </div>
      )}

      <main>
        <Navbar />
        <Hero />
        <Sections />
      </main>
    </div>
  );
}
