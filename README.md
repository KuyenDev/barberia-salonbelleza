# KUYÉNDEV WEB SHOWCASE — PROYECTO 03
## ATELIER 47 — BARBER & BEAUTY STUDIO
> Experiencia web de demostración interactiva, editorial y premium para estudios de barbería, peluquería de autor y salones de belleza.

---

## 1. Objetivo del Proyecto

El objetivo de este proyecto es servir como un **showcase interactivo de alto impacto visual** desarrollado por **KuyénDev**. Permite a dueños de barberías boutique, peluquerías contemporáneas y estudios de cuidado personal visualizar el nivel de diseño de vanguardia, dirección artística editorial y experiencia interactiva de usuario (UI/UX) que pueden implementar en sus propios negocios.

La experiencia incluye:
- Diseño editorial asimétrico bajo la estética **Modern Luxury / Urban Editorial**.
- Catálogo interactivo de servicios con filtrado por categoría en tiempo real, búsqueda y ordenamiento de precios.
- Wizard de agendamiento simulado de 5 pasos con cálculo dinámico de tiempos, selección de profesionales y disponibilidad determinista.
- Galería con visor Lightbox y comparador interactivo **Antes y Después** con control táctil y de cursor.
- Perfiles detallados de profesionales con modales de biografía y compatibilidad de servicios.
- Formulario de contacto simulado con validación local y prevención de fugas de datos.

---

## 2. Carácter Ficticio (Modo Demostración)

> [!IMPORTANT]
> **ESTE SITIO ES UNA DEMOSTRACIÓN EXCLUSIVAMENTE FICTICIA.**
> - **Sin transacciones:** No se procesan pagos reales ni se cobran tarifas.
> - **Sin reservas reales:** El sistema de agendamiento es 100% simulado localmente. No se sincroniza con agendas reales ni con Google Calendar.
> - **Sin almacenamiento de datos personales:** Los campos de contacto y alias son de prueba. No se guardan en bases de datos ni se transmiten a servidores externos.
> - **Contenido ilustrativo:** Los profesionales (Alex Moreno, Valentina Ríos, Nicolás Vega, Camila Torres), horarios, precios y fotografías son ilustrativos y ficticios.

---

## 3. Tecnologías Utilizadas

- **React 19 & TypeScript**: Arquitectura basada en componentes funcionales con tipado estricto.
- **Vite 8**: Herramienta de compilación ultrarrápida configurada para despliegues estáticos relativos (`base: './'`).
- **React Router (HashRouter)**: Enrutamiento del lado del cliente 100% compatible con subdirectorios de GitHub Pages sin errores 404 al recargar.
- **Vanilla CSS con Sistema de Tokens**: Variables CSS para diseño de lujo moderno, tipografías fluidas con `clamp()`, y soporte WCAG 2.2 para `prefers-reduced-motion`.
- **Lucide React & SVGs de Marca**: Iconografía nítida y geométrica.
- **Canvas-Confetti**: Microinteracción celebratoria al completar la simulación de reserva.

---

## 4. Instalación

Para clonar y preparar el proyecto en tu entorno local:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/barberia-salonbelleza.git

# Entrar al directorio
cd barberia-salonbelleza

# Instalar dependencias
npm install
```

---

## 5. Ejecución en Desarrollo

Para iniciar el servidor local con recarga en caliente:

```bash
npm run dev
```

La aplicación estará disponible de inmediato en `http://localhost:5173/`.

---

## 6. Compilación de Producción

Para compilar los recursos optimizados y minificados:

```bash
npm run build
```

Los archivos finales se generarán en la carpeta `dist/`. Puedes previsualizar el bundle generado con:

```bash
npm run preview
```

---

## 7. Despliegue en GitHub Pages

El proyecto está preconfigurado para publicarse en GitHub Pages:
1. `vite.config.ts` utiliza `base: './'`, permitiendo que los assets carguen correctamente desde cualquier subdirectorio de repositorio (ej. `https://usuario.github.io/barberia-salonbelleza/`).
2. Se incluye el flujo de trabajo automatizado en `.github/workflows/deploy.yml`.

