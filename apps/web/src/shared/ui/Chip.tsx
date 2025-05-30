import React from 'react';

export const Chip = ({ text }: { text: string }) => {
  return (
    <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm">
      {text}
    </span>
  );
};
