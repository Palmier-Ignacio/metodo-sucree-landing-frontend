import { benefits } from '../data/siteContent'

export default function BenefitsSection() {
  return (
    <section className="section benefits">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Resultados</p>
          <h2>Esto es lo que vas a construir</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit}>{benefit}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
