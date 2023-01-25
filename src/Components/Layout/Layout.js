import React from 'react';

export default function Layout({ children }) {
  const [first, second] = React.Children.toArray(children);

  return (
    <div className="flex flex-col mt-5">
      <div className="mx-4 lg:mx-36 text-white mb-5">{first}</div>
      {second && <div className="mx-4 lg:mx-36">{second}</div>}
    </div>
  );
}
