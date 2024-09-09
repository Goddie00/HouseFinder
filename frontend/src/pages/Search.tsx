import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Search.css'; // Ensure path is correct

// Define the type for a search result
interface SearchResult {
  id: number;
  title: string;
  price: string;
  location: string;
}

// Country code to name mapping
const countryCodeToName: { [key: string]: string } = {
  'NG': 'Nigeria',
  'US': 'United States',
  'GB': 'United Kingdom',
  // Add other country codes and names as needed
};

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    location: ''
  });
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    // Fetch the user's location
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipinfo.io?token=827d80b52e6b66');
        const data = await response.json();
        const countryName = countryCodeToName[data.country] || data.country;
        setCountry(countryName);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  const handleSearch = () => {
    // Implement search logic here
    // For now, let's just log the query and filters
    console.log('Searching for:', query, 'with filters:', filters, 'in country:', country);
    
    // Example of setting search results (replace with actual search logic)
    setResults([
      // Example result
      { id: 1, title: 'Beautiful House in Lagos', price: '₦50,000', location: 'Lagos' }
    ]);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="search-page">
      <header>
        <h1>Search for Houses</h1>
        <p>Your current location is {country}</p>
      </header>
      <section className="search-form">
        <input
          type="text"
          placeholder="Search for a house..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <div className="filters">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            value={filters.bedrooms}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleFilterChange}
          />
        </div>
      </section>
      <section className="search-results">
        <h2>Search Results</h2>
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <Link to={`/property/${result.id}`}>
                <h3>{result.title}</h3>
                <p>Price: {result.price}</p>
                <p>Location: {result.location}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Search;
