'use client';

import HighlightText from '@/components/HighlightText';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface SearchResultsProps {
  results: SearchResult[];
  searchQuery: string;
  isVisible: boolean;
}

export default function SearchResults({
  results,
  searchQuery,
  isVisible,
}: SearchResultsProps) {
  if (!isVisible || results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-xl border border-orange-200 bg-white shadow-xl">
      <div className="max-h-96 overflow-y-auto">
        {results.map((result) => (
          <a
            key={result.id}
            href={`#task-${result.id}`}
            className={`block border-b border-orange-100 px-4 py-3 transition hover:bg-orange-50 last:border-b-0 ${
              result.completed ? 'opacity-60' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 flex size-6 items-center justify-center rounded-full border-2 border-orange-200 flex-shrink-0">
                {result.completed && (
                  <div className="size-4 rounded-full bg-emerald-500" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h4
                  className={`text-sm font-semibold ${
                    result.completed
                      ? 'line-through text-gray-400'
                      : 'text-[#09142a]'
                  }`}
                >
                  <HighlightText text={result.title} query={searchQuery} />
                </h4>
                <p className="mt-1 text-xs text-[#3b2116] line-clamp-2">
                  <HighlightText
                    text={result.description}
                    query={searchQuery}
                  />
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="border-t border-orange-100 bg-gray-50 px-4 py-2 text-center text-sm text-[#3b2116]">
        Showing {results.length} result{results.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
