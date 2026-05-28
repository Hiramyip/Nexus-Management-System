# 🏛️ Nexus Management System

> Dashboard Administrativo de alto rendimiento para la **Coordinación de Servicios y Limpieza Urbana**. Un sistema unificado de ingesta de datos, visualización y gestión operativa con arquitectura de microservicios y soporte multi-base de datos.

[![React](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Express](https://img.shields.io/badge/Backend-Node%20Express%20%2B%20TS-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/)
[![FastAPI](https://img.shields.io/badge/Worker-FastAPI%20%2B%20Pandas-009688?logo=fastapi&logoColor=white&style=for-the-badge)](https://fastapi.tiangolo.com/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma%20MultiSchema-2D3748?logo=prisma&logoColor=white&style=for-the-badge)](https://www.prisma.io/)
[![Docker](https://img.shields.io/badge/DevOps-Docker%20Compose-2496ED?logo=docker&logoColor=white&style=for-the-badge)](https://www.docker.com/)

---

## 📌 Índice
1. [Visión General](#-visión-general)
2. [Arquitectura del Sistema](#%EF%B8%8F-arquitectura-del-sistema)
3. [Características Principales](#-características-principales)
4. [Pila Tecnológica](#-pila-tecnológica)
5. [Matriz de Control de Accesos (RBAC)](#-matriz-de-control-de-accesos-rbac)
6. [Estructura del Proyecto](#%EF%B8%8F-estructura-del-proyecto)
7. [Instalación y Configuración](#%EF%B8%8F-instalación-y-configuración)
   - [Requisitos Previos](#requisitos-previos)
   - [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno-env)
   - [Despliegue con Docker Compose](#despliegue-con-docker-compose)
   - [Ejecución en Desarrollo (Local)](#ejecución-en-desarrollo-local)
8. [Auditoría y Seguridad](#-auditoría-y-seguridad)
9. [Flujo de Procesamiento de Excel](#-flujo-de-procesamiento-de-excel)

---

## 🏛️ Visión General
**Nexus-Management-System** es una solución corporativa e institucional a la medida diseñada para centralizar, procesar y auditar la información operativa de la **Coordinación de Servicios y Limpieza Urbana**. El sistema permite a directores, coordinadores, analistas y capturadores gestionar desde reportes ambientales y mantenimiento escolar hasta el control de panteones y solicitudes ciudadanas directas, garantizando la consistencia de los datos mediante un pipeline automatizado de validación y un estricto control de accesos.

---

## 🛡️ Arquitectura del Sistema

El sistema implementa una **arquitectura distribuida y desacoplada** de microservicios, optimizando el rendimiento mediante la delegación del procesamiento pesado de datos (archivos Excel) a un worker especializado en Python, mientras que la API principal en TypeScript gestiona la lógica de negocio y las consultas transaccionales.

```mermaid
flowchart TB
    subgraph Client ["Capa de Cliente (SPA)"]
        FE[React + Vite + Tailwind CSS]
        Storage[(Cifrado AES LocalStorage)]
        FE <--> Storage
    end

    subgraph Security ["Seguridad y Enrutamiento"]
        Proxy[Nginx Proxy Manager]
        DDNS[DuckDNS Dynamic Updater]
        Proxy <--> DDNS
    end

    subgraph AppStack ["Capa de Aplicación (Microservicios)"]
        BE[Express API en TypeScript]
        Prisma[Prisma Client Dynamic Config]
        Python[Python Worker - FastAPI]
        
        BE <--> Prisma
        BE -- "Carga pesada / Delegación" --> Python
    end

    subgraph DB ["Capa de Datos (Dual DB)"]
        SQL[(SQL Server 2025 - Datos Transaccionales)]
        Mongo[(MongoDB 7.0 - Logs & Auditoría)]
    end

    Client <--> Proxy
    Proxy <--> BE
    Prisma <--> SQL
    Prisma <--> Mongo
    Python <--> SQL
```

---

## 🚀 Características Principales

*   📥 **Captura e Ingesta Inteligente de Reportes**: Carga masiva de datos operativos mediante archivos Excel. Un motor de backend en Python y Pandas se encarga de la validación estructural, parseo y carga eficiente a la base de datos SQL Server.
*   📊 **Generación de Reportes con Filtros Avanzados**: Módulo interactivo con filtrado dinámico multidimensional (por fecha, sector, tipo de reporte, etc.) y visualización analítica a través de componentes gráficos reactivos (con Recharts).
*   👥 **Administración de Usuarios y RBAC**: Panel administrativo granular con **8 roles diferenciados** para restringir estrictamente las secciones visuales, la capacidad de edición y la visualización de los datos.
*   🔐 **Sistema de Autenticación con Sesiones Encriptadas**: Las credenciales se verifican contra el backend de manera segura. Una vez autorizada, la sesión del usuario se almacena en el cliente encriptada con **AES-256** simétrico de forma automática, contando con temporizadores de inactividad, ciclo de vida programado y renovación automática.
*   🗒️ **Pistas de Auditoría Inmutables**: Registro automatizado de eventos de seguridad (inicios de sesión, accesos denegados, descargas de reportes e inserciones) en una base de datos MongoDB dedicada, permitiendo una trazabilidad operativa completa.

---

## 💻 Pila Tecnológica

### Frontend (Cliente SPA)
*   **Vite + React 18**: Entorno de desarrollo ultrarrápido y renderizado optimizado basado en componentes.
*   **TypeScript**: Tipado estático robusto para interfaces de datos y control de formularios.
*   **Tailwind CSS**: Diseño visual ágil y altamente personalizable de la UI.
*   **Lucide React**: Biblioteca de iconos modernos y responsivos.
*   **Recharts**: Gráficos analíticos e interactivos nativos de React.
*   **Crypto AES**: Cifrado seguro local de la información de sesión.

### Backend (API Gateway & Lógica de Negocio)
*   **Node.js + Express**: Servidor RESTful ágil y extensible.
*   **TypeScript + TSX**: Desarrollo tipado con soporte de transpilación al vuelo en tiempo de ejecución.
*   **Prisma ORM (Multi-Schema)**: Enrutador dinámico de esquemas que permite consultar simultáneamente SQL Server y MongoDB utilizando el mismo cliente.

### Worker de Excel (Microservicio de Procesamiento)
*   **Python 3.11 + FastAPI**: API asíncrona de alto desempeño para la recepción de archivos pesados.
*   **Pandas & Openpyxl**: Procesamiento vectorial y estructurado de hojas de cálculo Excel de gran tamaño.
*   **PyODBC**: Conector optimizado a base de datos relacionales SQL Server.

### Infraestructura y Base de Datos
*   **Microsoft SQL Server 2025**: Motor relacional de grado empresarial para almacenar la información operativa transaccional.
*   **MongoDB 7.0**: Base de datos NoSQL documental utilizada para almacenamiento de eventos rápidos de auditoría de seguridad y logs de reportes.
*   **Nginx Proxy Manager**: Proxy inverso gráfico con administración automatizada de certificados SSL de Let's Encrypt.
*   **DuckDNS**: Cliente dinámico para redirección y resolución de subdominios del servidor.

---

## 👥 Matriz de Control de Accesos (RBAC)

El sistema de permisos restringe severamente las acciones en función del rol asignado al usuario. Se cuenta con **8 roles operativos**:

| Rol | Acceso a Capturas | Edición en Capturas | Acceso a Reportes | Administración de Usuarios | Visualización de Tablas | Restricción de Reporte |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Developer** | ✅ | ✅ | ✅ | ✅ | ✅ | Ninguna (Acceso Total) |
| **Coordinador** | ✅ | ✅ | ✅ | ✅ | ✅ | Ninguna (Acceso Total) |
| **Analista** | ❌ | ❌ | ✅ | ❌ | ✅ | Ninguna (Visualización) |
| **Capturador** | ✅ | ✅ | ❌ | ❌ | ❌ | No visualiza reportes |
| **Consultor Oficios** | ❌ | ❌ | ✅ | ❌ | ✅ | Solo reportes de *Oficios* |
| **Consultor CIGA** | ❌ | ❌ | ✅ | ❌ | ✅ | Solo reportes de *CIGA* |
| **Consultor Escuelas** | ❌ | ❌ | ✅ | ❌ | ✅ | Solo reportes de *Escuelas* |
| **Consultor PCT** | ❌ | ❌ | ✅ | ❌ | ✅ | Solo reportes de *PCT* |

---

## 📂 Estructura del Proyecto

```bash
Nexus-Management-System/
├── backend/                 # API principal construida con Express y TypeScript
│   ├── src/
│   │   ├── entities/        # Definiciones de clases de negocio
│   │   ├── repositories/    # Capa de acceso a datos (Prisma)
│   │   ├── routes/          # Endpoints separados (sql/ y mongo/)
│   │   ├── services/        # Lógica de interceptores y negocio
│   │   └── index.ts         # Punto de entrada de la API
│   ├── Dockerfile
│   └── tsconfig.json
├── frontend/                # SPA interactiva construida en React + Vite
│   ├── src/
│   │   ├── components/      # Módulos clave (login, captura, reportes, usuarios)
│   │   ├── contexts/        # Estado global (Theme claro/oscuro)
│   │   ├── services/        # Clientes de API y sistema de autenticación cifrado
│   │   ├── types/           # Tipados compartidos y roles
│   │   └── utils/           # Utilidades (Criptografía AES, formateadores)
│   ├── Dockerfile
│   └── vite.config.ts
├── excel-processor/         # Worker en Python para validación y procesamiento de Excel
│   ├── main.py              # Endpoint de FastAPI y lógica de ingesta Pandas
│   ├── requirements.txt     # Dependencias de Python (FastAPI, Pandas, etc.)
│   └── Dockerfile
├── prisma/                  # Esquemas dinámicos para mapeo de bases de datos
│   ├── mongodb/
│   │   └── schema.prisma    # Esquema NoSQL para Logs y Auditoría
│   └── sqlserver/
│       └── schema.prisma    # Esquema Relacional para Datos Operativos
├── proxy/                   # Configuración del proxy inverso y certificados Let's Encrypt
│   ├── data/
│   └── letsencrypt/
├── docker-compose.infra.yml # Contenedores base: SQL Server, MongoDB, DuckDNS, NPM
├── docker-compose.feature.yml# Contenedores de desarrollo: Backend, Frontend, Python Worker
├── docker-compose.prod.yml  # Orquestador optimizado para despliegue productivo
└── prisma.config.ts         # Configuración del enrutador dinámico de Prisma
```

---

## 🛠️ Instalación y Configuración

### Requisitos Previos
*   [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución.
*   [Node.js v20+](https://nodejs.org/) (opcional, solo para ejecución local sin Docker).
*   [Python 3.11+](https://www.python.org/) (opcional, solo para ejecución local del worker).

---

### Configuración de Variables de Entorno (.env)

Crea un archivo `.env` en la raíz del proyecto. Este archivo contiene la configuración global de conexión, contraseñas de las bases de datos y subdominios dinámicos:

```env
#========================================================================
# CONFIGURACIÓN GENERAL DEL SISTEMA NEXUS
#========================================================================

# --- CREDENCIALES DE BASES DE DATOS ---
SQL_SA_PASSWORD=TuPasswordSuperSeguro123!
MONGO_USERNAME=usuario_mongo
MONGO_PASSWORD=OtroPasswordSeguro456!

# --- CADENAS DE CONEXIÓN DE PRISMA (LOCAL O RED DOCKER) ---
# Formato de conexión para SQL Server 2025
SQL_SERVER_URL=sqlserver://localhost:1433;database=gestion_db;user=sa;password=TuPasswordSuperSeguro123!;encrypt=true;trustServerCertificate=true;

# Formato de conexión para MongoDB 7.0
MONGODB_URL=mongodb://usuario_mongo:OtroPasswordSeguro456!@localhost:27017/NexxusMsDB?authSource=admin

# --- DUCK DNS (CONFIGURACIÓN DE SUBDOMINIOS PARA DESPLIEGUE) ---
DUCKDNS_TOKEN=tu-token-de-duckdns-aqui
DUCKDNS_SUBDOMAINS=tu-subdominio-principal,api-tu-subdominio,ft-tu-subdominio,ft-api-tu-subdominio
```

---

### Despliegue con Docker Compose

El proyecto está diseñado bajo un modelo modular que facilita la puesta en marcha mediante contenedores.

#### 1. Iniciar la Infraestructura (Bases de datos y Proxies)
Este comando levanta la instancia de SQL Server 2025, MongoDB 7.0, el proxy inverso y el cliente dinámico de DuckDNS:
```bash
docker-compose -f docker-compose.infra.yml up -d
```

#### 2. Levantar los Microservicios de la Aplicación
Una vez que las bases de datos están en línea y escuchando solicitudes, puedes iniciar el Frontend, el Backend API y el procesador de Excel:
```bash
docker-compose -f docker-compose.feature.yml up --build -d
```

Una vez levantado todo el ecosistema de contenedores:
*   **Panel Web Frontend**: `http://localhost:3000`
*   **Backend REST API**: `http://localhost:8002` (Mapeado internamente al puerto `8000`)
*   **Excel Python Worker**: `http://localhost:8003` (Mapeado internamente al puerto `8001`)
*   **Panel Administrativo Nginx Proxy**: `http://localhost:81` (Acceso al panel de administración de Nginx Proxy Manager)

---


## 🧪 Pruebas Unitarias e Integración

El backend de Nexus cuenta con una suite completa de pruebas unitarias y de middleware construida bajo el framework moderno **Vitest**.

Para conocer en detalle la filosofía de pruebas, las convenciones de redacción, la guía de simulación de base de datos (Mocking de Prisma) y cómo medir la cobertura de tu código, consulta el manual detallado:

👉 **[Manual de Pruebas Unitarias (TESTING.md)](file:///c:/Users/reaxo/Downloads/nexus%20feature/Nexus-Management-System/backend/TESTING.md)**
