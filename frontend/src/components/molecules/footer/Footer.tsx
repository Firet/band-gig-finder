import React from 'react';
import './footer.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="flex flex-col space-evenly items-center footer">
			{currentYear}
		</footer>
	);
}