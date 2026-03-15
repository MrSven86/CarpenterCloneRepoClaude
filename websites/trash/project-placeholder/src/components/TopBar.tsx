import { useState, useEffect } from "react";
import iconClock from "@/assets/icon-clock.svg";
import iconPin from "@/assets/icon-pin.svg";

const messages = [
  "Welcome to JF Deck & Stair Waterproofing",
  "License Nr: 214214142",
];

const TopBar = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-topbar">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-2 text-topbar-foreground text-sm font-bold">
        <span
          className={`font-bold transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {messages[index]}
        </span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <img src={iconClock} alt="" className="w-4 h-4" />
            <span>Mon - Sat: 7:00AM - 6:00PM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img src={iconPin} alt="" className="w-4 h-4" />
            <span>La Mirada, CA | Serving LA &amp; Orange County</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
