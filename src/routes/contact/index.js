import { h } from 'preact';
import ContactForm from '../../components/contact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Contact me</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>Hi!</div>
					<div>If you are interested in my work and are looking to contact me for a contract please use the following form to contact me.</div>
					<div>&nbsp;</div>
					<div>Cheers 🍻</div>
				</p>
				<ContactForm/>
			</div>
		</div>
	);
};

export default photographs;
