import { data } from '../data/data';

export const Header = () => (
  <header className="bg-white shadow">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100">
          <img src={data.photo} alt={`Portrait of ${data.name}`} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">{data.name}</h1>
          <p className="text-sm text-gray-500">{data.subtitle}</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <a href="#about" className="hover:text-gray-700">About</a>
        <a href="#career" className="hover:text-gray-700">Career</a>
        <a href="#press" className="hover:text-gray-700">Press</a>
        <a href="#contact" className="text-white bg-indigo-600 px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700">{data.heroCta}</a>
      </nav>
    </div>
  </header>
);