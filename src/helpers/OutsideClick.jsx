import React, { useRef, useEffect } from 'react';

function OutsideClickHandler({ children, onOutsideClick, disabled, ...props }) {
	if (disabled) {
		return children;
	}
	const wrapperRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				onOutsideClick();
			} 
		}

		document.addEventListener('mouseup', handleClickOutside);
		return () => {
			document.removeEventListener('mouseup', handleClickOutside);
		};
	}, [onOutsideClick]);

	return <div ref={wrapperRef} {...props}>{children}</div>;
}

export default OutsideClickHandler;