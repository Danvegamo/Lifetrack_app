# Lifetrack Events

Lifetrack Events es una aplicación diseñada para facilitar la reserva de eventos en tu ciudad, similar a Airbnb pero enfocada en experiencias y actividades locales.

## Características

- Registro y autenticación de usuarios.
- Listado y navegación de eventos.
- Reserva y gestión de eventos.
- Búsqueda y filtrado de eventos.
- Mapa interactivo usando Leaflet para mostrar la ubicación de los eventos.

## Por Qué Usar Lifetrack Events

### Descubre Eventos Increíbles
Lifetrack Events te permite descubrir y reservar una variedad de eventos en tu ciudad, desde conciertos y festivales hasta talleres y actividades al aire libre. Explora nuevas experiencias y disfruta de lo mejor que tu ciudad tiene para ofrecer.

### Reserva Fácil y Rápida
Con nuestra interfaz intuitiva, puedes buscar, filtrar y reservar eventos en cuestión de minutos. Olvídate de los procesos complicados y disfruta de una experiencia de usuario fluida y rápida.

### Recomendaciones Personalizadas
Nuestro sistema de recomendaciones te sugiere eventos basados en tus intereses y actividades previas, asegurando que siempre encuentres algo que te guste.

### Comunidad Activa
Únete a una comunidad de usuarios que comparten tus intereses. Lee opiniones, comparte tus experiencias y conecta con otros amantes de los eventos en tu ciudad.

### Publica y Gestiona Tus Eventos
Si eres un organizador de eventos, Lifetrack Events te proporciona todas las herramientas necesarias para publicar y gestionar tus eventos. Alcanza a una audiencia más amplia y promueve tus actividades de manera efectiva.

## Demo

Puedes ver una demostración en vivo del proyecto Lifetrack Events [aquí](https://airbnb-clone-phi-green.vercel.app/).

## Capturas de Pantalla

<kbd><img width="944" alt="vacationhub" src="https://github.com/sudeepmahato16/airbnb_clone/assets/122378993/f893e203-8a2d-4ff1-ae20-67e64187b770"></kbd>

<kbd><img width="886" alt="login-modal" src="https://github.com/sudeepmahato16/airbnb_clone/assets/122378993/3d6675e0-6046-48dc-b55f-7ef318581ccd"></kbd>

<kbd><img width="810" alt="listing" src="https://github.com/sudeepmahato16/airbnb_clone/assets/122378993/a0b05a50-cbc2-40db-8f62-6cc203a7c887"></kbd>

## Prerrequisitos

Asegúrate de tener instalado el siguiente software en tu sistema:

- git Si deseas clonar el proyecto desde GitHub y trabajar con él localmente, necesitarás tener Git instalado en tu sistema. Puedes descargar e instalar Git desde el sitio web oficial (https://git-scm.com/).

- Node.js La aplicación requiere que Node.js esté instalado en tu sistema para poder ejecutarse. Puedes descargar e instalar la última versión de Node.js desde el sitio web oficial (https://nodejs.org/).

## Instalación

- Clona el repositorio:

  ```
  git clone https://github.com/Danvegamo/Lifetrack_app.git
  ```

- Navega hasta el directorio del proyecto:

  ```
  cd Airbnb
  ```

- Instala las dependencias:

  ```
  npm install
  ```

- Configura las variables de entorno:

  1. Crea un archivo `.env.local` en el directorio raíz.

  2. Agrega las siguientes variables al archivo .env, reemplazando los valores de marcador de posición con los tuyos:

      ```
      DATABASE_URL=<tu-uri-de-mongodb>
      GITHUB_CLIENT_ID=<tu-id-de-cliente-de-github>
      GITHUB_CLIENT_SECRET=<tu-secreto-de-cliente-de-github>
      GOOGLE_CLIENT_ID=<tu-id-de-cliente-de-google>
      GOOGLE_CLIENT_SECRET=<tu-secreto-de-cliente-de-google>
      NEXTAUTH_SECRET=<tu-secreto-de-nextauth>
      EDGE_STORE_ACCESS_KEY=<tu-clave-de-acceso-de-edge-store>
      EDGE_STORE_SECRET_KEY=<tu-clave-secreta-de-edge-store>
      ```

  ```

  ```

## Uso

- Inicia el servidor de desarrollo:

  ```
  npm run dev
  ```

- Abre tu navegador y visita `http://localhost:3000` para acceder a la aplicación.

## Contribuciones
¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

- Haz un fork del repositorio.
- Crea una nueva rama para tu funcionalidad o corrección de errores.
- Realiza tus cambios en la nueva rama.
- Abre un pull request al repositorio principal, incluyendo una descripción de tus cambios.
