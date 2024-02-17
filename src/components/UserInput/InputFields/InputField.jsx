export function InputField({labelText, handleChange}) {
	return (
		<div>
			<label>{labelText}</label>
			<input onChange={handleChange}/>
		</div>
	)
}