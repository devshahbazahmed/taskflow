'use client';

import { getHighlightSegments } from '@/lib/utils/search';

interface HighlightTextProps {
  text: string;
  query?: string;
  className?: string;
}

export default function HighlightText({
  text,
  query,
  className,
}: HighlightTextProps) {
  if (!query) {
    return <span className={className}>{text}</span>;
  }

  const segments = getHighlightSegments(text, query);

  return (
    <span className={className}>
      {segments.map((segment, index) =>
        segment.isMatch ? (
          <mark key={index} className="bg-yellow-200 font-semibold">
            {segment.text}
          </mark>
        ) : (
          <span key={index}>{segment.text}</span>
        )
      )}
    </span>
  );
}
