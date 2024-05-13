import Link from 'next/link';
import Image from 'next/image';

import equilibriumImg from '@/assets/images/equilibrium.jpg';
import avatarImg from '@/assets/images/avatar.png';

export default function Card() {
	return (
		<article className="card">
			<div className="card__image">
				<Image
					src={equilibriumImg}
					width={302}
					height={302}
					alt="Equilibrium"
					priority
				/>
			</div>
			<div className="card__content">
				<h2 className="card__title">
					<Link href="#" className="btn btn--link">
						Equilibrium #3429
					</Link>
				</h2>
				<p className="card__desc">
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className="card__stats-list">
					<li className="card__stats-list-item">
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li className="card__stats-list-item">
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className="card__author">
					<Image
						src={avatarImg}
						className="card__author-img"
						width={33}
						height={33}
						alt="Jules Wyvern"
					/>
					<span className="card__author-desc">
						Creation of{' '}
						<Link href="/about" className="btn btn--link">
							Jules Wyvern
						</Link>
					</span>
				</div>
			</div>
		</article>
	);
}
