import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
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
