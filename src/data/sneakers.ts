import { Sneaker } from '../types/sneaker';

export const FEATURED_SNEAKERS: Sneaker[] = [
  {
    id: 'jordan-4-black-canvas',
    name: "AIR JORDAN 4 RETRO 'BLACK CANVAS'",
    brand: 'Jordan',
    subtitle: 'Black Canvas / Fire Red / Cement Grey',
    price: 199.0,
    originalPrice: 220.0,
    tag: 'NEW',
    tagColor: 'bg-black text-white',
    priceColor: 'text-[#EA2825]',
    colors: [
      { name: 'Black Canvas', hex: '#1C1C1E', border: 'border-slate-800' },
      { name: 'Stealth Grey', hex: '#6B7280', border: 'border-slate-400' },
      { name: 'Summit White', hex: '#F3F4F6', border: 'border-slate-300' },
    ],
    defaultColorIndex: 0,
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    description:
      'Inspirado en los tonos oscuros de la escena urbana, el Air Jordan 4 Retro Black Canvas combina lona de densidad militar, gamuza en la puntera y acentos en rojo fuego característicos de Tinker Hatfield.',
    story:
      'Lanzado como una alternativa de calle sobria y duradera a los clásicos de cuero, este modelo mantiene las alas de soporte lateral moldeadas y la amortiguación Air-Sole visible.',
    sku: 'DH7138-006',
    releaseYear: 2022,
    authenticityRating: 99.8,
    inStock: true,
    imageSlice: {
      sx: 58,
      sy: 582,
      sw: 180,
      sh: 115,
    },
  },
  {
    id: 'nike-dunk-vintage-green',
    name: "NIKE DUNK LOW 'VINTAGE GREEN'",
    brand: 'Nike',
    subtitle: 'Pro Green / Sail / Vintage Olive',
    price: 129.0,
    originalPrice: 145.0,
    tag: 'TRENDING',
    tagColor: 'bg-[#556B2F] text-white',
    priceColor: 'text-[#5B7038]',
    colors: [
      { name: 'Vintage Green', hex: '#4A5D23', border: 'border-[#3D4C1D]' },
      { name: 'Sail Cream', hex: '#EAE5D9', border: 'border-amber-200' },
      { name: 'Off Noir', hex: '#2B2E33', border: 'border-slate-700' },
    ],
    defaultColorIndex: 0,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
    description:
      'Un giro clásico de inspiración universitaria. El Nike Dunk Low Vintage Green presenta una base de cuero blanco roto con superposiciones en verde bosque profundo y entresuela vintage envejecida.',
    story:
      'Originalmente concebido para las pistas de baloncesto de la NCAA en 1985, el Dunk Low domina hoy las calles del mundo gracias a su perfil bajo y tracción circular.',
    sku: 'DQ8580-100',
    releaseYear: 2022,
    authenticityRating: 99.9,
    inStock: true,
    imageSlice: {
      sx: 276,
      sy: 595,
      sw: 185,
      sh: 105,
    },
  },
  {
    id: 'yeezy-boost-700-wave-runner',
    name: "YEEZY BOOST 700 'WAVE RUNNER'",
    brand: 'Yeezy',
    subtitle: 'Solid Grey / Chalk White / Core Black',
    price: 249.0,
    originalPrice: 300.0,
    tag: 'BACK IN STOCK',
    tagColor: 'bg-black text-white',
    priceColor: 'text-[#EA2825]',
    colors: [
      { name: 'Multi Wave', hex: '#D6D3C4', border: 'border-[#94A3B8]' },
      { name: 'Slate Teal', hex: '#475569', border: 'border-slate-600' },
      { name: 'Onyx Black', hex: '#171717', border: 'border-neutral-800' },
    ],
    defaultColorIndex: 0,
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 12.5],
    description:
      'El silueta que redefinió la estética chunky sneaker. La Yeezy Boost 700 Wave Runner mezcla cuero gris, ante negro, paneles de malla azul marino y acentos en naranja neón con tecnología Boost completa.',
    story:
      'Debutó en el desfile de la temporada 5 en 2017 y de inmediato polarizó a la comunidad del calzado para luego convertirse en una pieza de museo del diseño moderno.',
    sku: 'B75571',
    releaseYear: 2017,
    authenticityRating: 100,
    inStock: true,
    imageSlice: {
      sx: 498,
      sy: 590,
      sw: 185,
      sh: 110,
    },
  },
  {
    id: 'air-jordan-1-chicago-high',
    name: "AIR JORDAN 1 RETRO HIGH OG 'LOST & FOUND'",
    brand: 'Jordan',
    subtitle: 'Varsity Red / Black / Sail / Muslin',
    price: 219.0,
    originalPrice: 260.0,
    tag: 'EXCLUSIVE',
    tagColor: 'bg-[#EA2825] text-white',
    priceColor: 'text-[#EA2825]',
    colors: [
      { name: 'Chicago Red', hex: '#DC2626', border: 'border-red-700' },
      { name: 'Black Toe', hex: '#000000', border: 'border-neutral-900' },
      { name: 'Sail White', hex: '#FAF5FF', border: 'border-slate-300' },
    ],
    defaultColorIndex: 0,
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    description:
      'El modelo insignia del streetwear mundial. Un homenaje al descubrimiento de pares originales de 1985 almacenados en tiendas vintage, con cuello de cuero agrietado y caja retro.',
    story:
      'La silueta prohibida que cambió para siempre la relación entre la NBA, la cultura hip-hop y el coleccionismo global de zapatillas.',
    sku: 'DZ5485-612',
    releaseYear: 2022,
    authenticityRating: 100,
    inStock: true,
    imageSlice: {
      sx: 255,
      sy: 65,
      sw: 360,
      sh: 340,
    },
  },
];

