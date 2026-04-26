import { brand } from '../data/siteContent'
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a className="whatsapp" href={brand.whatsappUrl} target="_blank" rel="noreferrer">
      <span className='span-wsp'>¿Tenés dudas? Escribinos</span>
      <FaWhatsapp size={24} className='icon-wsp'/>
    </a>
  )
}
