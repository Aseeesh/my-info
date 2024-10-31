import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead'; 
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />

			<AppBanner />
 
		</div>
	);
}
