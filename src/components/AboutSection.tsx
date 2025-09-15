import { data } from '../data/data';

export const AboutSection = () => (
  <section id="about" className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-2xl font-semibold mb-4">About</h3>
    <p className="text-gray-700 leading-relaxed">
      {data.name} (born 1979, Luanda) is an Angolan executive with a background in international relations and political science. He has trained at top business schools and has held leadership roles across logistics and energy companies in Africa.
    </p>
    <div id="career" className="mt-6">
      <h4 className="text-xl font-semibold mb-3">Career highlights</h4>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>Director at Transfuel (Pumangol group) — operational leadership</li>
        <li>General Manager — Puma Energy Mozambique (2016–2020)</li>
        <li>CEO & Board Member — Grupo Pumangol (2020–present)</li>
      </ol>
    </div>
  </section>
);