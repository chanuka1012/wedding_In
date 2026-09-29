import { weddingData } from '../../data/weddingData'
export function Footer() { return <footer><div className="footer-mark">{weddingData.couple.bride[0]} <i>&</i> {weddingData.couple.groom[0]}</div><p>Made with love for our favourite people.</p><small>© 2026 {weddingData.couple.displayName}</small></footer> }
