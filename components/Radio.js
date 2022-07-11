import classNames from 'classnames'
import { TickCircle } from 'iconsax-react'

export default function Radio({
	checked,
	name,
	value,
	description,
	onChange,
	icon,
	id,
	label,
}) {
	return (
		<>
			<input
				className='radio-input'
				type='radio'
				value={value}
				checked={checked}
				id={id}
				onChange={onChange}
				name={name}
				tabIndex={checked ? 0 : -1}
			/>
			<label
				className={classNames('radio-label', {
					'radio-selected': checked,
				})}
				htmlFor={id}
			>
				<div className='indicator'></div>
				<div className='radio-title-group'>
					{icon}
					<span>{label}</span>
				</div>
				{description && <p>{description}</p>}
				<div className='selectbox'>
					{checked ? (
						<TickCircle
							size='24'
							color='#5e72e4'
							variant='Bold'
						/>
					) : (
						<div className='unchecked'></div>
					)}
				</div>
			</label>
		</>
	)
}
