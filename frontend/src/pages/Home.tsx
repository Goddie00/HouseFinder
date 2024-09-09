import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css'; // Make sure the path is correct

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="overlay">
          <h2>Find Your Perfect Home</h2>
          <a href="/search" className="start-search-button">Start Searching</a>
        </div>
      </section>
      <section className="welcome">
        <h2>Welcome to HouseFinder</h2>
        <p>Our platform helps you find and book houses with ease. Whether you are looking for a new home in your city or in a different country, HouseFinder has got you covered.</p>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>
            <h3>Detect Location</h3>
            <p>Our system detects your location automatically to provide relevant options.</p>
          </li>
          <li>
            <h3>Choose Your Booking Preference</h3>
            <p>Select whether you want to book a house locally or abroad.</p>
          </li>
          <li>
            <h3>Filter and Search</h3>
            <p>Filter houses by state, city, and specific locations to find your ideal match.</p>
          </li>
          <li>
            <h3>Book Your House</h3>
            <p>Once you find the perfect house, proceed with the booking directly on our platform.</p>
          </li>
        </ol>
      </section>
      <section className="what-users-say">
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>"HouseFinder made finding my new home a breeze! Highly recommend it!"</p>
          <footer>- Jane Doe</footer>
        </blockquote>
        <blockquote>
          <p>"The search filters are so detailed. I found exactly what I was looking for in no time."</p>
          <footer>- John Smith</footer>
        </blockquote>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Easy Booking</h3>
          <p>Book your favorite property with just a few clicks.</p>
        </div>
        <div className="feature">
          <h3>Verified Listings</h3>
          <p>All listings are verified for your safety and peace of mind.</p>
        </div>
        <div className="feature">
          <h3>Advanced Filters</h3>
          <p>Find exactly what you’re looking for with our powerful search filters.</p>
        </div>
      </section>
      <section className="popular-locations">
        <h2>Popular Locations</h2>
        <div className="location-grid">
          <div className="location">
            <img src="assets/location1.jpg" alt="Location 1" />
            <h4>Lagos</h4>
          </div>
          <div className="location">
            <img src="assets/location2.jpg" alt="Location 2" />
            <h4>Abuja</h4>
          </div>
          <div className="location">
            <img src="assets/location3.jpg" alt="Location 3" />
            <h4>Port Harcourt</h4>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;