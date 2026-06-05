'use client';

import { IconSearch, IconX } from '@tabler/icons-react';
import { useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search tasks...',
  onClear,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <label
      className={`relative flex w-full max-w-[400px] items-center rounded-xl border-2 transition ${
        isFocused
          ? 'border-[#ff7114] bg-white shadow-lg'
          : 'border-orange-200 bg-white/60'
      }`}
    >
      <IconSearch className="pointer-events-none absolute left-4 top-1/2 size-6 -translate-y-1/2 text-[#3c281d]" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="h-[52px] w-full bg-transparent pl-12 pr-10 text-lg text-[#09142a] outline-none placeholder:text-slate-500"
      />
      {value && (
        <button
          onClick={handleClear}
          type="button"
          className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full transition hover:bg-orange-100"
          aria-label="Clear search"
        >
          <IconX className="size-5 text-[#3c281d]" />
        </button>
      )}
    </label>
  );
}
