import { memo } from 'react';
import { data } from '../data/data';

export const Sidebar = memo(() => (
  <aside className="hidden lg:block">
    <div className="sticky top-20 p-6 bg-white rounded-lg shadow-sm">
      <img src={data.photo} alt={`Portrait of ${data.name}`} loading="lazy" className="w-full h-64 object-cover rounded-md mb-4" />
      <div className="space-y-3">
        <div>
          <h5 className="text-sm text-gray-500">Location</h5>
          <p className="font-medium">{data.location}</p>
        </div>
        <div>
          <h5 className="text-sm text-gray-500">Achievements</h5>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {data.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-sm text-gray-500">Quick contact</h5>
          <a href={`mailto:${data.contactEmail}`} className="block font-medium">{data.contactEmail}</a>
        </div>
      </div>
    </div>
  </aside>
));