import { data } from '../data/data';

export const Footer = () => (
  <footer id="contact" className="lg:col-span-3 mt-8 text-center">
    <div className="p-6 bg-white rounded-lg shadow-sm max-w-4xl mx-auto">
      <h4 className="text-lg font-semibold">Get in touch</h4>
      <p className="text-sm text-gray-600 mt-2">For speaking requests, press, or acquisition inquiries:</p>
      <a href={`mailto:${data.contactEmail}`} className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md">{data.contactEmail}</a>
      <p className="text-xs text-gray-400 mt-3">© {new Date().getFullYear()} {data.name} — All rights reserved</p>
    </div>
  </footer>
);