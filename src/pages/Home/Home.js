import React, { Component } from 'react';
import api from '../../services/api';

import Card from '../../components/Card/Card'

import './Home.css';

export default class pages extends Component {
  state = {
    sabores: [],
  };

  async componentDidMount() {
    const response = await api.get('sabores.json');

    this.setState({ sabores: response.data });
  }
  render() {
    return (
      <div className="Home">
        {this.state.sabores.map(sabor => (
          <Card key={sabor.id} backgroundImageUrl={sabor.src} nome={sabor.nome} ingredientes={sabor.ingredientes} />
        ))}
      </div>
    );
  }
}
