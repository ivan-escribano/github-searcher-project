# README: GitHub Searcher Project

## Execution and Test Commands

To start the project, use any of the following commands:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To run the tests:

```
npm run test
```

## Folder Structure

This project follows a well-organized and clear folder structure, making it easy to navigate and understand. You can visualize this organization through the following code snippets instead of images:

```
📂 src/
├─📂 api/                                        # Manejo de llamadas a la API
│  ├─📂 auth/                                    # Operaciones de autenticación
│  │  ├─ auth.api.ts                             # Funciones para interacción con la API de autenticación
│  │  ├─ auth.service.ts                         # Servicios de lógica de negocio para autenticación
│  │  └─ auth.util.ts                            # Funciones utilitarias para autenticación
│  ├─📂 blogs/                                   # Operaciones del blog
│  │  └─ blogs.api.ts                            # Funciones para interacción con la API de blogs
│  ├─📂 template/                                # Operaciones de plantilla
│  │  └─ template.api.ts                         # Funciones para interacción con la API de plantillas
│  └─📂 shared/                                  # Código compartido entre servicios de la API
│     ├─ apiConfig.ts                            # Configuración común de la API
│     ├─ handleErrors.ts                         # Manejador de errores común
│     └─ interceptors.ts                         # Interceptores comunes para peticiones y respuestas
│
├─ ...                                            # Resto de la estructura de carpetas
├─📂 components/                                 # Componentes reutilizables
│  ├─📂 button/                                  # Componente Botón
│  │  ├─ Button.component.tsx                    # Componente Botón en sí
│  │  ├─ Button.interface.ts                     # Interfaces del componente Botón
│  │  ├─ Button.module.scss                      # Estilos específicos del Botón
│  │  ├─ Button.test.tsx                         # Pruebas del componente Botón
│  │  ├─ Button.mock.ts                          # Datos simulados para pruebas
│  │  ├─ useButton.hook.ts                          # Hooks personalizados para Botón (si es necesario)
│  │  ├─ Button.util.ts                          # Funciones de utilidad para Botón (si es necesario)
│  │  ├─ Button.context.ts                       # Contexto para Botón (si es necesario)
│  │  ├─ Button.service.ts                       # Servicios relacionados con el Botón
│  │  └─📂 sub-components/                       # Subcomponentes del botón
│  │     ├─📂 button-icon/                       # Icono del botón
│  │     │   └─ ButtonIcon.component.tsx         # Componente ícono para botón
│  │     └─📂 button-label/                      # Etiqueta del botón
│  │         └─ ButtonLabel.component.tsx        # Componente etiqueta para botón
│  └─ ...                                        # Otros componentes
├─📂 context/                                    # Contextos globales
│  ├─ auth.context.ts                            # Contexto de autenticación
│  └─ theme.context.ts                           # Contexto de tema
│
├─📂 dtos/                                       # Objetos de Transferencia de Datos (DTOs)
│  └─ Blog.dto.ts                                # DTO para blogs
│
├─📂 hooks/                                      # Hooks globales personalizados
│  └─ useCustom.hook.ts                          # Un hook personalizado de ejemplo
│
├─📂 interfaces/                                 # Interfaces globales
│  └─ GenericInput.interface.ts                  # Interface para un input genérico
│
├─📂 pages/                                      # Páginas de la aplicación
│  ├─📂 home/                                    # Página de inicio
│  │  ├─ Home.component.tsx                      # Componente principal de la página de inicio
│  │  ├─ Home.module.scss                        # Estilos específicos de la página de inicio
│  │  ├─ Home.interface.ts                       # Interfaces de la página de inicio
│  │  ├─ Home.test.tsx                           # Pruebas de la página de inicio
│  │  ├─ Home.mock.ts                            # Datos simulados para la página de inicio
│  │  ├─ useHome.hook.ts                         # Hook personalizado para la página de inicio (si es necesario)
│  │  ├─ Home.util.ts                            # Funciones de utilidad para la página de inicio
│  │  ├─ Home.context.ts                         # Contexto para la página de inicio (si es necesario)
│  │  └─ Home.service.ts                         # Servicios relacionados con la página de inicio
│  └─ [slugName]/                                # Rutas dinámicas
│     └─ ...
│
├─📂 configuration/                                   # Configuración de servicios externos
│  └─ firebase.configuration.ts                        # Servicio de Firebase
│
├─📂 styles/                                     # Estilos globales
│  └─ globals.scss                               # Estilos globales SCSS
│
└─📂 utils/                                      # Funciones de utilidad
└─ convertToSeconds.util.ts                   # Función para convertir a segundos
│
└─📂 mocks/                                   # Mocks para pruebas
├─ user.mock.ts                            # Datos simulados de usuarios
├─ blog.mock.ts                            # Datos simulados de blogs
├─ auth.mock.ts                            # Datos simulados para autenticación
└─ ...                                     # Otros datos simulados
└─📂 tests/
├─📂 e2e/                                  # Pruebas End-to-end
│  ├─📂 auth/                              # E2E tests for authentication flows
│  │  ├─ login.test.ts                     # E2E test para el flujo de login
│  │  └─ logout.test.ts                    # E2E test para el flujo de logout
│  ├─📂 blogs/                             # E2E tests for blog functionality
│  │  ├─ createBlogPost.test.ts            # E2E test para la creación de un post
│  │  └─ deleteBlogPost.test.ts            # E2E test para la eliminación de un post
│  └─ ...                                  # Otros tests E2E
└─📂 integration/                           # Pruebas de integración
├─📂 auth/                               # Pruebas de integración para autenticación
│  ├─ login.test.ts                      # Test de integración para el login
│  └─ register.test.ts                   # Test de integración para el registro
├─📂 blogs/                              # Pruebas de integración para funcionalidades del blog
│  ├─ createBlogPost.test.ts             # Test de integración para la creación de un post de blog
│  └─ editBlogPost.test.ts               # Test de integración para la edición de un post de blog
└─ ...                                   # Otros tests de integración
```

