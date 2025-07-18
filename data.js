
window.MATERIAS = [
  { codigo: "BIO0170", nombre: "Biología Básica", creditos: 2, modulo: "Pre-Médica", prerequisitos: [] },
  { codigo: "BIO0180", nombre: "Lab. de Biología", creditos: 1, modulo: "Pre-Médica", prerequisitos: ["BIO0170"] },
  { codigo: "CFI3150", nombre: "Biofísica", creditos: 2, modulo: "Pre-Médica", prerequisitos: ["BIO0170"] },
  { codigo: "CFI3160", nombre: "Lab. Biofísica", creditos: 1, modulo: "Pre-Médica", prerequisitos: ["CFI3150"] },
  { codigo: "MED3100", nombre: "Introducción a la Clínica", creditos: 3, modulo: "Básico Médico", prerequisitos: ["CFI3150", "BIO0180"] },
  { codigo: "MED4210", nombre: "Cirugía General", creditos: 4, modulo: "Pre-Internado", prerequisitos: ["MED3100"] },
  { codigo: "MED7110", nombre: "Medicina Interna", creditos: 8, modulo: "Internado", prerequisitos: ["MED4210"] },
  { codigo: "MED7990", nombre: "Tesis de Grado", creditos: 8, modulo: "Tesis", prerequisitos: [] }
];
