import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { AboutSection } from './components/AboutSection';
import { PressSection } from './components/PressSection';
import { Footer } from './components/Footer';

export default function PersonalPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <Hero />
        <Sidebar />
        <AboutSection />
        <PressSection />
        <Footer />
      </main>
    </div>
  );
}