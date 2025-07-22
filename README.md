# 📅 Booking Manager

Booking Manager es una aplicación fullstack para la gestión de citas entre usuarios y negocios. Permite a clientes reservar, modificar y puntuar sus citas, mientras que los propietarios de tiendas pueden administrar su disponibilidad y servicios.
Es un proyecto personal con arquitectura preparada para uso real.

# 🚀 Tecnologías

## Backend

    Node.js

    Express

    MongoDB + Mongoose

    Passport.js (JWT + Google OAuth)

## Frontend

    React

    TailwindCSS

# 🧑‍💼 Roles y funcionalidades

## 🔑 Autenticación

    Login clásico con email/contraseña

    Login con Google (OAuth)

    JWT para autorización segura

    Gestión de roles (cliente, owner, admin)

## 👤 Cliente

    Crear, editar y borrar reservas

    Puntuar las citas tras realizarlas

## 🏪 Owner (propietario)

    Gestionar los servicios ofrecidos

    Modificar el horario disponible

## 🛠️ Admin

    Acceso a funcionalidades ampliadas 

# 🧪 Estado del proyecto

Backend funcional https://github.com/joseruuiz4/booking-manager-back

API REST modularizada y validada

Control de errores y respuestas coherentes

Frontend integrado

    Despliegue pendiente (posiblemente en Vercel/Render)

# 📦 Instalación local

## Frontend

git clone https://github.com/joseruuiz4/booking-manager.git

cd booking-manager

npm install

npm run dev


## Backend

git clone https://github.com/joseruuiz4/booking-manager-back.git

cd booking-manager-back

npm install

npm run dev

    Asegúrate de tener un archivo .env con tus claves (Mongo URI, JWT_SECRET, Google OAuth, etc).



