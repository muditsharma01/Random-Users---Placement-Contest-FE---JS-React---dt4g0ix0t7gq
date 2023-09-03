import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=10");
        const data = response.data.results;
        // Simulate a 3-second delay before setting loading to false
        setTimeout(() => {
          setItems(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return <Users isLoading={isLoading} items={items} />;
};

export default App;
