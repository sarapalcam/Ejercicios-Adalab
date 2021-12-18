# Dayana mola

Partiendo de este HTML:

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Dayana is Cool</title>
  </head>
  <body>
    <main class="main">
      <h1 class="main__title">
        Esa Dayana como mola, se merece una <span class="super-wave">OLA!</span>
      </h1>
    </main>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>

De este CSS:

.main {
background-color: pink;
}

.main\_\_title {
color: red;
}

Y de este JavaScript:

const superWave = document.querySelector('.super-wave');

Tenemos que crear una clase nueva para destacar el texto OLA! y añadirla con JavaScript al elemento con clase super-wave. A por ello!
Prueba a loguear la constante superWave.
