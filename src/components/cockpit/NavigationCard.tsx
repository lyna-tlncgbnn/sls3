import { Icon } from "./Icon";

export function NavigationCard() {
	return <section className="panel navigation-card" aria-label="导航地图">
		<div className="map-grid"/><div className="road road-a"/><div className="road road-b"/><div className="road road-c"/>
		<div className="route-line"><span/><span/><span/></div>
		<div className="map-poi poi-a">礼嘉</div><div className="map-poi poi-b">照母山</div><div className="map-poi poi-c">欢乐谷</div>
		<div className="navigation-top">
			<div className="destination-search"><Icon name="navigation"/><div><small>导航到</small><strong>你想去哪里？</strong></div><Icon name="chevron"/></div>
			<button className="map-location" aria-label="定位"><Icon name="location"/></button>
		</div>
		<div className="current-location"><span className="location-pulse"/><div><strong>金渝大道</strong><small>重庆市 · 渝北区</small></div></div>
		<div className="trip-card">
			<div className="trip-turn"><Icon name="route"/></div>
			<div><small>回家</small><strong>32 分钟</strong><span>18.6 km · 畅通</span></div>
			<Icon name="chevron"/>
		</div>
	</section>;
}
