import { SidebarTrigger } from "@/components/ui/sidebar";
import { APP_CONFIG, NAV_ITEMS } from "@/data/staticContent";
import { ShoppingBag } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { selectCartTotalCount } from "@/store/CartSlice";

export default function Navbar() {
  const cartCount = useAppSelector(selectCartTotalCount);
  return (
    <nav className="bg-slate-900 text-white shadow-lg flex items-center justify-between px-4 h-16 border-b border-slate-800">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-slate-300 hover:text-white hover:bg-slate-800" />
        <span className="text-xl font-bold tracking-wider text-sky-400">
          {APP_CONFIG.brandName}
        </span>
      </div>

      <div className="flex items-center gap-6">
      <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={item.href} className="hover:text-sky-400 transition">
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="relative flex items-center bg-slate-800 p-2 rounded-lg border border-slate-700">
          <ShoppingBag className="w-5 h-5 text-sky-400" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-sky-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        </div>
    </nav>
  );
}