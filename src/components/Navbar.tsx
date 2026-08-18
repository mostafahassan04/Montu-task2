import { useState } from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="h-16 bg-slate-900 text-white shadow-lg">
      <div className="h-full px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">

          <div className="flex items-center gap-3">
            <SidebarTrigger className="text-white hover:bg-slate-800" />

            <div className="text-xl font-bold tracking-wider text-sky-400">
              Montu
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium">

            <a
              href="#home"
              className="hover:text-sky-400 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-sky-400 transition-colors"
            >
              About
            </a>

            <a
              href="#services"
              className="hover:text-sky-400 transition-colors"
            >
              Services
            </a>

            <a
              href="#contact"
              className="hover:text-sky-400 transition-colors"
            >
              Contact
            </a>

          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 py-3">

          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-sky-400"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-sky-400"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-sky-400"
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-sky-400"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  )
}