export function InputField({
							 name,
							 labelText,
							 handleChange,
							 value,
						   }) {
  return (
	<div>
	  <label>{labelText}</label>
	  <input
		name={name}
		onChange={handleChange}
		value={value}/>
	</div>
  )
}