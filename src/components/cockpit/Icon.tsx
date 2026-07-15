import type { SVGProps } from "react";

export type IconName = "home" | "navigation" | "vehicle" | "music" | "sparkle" | "settings" |
	"lock" | "unlock" | "fan" | "seat" | "defrost" | "bluetooth" | "signal" | "battery" |
	"location" | "route" | "chevron" | "play" | "pause" | "temperature" | "power";

const paths: Record<IconName, React.ReactNode> = {
	home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
	navigation: <><path d="M3.5 11.2 20 4l-7.2 16.5-2.1-7.2z"/><path d="m10.7 13.3 3.8-3.8"/></>,
	vehicle: <><path d="m5 11 1.6-4.3A2 2 0 0 1 8.5 5h7a2 2 0 0 1 1.9 1.7L19 11"/><path d="M4 11h16v7H4z"/><path d="M7 18v2M17 18v2M7 14h.01M17 14h.01"/></>,
	music: <><path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></>,
	sparkle: <><path d="m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7zM5 3l.6 1.4L7 5l-1.4.6L5 7l-.6-1.4L3 5l1.4-.6z"/></>,
	settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2.8 2.8-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.7V21h-4v-.1a1.8 1.8 0 0 0-1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1-2.8-2.8.1-.1a1.8 1.8 0 0 0 .4-2A1.8 1.8 0 0 0 3 14H3v-4h.1a1.8 1.8 0 0 0 1.7-1 1.8 1.8 0 0 0-.4-2l-.1-.1 2.8-2.8.1.1a1.8 1.8 0 0 0 2 .4A1.8 1.8 0 0 0 10 3V3h4v.1a1.8 1.8 0 0 0 1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1 2.8 2.8-.1.1a1.8 1.8 0 0 0-.4 2A1.8 1.8 0 0 0 21 10h.1v4H21a1.8 1.8 0 0 0-1.6 1z"/></>,
	lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
	unlock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.5-2"/></>,
	fan: <><circle cx="12" cy="12" r="2"/><path d="M12 10c-2-3-1-7 1-7 3 0 3 5 1 8M14 12c3-2 7-1 7 1 0 3-5 3-8 1M12 14c2 3 1 7-1 7-3 0-3-5-1-8M10 12c-3 2-7 1-7-1 0-3 5-3 8-1"/></>,
	seat: <><path d="M7 4v8a3 3 0 0 0 3 3h7"/><path d="M7 10h6a3 3 0 0 1 3 3v7M5 20h14"/><path d="M11 4c1 1 1 2 0 3M15 4c1 1 1 2 0 3"/></>,
	defrost: <><path d="M4 18c1-7 3-11 8-11s7 4 8 11z"/><path d="m8 14 2-3M12 14l2-3M16 14l2-3"/></>,
	bluetooth: <path d="m7 7 10 10-5 4V3l5 4L7 17"/>,
	signal: <><path d="M5 18v1M9 14v5M13 10v9M17 6v13M21 2v17"/></>,
	battery: <><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4M5 10v4M9 10v4M13 10v4M17 10v4"/></>,
	location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
	route: <><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 3-3v-6a3 3 0 0 1 3-3"/></>,
	chevron: <path d="m9 18 6-6-6-6"/>,
	play: <path d="m8 5 11 7-11 7z"/>,
	pause: <><path d="M9 5v14M15 5v14"/></>,
	temperature: <><path d="M9 14.5V5a3 3 0 0 1 6 0v9.5a5 5 0 1 1-6 0z"/><path d="M12 9v7"/></>,
	power: <><path d="M12 2v10"/><path d="M18.4 5.6a9 9 0 1 1-12.8 0"/></>,
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
	return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
