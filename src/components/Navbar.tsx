import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-bold tracking-wider text-sky-400">
            Montu
          </div>

          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2 border-t border-slate-700">
          <a href="#home" className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-sky-400">Home</a>
          <a href="#about" className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-sky-400">About</a>
          <a href="#services" className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-sky-400">Services</a>
          <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-sky-400">Contact</a>
        </div>
      )}
    </nav>
  );
}