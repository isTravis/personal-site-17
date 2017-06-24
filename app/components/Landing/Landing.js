import React from 'react';
import { Link } from 'react-router-dom';

const Landing = function() {
	return (
		<div className={'landing-page container'}>
			{/*<Link to={'/project/gifgif'}>
				<div className={'card'}>
					<span className={'title'}>GIFGIF</span>
					<img src={'/images/waves.png'} alt={'waves'} />
				</div>
			</Link>*/}

			<div className={'blocks row'}>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						PubPub
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						List of Links
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						DbDb
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						GIFGIF
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						Detroit IG
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</Link>
				<Link to={'/about'} className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
