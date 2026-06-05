'use client';

export function AvgTimeCard() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-orange-100 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-2 bento-hover">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-[#ff7114]">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#111b30]">Avg. Time</h3>
      </div>

      <div className="flex flex-col items-center justify-center py-6">
        <span className="text-5xl font-bold tracking-tighter text-[#ff7114]">
          42<span className="text-2xl">m</span>
        </span>
        <div className="mt-4 flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4"
            />
          </svg>
          12% from last week
        </div>
      </div>

      <div className="border-t border-orange-100 pt-4">
        <p className="text-center text-sm italic text-[#7a6b62]">
          &quot;Focus mode sessions helped reduce time by 5m on average.&quot;
        </p>
      </div>
    </div>
  );
}

export function ProjectHealthCard() {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-xl border border-orange-100 bg-green-600 p-6 shadow-sm md:col-span-2 lg:col-span-2 bento-hover text-white">
      <div>
        <h3 className="text-lg font-bold opacity-90">Project Health</h3>
        <p className="text-sm opacity-70">Active Workspace Stability</p>
      </div>

      <div className="relative flex items-center justify-center py-10">
        <svg className="h-32 w-32 -rotate-90 transform" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r="56"
            fill="transparent"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            fill="transparent"
            stroke="white"
            strokeWidth="12"
            strokeDasharray="351.8"
            strokeDashoffset="35.18"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold">94%</span>
        </div>
      </div>

      <div className="rounded-lg bg-white/10 p-3">
        <div className="mb-1 flex justify-between text-xs font-medium">
          <span>Optimization</span>
          <span>Excellent</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[94%] bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export function DeepWorkCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-orange-100 bg-[#ff7114] p-6 shadow-sm md:col-span-2 lg:col-span-2 bento-hover text-[#582200]">
      <div className="relative z-10">
        <h3 className="text-lg font-bold">Deep Work</h3>
        <p className="mb-6 text-sm opacity-80">
          Uninterrupted productivity hours
        </p>
        <span className="mb-4 block text-5xl font-bold">128.5</span>

        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#ff7114]">
              <img
                alt="User"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuIGz19dpe4SmAWABcsJcd34CEV1LWx-ulw5Q5E_TkLNPt8LteH6hJB60VMioYb4EzRwXGRbrjDm_rheAACZCGnAp5WO_ZwobuRXI2d6ohi5vyv4IpXcHxXqnCoHiH2pTh0cA8x-1nV2O_vi-meUO2aTIGkQ4yh2FQUC39BZg0kTHYuC68YOtk9W7iVBv0N1Z0sOvwLv8opuSLsFIa6Jl77CD5mT205bV8d323qfMe3TidQKVm0enfllzM"
              />
            </div>
            <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#ff7114]">
              <img
                alt="User"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida/ADBb0uiy2RP386ph56AdLLyNf8OWNDNC3bgP1bns8VzkeYHAymbBrDg_sRYZc0oG5WqlQWzuRbSOGl3q5N2lht_L9GULDE6pbX-gHCxdF_3baCZySpFrddT6nLNgA_aDyAvqGcTzPmuzSQJcxgyVKjPkLZEJwm8zPGtK2ZBVYyJHWcQnmnYkGlCuXXSDKZoNtgyKF6CzZMAWdQk5XV6qU-3yvVlKzk8UbpR9QpzXMEVixeakruQ4235xtnLAEw"
              />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#ff7114] bg-white text-xs font-bold">
              +4
            </div>
          </div>
          <span className="text-xs font-medium">Team Peak hours</span>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute right-4 top-4 text-[#582200] opacity-20">
        <svg className="h-32 w-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      </div>
    </div>
  );
}
