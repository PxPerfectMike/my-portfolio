import React from 'react';
import { motion } from 'framer-motion';

const biographyVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

function Biography() {
	const biographyVariants = {
		hidden: { opacity: 0, x: '-100vw' },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				delay: 0.5,
			},
		},
	};

	return (
		<motion.section
			id='biography'
			className='biography'
			variants={biographyVariants}
			initial='hidden'
			animate='visible'
		>
			<h2>About Me</h2>
			<p>
				5 years ago I moved to the Pacific Northwest to pursue my
				passion for web development. Before that, I was a chef in
				Phoenix, AZ. My journey was far from easy. 3 years after my
				move, my wife had medical issues. Despite these challenges, I
				persevered, continuing to learn and build things using
				JavaScript and React. During this time, I read numerous books,
				took online classes, joined clubs, learned one-on-one from
				experts, attended meetups, and did everything I could to hone my
				skills. Until a year ago, I was a delivery driver for Uber Eats.
				This role gave me the flexibility to focus on my coding studies.
				A year ago, I decided to dedicate my time completely to coding
				and learning. And here I am today, ready to take on the tech
				world.
			</p>
			<h3>Contact Information</h3>
			<ul>
				<li>
					LinkedIn:{' '}
					<a
						href='https://www.linkedin.com/in/pxperfectmike'
						target='_blank'
					>
						linkedin.com/in/pxperfectmike
					</a>
				</li>
				<li>
					Github:{' '}
					<a href='https://github.com/PxPerfectMike' target='_blank'>
						github.com/PxPerfectMike
					</a>
				</li>
				<li>Email: pxperfectmike@gmail.com</li>
				<li>Phone: 480-369-0109</li>
			</ul>
			<h3>Profile</h3>
			<p>
				I'm a creative software engineer with experience in open-source
				projects and real-world consulting. I'm passionate about
				problem-solving and fostering a friendly team atmosphere. I'm
				seeking an entry-level software engineer position where I can
				apply my strong communication skills and collaborate on advanced
				solutions.
			</p>
		</motion.section>
	);
}

export default Biography;
