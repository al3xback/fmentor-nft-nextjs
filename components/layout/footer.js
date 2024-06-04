import Link from 'next/link';

import classes from './footer.module.css';

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<p>
					Challenge by{' '}
					<Link
						href="https://www.frontendmentor.io?ref=challenge"
						className="btn btn--link"
						target="_blank">
						Frontend Mentor
					</Link>
					. Coded by{' '}
					<Link
						href="https://github.com/al3xback"
						className="btn btn--link"
						rel="noopener noreferrer"
						target="_blank">
						al3xback
					</Link>
					.
				</p>
			</div>
		</footer>
	);
}
