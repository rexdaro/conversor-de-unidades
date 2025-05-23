import './style.css'

// Declaraciones de variables:
const divResultado = document.querySelector('.resultado') as HTMLDivElement;
const h1Resultado = document.createElement('h1');
const h3ConversionDe = document.createElement('h3');
const h3ConversionA = document.createElement('h3');
const input = document.getElementById('input') as HTMLInputElement;



// seleccionamos priemro que vamos a convertir
let convertirDe: string = '';
let convertirA: string = '';

// botones de grados
const buttonC = document.getElementById('buttonC') as HTMLButtonElement | null;
const buttonF = document.getElementById('buttonF') as HTMLButtonElement | null;


//botones de area:
const buttonkm2 = document.getElementById('button-km2') as HTMLButtonElement | null;
const buttonhm2 = document.getElementById('button-hm2') as HTMLButtonElement | null;
const buttondam2 = document.getElementById('button-dam2') as HTMLButtonElement | null;
const buttonm2 = document.getElementById('button-m2') as HTMLButtonElement | null;

//botones de volumen:
const buttonkm3 = document.getElementById('button-km3') as HTMLButtonElement | null;
const buttonhm3 = document.getElementById('button-hm3') as HTMLButtonElement | null;
const buttondam3 = document.getElementById('button-dam3') as HTMLButtonElement | null;
const buttonm3 = document.getElementById('button-m3') as HTMLButtonElement | null;
const buttondm3 = document.getElementById('button-dm3') as HTMLButtonElement | null;
const buttoncm3 = document.getElementById('button-cm3') as HTMLButtonElement | null;
const buttonmm3 = document.getElementById('button-mm3') as HTMLButtonElement | null;

// botones de distancia:
const buttonkm = document.getElementById('button-km') as HTMLButtonElement | null;
const buttonhm = document.getElementById('button-hm') as HTMLButtonElement | null;
const buttondam = document.getElementById('button-dam') as HTMLButtonElement | null;
const buttonm = document.getElementById('button-m') as HTMLButtonElement | null;
const buttondm = document.getElementById('button-dm') as HTMLButtonElement | null;
const buttoncm = document.getElementById('button-cm') as HTMLButtonElement | null;
const buttonmm = document.getElementById('button-mm') as HTMLButtonElement | null;
const buttonum = document.getElementById('button-um') as HTMLButtonElement | null;
const buttonnm = document.getElementById('button-nm') as HTMLButtonElement | null;

// botones de masa:
const buttonkg = document.getElementById('button-kg') as HTMLButtonElement | null;
const buttonhg = document.getElementById('button-hg') as HTMLButtonElement | null;
const buttondag = document.getElementById('button-dag') as HTMLButtonElement | null;
const buttong = document.getElementById('button-g') as HTMLButtonElement | null;
const buttondg = document.getElementById('button-dg') as HTMLButtonElement | null;
const buttoncg = document.getElementById('button-cg') as HTMLButtonElement | null;
const buttonmg = document.getElementById('button-mg') as HTMLButtonElement | null;
const buttonug = document.getElementById('button-ug') as HTMLButtonElement | null;
const buttonng = document.getElementById('button-ng') as HTMLButtonElement | null;




// funcion seleccionadora de boton:
const seleccionarBotonDe = (button: HTMLButtonElement, medida: string): void => { 
  if (button.style.backgroundColor === 'rgb(197, 79, 0)') {
    button.style.backgroundColor = '#1a2941';
    convertirDe = '';
    h3ConversionDe.textContent = ``;
  }
  else {
    button.style.backgroundColor = 'rgb(197, 79, 0)';
    convertirDe = medida;
    h3ConversionDe.textContent = `De: ${convertirDe}`;
  }  
  
}

const seleccionarBotonA = (button: HTMLButtonElement, medida: string): void => { 
  if (button.style.backgroundColor === 'rgb(6, 90, 158)') {
    button.style.backgroundColor = '#1a2941';
    convertirA = '';
    h3ConversionA.textContent = ``;
  }
  else if (convertirA !== medida && convertirA !== ''){
    alert ('primero debe deseleccionar')
  }
  else {
    button.style.backgroundColor = 'rgb(6, 90, 158)';
    convertirA = medida;
    h3ConversionA.textContent = `A: ${convertirA}`;
  }  

  
}



