import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <main>

        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-8"
        >
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl font-extrabold text-sky-400 mb-6">Home Section</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section 
          id="about" 
          className="min-h-screen flex items-center justify-center bg-white p-8 border-b border-slate-200"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Us</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section 
          id="services" 
          className="min-h-screen flex items-center justify-center bg-slate-100 p-8 border-b border-slate-200"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Services</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et 
              commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. 
              Integer in mauris eu nibh euismod gravida.
            </p>
          </div>
        </section>

        <section 
          id="contact" 
          className="min-h-screen flex items-center justify-center bg-white p-8"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fusce dui lector, congue vel, tristique vitae, pretium et, tincidunt. Curabitur felis est, 
              sollicitudin a, egestas sed, orci. Modus efficitur tellus, quis imperdiet urna pretium ut.
            </p>
          </div>
        </section>
        
      </main>
    </div>
  )
}

export default App
