import React from 'react';

type HelloWorldProps = {
  name?: string;
};

const HelloWorld: React.FC<HelloWorldProps> = ({ name = 'Mundo' }) => {
  return (
    <div className="p-4 rounded-lg bg-blue-100 text-blue-800 shadow-md">
      <h1 className="text-2xl font-bold">¡Hola, {name}!</h1>
      <p className="text-base">Bienvenido a tu proyecto Next.js con Lenis y TypeScript.</p>
    </div>
  );
};

export default HelloWorld;