// funcionalidades para los botones
// grados:
if(buttonC && buttonF){
  buttonC.addEventListener('click', () => {
    
    if(convertirDe === '' || convertirDe === 'C'){
      seleccionarBotonDe(buttonC, 'C');
    }
    else seleccionarBotonA(buttonC, 'C');
    
    
  })
  buttonF.addEventListener('click', () => {
    if(convertirDe === '' || convertirDe === 'F'){
    seleccionarBotonDe(buttonF, 'F');
    }
    else seleccionarBotonA(buttonF, 'F');
  })
}

// area:

if(buttonkm2 && buttonhm2 && buttondam2 && buttonm2){
  buttonkm2.addEventListener('click', () => {
    
    if(convertirDe === '' || convertirDe === 'km2'){
      seleccionarBotonDe(buttonkm2, 'km2');
    }
    else seleccionarBotonA(buttonkm2, 'km2');    
  })
  buttonhm2.addEventListener('click', () => {
    
    if(convertirDe === '' || convertirDe === 'hm2'){
      seleccionarBotonDe(buttonhm2, 'hm2');
    }
    else seleccionarBotonA(buttonhm2, 'hm2');    
  })
  buttondam2.addEventListener('click', () => {
  
    if(convertirDe === '' || convertirDe === 'dam2'){
      seleccionarBotonDe(buttondam2, 'dam2');
    }
    else seleccionarBotonA(buttondam2, 'dam2');    
  })  
  buttonm2.addEventListener('click', () => {
  
    if(convertirDe === '' || convertirDe === 'm2'){
      seleccionarBotonDe(buttonm2, 'dam2');
    }
    else seleccionarBotonA(buttonm2, 'm2');    
  })
}

// volumen:
if (buttonkm3 && buttonhm3 && buttondam3 && buttonm3 && buttondm3 && buttoncm3 && buttonmm3) {
  buttonkm3.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'km3') {
      seleccionarBotonDe(buttonkm3, 'km3');
    } else {
      seleccionarBotonA(buttonkm3, 'km3');
    }
  });

  buttonhm3.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'hm3') {
      seleccionarBotonDe(buttonhm3, 'hm3');
    } else {
      seleccionarBotonA(buttonhm3, 'hm3');
    }
  });

  buttondam3.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'dam3') {
      seleccionarBotonDe(buttondam3, 'dam3');
    } else {
      seleccionarBotonA(buttondam3, 'dam3');
    }
  });

  buttonm3.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'm3') {
      seleccionarBotonDe(buttonm3, 'm3');
    } else {
      seleccionarBotonA(buttonm3, 'm3');
    }
  });

  buttondm3.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'dm3') {
      seleccionarBotonDe(buttondm3, 'dm3');
    } else {
      seleccionarBotonA(buttondm3, 'dm3');
    }
  });

  buttoncm3.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'cm3') {
      seleccionarBotonDe(buttoncm3, 'cm3');
    } else {
      seleccionarBotonA(buttoncm3, 'cm3');
    }
  });

  buttonmm3.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'mm3') {
      seleccionarBotonDe(buttonmm3, 'mm3');
    } else {
      seleccionarBotonA(buttonmm3, 'mm3');
    }
  });
}

// DISTANCIA
if (buttonkm && buttonhm && buttondam && buttonm && buttondm && buttoncm && buttonmm && buttonum && buttonnm) {
  buttonkm.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'km') seleccionarBotonDe(buttonkm, 'km');
    else seleccionarBotonA(buttonkm, 'km');
  });
  buttonhm.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'hm') seleccionarBotonDe(buttonhm, 'hm');
    else seleccionarBotonA(buttonhm, 'hm');
  });
  buttondam.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'dam') seleccionarBotonDe(buttondam, 'dam');
    else seleccionarBotonA(buttondam, 'dam');
  });
  buttonm.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'm') seleccionarBotonDe(buttonm, 'm');
    else seleccionarBotonA(buttonm, 'm');
  });
  buttondm.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'dm') seleccionarBotonDe(buttondm, 'dm');
    else seleccionarBotonA(buttondm, 'dm');
  });
  buttoncm.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'cm') seleccionarBotonDe(buttoncm, 'cm');
    else seleccionarBotonA(buttoncm, 'cm');
  });
  buttonmm.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'mm') seleccionarBotonDe(buttonmm, 'mm');
    else seleccionarBotonA(buttonmm, 'mm');
  });
  buttonum.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'um') seleccionarBotonDe(buttonum, 'um');
    else seleccionarBotonA(buttonum, 'um');
  });
  buttonnm.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'nm') seleccionarBotonDe(buttonnm, 'nm');
    else seleccionarBotonA(buttonnm, 'nm');
  });
}

