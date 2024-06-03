import Link from 'next/link';
import Image from 'next/image';

import equilibriumImg from '@/assets/images/equilibrium.jpg';
import avatarImg from '@/assets/images/avatar.png';
import classes from './card.module.css';

export default function Card() {
	return (
		<article className={classes.card}>
			<div className={classes.image}>
				<Image
					src={equilibriumImg}
					width={302}
					height={302}
					alt="Equilibrium"
					priority
				/>
			</div>
			<div className={classes.content}>
				<h2 className={classes.title}>
					<Link href="#" className="btn btn--link">
						Equilibrium #3429
					</Link>
				</h2>
				<p className={classes.desc}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className={classes['stats-list']}>
					<li>
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li>
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className={classes.author}>
					<Image
						src={avatarImg}
						width={33}
						height={33}
						alt="Jules Wyvern"
					/>
					<span>
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
