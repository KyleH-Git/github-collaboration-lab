import { useState } from 'react';

const Form = (props) => {
  const [query, setQuery] = useState('');
    
  const handleSubmit = (event) => {
    event.preventDefault();
    setCity('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Enter your query:</label>
        <input
          id="query"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
    </section>
  );
};

export default WeatherSearch;
