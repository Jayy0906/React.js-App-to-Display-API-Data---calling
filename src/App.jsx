import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((response) => setBreeds(response.data))
      .catch((error) => setError("Failed to fetch data. Please try again."));
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#fdf6e3",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <header className="text-center my-4">
        <h1 className="text-primary" style={{ color: "#ff7f50" }}>
          Cat Breeds
        </h1>
      </header>
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="row">
        {breeds.map((breed) => (
          <div key={breed.id} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-lg"
              style={{ borderRadius: "15px", backgroundColor: "#fffaf0" }}
            >
              {breed.image && (
                <img
                  src={breed.image.url}
                  className="card-img-top"
                  alt={breed.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#d2691e" }}>
                  {breed.name}
                </h5>
                <p className="card-text">
                  <strong>Origin:</strong> {breed.origin}
                </p>
                <p className="card-text">
                  <strong>Temperament:</strong> {breed.temperament}
                </p>
                <p className="card-text">
                  <strong>Weight:</strong> {breed.weight.metric} kg
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="text-center my-4">
        <p style={{ color: "#8b4513" }}>&copy; 2025 Cat Breeds Info</p>
      </footer>
    </div>
  );
};

export default App;