### Pasos para activar en GitHub:
1. Sube tu código a la rama `main` de GitHub.
2. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
3. En **Build and deployment > Source**, selecciona **GitHub Actions**.
4. Cada vez que hagas un `git push` a `main`, el sitio se compilará y publicará automáticamente.

---

## 8. Cambio de Marca

Toda la identidad de la marca está centralizada en `src/config/site.ts`:

```typescript
export const SITE_CONFIG = {
  brandName: 'TU NUEVA MARCA',
  brandDescriptor: 'HAIR STUDIO & BARBER',
  slogan: 'Tu lema personalizado.',
  currency: 'CLP',
  contact: {
    address: 'Nueva Dirección 1234',
    city: 'Santiago, Chile',
    phone: '+56 9 1234 5678',
    email: 'contacto@tunegocio.cl',
    // ...
  }
};
```

---

## 9. Cambio de Logotipo

El logotipo tipográfico se renderiza desde `src/components/layout/Navbar.tsx` y `Footer.tsx`.
Para cambiar a un logotipo basado en imagen SVG o PNG:
1. Coloca tu archivo en `public/logo.svg`.
2. En `Navbar.tsx`, reemplaza el bloque de texto `ATELIER 47` por:
   ```tsx
   <img src="./logo.svg" alt={SITE_CONFIG.brandName} style={{ height: '36px' }} />
   ```
3. Actualiza el icono de la pestaña en `public/favicon.svg`.

---

## 10. Cambio de Colores y Paleta

La paleta cromática se controla a través de variables CSS en `src/styles/tokens.css` y `src/config/theme.ts`:

```css
:root {
  --color-bg-primary: #111110;       /* Fondo oscuro carbón */
  --color-bg-secondary: #1C1B19;     /* Fondo de tarjetas */
  --color-accent-copper: #B77A56;    /* Color de acento primario */
  --color-accent-gold: #B89A72;      /* Color secundario dorado */
  --color-text-primary: #F4F0E9;     /* Tono marfil de lectura */
}
```

---

## 11. Cambio de Fotografías

Las imágenes están organizadas de forma limpia en los archivos de datos:
- Hero y fondos: `src/components/home/HeroSection.tsx`
- Galería y comparativas: `src/data/gallery.ts`
- Servicios: `src/data/services.ts`
- Profesionales: `src/data/professionals.ts`

Puedes reemplazar las URLs por imágenes locales colocándolas en `public/images/` y referenciándolas como `./images/nombre.webp`.

---

## 12. Edición de Servicios

Para agregar, quitar o editar servicios, modifica `src/data/services.ts`. Cada servicio cuenta con la siguiente estructura tipada:

```typescript
{
  id: 'corte-personalizado',
  name: 'Corte Diseñado',
  category: 'BARBERÍA', // 'BARBERÍA' | 'PELUQUERÍA' | 'COLORACIÓN' | 'TRATAMIENTOS' | 'ESTILISMO'
  durationMinutes: 45,
  priceClp: 20000,
  shortDescription: 'Descripción breve para la tarjeta...',
  fullDescription: 'Descripción detallada para el modal desplegable...',
  includes: ['Lavado', 'Corte', 'Peinado con cera'],
  image: 'https://...',
  popular: true,
  compatibleProfessionalIds: ['alex-moreno', 'nicolas-vega'],
}
```

---

## 13. Edición de Precios

Los precios se definen numéricamente en la propiedad `priceClp` de cada servicio en `src/data/services.ts`.
El formateo a moneda chilena (`$18.000`) se realiza de forma automática a través de la función `formatPriceClp()` ubicada en `src/utils/format.ts`.

---

## 14. Edición de Profesionales

Para editar el personal del estudio, edita `src/data/professionals.ts`:

```typescript
{
  id: 'nuevo-profesional',
  name: 'Nombre y Apellido',
  role: 'Especialista',
  title: 'Título Destacado',
  specialtyDescription: 'Resumen de su técnica...',
  longBio: 'Biografía extensa para el modal...',
  image: 'https://...',
  specialties: ['Tijera', 'Barba'],
  daysAvailable: [1, 2, 3, 4, 5, 6], // Días hábiles
  instagramDemo: '@perfil.demo',
}
```

