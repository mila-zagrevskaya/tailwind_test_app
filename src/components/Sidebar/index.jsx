import React from 'react';

import { navigations } from '../../constants/index';
import logo from '../../assets/images/logo.png';

export const Sidebar = () => (
  <aside className="h-full fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-800
  overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
    <div className="logo h-11 mt-8">
      <a href="/" className="flex w-full px-10 py-2 items-center max-w-xs text-white text-2xl mx-2 font-semibold">
        <img src={logo} alt="logo" className="logo-mini-text w-9 pr-3" />Dashboard
      </a>
    </div>
    <nav className="sidebar-wrapper flex items-center justify-center mt-8">
      <ul className="navigation-list mt-5">
        <li className="nav-item">
          <a className="flex items-center mt-4 py-3 px-6 text-lg
            bg-gray-500 bg-opacity-25 text-gray-100" href="/">
            <span className="review-icon" aria-hidden="true"></span>
            <span className="mx-3">Manage users</span>
          </a>
        </li>
        {navigations.map((navItem) => {
          const {
            id, title, path, icon,
          } = navItem;
          return (
          <li className="nav-item" key={id}>
            <a className="flex items-center mt-4 py-2 px-6 text-lg text-gray-100
              hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-100" href={path}>
              <span className={icon} aria-hidden="true"></span>
              <span className="mx-3">{title}</span>
            </a>
          </li>
          );
        })}
      </ul>
    </nav>
  </aside>
);
