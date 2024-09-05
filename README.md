# Taller 3 PI1 Grupo2

## CRUD Básico de Usuarios

## Tabla de Contenidos
1. [Descripción](#descripción)
2. [Integrantes del Equipo](#integrantes-del-equipo)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Requisitos Previos](#requisitos-previos)
5. [Instalación](#instalación)
6. [Uso de Docker](#uso-de-docker)
7. [Estructura del Proyecto](#estructura-del-proyecto)
8. [Comandos Relevantes](#comandos-relevantes)
9. [Contribuciones](#contribuciones)
10. [Licencia](#licencia)
11. [Contacto](#contacto)

## Descripción

Este es un proyecto universitario que implementa un CRUD básico para la gestión de usuarios. El proyecto está dividido en dos partes: el frontend y el backend. 

- **Frontend**: Implementado en React, ubicado en la carpeta `client`.
- **Backend**: Implementado en Node.js, ubicado en la carpeta `server`.

## Integrantes del Equipo

- Pedro Luis Galindo de León
- Diego Sebastián Cano González
- Silvia Maria Mejia Fernández
- Pablo Javier Castro Peralta
- Luis Pedro Pérez Monzón
- Asher Frederick Mash Pineda

## Tutor

- Alexis Ronael Peralta Franco

## Tecnologías Utilizadas

- **Node.js**: Plataforma para el backend.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para interactuar con MySQL.
- **React**: Biblioteca para la construcción de interfaces de usuario.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **Docker**: Plataforma para crear, enviar y ejecutar aplicaciones en contenedores. Docker permite que las aplicaciones se ejecuten de manera consistente en diferentes entornos al encapsularlas en contenedores.
- **Docker Compose**: Herramienta para definir y ejecutar aplicaciones multi-contenedor. Permite gestionar contenedores y redes de forma sencilla mediante un archivo de configuración (`docker-compose.yml`).

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- **Node.js** (versión 14 o superior)
- **Docker** (versión 20 o superior)
- **Docker Compose** (versión 1.29 o superior)

## Instalación

1. **Clonar el repositorio**

    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
    ```

2. **Navegar al directorio del proyecto**

    ```bash
    cd nombre-del-repositorio
    ```

3. **Instalar las dependencias del frontend**

    ```bash
    cd client
    npm install
    ```

4. **Iniciar el servidor de desarrollo del frontend**

    ```bash
    npm run dev
    ```

5. **Navegar al directorio del backend**

    ```bash
    cd ../server
    ```

6. **Instalar las dependencias del backend**

    ```bash
    npm install
    ```

7. **Iniciar el servidor del backend**

    ```bash
    npm start
    ```

8. **Abrir en el navegador**

    Visita `http://localhost:5173` para ver la aplicación en funcionamiento (ajustar la URL si es necesario).

## Uso de Docker

### Construir y ejecutar la aplicación en contenedores Docker

1. **Construir y ejecutar los servicios definidos en el archivo `docker-compose.yml`**:

    ```bash
    docker-compose up --build
    ```

2. **Acceder a la aplicación**:

    - Frontend: [http://localhost:5173](http://localhost:5173)
    - Backend: [http://localhost:3001](http://localhost:3001)

### Docker y Docker Hub

- **Docker** es una plataforma para crear, enviar y ejecutar aplicaciones dentro de contenedores. Los contenedores permiten que las aplicaciones se ejecuten de manera aislada del entorno host, garantizando que funcionen de la misma manera en diferentes sistemas. 
- **Docker Compose** facilita la definición y ejecución de aplicaciones multi-contenedor mediante un archivo YAML, simplificando la configuración y el despliegue de los contenedores.
- **Docker Hub** es un servicio de Docker que proporciona un repositorio centralizado para almacenar y compartir imágenes de Docker. Puedes subir tus propias imágenes a Docker Hub para compartirlas o reutilizarlas.

### Dockerfile

Un **Dockerfile** es un archivo de texto que contiene una serie de instrucciones para construir una imagen de Docker. Define el entorno de ejecución de una aplicación, incluyendo la base de la imagen, las dependencias necesarias, y los comandos para configurar y ejecutar la aplicación.

## Comandos útiles de Docker

- **Construir una imagen a partir de un Dockerfile**:
    ```bash
    docker build -t nombre_imagen:tag .
    ```

- **Ejecutar un contenedor a partir de una imagen**:
    ```bash
    docker run -d -p 8080:80 nombre_imagen
    ```

- **Listar imágenes disponibles**:
    ```bash
    docker images
    ```

- **Listar contenedores en ejecución**:
    ```bash
    docker ps
    ```

- **Detener un contenedor en ejecución**:
    ```bash
    docker stop nombre_del_contenedor
    ```

- **Reiniciar un contenedor**:
    ```bash
    docker restart nombre_del_contenedor
    ```

- **Eliminar un contenedor detenido**:
    ```bash
    docker rm nombre_del_contenedor
    ```

- **Eliminar una imagen**:
    ```bash
    docker rmi nombre_imagen
    ```

- **Verificar logs del contenedor**:
    ```bash
    docker logs nombre_del_contenedor
    ```

- **Acceder al shell de un contenedor**:
    ```bash
    docker exec -it nombre_del_contenedor /bin/sh
    ```

- **Iniciar sesión en Docker Hub**:
    ```bash
    docker login
    ```

- **Cerrar sesión de Docker Hub**:
    ```bash
    docker logout
    ```

- **Subir una imagen a Docker Hub**:
    ```bash
    docker push nombre_imagen
    ```

- **Detener y eliminar contenedores y redes**:
    ```bash
    docker-compose down
    ```

## Estructura del Proyecto

- **/client** - Código fuente del frontend.
  - **/components** - Componentes de React.
- **/server** - Código fuente del backend.
  - **/routes** - Rutas de la API.
  - **/models** - Modelos de datos.
  - **/controllers** - Lógica de negocio.
- **README.md** - Este archivo.

## Comandos Relevantes

- **Iniciar la aplicación en desarrollo**:
    ```bash
    npm run dev
    ```

- **Iniciar el servidor del backend**:
    ```bash
    npm start
    ```

- **Ejecutar Docker Compose**:
    ```bash
    docker-compose up --build
    ```

- **Detener y eliminar contenedores**:
    ```bash
    docker-compose down
    ```

## Contribuciones

Si deseas colaborar, sigue estos pasos:

1. **Haz un fork del repositorio**.
2. **Crea una nueva rama** para tus cambios.
3. **Haz commit y push** a tu rama.
4. **Abre un Pull Request** en el repositorio principal.

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Para preguntas, contacta a los integrantes del equipo.
