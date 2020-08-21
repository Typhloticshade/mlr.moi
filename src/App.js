import React from 'react';
import './styles.css';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Container from './components/container.js'

function App() {
  return (
    <div className="App">
    <Header />
    <Container />
    <Footer />
    </div>
  );
}

export default App;
