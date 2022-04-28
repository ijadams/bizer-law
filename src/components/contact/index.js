import { h } from 'preact';
import { useForm, ValidationError } from '@formspree/react';
import 'antd/dist/antd.css';

const ContactForm = () => {
	const [state, handleSubmit] = useForm('xpzbojzg');
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">
				Email Address
			</label>
			<input
				id="email"
				type="email"
				name="email"
				placeholder="email@domain.tld"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>

			<label htmlFor="subject">
				Subject
			</label>
			<input id="subject" name="subject" value="Reaching Out..." />

			<label htmlFor="message">
				Message
			</label>
			<textarea
				id="message"
				name="message"
			/>
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<button class="ant-btn ant-btn-round ant-btn-primary ant-btn-lg" type="submit" disabled={state.submitting}>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;

