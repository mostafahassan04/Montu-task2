import { SidebarTrigger } from "@/components/ui/sidebar";
import { APP_CONFIG, NAV_ITEMS } from "@/data/staticContent";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg flex items-center justify-between px-4 h-16 border-b border-slate-800">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-slate-300 hover:text-white hover:bg-slate-800" />
        <span className="text-xl font-bold tracking-wider text-sky-400">
          {APP_CONFIG.brandName}
        </span>
      </div>

      <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={item.href} className="hover:text-sky-400 transition">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}