// MASA
if (buttonkg && buttonhg && buttondag && buttong && buttondg && buttoncg && buttonmg && buttonug && buttonng) {
  buttonkg.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'kg') seleccionarBotonDe(buttonkg, 'kg');
    else seleccionarBotonA(buttonkg, 'kg');
  });
  buttonhg.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'hg') seleccionarBotonDe(buttonhg, 'hg');
    else seleccionarBotonA(buttonhg, 'hg');
  });
  buttondag.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'dag') seleccionarBotonDe(buttondag, 'dag');
    else seleccionarBotonA(buttondag, 'dag');
  });
  buttong.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'g') seleccionarBotonDe(buttong, 'g');
    else seleccionarBotonA(buttong, 'g');
  });
  buttondg.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'dg') seleccionarBotonDe(buttondg, 'dg');
    else seleccionarBotonA(buttondg, 'dg');
  });
  buttoncg.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'cg') seleccionarBotonDe(buttoncg, 'cg');
    else seleccionarBotonA(buttoncg, 'cg');
  });
  buttonmg.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'mg') seleccionarBotonDe(buttonmg, 'mg');
    else seleccionarBotonA(buttonmg, 'mg');
  });
  buttonug.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'ug') seleccionarBotonDe(buttonug, 'ug');
    else seleccionarBotonA(buttonug, 'ug');
  });
  buttonng.addEventListener('click', () => {
    if (convertirDe === '' || convertirDe === 'ng') seleccionarBotonDe(buttonng, 'ng');
    else seleccionarBotonA(buttonng, 'ng');
  });
}





// Funciones convertidoras:
//grados:
const celciusAFarenheit = (num: number): number => {
  return (num * 9 / 5) + 32;
}

const farenheitACelcius = (num: number): number => {
  return (num - 32) * 5 / 9;
}

//area:

// Área: convertir a metros cuadrados
const aMetrosCuadrados = (valor: number, unidad: string): number => {
  switch (unidad) {
    case 'km2':
      return valor * 1_000_000;
    case 'hm2':
      return valor * 10_000;
    case 'dam2':
      return valor * 100;
    case 'm2':
      return valor;
    default:
      return valor;
  }
}

// Área: convertir desde metros cuadrados a otra unidad
const desdeMetrosCuadrados = (valor: number, unidadDestino: string): number => {
  switch (unidadDestino) {
    case 'km2':
      return valor / 1_000_000;
    case 'hm2':
      return valor / 10_000;
    case 'dam2':
      return valor / 100;
    case 'm2':
      return valor;
    default:
      return valor;
  }
}

// volumen:
const aMetrosCubicos = (valor: number, unidad: string): number => {
  switch (unidad) {
    case 'km3':
      return valor * 1_000_000_000;
    case 'hm3':
      return valor * 1_000_000;
    case 'dam3':
      return valor * 1_000;
    case 'm3':
      return valor;
    case 'dm3':
      return valor / 1_000;
    case 'cm3':
      return valor / 1_000_000;
    case 'mm3':
      return valor / 1_000_000_000;
    default:
      return valor;
  }
};

const desdeMetrosCubicos = (valor: number, unidadDestino: string): number => {
  switch (unidadDestino) {
    case 'km3':
      return valor / 1_000_000_000;
    case 'hm3':
      return valor / 1_000_000;
    case 'dam3':
      return valor / 1_000;
    case 'm3':
      return valor;
    case 'dm3':
      return valor * 1_000;
    case 'cm3':
      return valor * 1_000_000;
    case 'mm3':
      return valor * 1_000_000_000;
    default:
      return valor;
  }
};

// DISTANCIA: convertir a metros
const aMetros = (valor: number, unidad: string): number => {
  switch (unidad) {
    case 'km': return valor * 1000;
    case 'hm': return valor * 100;
    case 'dam': return valor * 10;
    case 'm': return valor;
    case 'dm': return valor * 0.1;
    case 'cm': return valor * 0.01;
    case 'mm': return valor * 0.001;
    case 'um': return valor * 0.000001; // micrómetros
    case 'nm': return valor * 0.000000001; // nanómetros
    default: return valor;
  }
}

// DISTANCIA: convertir desde metros a otra unidad
const desdeMetros = (valor: number, unidadDestino: string): number => {
  switch (unidadDestino) {
    case 'km': return valor / 1000;
    case 'hm': return valor / 100;
    case 'dam': return valor / 10;
    case 'm': return valor;
    case 'dm': return valor / 0.1;
    case 'cm': return valor / 0.01;
    case 'mm': return valor / 0.001;
    case 'um': return valor / 0.000001;
    case 'nm': return valor / 0.000000001;
    default: return valor;
  }
}

