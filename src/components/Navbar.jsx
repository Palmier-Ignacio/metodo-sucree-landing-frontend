import logo from '../assets/logo-sin-fondo.png'
import { brand } from '../data/siteContent'

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="navbar__brand" aria-label="Método Sucrée">
        <img src={logo} alt="Método Sucrée" />
      </a>

      <nav className="navbar__links" aria-label="Navegación principal">
        <a href="#metodo">El método</a>
        <a href="#ebooks">Ebooks</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a className="button button--small" href={brand.storeUrl}>
        Ir a la tienda
      </a>
    </header>
  )
}