---

## 15. Configuración de Horarios

Los horarios base de atención y la lógica de disponibilidad determinista se gestionan en `src/data/availability.ts`:
- `STUDIO_BASE_SLOTS`: Array de turnos diarios (ej: `['09:30', '10:30', '11:30', ...]`).
- Los domingos están configurados automáticamente como días cerrados (`dayOfWeek === 0`).
- Si la duración de los servicios seleccionados excede los 100 minutos, el sistema inhabilita turnos tardíos de manera automática.

---

## 16. Funcionamiento de la Agenda Simulada

El flujo de reservas (`src/components/booking/BookingWizard.tsx`) opera en 5 fases interactivas:
1. **Paso 1 (Servicios):** Selección múltiple de servicios compatibles con cálculo instantáneo de duración total y subtotal en CLP.
2. **Paso 2 (Profesional):** Opción de elegir cualquier profesional disponible o seleccionar uno específico según compatibilidad con los servicios elegidos.
3. **Paso 3 (Fecha):** Calendario con navegación mensual que bloquea fechas pasadas y domingos.
4. **Paso 4 (Horario):** Grilla determinista de turnos libres que calcula automáticamente la hora estimada de finalización.
5. **Paso 5 (Confirmación):** Resumen desglosado con campos para alias no sensibles y botón de confirmación simulada que despliega confeti y alerta clara de no transacción.

---

## 17. Cómo Adaptar la Plantilla a una Barbería Exclusiva

1. En `src/data/services.ts`, mantén o expande únicamente los servicios de la categoría `BARBERÍA` y `TRATAMIENTOS` masculinos.
2. En `src/config/site.ts`, cambia el descriptor a `MENS GROOMING & BARBER CLUB`.
3. Ajusta los perfiles de `src/data/professionals.ts` a maestros barberos.

---

## 18. Cómo Adaptarla a un Salón de Belleza / Peluquería

1. En `src/data/services.ts`, enfoca las categorías en `PELUQUERÍA`, `COLORACIÓN`, `TRATAMIENTOS` y `MAQUILLAJE / NAILS`.
2. En `src/config/site.ts`, actualiza el descriptor a `HAIR & BEAUTY SALON`.
3. Actualiza la galería fotográfica en `src/data/gallery.ts` con técnicas de balayage, manicura o brushing.

---

## 19. Cómo Convertirla en un Sitio Comercial Real

Para transformar esta demostración en una plataforma de producción:
1. **Desactivar Modo Demostración:** Cambia `DEMO_MODE = false` en `src/config/demo.ts`.
2. **Conectar Backend / Base de Datos:**
   - Supabase, Firebase o un backend personalizado con PostgreSQL/Node.
   - Sincronización de citas con Google Calendar API o Cal.com API.
3. **Pasarela de Pagos (Opcional):**
   - Integración con Webpay Plus (Transbank), Mercado Pago o Stripe para cobro de abonos o señas.
4. **Notificaciones Automáticas:**
   - Envío de confirmaciones por correo electrónico (Resend o SendGrid) y recordatorios por WhatsApp (Twilio API).
5. **Autenticación:**
   - Panel de administración protegido para que los estilistas gestionen sus turnos y bloqueos de agenda.

---

## 20. Limitaciones Actuales

- Las reservas son guardadas en la memoria local del navegador (`React Context`) durante la sesión; al recargar la página la simulación se reinicia.
- No se envían correos electrónicos reales ni mensajes de texto.
- Las imágenes provienen de Unsplash con licencias de uso libre para fines demostrativos y no corresponden a clientes ni colaboradores auténticos de un establecimiento con ese nombre.
- El sitio incluye la directiva `noindex, nofollow` para evitar ser indexado en buscadores como negocio físico real.

---

&copy; KuyénDev. Todos los derechos reservados. Demostración para portafolio digital.
