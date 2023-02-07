export const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange
}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-Gray text-opacity-80'>
          {labelName}
        </label>
      </div>
      <input
        type={type}
        id={name}
        name={name}
        className='bg-White border border-Gray border-opacity-20 text-Gray text-sm rounded-lg focus:ring-Green focus:border-Green outline-none block w-full p-3'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
}
