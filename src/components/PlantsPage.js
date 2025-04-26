import React, { useState } from 'react';
import './PlantsPage.css';

// Sample plant data - in a real app, this would come from an API
const samplePlants = [
  {
    id: 1,
    name: 'Basil',
    image: 'https://images.unsplash.com/photo-1629157247277-48f870757026?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzaWx8ZW58MHx8MHx8fDA%3D',
    description: 'A popular culinary herb with a sweet, slightly peppery flavor.',
    fullInfo: 'Basil is a tender herb that grows best in warm weather...'
  },
  {
    id: 2,
    name: 'Mint',
    image: 'https://images.unsplash.com/photo-1618130070080-91f4d55a2383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWludHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'A refreshing herb known for its cooling properties.',
    fullInfo: 'Mint is a fast-growing herb that can be invasive...'
  },
  
  // Add more plants as needed
];

const PlantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState(null);

  const filteredPlants = samplePlants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="plants-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {selectedPlant ? (
        <div className="plant-detail">
          <button onClick={() => setSelectedPlant(null)} className="back-btn">
            Back to Plants
          </button>
          <h2>{selectedPlant.name}</h2>
          <img src={selectedPlant.image} alt={selectedPlant.name} />
          <p>{selectedPlant.fullInfo}</p>
        </div>
      ) : (
        <div className="plants-grid">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <button
                onClick={() => setSelectedPlant(plant)}
                className="learn-more-btn"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantsPage; 