import logo from '../assets/logo-sin-fondo.png'
import { brand } from '../data/siteContent'

export default function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero__content container">
        <img className="hero__logo" src={logo} alt="Método Sucrée" />
        {/* <p className="eyebrow">Instituto de aprendizaje para emprendedoras en pastelería</p> */}
        <h1>Aprendé pastelería real para emprender desde casa</h1>
        <p className="hero__text">
          Convertí tu talento en ingresos con recetas profesionales, explicadas paso a paso y pensadas para vender.
        </p>
        <div className="hero__actions">
          <a className="button" href={brand.storeUrl}>Ver biblioteca de ebooks</a>
          <a className="button button--outline" href="#metodo">Conocer el método</a>
        </div>
      </div>
    </section>
  )
}
