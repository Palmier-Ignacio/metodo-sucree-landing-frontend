export default function EbookCard({ title, description }) {
  return (
    <article className="ebook-card">
      <span className="ebook-card__tag">Ebook digital</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
