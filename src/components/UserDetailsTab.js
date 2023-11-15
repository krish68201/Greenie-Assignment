// UserDetailsTab.js
import React, { useState } from 'react';
import users from '../db';

const UserDetailsTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    // Set the selected user and open the modal
    setSelectedUser(user);
    // Open your modal here
  };

  const handleGenerateReport = () => {
    // Implement logic to generate a report for the selected user
    console.log('Generate report for user:', selectedUser);
    // Close the modal after generating the report
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4 md:p-6 bg-purple-800 text-black rounded-md">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none"
      />

      {/* User table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Username</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleUserClick(user)}
                className="cursor-pointer transition-all hover:bg-gray-100"
              >
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">{user.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for generating a report */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 md:p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Generate Report</h3>
            <p className="text-purple-800">Selected User: {selectedUser.username}</p>
            <button
              onClick={handleGenerateReport}
              className="bg-purple-500 text-white p-2 rounded hover:bg-purple-700 focus:outline-none mt-4"
            >
              Generate Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsTab;
