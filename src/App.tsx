import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:4000/user');
      setUser(response?.data?.name)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      User name is {user}
    </div>
  );
}

export default App;
