import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, size, onClick, children, className }) => {
    const buttonClass = `btn btn-${type} btn-${size} ${className}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Button.defaultProps = {
    type: 'default',
    size: 'large',
    onClick: () => {},
    className: '',
};

export default Button;