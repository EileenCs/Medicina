malla_medicina_uasd.html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Malla Medicina UASD - Interactiva</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8f5fc;
      color: #3e1764;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #5a3e99;
      color: white;
      text-align: center;
      padding: 1rem;
      font-size: 1.8rem;
      font-weight: bold;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 1rem;
    }
    h2 {
      margin-top: 2rem;
      color: #4c2a85;
      border-bottom: 2px solid #b89dff;
      padding-bottom: 0.3rem;
    }
    ul.materias {
      list-style: none;
      padding: 0;
    }
    ul.materias li {
      background: white;
      border: 1px solid #ccc;
      padding: 0.6rem 1rem;
      margin-bottom: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    ul.materias li.tachado {
      background-color: #e6e1f7;
      color: #999;
      text-decoration: line-through;
    }
    small {
      font-size: 0.75rem;
      color: #6b5ea7;
    }
  </style>
</head>
<body>
  <header>Malla Didáctica Medicina UASD</header>
  <div class="container">
    <section id="premedica">
      <h2>Módulo: Pre-Médica</h2>
      <ul class="materias">
        <li data-id="matematica-basica" data-prer="[]">
          <span>Matemática Básica</span>
          <small>Sin prerrequisitos</small>
        </li>
        <li data-id="biologia-general" data-prer="[]">
          <span>Biología General</span>
          <small>Sin prerrequisitos</small>
        </li>
        <li data-id="quimica-general" data-prer="[]">
          <span>Química General</span>
          <small>Sin prerrequisitos</small>
        </li>
        <li data-id="fisica-general" data-prer="[]">
          <span>Física General</span>
          <small>Sin prerrequisitos</small>
        </li>
        <li data-id="introduccion-medicina" data-prer="[]">
          <span>Introducción a la Medicina</span>
          <small>Sin prerrequisitos</small>
        </li>
        <li data-id="orientacion-universitaria" data-prer="[]">
          <span>Orientación Universitaria</span>
          <small>Sin prerrequisitos</small>
        </li>
        <li data-id="psicologia-general" data-prer="[]">
          <span>Psicología General</span>
          <small>Sin prerrequisitos</small>
        </li>
      </ul>
    </section>
    <section id="basico-medico">
      <h2>Módulo: Básico Médico</h2>
      <ul class="materias">
        <li data-id="anatomia-humana" data-prer='["biologia-general"]'>
          <span>Anatomía Humana</span>
          <small>Prerrequisito: Biología General</small>
        </li>
        <li data-id="histologia" data-prer='["biologia-general"]'>
          <span>Histología</span>
          <small>Prerrequisito: Biología General</small>
        </li>
        <li data-id="fisiologia" data-prer='["anatomia-humana"]'>
          <span>Fisiología</span>
          <small>Prerrequisito: Anatomía Humana</small>
        </li>
        <li data-id="bioquimica" data-prer='["quimica-general"]'>
          <span>Bioquímica</span>
          <small>Prerrequisito: Química General</small>
        </li>
        <li data-id="parasitologia" data-prer='["biologia-general"]'>
          <span>Parasitología</span>
          <small>Prerrequisito: Biología General</small>
        </li>
        <li data-id="embriologia" data-prer='["anatomia-humana"]'>
          <span>Embriología Humana</span>
          <small>Prerrequisito: Anatomía Humana</small>
        </li>
      </ul>
    </section>
    <section id="pre-internado">
      <h2>Módulo: Pre-Internado</h2>
      <ul class="materias">
        <li data-id="patologia" data-prer='["bioquimica","fisiologia","histologia"]'>
          <span>Patología General</span>
          <small>Prerrequisitos: Bioquímica, Fisiología, Histología</small>
        </li>
        <li data-id="microbiologia" data-prer='["bioquimica","histologia"]'>
          <span>Microbiología</span>
          <small>Prerrequisitos: Bioquímica, Histología</small>
        </li>
        <li data-id="inmunologia" data-prer='["microbiologia"]'>
          <span>Inmunología</span>
          <small>Prerrequisito: Microbiología</small>
        </li>
        <li data-id="farmacologia" data-prer='["bioquimica","fisiologia"]'>
          <span>Farmacología</span>
          <small>Prerrequisitos: Bioquímica, Fisiología</small>
        </li>
        <li data-id="psiquiatria" data-prer='["psicologia-general"]'>
          <span>Psiquiatría</span>
          <small>Prerrequisito: Psicología General</small>
        </li>
        <li data-id="medicina-legal" data-prer='["patologia"]'>
          <span>Medicina Legal</span>
          <small>Prerrequisito: Patología General</small>
        </li>
      </ul>
    </section>
    <section id="internado">
      <h2>Módulo: Internado Clínico</h2>
      <ul class="materias">
        <li data-id="medicina-interna" data-prer='["patologia","farmacologia"]'>
          <span>Medicina Interna</span>
          <small>Prerrequisitos: Patología General, Farmacología</small>
        </li>
        <li data-id="cirugia-general" data-prer='["patologia","farmacologia"]'>
          <span>Cirugía General</span>
          <small>Prerrequisitos: Patología General, Farmacología</small>
        </li>
        <li data-id="pediatria" data-prer='["patologia","farmacologia"]'>
          <span>Pediatría</span>
          <small>Prerrequisitos: Patología General, Farmacología</small>
        </li>
        <li data-id="gineco-obstetricia" data-prer='["patologia","farmacologia"]'>
          <span>Ginecología y Obstetricia</span>
          <small>Prerrequisitos: Patología General, Farmacología</small>
        </li>
        <li data-id="medicina-familiar" data-prer='["medicina-interna","pediatria"]'>
          <span>Medicina Familiar y Comunitaria</span>
          <small>Prerrequisitos: Medicina Interna, Pediatría</small>
        </li>
      </ul>
    </section>
    <section id="graduacion">
      <h2>Módulo: Graduación</h2>
      <ul class="materias">
        <li data-id="medicina-preventiva" data-prer='["medicina-familiar"]'>
          <span>Medicina Preventiva y Social</span>
          <small>Prerrequisito: Medicina Familiar y Comunitaria</small>
        </li>
        <li data-id="etica-medica" data-prer='["patologia"]'>
          <span>Ética Médica</span>
          <small>Prerrequisito: Patología General</small>
        </li>
        <li data-id="seminario-integracion" data-prer='["medicina-interna","pediatria","gineco-obstetricia","cirugia-general"]'>
          <span>Seminario de Integración</span>
          <small>Prerrequisitos: Todas las rotaciones clínicas</small>
        </li>
        <li data-id="trabajo-investigacion" data-prer='["medicina-preventiva"]'>
          <span>Trabajo de Investigación</span>
          <small>Prerrequisito: Medicina Preventiva y Social</small>
        </li>
        <li data-id="examen-final" data-prer='["seminario-integracion","trabajo-investigacion"]'>
          <span>Examen Final de Grado</span>
          <small>Prerrequisitos: Seminario de Integración, Trabajo de Investigación</small>
        </li>
      </ul>
    </section>
  </div> <!-- cierre de .container -->

  <script>
    // Guardar materias tachadas en localStorage
    function guardarEstado() {
      const tachadas = [];
      document.querySelectorAll('ul.materias li.tachado').forEach(li => {
        tachadas.push(li.dataset.id);
      });
      localStorage.setItem('materias_tachadas', JSON.stringify(tachadas));
    }

    // Cargar materias tachadas
    function cargarEstado() {
      const tachadas = JSON.parse(localStorage.getItem('materias_tachadas') || '[]');
      tachadas.forEach(id => {
        const li = document.querySelector('li[data-id="' + id + '"]');
        if (li) li.classList.add('tachado');
      });
    }

    // Verificar si los prerrequisitos están cumplidos
    function prerrequisitosCumplidos(prer) {
      return prer.every(id => {
        const li = document.querySelector('li[data-id="' + id + '"]');
        return li && li.classList.contains('tachado');
      });
    }

    // Al hacer clic en una materia
    document.querySelectorAll('ul.materias li').forEach(li => {
      li.addEventListener('click', () => {
        const id = li.dataset.id;
        const prer = JSON.parse(li.dataset.prer);
        if (!li.classList.contains('tachado')) {
          if (prerrequisitosCumplidos(prer)) {
            li.classList.add('tachado');
            guardarEstado();
          } else {
            alert("No puedes tachar esta materia porque no has completado sus prerrequisitos.");
          }
        } else {
          // Evitar desmarcar si es prerrequisito de otra materia tachada
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
            alert("No puedes desmarcar esta materia porque es prerrequisito de otra materia ya tachada.");
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
