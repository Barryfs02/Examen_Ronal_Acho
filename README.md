markdown
# AULA 3D – Proyecto para Dispositivos Móviles II

Este proyecto es una simulación de un aula 3D interactiva desarrollada con React, Three.js y @react-three/fiber. Permite explorar el entorno desde dispositivos móviles utilizando los sensores del teléfono (giroscopio y acelerómetro) o mediante controles Orbit en escritorio.

---

## Características principales

*   Renderizado 3D en React usando `@react-three/fiber`.
*   Control de cámara mediante:
    *   `OrbitControls` (modo escritorio).
    *   `DeviceOrientationControls` (modo móvil).
*   Ajuste dinámico de luz mediante un slider.
*   Integración de múltiples modelos GLB (mesas, laptops, sillas, carretillas, impresoras, etc.).
*   Escena con iluminación ambiental y direccional.

---

## Tecnologías utilizadas

*   React
*   Vite
*   Three.js
*   `@react-three/fiber`
*   `@react-three/drei`
*   `DeviceOrientation API`
*   Modelos 3D en formato GLB

---

## Cómo ejecutar el proyecto

### Requisitos

*   Node.js 16 o superior

### Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Barryfs02/Examen_Ronal_Acho/edit/main/README.md
```
```bash
cd Aula_de_tercero
```
```bash
npm install
```
Ejecutar en modo desarrollo

```bash
npm run dev
```
Usa el código con precaución.

Generar build (para producción)
```bash
npm run build
```
### Build del Proyecto subido a netlify

*   https://cool-clafoutis-e956fc.netlify.app/



# Controles
En escritorio
* Rotar/Orbitar: Clic izquierdo y arrastrar.
* Zoom: Rueda del ratón.
* Mover (Pan): Clic derecho y arrastrar.
* Control fluido y estable.
# En móvil
* Botón “Activar movimiento”: Habilita el acceso a los sensores del dispositivo (giroscopio y acelerómetro).
  <img width="1500" height="668" alt="IMG_20251111_214229_177" src="https://github.com/user-attachments/assets/8217154e-dad0-4876-9285-141a49631543" />

* El movimiento de la cámara responde a la orientación física del dispositivo.
  <img width="1520" height="668" alt="IMG_20251111_214218_984" src="https://github.com/user-attachments/assets/24382fc5-eb29-4399-ad14-faaa0d2e2e51" />

# Capturas de Pantalla
<img width="1318" height="582" alt="Capturaq" src="https://github.com/user-attachments/assets/865fda4f-5750-46ce-9732-4b8870daea58" />
<img width="1238" height="565" alt="Capturaa" src="https://github.com/user-attachments/assets/24a6b853-c846-4e47-be99-4893dc808431" />

