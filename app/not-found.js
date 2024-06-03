import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="not-found">
			<h2>Not Found</h2>
			<p>Could not find the requested page.</p>
			<Link href="/" className="btn btn--link">
				Return Home
			</Link>
		</div>
	);
}
