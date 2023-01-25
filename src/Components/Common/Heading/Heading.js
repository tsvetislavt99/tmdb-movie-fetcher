import React from 'react';

export default function Heading({ children }) {
  return (
    <h1 className="text-4xl lg:text-6xl font-bold max-lg:mb-3 text-white">
      {children}
    </h1>
  );
}
