import React from 'react';
import { useParams } from 'react-router-dom';
// import '../styles/Property.css'; // Ensure path is correct

const dummyData = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  title: `Property ${index + 1}`,
  description: `This is a description for Property ${index + 1}. It has modern amenities and is located in a prime area.`,
  price: `₦${(index + 1) * 10000}`,
  location: `Location ${index + 1}`,
  bedrooms: (index % 5) + 1,
  bathrooms: (index % 3) + 1,
  imageUrl: `https://via.placeholder.com/600x400?text=Property+${index + 1}`
}));

const Property: React.FC = () => {
  // Use useParams to get the property ID from the URL
  const { id } = useParams<{ id: string }>();
  const propertyId = parseInt(id || '1', 10);

  // Find the property based on the ID
  const property = dummyData.find(p => p.id === propertyId) || dummyData[0];

  return (
    <div className="property-page">
      <header>
        <h1>{property.title}</h1>
      </header>
      <section className="property-details">
        <img src={property.imageUrl} alt={property.title} />
        <div className="property-info">
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Price:</strong> {property.price}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
          <p>{property.description}</p>
        </div>
      </section>
    </div>
  );
};

export default Property;
