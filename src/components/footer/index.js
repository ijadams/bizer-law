import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import { FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';

const Footer = () => (
	<footer class={style.footer}>
		<div>
			<div>
				<div>
					<h3>Bizer & DeReus</h3>
					<p>3319 St. Claude Avenue
					New Orleans, LA 70117</p>
					<a href="tel:+5046199999">p: 504.619.9999</a>
					<a href="tel:+5049489996">f: 504.948.9996</a>
					<a href="mailto:andrew@bizerlaw.com">andrew@bizerlaw.com</a>
				</div>
				<ul>
					<li>
						<a href="https://www.facebook.com/BizerandDeReus/" target="_blank">
							<FacebookOutlined />
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/channel/UC-0gp064t3-kHUAMOQdG6XA" target="_blank">
							<YoutubeOutlined />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<small>Attorney Advertising: The choice of a lawyer is an important decision and should not be based solely upon advertisements.
				By using this site you are agreeing to our <Link href="/terms">TERMS AND CONDITIONS.</Link></small>
		</div>
	</footer>
);

export default Footer;
