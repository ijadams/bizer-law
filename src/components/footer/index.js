import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Footer = () => (
	<footer class={style.footer}>
		<p>Attorney Advertising: The choice of a lawyer is an important decision and should not be based solely upon advertisements.
			By using this site you are agreeing to our <Link href="/terms">TERMS AND CONDITIONS.</Link></p>
	</footer>
);

export default Footer;
