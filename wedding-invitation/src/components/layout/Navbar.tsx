import { weddingData } from '../../data/weddingData'
const links = ['Invitation', 'Events', 'Venue', 'Story', 'Gallery']
export function Navbar() { return <header className="nav"><a className="monogram" href="#home" aria-label="Back to top">{weddingData.couple.bride[0]}<i>&</i>{weddingData.couple.groom[0]}</a><nav>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav><a className="nav-rsvp" href="#contact">RSVP</a></header> }
