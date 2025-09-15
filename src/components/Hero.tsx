import { data } from '../data/data';

export const Hero = () => (
  <section className="lg:col-span-2 flex flex-col justify-center">
    <div className="flex flex-col gap-6">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">{data.name}</h2>
      <p className="text-xl text-gray-700 max-w-3xl">{data.bioShort}</p>
      <div className="flex gap-4 items-center">
        <a href={`mailto:${data.contactEmail}`} className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">
          {data.heroCta}
        </a>
        <div className="flex gap-3">
          {data.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border rounded-md hover:bg-gray-100">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.highlights.map((h) => (
          <div key={h.title} className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">{h.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);