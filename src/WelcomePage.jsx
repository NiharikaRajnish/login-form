import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  // Get state from the router location
  const { state } = useLocation();
  
  // State variables for user data, list of users, and loading status
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Set the list of users from the fetched data
        setUsers(data);
        
        // Find the logged-in user based on the email in the state
        const loggedInUser = data.find(user => user.email === state.username);
        setUser(loggedInUser);
        
        // Update loading status
        setLoading(false);
      })
      .catch(error => {
        // Handle errors during data fetching
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, [state.username]);

  // Display loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display message if user is not found
  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="welcome-container">
      {/* Welcome message with the name of the logged-in user */}
      <h1>Welcome {user.name}</h1>
      
      {/* Table displaying user data */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the list of users and display each user's details */}
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WelcomePage;
