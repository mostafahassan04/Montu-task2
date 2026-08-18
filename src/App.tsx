import './App.css'
import { AppSidebar } from '@/components/AppSidebar'
import Navbar from '@/components/Navbar'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function App() {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-slate-100 flex">

        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">

          <header className="sticky top-0 z-40">
            <Navbar />
          </header>

          <main className="flex-1 min-w-0">

            <section
              id="home"
              className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-8"
            >
              <div className="max-w-3xl text-center">
                <h1 className="text-5xl font-extrabold text-sky-400 mb-6">
                  Home Section
                </h1>

                <p className="text-lg text-slate-300 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </section>

            <section
              id="about"
              className="min-h-screen flex items-center justify-center bg-white p-8 border-b border-slate-200"
            >
              <div className="max-w-3xl text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  About Us
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </section>

            <section
              id="services"
              className="min-h-screen flex items-center justify-center bg-slate-100 p-8 border-b border-slate-200"
            >
              <div className="max-w-3xl text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Our Services
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Curabitur pretium tincidunt lacus.
                </p>
              </div>
            </section>

            <section
              id="contact"
              className="min-h-screen flex items-center justify-center bg-white p-8"
            >
              <div className="max-w-3xl text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Contact
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Fusce dui lector, congue vel, tristique vitae.
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}