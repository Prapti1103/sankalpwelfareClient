// Small dependency-free inline SVG icon set used across the site.
const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const IconPhone = (p) => (<svg {...base} {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z" /></svg>);
export const IconMail = (p) => (<svg {...base} {...p}><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6Z" /><path d="m22 6-10 7L2 6" /></svg>);
export const IconMapPin = (p) => (<svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>);
export const IconClock = (p) => (<svg {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>);
export const IconMenu = (p) => (<svg {...base} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>);
export const IconClose = (p) => (<svg {...base} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>);
export const IconUser = (p) => (<svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>);
export const IconAward = (p) => (<svg {...base} {...p}><circle cx="12" cy="8" r="6" /><path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7" /></svg>);
export const IconClipboard = (p) => (<svg {...base} {...p}><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="M9 10h6M9 14h6M9 18h3" /></svg>);
export const IconBook = (p) => (<svg {...base} {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" /><path d="M20 17v4H6.5A2.5 2.5 0 0 1 4 18.5" /></svg>);
export const IconLayers = (p) => (<svg {...base} {...p}><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></svg>);
export const IconShield = (p) => (<svg {...base} {...p}><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" /></svg>);
export const IconChevronDown = (p) => (<svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>);
export const IconLogout = (p) => (<svg {...base} {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></svg>);
export const IconCheck = (p) => (<svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>);
export const IconTrophy = (p) => (<svg {...base} {...p}><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M17 5h3a2 2 0 0 1-2 4M7 5H4a2 2 0 0 0 2 4" /></svg>);
export const IconWhatsapp = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 0 1 6.9 12.6l-.3.5.9 3.4-3.5-.9-.5.3A8.2 8.2 0 1 1 12 3.8Zm-3 4.3c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.5 3.8 2.2.9 2.7.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3l-1.9-.9c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.1-.5l-.9-2c-.1-.3-.3-.3-.5-.3Z"/></svg>);
export const IconFacebook = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.2-1.5 1.6-1.5h1.6V3.7C15.8 3.6 14.9 3.5 13.9 3.5c-2.4 0-4 1.5-4 4.2v2.2H7.2V13H10v8h3.5Z"/></svg>);
export const IconInstagram = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>);
export const IconYoutube = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M22 12s0-3.2-.4-4.7a2.7 2.7 0 0 0-1.9-1.9C18.2 5 12 5 12 5s-6.2 0-7.7.4A2.7 2.7 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7c.2 1 1 1.7 1.9 1.9C5.8 19 12 19 12 19s6.2 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9c.4-1.5.4-4.7.4-4.7Z"/><path d="m10 9 5 3-5 3V9Z" fill="#0E1538"/></svg>);
export const IconTwitter = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M20 5.3a7.6 7.6 0 0 1-2.2.6A3.9 3.9 0 0 0 19.4 4a7.7 7.7 0 0 1-2.4 1 3.8 3.8 0 0 0-6.6 3.5A10.9 10.9 0 0 1 2.4 4.2a3.9 3.9 0 0 0 1.2 5.2 3.8 3.8 0 0 1-1.7-.5v.1a3.9 3.9 0 0 0 3.1 3.8 3.9 3.9 0 0 1-1.7.1 3.9 3.9 0 0 0 3.6 2.7A7.7 7.7 0 0 1 1 17a10.9 10.9 0 0 0 5.9 1.7c7.1 0 11-5.9 11-11v-.5A7.9 7.9 0 0 0 20 5.3Z"/></svg>);
export const IconLinkedin = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M6.9 8.7H3.6V20h3.3V8.7ZM5.3 3.5a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 20h-3.3v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.6-2.3 3.1V20H9.5V8.7h3.2v1.5h.1c.4-.8 1.6-1.7 3.2-1.7 3.4 0 4 2.2 4 5.1V20Z"/></svg>);
