//TODO: Basic input component
// TODO: props that control whether autocomplete is on or off

import { CSSProperties, ComponentPropsWithoutRef } from 'react';

type InputProps = {
	id: string;
	style?: CSSProperties;
	autoComplete?: 'on' | 'off';
} & ComponentPropsWithoutRef<'input'>;

export default function Input({
	id,
	autoComplete = 'off',
	...props
}: InputProps) {
	return (
		<>
			<input
				id={id}
				name={id}
				// for new formData to work, input elements have to have name attribute. Right now, by default, name is set to id. So when using this component, you only need to provide id.
				key={id}
				autoComplete={autoComplete}
				placeholder={props.placeholder || id}
				{...props}
				role='presentation'
			/>
		</>
	);
}
