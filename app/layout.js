import { outfit } from '@/assets/fonts';
import '@/assets/css/reset.css';
import '@/assets/css/globals.css';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
	title: 'Frontend Mentor | NFT Preview Card Component',
	description: 'Frontend Mentor - NFT preview card component solution.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<Header />
				<main className="main">
					<div className="container">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
