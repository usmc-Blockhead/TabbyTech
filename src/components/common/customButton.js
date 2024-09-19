import React, { useState } from 'react';
import "../../App.css";

const CustomButton = ({ onPress, title }) => {
    const [isFocused, setIsFocused] = useState(false);

    // Accessibility helper if needed, otherwise you can omit this
    // useAccessibilityHelper(setIsFocused);

    return (
        <button
            onClick={onPress}
            className="button-56"
            aria-pressed={isFocused}
            aria-label={`Tap me to go to the ${title} Page`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            {title}
        </button>
    );
};

export default CustomButton;