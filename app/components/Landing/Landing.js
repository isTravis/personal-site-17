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
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
				<div className={'col-6 block'}>
					<div className={'block-content'}>
						Word
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
