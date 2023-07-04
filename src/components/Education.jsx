import React from 'react';
import { motion } from 'framer-motion';

const educationVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

function Education() {
	const educationVariants = {
		hidden: { opacity: 0, x: '-100vw' },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				delay: 2.5,
			},
		},
	};

	return (
		<motion.section
			id='education'
			className='education section'
			variants={educationVariants}
			initial='hidden'
			animate='visible'
		>
			<h2>Education</h2>
			<div>
				<h3>
					High School Diploma – Hamilton High School – Chandler, AZ
				</h3>
				<p>Graduated: 2003</p>

				<h3>CodeCademy: Full Stack Developer Course</h3>

				<h3>FreeCodeCamp: Front End Developer Course</h3>
			</div>
		</motion.section>
	);
}

export default Education;
