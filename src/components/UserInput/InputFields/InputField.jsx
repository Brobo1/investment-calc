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
		type={"number"}
		name={name}
		onChange={handleChange}
		value={value}/>
	</div>
  )
}