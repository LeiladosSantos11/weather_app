import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Form from './Components/Form';
import Footer from './Components/Footer';
import 'reactstrap';


class App extends React.Component {
  render () {
    return(
    <div>
      <Header />
      <Main />
      <Form />
      <Footer />
      </div>
  )
}
}

export default App;