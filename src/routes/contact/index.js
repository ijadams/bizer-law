import { h } from 'preact';
import ContactForm from '../../components/contact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Contact Us</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>Hi!</div>
					<div>If you are interested in working with us please drop us a line and we will be in touch shortly.</div>
					<div>&nbsp;</div>
					<div>Cheers 🍻</div>
				</p>
				<ContactForm/>
			</div>
		</div>
	);
};

export default photographs;
