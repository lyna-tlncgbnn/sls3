import { useState } from "react";
import { Icon } from "./Icon";

export function SmartPanel() {
	const [playing, setPlaying] = useState(true);

	return <aside className="smart-column">
		<section className="panel greeting-card">
			<span className="eyebrow">WEDNESDAY · JUL 15</span>
			<h2>下午好，林先生</h2>
			<p>车辆状态良好，前往公司的路况畅通。</p>
			<div className="weather"><span className="weather-icon">☀</span><strong>26°</strong><div>晴朗<small>重庆</small></div></div>
		</section>

		<section className="panel music-card">
			<div className="album-cover"><div className="album-orbit"/><Icon name="music"/></div>
			<div className="track-info"><span className="eyebrow">NOW PLAYING</span><strong>城市漫游</strong><small>赛境精选 · 驾驶歌单</small></div>
			<button className="play-button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "暂停" : "播放"}><Icon name={playing ? "pause" : "play"}/></button>
			<div className="progress"><span style={{ width: playing ? "62%" : "45%" }}/></div>
		</section>

		<section className="panel ai-card">
			<div className="ai-icon"><Icon name="sparkle"/></div>
			<div><span className="eyebrow">SAIJING AI</span><strong>要为你规划下班路线吗？</strong><small>预计可节省 12 分钟</small></div>
			<button aria-label="查看 AI 建议"><Icon name="chevron"/></button>
		</section>
	</aside>;
}
