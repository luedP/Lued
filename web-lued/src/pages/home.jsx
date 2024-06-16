import React, { useContext } from 'react';
import { SearchContext } from '../components/context/SearchContext';


const Home= () => {
  const { searchTerm } = useContext(SearchContext);
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  const filteredNames = names.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div>
       
          <h1>Home Page</h1>
          <ul>
              {filteredNames.map((name, index) => (
                  <li key={index}>{name}</li>
              ))}
          </ul>
      </div>
  );
};

export default Home;




