# StarWars

## 📄 Descripción

Este repositorio contiene los recursos del frontend de la aplicación **Star Wars**, diseñada para permitir a los usuarios explorar y visualizar información sobre las naves del universo de Star Wars. La aplicación consume datos de una API para mostrar un listado de naves, detalles individuales, y permite a los usuarios registrarse y autenticar su acceso.

## ✨ Características

- **Interfaz de Usuario Intuitiva:** Diseño atractivo y fácil de usar para una experiencia de usuario fluida.
  
- **Consumo de API:** Utiliza la API de Star Wars para obtener y mostrar información sobre las naves.
  
- **Autenticación de Usuarios:** Implementación de un sistema de registro y login utilizando JSON Server con autenticación JWT.

- **Estilo Moderno:** Utilización de Angular y Tailwind CSS para un diseño moderno y responsivo.

## ☁️ Interacción con la API

Este proyecto frontend se integra con la API [SWAPI](https://swapi.dev/documentation) para gestionar la información de las naves. Puedes consultar la [documentación](https://swapi.dev/documentation) para conocer más detalles sobre los endpoints disponibles y los métodos HTTP que soportan.

## 💻 Tecnologías Utilizadas

- HTML5
- SCSS
- TypeScript
- [Angular CLI](https://angular.dev/) version 18.2.7.
- [Tailwind CSS](https://tailwindcss.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [JSON Server Auth](https://github.com/typicode/json-server-auth)

## 📋 Requisitos

- Node.js y npm instalados en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).
- Angular CLI instalado globalmente. Puedes instalarlo con el siguiente comando:

```bash
npm install -g @angular/cli

## 🛠️ Instalación
✔️ Paso 1: Clona el repositorio:
bash
git clone https://github.com/pmiramonteso/star-wars.git

✔️ Paso 2: Ingresa al directorio del proyecto:
bash
cd star-wars

✔️ Paso 3: Instala las dependencias:
bash
npm install

✔️ Paso 4: Crea el archivo db.json con el siguiente contenido:
json
{
  "users": []
}

✔️ Paso 5: Levanta el servidor de backend utilizando uno de los siguientes comandos:
bash
npx json-server-auth db.json
o
bash
npm run start:server

✔️ Paso 6: Levanta la aplicación Angular:
bash
ng serve

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## ▶️ Ejecución
Ejecuta la aplicación en tu navegador accediendo a http://localhost:4200.

## 🌐 Despliegue
Para desplegar la aplicación en producción, sigue estos pasos:

✔️ Paso 1: Ejecuta el comando de construcción para compilar la aplicación Angular:
bash
ng build --prod

✔️ Paso 2: Los archivos generados se almacenarán en el directorio dist/. Puedes desplegar estos archivos en un servidor web o en un servicio de alojamiento que admita aplicaciones web estáticas.

🤝 Contribuciones
Si deseas colaborar en este proyecto o informar sobre problemas, no dudes en crear un "issue" o enviar un "pull request".




To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
