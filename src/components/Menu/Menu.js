import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Menu.css';

import jaacai from '../../jaacai.svg'

export default class Menu extends Component {
    render() {
        return (
            <header className="Menu">
                <nav>
                    <a href="/"><img alt="" src={jaacai} className="Logo"></img></a>
                    <a href="/bag"><FontAwesomeIcon color="black" size="2x" icon={faShoppingBag} /></a>
                </nav>
            </header>
        );
    }
}
