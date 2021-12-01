# Ejercicios 4 y 5

## Ejercicio 4

Crea un index.html que contenga:

`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Viewport Sample</title></head><body><div class="box"></div></body></html>`

Sin que sirva de precendente, incluiremos una etiqueta `<style>` en el `<head>` con:

`.box { background: red; height: 100px; }`

Veremos que el div `.box` ocupará el ancho disponible y tendrá 100px de alto, y fondo rojo.

Añadamos nuestra primera mediaquery: vamos a hacer que por encima de 550px el elemento `.box` tenga fondo azul. Para ello el CSS dentro de nuestra etiqueta `<style>` quedará así:

`.box { background: red; height: 100px; } @media all and (min-width:550px) { .box { background: blue; } }`

Si ahora redimensionamos la ventana del navegador veremos que a partir de 550px de ancho nuestro elemento .box se vuelve azul.

Abramos ahora las herramientas de desarrollo de Chrome y lancemos el simulador de dispositivos móviles. Probemos varios dispositivos o resoluciones. ¿Qué pasa? ¿Cuándo se vuelve azul? ¿Cuándo se vuelve rojo?

## Ejercicio 5

Vamos a añadir al `<head>` de nuestra página el tag meta viewport quedando toda nuestra página así:

`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Viewport Sample</title><style>.box { background: red;height: 100px;} @media all and (min-width:550px) {.box {background: blue;}}</style></head><body><div class="box"></div></body></html>`

¿Qué tal ahora? ¿Si nos vamos a las herramientas de desarrollo, abrimos el simulador y probamos con diferentes dispositivos/anchos? ¿Cambia ahora de rojo a azul?
