import Form, { FormHandler } from './Form';
import { useRef } from 'react';
import Input from './Input';

type LoginData = {
	username: string;
	email: string;
	password: string;
	address: string;
};

const keys: object = {
	username: 'text',
	email: 'email',
	password: 'password',
	address: 'text',
};
export default function LoginForm() {
	const formRef = useRef<FormHandler>(null);

	const handleSave = (value: unknown) => {
		console.log(value);
		const data = value as LoginData;
		console.log(data);
		formRef.current?.clear();
	};
	return (
		<Form
			onSave={handleSave}
			ref={formRef}
			className='login_form'
			autoComplete='off'

			// turn off 'Autofill passwords and passkeys' in Edge + input role set to 'presentation' + form autoComplete attribute set to 'off' to prevent autofill
			// role='presentation' is not good for accessibility. 
		>
			{Object.entries(keys).map(([key, type], index) => (
				<Input key={index} id={key} type={type} />
			))}

			<button type='submit'>Login</button>
		</Form>
	);
}
