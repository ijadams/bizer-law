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
					<div>If you are interested in working with us the best way to get in touch is to call us at <a href="tel:+5046199999">504-619-9999</a>.</div>
					<div>&nbsp;</div>
					<div>You can also email us at <a href="mailto:andrew@bizerlaw.com">andrew@bizerlaw.com</a>.</div>
					<div>&nbsp;</div>
					<div>Cheers ⚖️ ☎️</div>
				</p>
			</div>
		</div>
	);
};

export default photographs;
