import React from 'react';
import { motion } from 'framer-motion';

const skillsVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

function Skills() {
	const skillsVariants = {
		hidden: { opacity: 0, x: '-100vw' },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				delay: 1,
			},
		},
	};

	return (
		<motion.section
			id='skills'
			className='skills'
			variants={skillsVariants}
			initial='hidden'
			animate='visible'
		>
			<h2>Skills</h2>
			<div>
				<h3>Languages</h3>
				<p>JavaScript, TypeScript, CSS, HTML</p>

				<h3>Frameworks and Technologies</h3>
				<p>
					React, Node, Bash, Docker, Git, CI/CD, Firebase,
					Material-UI, Webpack, Socket.io, Framer-Motion
				</p>

				<h3>Soft Skills</h3>
				<p>
					Communication, detail orientation, problem solving, time
					management, adaptability, training, and mentorship
				</p>
			</div>
		</motion.section>
	);
}

export default Skills;
