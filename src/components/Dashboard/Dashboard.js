
import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Navigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    email: user?.email || ''
  });

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the profile in backend
    alert('Profile updated successfully!');
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="profile-section">
        <img src={user.profileImage || 'https://via.placeholder.com/150'} alt="Profile" className="profile-image" />
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({...profile, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Bio:</label>
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
            />
          </div>
          <button type="submit" className="save-button">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
