type Props = { eyebrow?: string; title: string; children?: React.ReactNode }
export function SectionTitle({ eyebrow, title, children }: Props) {
  return <div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2>{children}</div>
}
