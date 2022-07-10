import { useState } from 'react'
import BoosterIcon from './BoosterIcon'
import BoosterInfo from './BoosterInfo'
import Radio from './Radio'

export default function BoosterPicker() {
	const BOOSTERS = [
		{
			id: 'ckirx8oxpazv70779gm03xn51',
			name: 'Advanced Pagination',
			internalKey: 'LIST_PAGINATION',
		},
		{
			id: 'ckfk2a19jx3p207666dw20xh9',
			name: 'Auto-Archive CMS Items',
			internalKey: 'AUTO_ARCHIVE_ITEMS',
		},
		{
			id: 'cl0n068is0000gts8akta535h',
			name: 'CMS Lightbox',
			internalKey: 'CMS_LIGHTBOX',
		},
		{
			id: 'ck55w813m029y07606krcdai3',
			name: 'Dynamic List Filters',
			internalKey: 'LIST_FILTER',
		},
		{
			id: 'ckt0duzzw000092s8dq3a0oz0',
			name: 'Dynamic List Sort',
			internalKey: 'LIST_SORT',
		},
		{
			id: 'ckccmsz9r5pej0793yvccrlcd',
			name: 'Favorite CMS Items',
			internalKey: 'LIST_FAVORITES',
		},
		{
			id: 'ck1h474gk000f0718tb59ycsf',
			name: 'Real-Time List Search',
			internalKey: 'LIST_SEARCH',
		},
	]

	const [isSelected, setIsSelected] = useState('')
	const [currentBooster, setCurrentBooster] = useState('')

	return (
		<div className='picker-container'>
			<form>
				<fieldset
					className='picker-group'
					role='radiogroup'
				>
					{BOOSTERS.map((item) => (
						<Radio
							key={item.id}
							name='boosters'
							label={item.name}
							value={item.id}
							checked={item.id === isSelected}
							icon={
								<BoosterIcon
									type={item.internalKey}
									size='30'
									color='#5e72e4'
								/>
							}
							onChange={() => {
								setIsSelected(item.id)
								setCurrentBooster(item.internalKey)
							}}
							id={item.id}
						/>
					))}
				</fieldset>
			</form>
			{BOOSTERS.map((item) =>
				item.internalKey === currentBooster ? (
					<BoosterInfo booster={item.internalKey} />
				) : null
			)}
		</div>
	)
}
