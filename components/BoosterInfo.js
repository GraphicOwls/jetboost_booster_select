import BoosterInfoContent from './BoosterInfoContent'
import { InfoCircle } from 'iconsax-react'

export default function BoosterInfo({ booster }) {
	const info = {
		LIST_PAGINATION: {
			content: (
				<BoosterInfoContent>
					<h3>Advanced Pagination</h3>
					<p>
						Easily add seamless pagination (no page
						refreshes!), "show more" pagination, or infinite
						scroll to any of your collection lists.
						Automatically integrates with Jetboost search
						and filters!
					</p>
					<h4>Additional Use Cases</h4>
					<ul>
						<li>
							Paginate the search/filter results for large
							collections.
						</li>
						<li>
							Display the number of search/filter results.
						</li>
					</ul>
				</BoosterInfoContent>
			),
		},
		AUTO_ARCHIVE_ITEMS: {
			content: (
				<BoosterInfoContent>
					<h3>Auto Archive CMS Items</h3>
					<p>
						Automatically archive items in your collection
						list after their expiration date or another date
						field.
					</p>
					<h4>Example Use Cases</h4>
					<ul>
						<li>
							Job board: Archive jobs 30 days after they
							were posted.
						</li>
						<li>
							Event site: Archive events 7 days after they
							occur.
						</li>
						<li>
							General: Archive items immediately after their
							expiration date.
						</li>
					</ul>
				</BoosterInfoContent>
			),
		},
		CMS_LIGHTBOX: {
			content: (
				<BoosterInfoContent>
					<h3>CMS Lightbox</h3>
					<p>
						Automatically links all Lightboxes within a
						single collection item together.
					</p>
					<p>
						See demo site for an example:{' '}
						<a href='https://compare-products.webflow.io'>
							https://compare-products.webflow.io
						</a>
					</p>
				</BoosterInfoContent>
			),
		},
		LIST_FILTER: {
			content: (
				<BoosterInfoContent>
					<h3>Dynamic List Filters</h3>
					<p>
						Use buttons, checkboxes, radio buttons, or
						dropdowns to dynamically filter your collection
						lists.
					</p>
					<div className='booster-info-tip'>
						<InfoCircle
							size='24'
							color='#5e72e4'
							variant='Bulk'
						/>
						<span>
							<strong>Tip:</strong> To filter a collection
							by more than one field, simply create multiple
							Dynamic List Filter Boosters.
						</span>
					</div>
				</BoosterInfoContent>
			),
		},
		LIST_SORT: {
			content: (
				<BoosterInfoContent>
					<h3>Dynamic List Sorting</h3>
					<p>
						Use buttons, link blocks, or select elements to
						dynamically sort your collection lists.
					</p>
					<div className='booster-info-tip'>
						<InfoCircle
							size='24'
							color='#5e72e4'
							variant='Bulk'
						/>
						<span>
							<strong>Tip:</strong> To sort a collection by
							more than one field, simply create multiple
							Dynamic List Sort Boosters.
						</span>
					</div>
				</BoosterInfoContent>
			),
		},
		LIST_FAVORITES: {
			content: (
				<BoosterInfoContent>
					<h3>Favorite CMS Items</h3>
					<p>
						Give your users the ability to bookmark, "like",
						or favorite CMS items on your site.
						Automatically integrates with MemberSpace,
						Memberstack, and Outseta. However, none of these
						are required.
					</p>
					<h4>Additional Use Cases</h4>
					<ul>
						<li>
							Create a wishlist for an e-commerce site.
						</li>
						<li>
							Add a watchlist for a video content site.
						</li>
						<li>Emoji reaction buttons for blog posts.</li>
					</ul>
				</BoosterInfoContent>
			),
		},
		LIST_SEARCH: {
			content: (
				<BoosterInfoContent>
					<h3>Real-time List Search</h3>
					<p>
						Add a search to your page that filters your
						collection list in real-time as you type.
					</p>
				</BoosterInfoContent>
			),
		},
	}

	return info[booster].content
}
