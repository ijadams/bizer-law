import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style';

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href = `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	}, []);

	return (
		<div class={style.home}>
			<div class={style.videoContainer}>
				<video playsInline autoPlay muted loop
					   src="https://res.cloudinary.com/ia-interactive/video/upload/v1651072097/quarter_rats_w9cxuz.mp4">
				</video>
				<svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
					<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill:red;"></path>
				</svg>
			</div>
			<div className={style.ctaContainer}>
				<div>
					<h1>A <span style="font-weight: 700;">civil rights</span> legal firm</h1>
					<hr></hr>
					<p>Bizer & DeReus <span style="font-weight: 700">fights</span> for the <span style="font-weight: 700">rights of all Americans</span>. We concentrate on increasing access for <span style="font-weight: 700">persons with disabilities</span> and  <span style="font-weight: 700">minority groups</span> through litigation.</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
