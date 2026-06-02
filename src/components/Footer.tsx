export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t border-orange-200 pt-3 text-sm text-[#3b2116] md:flex-row md:items-center md:justify-between">
      <p>
        © 2026 TaskFlow Inc. System Status:{' '}
        <span className="font-extrabold text-emerald-700">Optimal</span>
      </p>
      <div className="flex gap-6">
        <a className="transition hover:text-[#a43700]" href="#">
          Privacy
        </a>
        <a className="transition hover:text-[#a43700]" href="#">
          Support
        </a>
        <a className="transition hover:text-[#a43700]" href="#">
          API
        </a>
      </div>
    </footer>
  );
}
