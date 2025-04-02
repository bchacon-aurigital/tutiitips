import React, { useState, useEffect } from 'react';
import { Tulipan2 } from "../assets";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Iniciar la animación de la barra de progreso
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 2 segundos = 100 pasos * 20ms

    // Timer para ocultar la pantalla de carga
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Esperar a que termine la transición
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
        <img 
          src={Tulipan2} 
          alt="Logo Tulsi" 
          className="w-44 h-32 animate-pulse-slow"
        />
        <div className="absolute -bottom-4 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#678477] transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 