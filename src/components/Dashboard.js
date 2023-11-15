// Dashboard.js
import React, { useState } from 'react';
import UserDetailsTab from './UserDetailsTab';
import AccountCreationTab from './AccountCreationTab';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  return (
    <div className="bg-purple-800 text-white min-h-screen">
      
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => setActiveTab('userDetails')}
            className={`${
              activeTab === 'userDetails' ? 'bg-purple-500' : 'bg-purple-300'
            } px-4 py-2 rounded-full focus:outline-none transition duration-300 hover:bg-purple-600 mb-4 md:mb-0`}
          >
            User Details
          </button>
          <button
            onClick={() => setActiveTab('accountCreation')}
            className={`${
              activeTab === 'accountCreation' ? 'bg-purple-500' : 'bg-purple-300'
            } px-4 py-2 rounded-full focus:outline-none transition duration-300 hover:bg-purple-600`}
          >
            Account Creation
          </button>
        </div>
        <div className="mt-8">
          {activeTab === 'userDetails' ? <UserDetailsTab /> : <AccountCreationTab />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
