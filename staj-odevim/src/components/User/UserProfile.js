import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const { userId } = useParams();
    return (
      <div>
        <h1>User Profile for ID: {userId}</h1>
      </div>
    );
  }
  
  export default UserProfile;