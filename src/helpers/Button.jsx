import React from 'react';
import { SpinnerCircularFixed } from 'spinners-react';


import duck from '../assets/img/duck.svg';

function Button({ onClick, img, label, isLoading, loadingLabel, textColor = '#ffffff', className, easter }) {
    
    function handleOnClick() {
        console.log('Button clicked');
        if (onClick) onClick();
    }

    const shouldShowDuck = Math.random() < 0.01;

    return <button className={className} onClick={handleOnClick}>
        {
            isLoading ? (
                easter || shouldShowDuck ? (
                    <>
                        <img className='check svg_white bounce' src={duck} alt="Duck" />
                        {loadingLabel && <span>{loadingLabel}</span>}
                    </>
                ) : (
                    <>
                        <SpinnerCircularFixed color={textColor} secondaryColor='transparent' size={20} speed={100} thickness={200} />
                        {loadingLabel && <span>{loadingLabel}</span>}
                    </>
                )
            ) : (
                <>
                    {img && <img className='check svg_white' src={img} alt="" />}
                    {label && <span>{label}</span>}
                </>
            )
        }
    </button>;
}

export default Button;