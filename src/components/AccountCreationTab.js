// AccountCreationTab.js
import React, { useState } from 'react';

const AccountCreationTab = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);

    // Clear form fields after submission
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="p-6 bg-purple-800 text-white rounded-md">
      <h2 className="text-2xl font-bold mb-4">Account Creation</h2>
      <form onSubmit={handleFormSubmit} className="max-w-md">
        {/* Username field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-white text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="p-2 border border-white rounded w-full focus:outline-none focus:border-purple-300"
          />
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="p-2 border border-white rounded w-full focus:outline-none focus:border-purple-300"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-white text-purple-800 p-2 rounded hover:bg-purple-100 focus:outline-none"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AccountCreationTab;
