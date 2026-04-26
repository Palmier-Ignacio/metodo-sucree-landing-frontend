# Método Sucrée - Landing React + Vite

Este ZIP contiene solo lo que tenés que agregar o reemplazar dentro de un proyecto base creado con React + Vite.

## Archivos incluidos

- `src/App.jsx`
- `src/index.css`
- `src/components/*`
- `src/data/siteContent.js`
- `src/assets/*`

## Librerías / servicios usados

No requiere instalar librerías npm extra.

Sí usa Google Fonts importado desde CSS:

- Cormorant Garamond
- Montserrat

## Qué tenés que modificar

En `src/data/siteContent.js`:

```js
storeUrl: 'https://sucree-escuela-pasteleria.store'
whatsappUrl: 'https://wa.me/5490000000000'
```

Reemplazá el número de WhatsApp por el real.

## Objetivo de esta estructura

La landing está separada en componentes reutilizables para que la futura tienda `.store` pueda compartir la misma identidad visual, cards, botones, secciones, paleta y tono.
