// Custom emoji components with modern cyberpunk styling
import React, { useState, useEffect } from 'react';

export const WaveEmoji = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <span 
      className="inline-block relative cursor-pointer transition-transform duration-300 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`text-4xl md:text-5xl lg:text-6xl inline-block animate-wave transform-origin-[70%_70%] bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent filter drop-shadow-lg transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`}>
        👋
      </span>
      <span className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl inline-block animate-wave transform-origin-[70%_70%] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent opacity-20 blur-sm">
        👋
      </span>
      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute -top-2 -right-2 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-200"></div>
          <div className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
        </>
      )}
    </span>
  );
};

export const LaptopEmoji = () => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block group cursor-pointer">
      <div className="w-12 h-8 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg relative shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
        {/* Screen */}
        <div className="w-10 h-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-sm mx-auto mt-1 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${isActive ? 'translate-x-full' : '-translate-x-full'}`}></div>
          <div className="absolute top-1 left-1 w-2 h-1 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/60"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-gradient-to-r from-cyan-300/60 to-purple-300/60 rounded"></div>
          
          {/* Code lines animation */}
          <div className="absolute top-2 left-1 w-3 h-0.5 bg-white/60 rounded animate-pulse delay-500"></div>
          <div className="absolute top-3 left-1 w-2 h-0.5 bg-yellow-400/60 rounded animate-pulse delay-700"></div>
          <div className="absolute top-4 left-1 w-4 h-0.5 bg-green-400/60 rounded animate-pulse delay-1000"></div>
        </div>
        {/* Keyboard base */}
        <div className="w-full h-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-b-lg mt-1"></div>
        
        {/* Typing indicators */}
        <div className="absolute bottom-0.5 left-2 w-1 h-0.5 bg-cyan-400 rounded animate-pulse"></div>
        <div className="absolute bottom-0.5 left-4 w-1 h-0.5 bg-purple-400 rounded animate-pulse delay-200"></div>
      </div>
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg opacity-60 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Floating WiFi signals */}
      <div className="absolute -top-2 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1 w-1.5 h-0.5 border border-cyan-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-2 w-2 h-0.5 border border-cyan-400 rounded-full animate-pulse delay-400"></div>
      </div>
    </div>
  );
};

export const ArtEmoji = () => (
  <div className="relative inline-block w-10 h-10">
    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full animate-pulse shadow-2xl shadow-purple-500/40"></div>
    <div className="relative w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center">
      <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full relative">
        <div className="absolute top-1 left-1 w-2 h-2 bg-white/80 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-3 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
      </div>
      <div className="absolute top-2 right-2 w-2 h-4 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full transform rotate-45"></div>
    </div>
  </div>
);

export const GearEmoji = () => (
  <div className="relative inline-block w-10 h-10">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-lg animate-pulse"></div>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="w-8 h-8 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700 rounded-full relative animate-spin-slow shadow-2xl">
        {/* Gear teeth */}
        {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
          <div
            key={i}
            className={`absolute w-2 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 origin-bottom`}
            style={{ transform: `translateX(-50%) rotate(${rotation}deg) translateY(-4px)` }}
          />
        ))}
        {/* Center hole */}
        <div className="absolute inset-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full shadow-inner"></div>
      </div>
    </div>
  </div>
);

export const DatabaseEmoji = () => (
  <div className="relative inline-block w-10 h-10">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg blur-lg animate-pulse"></div>
    <div className="relative w-10 h-10">
      {/* Database layers */}
      <div className="absolute bottom-0 w-8 h-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mx-1 shadow-2xl">
        <div className="w-full h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-t-lg animate-pulse"></div>
        <div className="mt-1 w-full h-0.5 bg-gradient-to-r from-green-300/60 to-cyan-300/60 rounded"></div>
        <div className="mt-1 w-full h-0.5 bg-gradient-to-r from-green-300/40 to-cyan-300/40 rounded"></div>
      </div>
      {/* Data flow lines */}
      <div className="absolute top-1 left-2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
      <div className="absolute top-3 right-1 w-3 h-0.5 bg-gradient-to-l from-green-400 to-transparent animate-pulse delay-300"></div>
    </div>
  </div>
);

export const ToolsEmoji = () => (
  <div className="relative inline-block w-10 h-10">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg blur-lg animate-pulse"></div>
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Wrench */}
      <div className="absolute w-6 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full transform -rotate-45 origin-left shadow-lg">
        <div className="absolute right-0 w-2 h-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded"></div>
      </div>
      {/* Screwdriver */}
      <div className="absolute w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full transform rotate-45 shadow-lg">
        <div className="absolute top-0 w-2 h-2 bg-gradient-to-br from-red-400 to-orange-500 rounded-full -translate-x-0.5"></div>
      </div>
    </div>
  </div>
);