// MASA: convertir a gramos
const aGramos = (valor: number, unidad: string): number => {
  switch (unidad) {
    case 'kg': return valor * 1000;
    case 'hg': return valor * 100;
    case 'dag': return valor * 10;
    case 'g': return valor;
    case 'dg': return valor * 0.1;
    case 'cg': return valor * 0.01;
    case 'mg': return valor * 0.001;
    case 'ug': return valor * 0.000001; // microgramos
    case 'ng': return valor * 0.000000001; // nanogramos
    default: return valor;
  }
}

// MASA: convertir desde gramos a otra unidad
const desdeGramos = (valor: number, unidadDestino: string): number => {
  switch (unidadDestino) {
    case 'kg': return valor / 1000;
    case 'hg': return valor / 100;
    case 'dag': return valor / 10;
    case 'g': return valor;
    case 'dg': return valor / 0.1;
    case 'cg': return valor / 0.01;
    case 'mg': return valor / 0.001;
    case 'ug': return valor / 0.000001;
    case 'ng': return valor / 0.000000001;
    default: return valor;
  }
}







// Agregar elemento al DOM:
if (divResultado && h3ConversionDe) {
  divResultado.appendChild(h3ConversionDe);
  divResultado.appendChild(h3ConversionA);
  h1Resultado.textContent = 'Resultado aquí';
  divResultado.appendChild(h1Resultado);
}

// Lógica para transformar:
const transformar = () => {
  const valor = Number(input.value); // Convertimos a número
  if (isNaN(valor)) {
    h1Resultado.textContent = 'Por favor ingresa un número válido';
    return;
  }

  let resultado: number = 0;


  //para grados
  switch (convertirDe) {
    case 'C':    
      resultado = celciusAFarenheit(valor);
        h1Resultado.textContent = `${valor}°C = ${resultado.toFixed(2)}°F`;
      break;
    case 'F':
      resultado = farenheitACelcius(valor);
        h1Resultado.textContent = `${valor}°F = ${resultado.toFixed(2)}°C`;
      break;   
  }  
  // para area: 

  const unidadesArea = ['km2', 'hm2', 'dam2', 'm2'];
  if (unidadesArea.includes(convertirDe) && unidadesArea.includes(convertirA)) {
    const metrosCuadrados = aMetrosCuadrados(valor, convertirDe);
    const resultadoArea = desdeMetrosCuadrados(metrosCuadrados, convertirA);
    h1Resultado.textContent = `${valor} ${convertirDe} = ${resultadoArea.toFixed(2)} ${convertirA}`;
  }


  // para volumen
  const unidadesVolumen = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
  if (unidadesVolumen.includes(convertirDe) && unidadesVolumen.includes(convertirA)) {
    const metrosCubicos = aMetrosCubicos(valor, convertirDe);
    const resultadoVolumen = desdeMetrosCubicos(metrosCubicos, convertirA);
    h1Resultado.textContent = `${valor} ${convertirDe} = ${resultadoVolumen.toFixed(2)} ${convertirA}`;
    return;
  }

  // PARA DISTANCIA
  const unidadesDistancia = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm', 'um', 'nm'];
  if (unidadesDistancia.includes(convertirDe) && unidadesDistancia.includes(convertirA)) {
    const metros = aMetros(valor, convertirDe);
    const resultadoDistancia = desdeMetros(metros, convertirA);
    h1Resultado.textContent = `${valor} ${convertirDe} = ${resultadoDistancia.toFixed(4)} ${convertirA}`;
    return;
  }

  // PARA MASA
  const unidadesMasa = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg', 'ug', 'ng'];
  if (unidadesMasa.includes(convertirDe) && unidadesMasa.includes(convertirA)) {
    const gramos = aGramos(valor, convertirDe);
    const resultadoMasa = desdeGramos(gramos, convertirA);
    h1Resultado.textContent = `${valor} ${convertirDe} = ${resultadoMasa.toFixed(4)} ${convertirA}`;
    return;
  }


  // si no se seleccionó nada válido
  h1Resultado.textContent = 'Por favor selecciona unidades compatibles para convertir'
}





// para que se actualice el resultado en pantalla
if (input) {
  

  buttonC?.addEventListener('click', transformar);
  buttonF?.addEventListener('click', transformar);

  input.addEventListener('input', () => {
    transformar();
    console.log('esta transformando')
  });
}
