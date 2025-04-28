// src/Layout.jsx
import React from 'react';
// highlight-next-line
import { Header, Footer } from '../../components'; // Importer Header et Footer

export function Layout({ children }) {
    return (
        <div className="min-h-screen bg-lol-blue-dark text-lol-gold-light flex flex-col">
            <Header />
            {/* La classe pt-20 peut être nécessaire si le header est sticky et a une hauteur fixe */}
            {/* Ajustez la valeur (pt-20) en fonction de la hauteur réelle de votre header */}
            <main className="flex-grow flex flex-col items-center justify-center p-4 pt-20"> {/* Ajout de pt-20 pour l'offset du header sticky */}
                {children} {/* Le contenu spécifique de la page sera rendu ici */}
            </main>
            <Footer /> {/* Ajouter le Footer ici */}
        </div>
        // highlight-end
    );
}
