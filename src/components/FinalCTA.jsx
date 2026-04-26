import { brand } from '../data/siteContent'

export default function FinalCTA() {
  return (
    <section id="contacto" className="section final-cta">
      <div className="container final-cta__box">
        <p className="eyebrow">Primer paso</p>
        <h2>No necesitás tener todo resuelto. Necesitás empezar.</h2>
        <p>Conocé la biblioteca digital y elegí el ebook que mejor acompaña tu momento.</p>
        <a className="button" href={brand.storeUrl}>Ir a la tienda</a>
      </div>
    </section>
  )
}
