import React from 'react';
import { motion } from 'framer-motion';

const experienceVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

function Experience() {
	const experienceVariants = {
		hidden: { opacity: 0, x: '-100vw' },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				delay: 1.5,
			},
		},
	};

	return (
		<motion.section
			id='experience'
			className='experience section'
			variants={experienceVariants}
			initial='hidden'
			animate='visible'
		>
			<h2>Experience</h2>
			<div>
				<h3>Software Engineer | CRC Oncology | June 2022 - Present</h3>
				<ul>
					<li>
						Enabled secure patient data transfer via Azure SFTP
						within a 2-week deadline, acquiring 5 long term global
						clients.
					</li>
					<li>
						Enhanced security posture by developing new data
						transfer protocols in consultation with stakeholders,
						maintaining companywide compliance with local and
						international laws and policies.
					</li>
					<li>
						Conducted training for 20+ clients from diverse
						backgrounds, leveraging strong communication and
						interpersonal skills to build relationships and ensure
						client success.
					</li>
					<li>
						Produced user-friendly documentation to maximize
						company-wide FDA compliance and minimize risk.
					</li>
				</ul>
			</div>
		</motion.section>
	);
}

export default Experience;