export const RobotEmoji = () => (
  <div className="relative inline-block w-10 h-10">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-lg animate-pulse"></div>
    <div className="relative w-10 h-10">
      {/* Robot head */}
      <div className="w-8 h-6 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-lg mx-1 shadow-2xl relative">
        {/* Eyes */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-400/60"></div>
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse delay-200 shadow-lg shadow-cyan-400/60"></div>
        {/* Mouth */}
        <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
        {/* Antenna */}
        <div className="absolute -top-1 left-1/2 w-0.5 h-2 bg-gradient-to-t from-gray-400 to-cyan-400 transform -translate-x-1/2"></div>
        <div className="absolute -top-2 left-1/2 w-1 h-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full transform -translate-x-1/2 animate-pulse"></div>
      </div>
      {/* Body */}
      <div className="absolute bottom-0 w-6 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded mx-2">
        <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-t animate-pulse"></div>
      </div>
    </div>
  </div>
);

export const MasksEmoji = () => (
  <div className="relative inline-block w-10 h-10">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-lg animate-pulse"></div>
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Happy mask */}
      <div className="absolute left-0 w-4 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg transform -rotate-12 shadow-xl">
        <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
      </div>
      {/* Sad mask */}
      <div className="absolute right-0 w-4 h-6 bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg transform rotate-12 shadow-xl">
        <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transform rotate-180"></div>
      </div>
    </div>
  </div>
);

export const PhoneEmoji = () => (
  <div className="relative inline-block w-8 h-12">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-xl blur-lg animate-pulse"></div>
    <div className="relative w-8 h-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-2xl border border-cyan-500/30">
      {/* Screen */}
      <div className="w-6 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg mx-1 mt-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1 left-1 w-4 h-1 bg-white/80 rounded-full"></div>
        <div className="absolute bottom-1 left-1 right-1 h-2 bg-gradient-to-t from-cyan-300/60 to-transparent rounded"></div>
      </div>
      {/* Home button */}
      <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mt-1 animate-pulse shadow-lg shadow-cyan-400/60"></div>
    </div>
  </div>
);

export const EmailEmoji = () => (
  <div className="relative inline-block w-12 h-8">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-lg animate-pulse"></div>
    <div className="relative w-12 h-8 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-2xl border border-purple-500/30">
      {/* Envelope flap */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>
      {/* Envelope body */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-b-lg">
        {/* @ symbol */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 border border-cyan-400 rounded-full">
          <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent rounded-lg animate-pulse"></div>
    </div>
  </div>
);

export const CameraEmoji = () => (
  <div className="relative inline-block w-10 h-8">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-lg blur-lg animate-pulse"></div>
    <div className="relative w-10 h-8 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg shadow-2xl border border-pink-500/30">
      {/* Lens */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-gray-900 to-black rounded-full border-2 border-pink-400 shadow-inner">
        <div className="absolute inset-1 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full animate-pulse">
          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/80 rounded-full"></div>
        </div>
      </div>
      {/* Flash */}
      <div className="absolute top-0.5 right-1 w-1 h-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-yellow-400/60"></div>
      {/* Viewfinder */}
      <div className="absolute top-0.5 left-1 w-1.5 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
    </div>
  </div>
);

export const MegaphoneEmoji = () => (
  <div className="relative inline-block w-12 h-8">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg blur-lg animate-pulse"></div>
    <div className="relative w-12 h-8 flex items-center">
      {/* Megaphone cone */}
      <div className="w-8 h-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-r-full relative shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-r-full"></div>
        {/* Sound waves */}
        <div className="absolute right-0 top-1 w-2 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute right-0 top-2 w-3 h-0.5 bg-gradient-to-r from-orange-400 to-transparent rounded-full animate-pulse delay-200"></div>
        <div className="absolute right-0 top-3 w-2 h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded-full animate-pulse delay-400"></div>
      </div>
      {/* Handle */}
      <div className="absolute left-2 w-3 h-2 bg-gradient-to-br from-gray-600 to-gray-800 rounded shadow-lg border border-cyan-500/30"></div>
    </div>
  </div>
);

// Animation keyframes for wave effect
const waveAnimation = `
@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = waveAnimation;
  document.head.appendChild(style);
}