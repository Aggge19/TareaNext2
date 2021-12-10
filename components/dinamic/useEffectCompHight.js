import React, { useEffect, useState } from 'react';

export default function useEffectAdvancedPage() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        console.log("aaa");
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, []) // Only at window load, not every render

    return (
        <div className="text-3xl text-gray-400 font-mono">
            {windowHeight}
        </div>
    )
}