import { Slide } from 'react-toastify';

const toast_style = {
	position: 'top-left',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	transition: Slide,
	theme: 'colored',
};

const toast_pending = {
	position: 'top-left',
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	transition: Slide,
	theme: 'colored',
	autoClose: false,
};


export { toast_style, toast_pending };