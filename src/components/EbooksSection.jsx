import EbookCard from './EbookCard'
import { brand, ebooks } from '../data/siteContent'

export default function EbooksSection() {
  return (
    <section id="ebooks" className="section section--light">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Biblioteca digital</p>
          <h2>Empezá hoy con ebooks creados para producir y vender</h2>
          <p>Recetas claras, prácticas y pensadas para emprendedoras reales.</p>
        </div>

        <div className="ebooks-grid">
          {ebooks.map((ebook) => (
            <EbookCard key={ebook.title} {...ebook} />
          ))}
        </div>

        <div className="center-action">
          <a className="button" href={brand.storeUrl}>Ver todos los ebooks</a>
        </div>
      </div>
    </section>
  )
}
