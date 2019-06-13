import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Header from './components/Header';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Main />
      </div>
    )
  }

}

export default App;



