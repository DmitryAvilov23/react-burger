import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';

import { API_URL } from '../../utils/api';

class App extends React.Component {
  state = {
    data: [],
  }

  componentDidMount = async () => {
    await this.getIngredients();
  }

  getIngredients = async () => {
    const url = API_URL;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const { data } = await response.json();
        this.setState({ ...this.state, data });
      } else {
        this.setState({ ...this.state, data: []  });
        console.error('error response', response.status);
      }

    } catch (e) {
      console.error('ERROR', e);
      this.setState({ ...this.state, data: []  });
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <>
        <Header />
        <Main productsData={this.state.data}/>
      </>
    );
  }
}

export default App;
