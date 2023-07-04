// CoverPage.js
import React from 'react';
import { motion } from 'framer-motion';

const coverPageVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 },
};

const buttonVariants = {
	hover: { scale: 1.1 },
};

const CoverPage = ({ start }) => {
	return (
		<motion.div
			variants={coverPageVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='cover-page section'
		>
			<h1 className='cover-title'>Michael Baker</h1>
			<p className='cover-tagline'>From Chef to Software Engineer</p>
			<motion.button
				variants={buttonVariants}
				whileHover='hover'
				onClick={start}
				className='cover-button'
			>
				Start
			</motion.button>
		</motion.div>
	);
};

export default CoverPage;
