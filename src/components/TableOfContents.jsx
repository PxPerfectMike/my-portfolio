import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const listVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0 },
};

const TableOfContents = () => {
	return (
		<motion.div
			className='table-of-contents'
			variants={listVariants}
			initial='hidden'
			animate='visible'
		>
			<h2>Table of Contents</h2>
			<motion.ul>
				<motion.li variants={itemVariants}>
					<Link to='biography' smooth={true} duration={500}>
						Biography
					</Link>
				</motion.li>
				<motion.li variants={itemVariants}>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</motion.li>
				<motion.li variants={itemVariants}>
					<Link to='experience' smooth={true} duration={500}>
						Experience
					</Link>
				</motion.li>
				<motion.li variants={itemVariants}>
					<Link to='projects' smooth={true} duration={500}>
						Projects
					</Link>
				</motion.li>
				<motion.li variants={itemVariants}>
					<Link to='education' smooth={true} duration={500}>
						Education
					</Link>
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};

export default TableOfContents;
