import React from 'react';
import { motion } from 'framer-motion';

const projectsVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

function Projects() {
	const projectsVariants = {
		hidden: { opacity: 0, x: '-100vw' },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				delay: 2,
			},
		},
	};

	return (
		<motion.section
			id='projects'
			className='projects section'
			variants={projectsVariants}
			initial='hidden'
			animate='visible'
		>
			<h2>Projects</h2>
			<div>
				<h3>Lettler.com (Website) | February 2023</h3>
				<ul>
					<li>
						A digital vault for storing and retrieving text data,
						providing an anonymous secure storage solution.
					</li>
					<li>
						Built with React, Firebase, Framer-Motion, and custom
						CSS animations for a stylish look and optimal
						performance.
					</li>
				</ul>

				<h3>
					Best HTML Snippets (VSCode Extension) | January 2022 –
					February 2022
				</h3>
				<ul>
					<li>
						Extends default HTML snippets for more complete and
						efficient syntax to aid productivity.
					</li>
					<li>
						Optimized for beginners, offering comprehensive
						scaffolding for forms and tables to enhance efficiency
						and reduce complexity.
					</li>
				</ul>

				<h3>ScootLoops (NPM Package) | January 2023</h3>
				<ul>
					<li>
						An open-source package offering accessible functions for
						loops and filters to streamline syntax and enhance code
						readability.
					</li>
					<li>
						300 downloads since release in January 2023,
						demonstrating a solution that effectively addresses user
						needs and garners consistent interest in the target
						market.
					</li>
				</ul>

				<h3>Netflix Helper (Android App) | June 2022 – August 2022</h3>
				<ul>
					<li>
						Conceived and designed as a tool that integrates with
						Netflix to help users find content in a more focused
						way.
					</li>
					<li>
						Created using React and TypeScript with DevOps using
						CI/CD pipelines for easy improvement and streamlined
						deployment.
					</li>
				</ul>
			</div>
		</motion.section>
	);
}

export default Projects;
