import React, { Component } from 'react';

import './Abas.css';

export default class Abas extends Component {
    render() {
        return (
            <div className="Abas">
                <nav>
                    <a href="/">Home</a>
                    <a href="/favoritos">Favoritos</a>
                    <a href="/perfil">Perfil</a>
                </nav>
            </div>
        );
    }
}
