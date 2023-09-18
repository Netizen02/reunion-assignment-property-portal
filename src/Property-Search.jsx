import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function PropertySearch() {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    availableDate: '',
    priceRange: [0, 1000],
    propertyType: '',
  });

//   useEffect(() => {
//     // Fetch properties based on filters
//     axios.get('/api/list-properties', { params: filters })
//       .then((response) => {
//         setProperties(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Property Search</h1>
      <div>
        <label>Location</label>
        <select name="location" onChange={handleFilterChange}>
          {/* Populate with city list */}
        </select>
      </div>
      <div>
        <label>Available from date</label>
        <input type="date" name="availableDate" onChange={handleFilterChange} />
      </div>
      <div>
        <label>Price Range</label>
        <input
          type="range"
          name="priceRange"
          min="0"
          max="1000"
          value={filters.priceRange[0]}
          onChange={handleFilterChange}
        />
        <input
          type="range"
          name="priceRange"
          min="0"
          max="1000"
          value={filters.priceRange[1]}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <label>Property Type</label>
        <select name="propertyType" onChange={handleFilterChange}>
          {/* Populate with property types */}
        </select>
      </div>
      <div>
        {/* Render the list of properties */}
        {properties.map((property) => (
          <div key={property.id}>
            <h3>{property.name}</h3>
            {/* Display property details */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertySearch;
