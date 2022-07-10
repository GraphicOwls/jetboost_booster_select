import {
	FilterTick,
	Image,
	ArchiveBox,
	SliderHorizontal1,
	Sort,
	HeartAdd,
	SearchStatus,
} from 'iconsax-react'

export default function BoosterIcon({ type, size, color }) {
	const icons = {
		LIST_PAGINATION: (
			<SliderHorizontal1
				size={size}
				color={color}
				variant='Bulk'
			/>
		),
		AUTO_ARCHIVE_ITEMS: (
			<ArchiveBox
				size={size}
				color={color}
				variant='Bulk'
			/>
		),
		CMS_LIGHTBOX: (
			<Image size={size} color={color} variant='Bulk' />
		),
		LIST_FILTER: (
			<FilterTick
				size={size}
				color={color}
				variant='Bulk'
			/>
		),
		LIST_SORT: (
			<Sort size={size} color={color} variant='Bulk' />
		),
		LIST_FAVORITES: (
			<HeartAdd size={size} color={color} variant='Bulk' />
		),
		LIST_SEARCH: (
			<SearchStatus
				size={size}
				color={color}
				variant='Bulk'
			/>
		),
	}

	return icons[type]
}
