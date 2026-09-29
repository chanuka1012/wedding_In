type Props = { id: string; className?: string; children: React.ReactNode }
export function SectionWrapper({ id, className = '', children }: Props) { return <section id={id} className={`section ${className}`}>{children}</section> }
