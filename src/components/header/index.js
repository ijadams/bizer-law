import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1><span style="font-weight: 500; letter-spacing: 2px;">BIZER</span> <span style="font-weight: 100;">&</span> <span style="letter-spacing: 1px; font-weight: 400;">DEREUS</span></h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
			<Link activeClassName={style.active} href="/contact">Contact me</Link>
		</nav>
	</header>
);

export default Header;