export const POLICIES_DATA = {
  privacy: {
    title: 'Políticas de Privacidad',
    subtitle: 'Protección de datos y transparencia en cada transacción',
    lastUpdated: 'Noviembre 2026',
    sections: [
      {
        title: '1. Compromiso de Privacidad y Recopilación de Datos',
        content:
          'En KICKED. nos comprometemos a salvaguardar la privacidad de nuestros clientes y coleccionistas. Únicamente recopilamos los datos personales estrictamente necesarios para procesar tus pedidos, verificar la identidad de compra contra fraudes y enviar notificaciones de drops exclusivos.',
        bullets: [
          'Datos identificativos: Nombre completo, correo electrónico y número de teléfono de contacto.',
          'Datos de envío: Dirección postal completa, código postal y referencias domiciliarias.',
          'Información de navegación: Dirección IP enmascarada, preferencias de tallas y productos marcados en lista de deseos.',
        ],
      },
      {
        title: '2. Seguridad Financiera y Cero Almacenamiento de Tarjetas',
        content:
          'KICKED. jamás almacena los números completos de tus tarjetas de crédito o códigos CVC/CVV en nuestros servidores. Todas las pasarelas de pago se ejecutan mediante conexiones cifradas con protocolo TLS 1.3 y certificación PCI-DSS Nivel 1 a través de proveedores líderes certificados (Stripe, Apple Pay, PayPal).',
      },
      {
        title: '3. Uso de Cookies y Tecnologías de Rastreo',
        content:
          'Utilizamos cookies de sesión esenciales para el funcionamiento del carrito de compras, recordar tu selección de moneda y tallas preferidas. No vendemos ni compartimos tu historial de navegación con intermediarios publicitarios ni redes no autorizadas.',
      },
      {
        title: '4. Derechos ARCO del Usuario (Acceso, Rectificación, Cancelación, Oposición)',
        content:
          'Como titular de tus datos, puedes ejercer en cualquier momento tu derecho a solicitar una copia de la información registrada, rectificar imprecisiones o solicitar la eliminación total de tu cuenta y datos de contacto escribiendo a privacy@kicked.drops o desde tu panel de usuario.',
      },
    ],
  },
  warranty: {
    title: 'Condiciones de Garantía y Autenticidad',
    subtitle: 'Compromiso inquebrantable de autenticidad y calidad en cada par',
    lastUpdated: 'Noviembre 2026',
    sections: [
      {
        title: '1. Garantía de Autenticidad 100% de por Vida (100% Legit Guarantee)',
        content:
          'Cada par comercializado en KICKED. se somete a un riguroso protocolo de verificación física de 12 puntos por parte de nuestro equipo de maestros verificadores de sneakers antes de ser despachado:',
        bullets: [
          'Inspección ultravioleta (luz negra UV) para rastrear sellos de fábrica y residuos de adhesivo.',
          'Verificación microscópica de costuras, densidad del hilo y patrón de grabado de suela.',
          'Validación de etiqueta interior, coincidencia de códigos SKU con la caja original y código de barras UPC.',
          'Evaluación táctil de materiales de primera calidad (cuero premium, gamuza, malla técnica, caucho original).',
          'Si un cliente demuestra mediante peritaje certificado una discrepancia en la autenticidad, ofrecemos reembolso del 200% del valor pagado.',
        ],
      },
      {
        title: '2. Garantía por Defectos de Fabricación (30 Días)',
        content:
          'Todos los pares cuentan con una garantía de 30 días naturales contra desprendimiento prematuro de suela, fisuras estructurales en cápsulas de aire (Air/Zoom/Boost) o costuras sueltas de origen no atribuibles a uso excesivo o daño accidental por el usuario.',
      },
      {
        title: '3. Política de Devoluciones y Cambio de Tallas (14 Días)',
        content:
          'Si la talla que ordenaste no te queda a la perfección o deseas un cambio, dispones de 14 días naturales desde la recepción de tu envío:',
        bullets: [
          'El calzado debe estar estrictamente sin uso en exteriores, sin pliegues en la puntera (creasing) y con su caja original intacta.',
          'La etiqueta de seguridad KICKED. Verified con sello inviolable debe permanecer adherida al par.',
          'El primer cambio de talla dentro de territorio continental incluye guía de retorno sin costo adicional.',
        ],
      },
      {
        title: '4. Procedimiento Rápido de Reclamación',
        content:
          'Para iniciar un proceso de garantía, ingresa al centro de ayuda o escribe a soporte@kicked.drops con tu número de orden (#KCK-XXXX), 3 fotografías en alta resolución del defecto o discrepancia y la fecha de recepción. Nuestro equipo responderá en menos de 24 horas hábiles.',
      },
    ],
  },
};
