import React from 'react';

import { users } from '../../constants/index';

export const UserTable = () => (
  <div className="flex flex-col mt-8">
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden
      sm:rounded-lg border-b border-gray-200">
        <table className="min-w-full bg-gray-50 bg-opacity-80">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-base leading-4
                font-medium text-gray-600 uppercase tracking-wider">
                  Name</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-base leading-4
                  font-medium text-gray-600 uppercase tracking-wider">
                  Title</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-base leading-4
                  font-medium text-gray-600 uppercase tracking-wider">
                  Status</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-base leading-4
                  font-medium text-gray-600 uppercase tracking-wider">
                  Role</th>
              <th className="px-6 py-3 border-b border-gray-200"></th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user) => {
              const {
                userName,
                email,
                employment,
                company,
                avatar,
                activeStatus,
                access,
                id,
              } = user;

              return (
                <tr key={id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        <img className="h-12 w-12 rounded-full"
                          src={avatar}
                          alt="avatar"/>
                      </div>

                      <div className="ml-4">
                          <div className="text-lg leading-5 font-medium text-gray-900">{userName}</div>
                          <div className="text-base leading-5 text-gray-500">{email}</div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-base leading-5 text-gray-900">{employment}</div>
                      <div className="text-base leading-5 text-gray-500">{company}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="px-3 py-1 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100
                      text-green-800">{activeStatus}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200
                    text-base leading-5 text-gray-500">{access}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-base
                    leading-5 font-medium">
                      <a href="#" className="text-indigo-900 hover:text-indigo-600">Edit</a>
                  </td>
                  </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
