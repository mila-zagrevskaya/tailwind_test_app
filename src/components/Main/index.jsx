import React from 'react';

import { UserTable } from './UserTable.jsx';
import { gridTiles } from '../../constants/index';

export const Main = () => (
  <main className="flex-1 overflow-x-hidden overflow-y-auto">
    <div className="main-overlay h-screen w-screen absolute top-0 left-0 bg-no-repeat bg-cover"></div>
    <div className="container mx-auto px-6 py-8">
      <h3 className="text-gray-100 text-3xl font-medium">Dashboard</h3>
      <div className="block-groupe grid grid-cols-3 gap-4 mb-10 pt-3">
        {gridTiles.map((tile) => {
          const {
            title, count, icon, id,
          } = tile;
          return (
            <div key={id} className="rounded-md flex justify-start text-center text-gray-800
            bg-opacity-40 bg-blue-100 py-5 px-5">
              <div className="border rounded-full border-blue-800
              p-7 flex items-center justify-center">
                <span className={icon} aria-hidden="true"></span>
              </div>
              <div className="w-3/5 flex flex-col items-center justify-center ml-5">
                <p className="text-2xl">{count}</p>
                <p className="text-3xl">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <UserTable/>
    </div>
  </main>
);
