import React from 'react';
import PropTypes from 'prop-types';
import "../../App.css";

const CustomButton = ({ type, size, onClick, children, className }) => {
    const buttonClass = `btn btn-${type} btn-${size} ${className}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

CustomButton.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

CustomButton.defaultProps = {
    type: 'default',
    size: 'large',
    onClick: () => {},
    className: 'button-56',
};

export default CustomButton;