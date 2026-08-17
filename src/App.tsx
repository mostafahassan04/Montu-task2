import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <main className="text-center mx-auto p-8 text-slate-800">
        <h1 className="text-3xl font-bold">Custom Layout Active</h1>
        <p className="mt-2 text-slate-600">Resize your browser window to test the mobile toggle.</p>
      </main>
    </div>
  )
}

export default App
