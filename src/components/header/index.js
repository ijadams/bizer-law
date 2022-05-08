import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import style from './style';
import { Button, Drawer } from 'antd';
import { MenuOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Header = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<header className={style.header}>
			<Link href="/"><h1><span style="font-weight: 500; letter-spacing: 2px;">BIZER</span> <span
				style="font-weight: 100;">&</span> <span style="letter-spacing: 1px; font-weight: 400;">DeREUS</span>
			</h1></Link>
			<nav>
				<Link activeClassName={style.active} href="/contact"><MailOutlined/><span
					style="margin-right: 3px;"></span> Contact</Link>
				<a activeClassName={style.active} href="tel:+5046199999"><PhoneOutlined/><span
					style="margin-right: 3px;"></span> 504-619-9999 </a>
			</nav>
			<div className={style.mobile}>
				<Button onClick={showDrawer} ghost="true" icon={<MenuOutlined/>}/>
			</div>
			<Drawer title="Bizer & DeReus" placement="right" onClose={onClose} visible={visible} className={style.drawer}>
				<ul>
					<li><Link onClick={onClose} activeClassName={style.active} href="/contact"><MailOutlined/> &nbsp; Contact</Link></li>
					<li>
						<a href="tel:+5046199999"><PhoneOutlined/>  &nbsp; 504-619-9999</a>
					</li>
				</ul>
			</Drawer>
		</header>
	);
};

export default Header;
