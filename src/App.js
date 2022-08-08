import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://gentle-raindrop-9732e4.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Kseniia Vyshniakova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KseniiaVyshniakova/react-weather-app"
            targer="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
