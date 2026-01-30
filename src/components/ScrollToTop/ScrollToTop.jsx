import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    // Scroll the window to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroll-to-top visible">
            <button onClick={scrollToTop} aria-label="Scroll to top">
                <span className="arrow-up">↑</span>
            </button>
        </div>
    );
};

export default ScrollToTop;
