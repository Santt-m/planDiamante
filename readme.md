# Plan Diamante

Proyecto web para ofrecer masajes de terapeutas, con registro de terapeutas, centros y usuarios. Construido con React y Node.js.

## Índice

1. [Descripción](#descripción)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Funcionalidades](#funcionalidades)
4. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
5. [Créditos](#créditos)
6. [Contacto](#contacto)

## Descripción

Plan Diamante es una plataforma web para ofrecer y gestionar masajes de terapeutas, con registro de terapeutas, centros de masajes y usuarios.

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - Material-UI
- **Backend:**
  - Node.js
  - Express
  - MongoDB (MongoDB Atlas)
- **Autenticación:**
  - JSON Web Tokens (JWT)

## Funcionalidades

- Registro y login de usuarios
- Registro y gestión de terapeutas
- Registro y gestión de centros de masajes
- Visualización de terapeutas y centros

## Arquitectura del Proyecto

planDiamante/
├── client/
│   │
│   ├── public/
│   │   ├── favicon.ico           # Icono de la aplicación
│   │   ├── index.html            # Archivo HTML principal
│   │   ├── logo192.png           # Logo de la aplicación
│   │   ├── logo512.png           # Logo de la aplicación en mayor resolución
│   │   ├── manifest.json         # Archivo de manifiesto para PWA
│   │   ├── robots.txt            # Archivo para controlar el rastreo de motores de búsqueda
│   │   │
│   ├── src/
│   │   ├── app.css               # Estilos principales de la aplicación
│   │   ├── app.js                # Componente principal de la aplicación
│   │   ├── app.test.js           # Tests para el componente principal
│   │   ├── index.css             # Estilos globales
│   │   ├── index.js              # Punto de entrada de la aplicación React
│   │   ├── logo.svg              # Logo en formato SVG
│   │   ├── reportWebVitals.js    # Medición de rendimiento
│   │   ├── setupTests.js         # Configuración para tests
│   │   │
│   │   ├── components /
│   │   │   ├── auth /
│   │   │   │   ├── Login.js          # Componente de Login
│   │   │   │   ├── Register.js       # Componente de Registro
│   │   │   │   ├── AuthPage.js       # Página de Autenticación que maneja Login y Registro
│   │   │   │
│   │   │   ├── dashboard /
│   │   │   │   ├── dashboard.js
│   │   │   │
│   │   │   ├── PlanDiamante /
│   │   │   │   ├── PlanDiamante.js
│   │   │   │
│   │   │   ├── spa /
│   │   │   │   ├── SpaCard.js        # Componente de Card para Spas
│   │   │   │   ├── SpaList.js        # Componente para la lista de Spas
│   │   │   │
│   │   │   ├── therapist /
│   │   │   │   ├── TherapistCard.js  # Componente de Card para Terapeutas
│   │   │   │   ├── TherapistList.js  # Componente para la lista de Terapeutas
│   │   │   │
│   │   │   ├── About.js          # Página de "Nosotros"
│   │   │   ├── Hero.js           # Componente de Hero
│   │   │   ├── Navbar.js         # Componente de Navbar
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.js    # Contexto de Autenticación
│   │ 
│   ├── .env                      # Variables de entorno para la configuración de la aplicación
│   ├── .gitignore                # Archivos y carpetas a ignorar por Git
│   ├── package-lock.json         # Control de versiones de dependencias
│   ├── package.json              # Dependencias y scripts de la aplicación React
│
├── server/
│   ├── config /
│   │   ├── db.js
│   │   ├── default.json
│   │
│   ├── controllers/
│   │   ├── authController.js     # Controlador de autenticación
│   │   ├── spaController.js      # Controlador para gestionar centros de masajes
│   │   ├── therapistController.js # Controlador para gestionar terapeutas
│   │
│   ├── middleware /
│   │   ├── auth.js
│   │
│   ├── models/
│   │   ├── spa.js                # Modelo de datos para los centros de masajes
│   │   ├── therapist.js          # Modelo de datos para los terapeutas
│   │   ├── user.js               # Modelo de datos para los usuarios
│   │
│   ├── routes/
│   │   ├── authRoutes.js         # Rutas de autenticación
│   │   ├── spaRoutes.js          # Rutas para las operaciones relacionadas con los centros de masajes
│   │   ├── therapistRoutes.js    # Rutas para las operaciones relacionadas con los terapeutas
│   │   ├── userRoutes.js
│   │
│   ├── .env
│   ├── package.json              # Dependencias y scripts del servidor Node.js
│   ├── server.js                 # Punto de entrada del servidor
│   ├── yarn.lock                 # Control de versiones de dependencias gestionadas con Yarn
│
├── .gitignore                    # Archivos y carpetas a ignorar por Git a nivel del proyecto
├── license.md                    # Licencia del proyecto
└── readme.md                     # Documentación del proyecto

## Créditos

Proyecto desarrollado por Santiago Maruottolo.

## Contacto

Puedes contactarme a través de 
[email](mailto:smbsanti@gmail.com)
[LinkedIn](https://www.linkedin.com/in/santtm).
