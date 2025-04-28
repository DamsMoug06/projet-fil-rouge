import React from 'react';

export function Footer() {
    return (
        <footer className="w-full bg-lol-blue-medium py-4 px-8 border-t border-lol-border mt-auto">
            <div className="max-w-6xl mx-auto text-center text-lol-grey text-sm">
                <p>&copy; {new Date().getFullYear()} Ultradle. Fait par des étudiants pour des passionés de League of Legends.</p>
                {/* Removed empty {} */}
            </div>
        </footer>
    );
}