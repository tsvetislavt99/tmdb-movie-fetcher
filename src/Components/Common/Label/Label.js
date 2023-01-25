import React from 'react';

export default function Label({ children, type }) {
  const className = React.useMemo(() => {
    switch (type) {
      case 'success':
        return 'bg-green-50 text-green-600';
      case 'warning':
        return 'bg-yellow-50 text-yellow-600';
      case 'danger':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-green-50 text-green-600';
    }
  }, [type]);

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}
