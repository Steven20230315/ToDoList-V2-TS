import {
	ComponentPropsWithoutRef,
	forwardRef,
	useImperativeHandle,
	useRef,
} from 'react';

export type FormHandler = {
    clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void;
};

const Form = forwardRef(function Form(
	{ children, onSave, ...props }: FormProps,
	ref
) {
    // exposing component APIs to parent using useImperativeHandle
	useImperativeHandle(ref, () => {
		return {
			clear() {
				formRef.current?.reset();
			},
		};
	});

	const formRef = useRef<HTMLFormElement>(null);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		// input elements have to have name attribute
		// To access the value, formData.get('name');
		const data = Object.fromEntries(formData);
		onSave(data);
		// convert FormData to object.  Now we can simply use data.name
	};

	return (
		<form {...props} onSubmit={handleSubmit} ref={formRef} >
			{children}
		</form>
	);
});

export default Form;
