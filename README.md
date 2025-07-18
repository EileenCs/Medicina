
# Malla Didáctica de Medicina – UASD (Plan 2009-20)
Autora: Britany Eileen Pérez Cárdenas

## ¿Cómo usar?
1. Abre `index.html` en tu navegador (funciona sin internet).
2. Tacha materias con un clic. Se desbloquean automáticamente otras.
3. Usa el filtro para ver por módulo.
4. Puedes activar el modo oscuro 🌙.

## ¿Cómo subir a GitHub Pages?
1. Crea un repositorio nuevo público.
2. Sube todos los archivos **(no la carpeta ni el zip)**.
3. Activa GitHub Pages en Settings > Pages.
4. ¡Listo! Accede a tu malla en `https://tuusuario.github.io/nombre-del-repo/`

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Malla Didáctica Medicina UASD</title>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f7fc;
    color: #3e1764;
    margin: 0; padding: 0;
  }
  header {
    background-color: #5a3e99;
    color: white;
    padding: 1rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .container {
    max-width: 900px;
    margin: 1rem auto;
    padding: 0 1rem 2rem 1rem;
  }
  h2 {
    border-bottom: 2px solid #5a3e99;
    padding-bottom: 0.3rem;
    margin-top: 2rem;
  }
  ul.materias {
    list-style: none;
    padding-left: 0;
  }
  ul.materias li {
    background-color: white;
    margin-bottom: 0.6rem;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    border: 1px solid #a59cdc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
  }
  ul.materias li.tachado {
    text-decoration: line-through;
    color: #999;
    background-color: #e1dfff;
  }
  ul.materias li span {
    flex: 1;
  }
  ul.materias li small {
    font-size: 0.8rem;
    color: #6b5ea7;
  }
  .prerrequisitos {
    font-size: 0.75rem;
    color: #3e1764;
    opacity: 0.7;
    margin-left: 1rem;
  }
  @media (max-width: 600px) {
    body {
      font-size: 0.9rem;
    }
  }
</style>
</head>
<body>

<header>Malla Didáctica Interactiva - Medicina UASD</header>

<div class="container">

<section id="premedica">
  <h2>Módulo: Pre-Médica</h2>
  <ul class="materias" id="lista-premedica">
    <li data-id="biologia" data-prer="[]"><span>Biología General</span><small>Sin prerrequisitos</small></li>
    <li data-id="quimica" data-prer="[]"><span>Química General</span><small>Sin prerrequisitos</small></li>
    <li data-id="matematicas" data-prer="[]"><span>Matemáticas Básicas</span><small>Sin prerrequisitos</small></li>
    <li data-id="fisica" data-prer="[]"><span>Física General</span><small>Sin prerrequisitos</small></li>
  </ul>
</section>

<section id="basico-medico">
  <h2>Módulo: Básico Médico</h2>
  <ul class="materias" id="lista-basico">
    <li data-id="anatomia" data-prer='["biologia"]'><span>Anatomía Humana</span><small>Prerrequisito: Biología General</small></li>
    <li data-id="histologia" data-prer='["biologia"]'><span>Histología</span><small>Prerrequisito: Biología General</small></li>
    <li data-id="fisiologia" data-prer='["anatomia","quimica"]'><span>Fisiología</span><small>Prerrequisitos: Anatomía Humana, Química General</small></li>
    <li data-id="bioquimica" data-prer='["quimica"]'><span>Bioquímica</span><small>Prerrequisito: Química General</small></li>
  </ul>
</section>

<section id="pre-internado">
  <h2>Módulo: Pre-Internado</h2>
  <ul class="materias" id="lista-preinternado">
    <li data-id="patologia" data-prer='["fisiologia","bioquimica"]'><span>Patología</span><small>Prerrequisitos: Fisiología, Bioquímica</small></li>
    <li data-id="farmacologia" data-prer='["bioquimica"]'><span>Farmacología</span><small>Prerrequisito: Bioquímica</small></li>
    <li data-id="microbiologia" data-prer='["histologia"]'><span>Microbiología</span><small>Prerrequisito: Histología</small></li>
    <li data-id="inmunologia" data-prer='["microbiologia"]'><span>Inmunología</span><small>Prerrequisito: Microbiología</small></li>
  </ul>
</section>

<section id="internado">
  <h2>Módulo: Internado Clínico</h2>
  <ul class="materias" id="lista-internado">
    <li data-id="medicina-interna" data-prer='["patologia","farmacologia"]'><span>Medicina Interna</span><small>Prerrequisitos: Patología, Farmacología</small></li>
    <li data-id="cirugia" data-prer='["patologia"]'><span>Cirugía General</span><small>Prerrequisito: Patología</small></li>
    <li data-id="pediatria" data-prer='["patologia"]'><span>Pediatría</span><small>Prerrequisito: Patología</small></li>
    <li data-id="ginecologia" data-prer='["patologia"]'><span>Ginecología y Obstetricia</span><small>Prerrequisito: Patología</small></li>
  </ul>
</section>

<section id="graduacion">
  <h2>Módulo: Graduación</h2>
  <ul class="materias" id="lista-graduacion">
    <li data-id="medicina-preventiva" data-prer='["medicina-interna","pediatria"]'><span>Medicina Preventiva y Salud Pública</span><small>Prerrequisitos: Medicina Interna, Pediatría</small></li>
    <li data-id="trabajo-grado" data-prer='["medicina-preventiva"]'><span>Trabajo de Grado</span><small>Prerrequisito: Medicina Preventiva y Salud Pública</small></li>
  </ul>
</section>

</div>

<script>
  // Función para guardar materias tachadas en localStorage
  function guardarEstado() {
    const tachadas = [];
    document.querySelectorAll('ul.materias li.tachado').forEach(li => {
      tachadas.push(li.dataset.id);
    });
    localStorage.setItem('materias_tachadas', JSON.stringify(tachadas));
  }

  // Función para cargar materias tachadas desde localStorage
  function cargarEstado() {
    const tachadas = JSON.parse(localStorage.getItem('materias_tachadas') || '[]');
    tachadas.forEach(id => {
      const li = document.querySelector('li[data-id="' + id + '"]');
      if (li) li.classList.add('tachado');
    });
  }

  // Verifica si los prerrequisitos están tachados
  function prerrequisitosCumplidos(prerrequisitos) {
    return prerrequisitos.every(id => {
      const li = document.querySelector('li[data-id="' + id + '"]');
      return li && li.classList.contains('tachado');
    });
  }

  // Al hacer clic en materia, verificar prerrequisitos, tachar o avisar
  document.querySelectorAll('ul.materias li').forEach(li => {
    li.addEventListener('click', () => {
      const id = li.dataset.id;
      const prer = JSON.parse(li.dataset.prer);
      if (!li.classList.contains('tachado')) {
        // Para tachar, prerrequisitos deben estar cumplidos
        if (prerrequisitosCumplidos(prer)) {
          li.classList.add('tachado');
          guardarEstado();
        } else {
          alert('No puedes seleccionar esta materia porque no has completado todos sus prerrequisitos.');
        }
      } else {
        // Para desmarcar solo si no es prerrequisito de otra materia tachada
        // Comprobar si es prerrequisito de alguna tachada
        const tachadas = Array.from(document.querySelectorAll('li.tachado')).map(el => el.dataset.id);
        let esPrerrequisito = false;
        tachadas.forEach(tachadoId => {
          const tachadoLi = document.querySelector('li[data-id="' + tachadoId + '"]');
          const prerrequisitos = JSON.parse(tachadoLi.dataset.prer);
          if (prerrequisitos.includes(id)) {
            esPrerrequisito = true;
          }
        });
        if (esPrerrequisito) {
          alert('No puedes desmarcar esta materia porque es prerrequisito de otra materia que ya has completado.');
        } else {
          li.classList.remove('tachado');
          guardarEstado();
        }
      }
    });
  });

  cargarEstado();
</script>

</body>
</html>
