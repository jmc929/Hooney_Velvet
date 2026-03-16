# INSTRUCCIONES - INSTALACIÓN DE REACT ROUTER

## Paso 1: Instalar React Router
Ejecuta el siguiente comando en la carpeta `front`:

```bash
npm install react-router-dom
```

## Paso 2: Reiniciar el servidor de desarrollo
Después de instalar, ejecuta:

```bash
npm run dev
```

## Estructura de la aplicación

Ahora tu aplicación web está organizada en páginas separadas:

- **/** - Página de inicio (Hero)
- **/nosotros** - Página "Acerca de"
- **/colecciones** - Página de trabajos/productos
- **/experiencias** - Página de servicios
- **/faq** - Página de preguntas frecuentes
- **/testimonios** - Página de testimonios
- **/precios** - Página de precios
- **/blog** - Página del blog
- **/contacto** - Página de contacto

## Componentes compartidos

Los siguientes componentes se muestran en todas las páginas:
- **Navigation** - Barra de navegación
- **CustomCursor** - Cursor personalizado
- **ParticleField** - Campo de partículas
- **Footer** - Pie de página

## Cambios realizados

1. ✅ Creado `Layout.tsx` - Componente que contiene elementos comunes
2. ✅ Actualizado `App.tsx` - Ahora usa React Router con rutas
3. ✅ Actualizado `Navigation.tsx` - Usa `Link` de React Router
4. ✅ Actualizado `Footer.tsx` - Usa `Link` de React Router
5. ✅ Actualizado `config.ts` - Rutas cambiadas de hashes (#) a paths (/)

## Navegación

El componente de navegación ahora:
- Usa `Link` de React Router en lugar de `<a>` tags
- Detecta la ruta actual y resalta el link activo
- Funciona correctamente en desktop y mobile
- Cierra el menú móvil al navegar

## Notas

- Cada sección mantiene su estilo original
- Las animaciones GSAP funcionan correctamente en cada página
- El scroll se resetea al cambiar de página
- ScrollTrigger se refresca automáticamente en cada cambio de ruta
