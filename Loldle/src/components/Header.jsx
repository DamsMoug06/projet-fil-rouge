import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-title">
                    ULTRADLE
                </Link>
                <nav className="header-nav">
                    <Link to="/">Accueil</Link>
                    <Link to="/classique">Classique</Link>
                </nav>
            </div>
        </header>
    );
}
