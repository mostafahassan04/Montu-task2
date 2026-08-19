import './App.css';
import { AppSidebar } from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Section } from '@/components/Section';
import { ProductGridWidget } from '@/components/ProductGridWidget';
import { SECTIONS_DATA } from '@/data/staticContent';

export default function App() {
  const { home, about, products, contact } = SECTIONS_DATA;

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-slate-100 flex">
        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40">
            <Navbar />
          </header>

          <main className="flex-1 min-w-0">
            <Section {...home} className="text-sky-400" />
            <Section {...about} />

            <Section id={products.id} className={products.bgClass}>
              <ProductGridWidget />
            </Section>

            <Section {...contact} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}