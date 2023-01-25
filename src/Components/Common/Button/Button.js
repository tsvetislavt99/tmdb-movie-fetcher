import React from 'react';

export default function Button({ type, disabled, children, color }) {
  return (
    <button
      className="block text-white mx-auto mb-4 px-10 py-2 rounded-lg border border-transparent disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:border-white hover:border-white duration-200"
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
}
