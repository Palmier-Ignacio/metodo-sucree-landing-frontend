import isotipo from '../assets/logo-isotipo.png'

export default function MethodSection() {
  return (
    <section id="metodo" className="section method">
      <div className="container method__grid">
        <div class="method__image">
          <img src={isotipo} alt="Isotipo Método Sucrée" />
        </div>
        <div>
          <p className="eyebrow">Nuestro diferencial</p>
          <h2>Acá no enseñamos solo recetas</h2>
          <p>
            En Método Sucrée acompañamos a mujeres que quieren transformar la pastelería en un negocio real desde casa.
          </p>
          <p>
            Combinamos técnica, claridad y enfoque comercial para que puedas producir, calcular costos y vender con más seguridad.
          </p>
        </div>
      </div>
    </section>
  )
}
