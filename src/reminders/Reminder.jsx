import React, { useState } from 'react';

const ReminderPage = () => {
  const [reminders, setReminders] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [reminderText, setReminderText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleUserSelect = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleReminderTextChange = (e) => {
    setReminderText(e.target.value);
  };

  const handleSendReminder = () => {
    // Mock API call to send reminders
    const newReminder = {
      id: Date.now(),
      users: selectedUsers,
      text: reminderText,
      timestamp: new Date().toLocaleString(),
    };

    setReminders((prevReminders) => [newReminder, ...prevReminders]);
    setSelectedUsers([]);
    setReminderText('');
  };

  const handleSelectAll = () => {
    const allUserIds = [1, 2, 3, 4, 5, 6, 7, 8];
    setSelectedUsers(allUserIds);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].filter((userId) =>
    userId.toString().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8 p-4 flex flex-col h-[85vh]">
      <h1 className="text-2xl font-bold mb-4">Reminder Sending Page</h1>
      <div className='flex flex-row h-full gap-4'>

        {/* Form Panel */}
        <div className="form-panel bg-gray-200 p-4 rounded flex-1 h-full">
          <h2 className="text-lg font-semibold mb-2">Send Reminder</h2>
          <textarea
            value={reminderText}
            onChange={handleReminderTextChange}
            placeholder="Enter reminder text..."
            className="w-full border p-2 mb-2"
          ></textarea>
          <div className="user-list">
            <h3 className="text-sm font-semibold mb-2 flex items-center">
              Select Users:
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border p-2 ml-2"
              />
            </h3>
            <label className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={selectedUsers.length === filteredUsers.length}
                onChange={handleSelectAll}
                className="mr-1"
              />
              Select All
            </label>
            <div className="user-list-scrollable flex-1 max-h-40 overflow-y-auto">
              {filteredUsers.map((userId) => (
                <label key={userId} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(userId)}
                    onChange={() => handleUserSelect(userId)}
                    className="mr-1"
                  />
                  User {userId}
                </label>
              ))}
            </div>
          </div>
          <button onClick={handleSendReminder} className="bg-blue-500 text-white px-4 py-2 mt-2">
            Send Reminder
          </button>
        </div>

        {/* Previous Reminders */}
        <div className="reminder-list  bg-gray-200 p-4 rounded flex-1 h-full" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <h2 className="text-lg font-semibold mb-2">Previous Reminders</h2>
          <ul>
            {reminders.map((reminder) => (
              <li key={reminder.id} className="border rounded p-2 mb-2">
                <strong className="text-blue-500">{reminder.timestamp}</strong>
                <p className="mt-1">{reminder.text}</p>
                <p className="text-sm mt-1">Users: {reminder.users.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReminderPage;
