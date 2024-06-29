import { useState, useLayoutEffect } from 'react';

export const LayoutLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        // Simula una carga de datos
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Ajusta el tiempo según sea necesario

        // Limpia el temporizador si el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="spinner">
                    Loading...
                </div>
            ) : (
                <div className="content">
                    <h1>Content Loaded</h1>
                    <p>This is the main content of the page.</p>
                </div>
            )}
        </div>
    );
};

