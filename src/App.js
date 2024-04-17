import React from 'react'; // Ensure React is imported
import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index';
import { Provider } from './context'; // Assuming this import is correct and the Provider is exported properly

function App() {
  return (
    <Provider> {/* This should wrap the returned JSX to provide context to all components within */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