## Development Tool Configuration

The project implements Eslint and Prettier with TypeScript plugin to ensure clean and standardized code. This practice enhances code quality and facilitates team collaboration.

## Design in Figma

A prototype was developed in Figma to guide the design and structure of the project. The design can be reviewed here: [Figma Design](https://www.figma.com/file/QtujUO56K2KoNA9Wh68by7/github-searcher-timedi?type=design&node-id=0%3A1&mode=design&t=bxDqr6pDew9s8gV3-1)

## Use of MUI Library

MUI was used for reusable components, focusing on elements that contribute functionality and aesthetics, such as generic inputs, pagination, and skeletons for loading cards.

## Customization with SCSS

Despite MUI's efficiency, further customization was achieved using SCSS modules and the BEM methodology, integrated into Next.js. A basic design system was created, defining variables for font sizes, colors, etc., as shown in the [global.scss](https://res.cloudinary.com/dlpvgtdlv/image/upload/v1700808382/design_system_tds1br.jpg).

## Animations with Framer Motion

To add dynamism, animations were implemented using Framer Motion. A reusable component with three main animations was designed and consistently applied throughout the project.

## Integration of React Query

React Query was employed for efficient data state management and synchronization, a tool previously utilized in various projects.

## Rigorous Unit Testing

Comprehensive testing was conducted using Jest and React Testing Library, achieving 100% coverage. The coverage report is available here: [Unit Tests](https://res.cloudinary.com/dlpvgtdlv/image/upload/v1700809141/pruebas_unitarias_ahkuh4.jpg)

## API Request Optimization

To overcome Github API limitations, a personal access token was integrated, increasing the request limit and ensuring continuous project functionality. Additionally, response results were limited to 100 to prevent errors, and a debounce was used in a custom hook.

## State Management with Context API

Although Zustand was initially considered, React's Context API was chosen for more direct state management without external dependencies.

## Implementation of Server-Side Rendering (SSR) with Next.js

SSR was used in Next.js to maintain the state of pagination and name-based search, significantly improving user experience and application performance.

## Deployment on Vercel

The project is deployed on Vercel, allowing for easy demonstration and access. Visit the page here: [GitHub Searcher on Vercel](https://github-searcher-timedi.vercel.app/repositories) and the repository here: [GitHub Repository](https://github.com/ivan-escribano/github-searcher-project)

## Technology Summary

- TypeScript
- React
- Eslint
- Prettier
- Figma
- MUI Library
- SCSS
- Next.js
- Framer Motion
- React Query
- Jest
- React Testing Library
- Github API
- React Context API
- Server-Side Rendering (SSR)
- Vercel

---
