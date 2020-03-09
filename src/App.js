import React from 'react';
import './App.css';
import Heading from './Components/Heading';
import Footer from './Components/Footer';


class App extends React.Component {
  render () {
    return(
    <div>
      <h1>Hello</h1>
      <Heading />
      <Footer />
      </div>
  )
}
}

export default App;