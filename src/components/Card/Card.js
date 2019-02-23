import React, { Component } from 'react';

import './Card.css';

export default class Card extends Component {
    render() {
        const cardStyle = {
            backgroundImage: 'url(' + this.props.backgroundImageUrl + ')'
        }
        return (
            <div className="Card">
                <div className="Card-img" style={cardStyle}></div>
                <div className="Card-tittle"><h3>{this.props.nome}</h3></div>
                <div className="Card-description">
                    <ul>
                        <h4>Ingredientes:</h4>
                        {this.props.ingredientes.map((ingrediente,index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
