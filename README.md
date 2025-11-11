AULA 3D – Proyecto para Dispositivos Móviles II

Este proyecto es una simulación de un aula 3D interactiva desarrollada con React, Three.js y @react-three/fiber.
Permite explorar el entorno desde dispositivos móviles utilizando los sensores del teléfono (giroscopio y acelerómetro) o mediante controles Orbit en escritorio.


---

Características principales

Renderizado 3D en React usando @react-three/fiber.

Control de cámara mediante:

OrbitControls (modo escritorio).

DeviceOrientationControls (modo móvil).


Ajuste dinámico de luz mediante un slider.

Integración de múltiples modelos GLB (mesas, laptops, sillas, carretillas, impresoras, etc.).

Escena con iluminación ambiental y direccional.

Modo móvil con solicitud de permisos en iOS.



---

Tecnologías utilizadas

React

Vite

Three.js

@react-three/fiber

@react-three/drei

DeviceOrientation API

Modelos 3D en formato GLB



---


Cómo ejecutar el proyecto

Requisitos

Node.js 16 o superior


Instalación

npm install

Ejecutar en modo desarrollo

npm run dev

Generar build

npm run build


---

Controles

En escritorio

Puedes rotar, hacer zoom y moverte con OrbitControls.

Control fluido y estable.


En móvil

Botón “Activar movimiento” habilita los sensores.

En iOS se solicita permiso explícito.

El movimiento de la cámara responde a la orientación del dispositivo.



---



Screenshot del Canvas completo.

Recomendación: posición de cámara elevada.


2. Interfaz del slider de luz

Muestra el control y cómo modifica la escena.


3. Vista en móvil

Foto o captura mostrando el botón "Activar movimiento".


4. Modelos 3D de cerca

Laptop sobre mesa

Carretilla

Silla plástica

Impresora


(Muestra el nivel de detalle).

5. Video corto o GIF

Opcional pero muy recomendado

Ejemplo de navegación por el aula


Puedes subirlo a /assets o a un hosting externo.

Formato sugerido:

![Vista General](<img width="1272" height="585" alt="image" src="https://github.com/user-attachments/assets/91fa703b-35a2-4710-a782-3860e06fc653" />
)
![Controles de Luz](<img width="1055" height="486" alt="image" src="https://github.com/user-attachments/assets/21e66ea9-12cd-4c4d-92b0-371bc0b36528" />
)


---

Funcionalidades internas destacadas

Integración de controles personalizados mediante DeviceOrientationControls.

Limpieza adecuada de listeners en useEffect.

Renderizado eficiente mediante React Fiber.

Escenario construido con geometrías simples (paredes, piso, grid helpers).

Organización modular de componentes 3D importados desde GLB.



---

Deploy recomendado

Funciona correctamente en:

Netlify

Vercel


Ambos permiten subir proyectos hechos con Vite sin configuración adicional.


---

Autor

(Ronal Acho Acarapi)
3er Año – Sistemas Informáticos
Materia: Programación para Dispositivos Móviles II
Año: 2025
