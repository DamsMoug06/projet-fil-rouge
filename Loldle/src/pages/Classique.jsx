import React from "react";

export function Classique() {

    return (
        <div className="w-full max-w-4xl bg-lol-blue-medium p-8 rounded-lg border-2 border-lol-gold shadow-xl text-center animate-fade-in">
            <h1 className="text-4xl font-bold text-lol-gold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Mode Classique
            </h1>
            <p className="text-lol-grey mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Devinez le champion en utilisant ses propriétés!
            </p>

            {/* Placeholder for Game Input/Display */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                {/* Input Field */}
                <input
                    type="text"
                    // value={guess}
                    // onChange={(e) => setGuess(e.target.value)}
                    placeholder="Tape le nom d'un champion..."
                    className="w-full p-3 rounded bg-lol-blue-dark border border-lol-border text-lol-gold-light placeholder-lol-grey focus:outline-none focus:border-lol-gold transition duration-200"
                />

                {/* Guess Button */}
                <button
                    className="w-full bg-lol-gold text-lol-blue-dark font-bold py-3 px-6 rounded border-2 border-lol-gold-light 
                               hover:bg-lol-gold-light hover:border-lol-gold hover:text-lol-blue-dark transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                    // onClick={handleGuess} // Add guess handling logic
                >
                    Entrer
                </button>
            </div>

            {/* Placeholder for Guesses Display */}
            <div className="mt-8 border-t border-lol-border pt-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl text-lol-gold mb-4">Vos tentatives</h2>
                <p className="text-lol-grey">Vos essais apparaitront ici</p>
                {/* Map through guesses here */}
            </div>
        </div>
    );
}