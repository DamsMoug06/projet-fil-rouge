import React from "react";
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-2xl bg-lol-blue-medium p-8 rounded-lg border-2 border-lol-gold shadow-xl text-center animate-fade-in relative overflow-hidden">
             {/* Optional: Decorative elements */}
             <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-lol-gold opacity-50"></div>
             <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-lol-gold opacity-50"></div>

            <h1 className="text-5xl font-bold text-lol-gold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                LOLDLE
            </h1>
            <p className="text-lol-grey mb-8 text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Connaissez-vous bien League of Legends ? {/* Changed from "How well do you know League of Legends?" */}
            </p>

            <div className="space-y-5">
                {/* Enhanced Button Style */}
                <button
                    className="w-full bg-lol-gold text-lol-blue-dark font-bold py-3 px-6 rounded border-2 border-lol-gold-light 
                               hover:bg-lol-gold-light hover:border-lol-gold hover:text-lol-blue-dark transition duration-300 ease-in-out transform hover:scale-105 animate-slide-up shadow-md"
                    style={{ animationDelay: '0.3s' }}
                    onClick={() => navigate('/classique')}
                >
                    Mode Classique {/* Changed from Classic Mode */}
                </button>

                {/* Enhanced Placeholder Button Style */}
                <button
                    className="w-full bg-transparent text-lol-gold font-semibold py-3 px-6 rounded border-2 border-lol-gold 
                               hover:bg-lol-gold hover:text-lol-blue-dark transition duration-300 ease-in-out transform hover:scale-105 animate-slide-up opacity-70 cursor-not-allowed"
                    style={{ animationDelay: '0.4s' }}
                    disabled // Disable coming soon buttons
                >
                    Devinez la Compétence (Bientôt™) {/* Changed from Guess the Ability (Soon™) */}
                </button>

                 <button
                    className="w-full bg-transparent text-lol-gold font-semibold py-3 px-6 rounded border-2 border-lol-gold 
                               hover:bg-lol-gold hover:text-lol-blue-dark transition duration-300 ease-in-out transform hover:scale-105 animate-slide-up opacity-70 cursor-not-allowed"
                    style={{ animationDelay: '0.5s' }}
                    disabled // Disable coming soon buttons
                 >
                    Devinez le Splash Art (Bientôt™) {/* Changed from Guess the Splash Art (Soon™) */}
                </button>
            </div>
        </div>
    );
}