'use client';

export default function CompletionChart() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const data = [
    { completed: 60, inProgress: 30 },
    { completed: 40, inProgress: 55 },
    { completed: 20, inProgress: 75 },
    { completed: 50, inProgress: 40 },
    { completed: 30, inProgress: 65 },
    { completed: 15, inProgress: 25 },
    { completed: 10, inProgress: 15 },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-orange-100 bg-white p-6 shadow-sm md:col-span-4 lg:col-span-4 bento-hover">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-[#111b30]">
          Task Completion Rate
        </h3>
        <p className="text-sm text-[#7a6b62]">
          Daily completed vs. deferred tasks
        </p>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-600"></span>
          <span className="text-xs font-medium">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff7114]"></span>
          <span className="text-xs font-medium">In Progress</span>
        </div>
      </div>

      <div className="relative flex min-h-70 items-end gap-2 px-2">
        <div className="absolute inset-0 flex flex-col justify-between border-b border-orange-100 py-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full border-t border-dashed border-orange-100 opacity-30"
            ></div>
          ))}
        </div>

        {data.map((dayData, idx) => (
          <div
            key={idx}
            className="group relative flex flex-1 flex-col justify-end gap-1"
          >
            <div
              className="w-full rounded-t-sm bg-[#ff7114] opacity-80 transition-opacity group-hover:opacity-100"
              style={{ height: `${dayData.inProgress}%` }}
            ></div>
            <div
              className="w-full rounded-b-sm bg-green-600 transition-opacity group-hover:opacity-90"
              style={{ height: `${dayData.completed}%` }}
            ></div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium">
              {days[idx]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
