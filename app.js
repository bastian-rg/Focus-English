// 1. BASE DE DATOS (Lista maestra)
let masterDict = [
    // ⚠️ PEGA AQUÍ ADENTRO TUS 1000 PALABRAS EXACTAMENTE COMO LAS TIENES
    {en: "1", es: "uno", categoria: "numero 1", racha: 0, pesoExtra: 0, fallos: 0},
    {en: "2", es: "dos", categoria: "numero 1", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "3", es: "tres", categoria: "numero 2", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "4", es: "cuatro", categoria: "numero 2", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "5", es: "cinco", categoria: "numero 3", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "6", es: "seis", categoria: "numero 3", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "7", es: "siete", categoria: "numero 3", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "8", es: "ocho", categoria: "numero 4", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "9", es: "nueve", categoria: "numero 5", racha: 0, pesoExtra: 0, fallos: 0},
];

// --- CORRECCIÓN 1: LIMPIEZA AUTOMÁTICA DE ESPACIOS ---
// Esto soluciona el problema de que las flashcards se queden en blanco si hay un "espacio extra"
masterDict = masterDict.map(p => {
    return {
        ...p,
        en: p.en.trim(),
        es: p.es.trim()
    };
});

// Carga de progreso guardado
let savedData = localStorage.getItem('focusData');
if (savedData) {
    try {
        let progresoGuardado = JSON.parse(savedData);
        masterDict.forEach(p => {
            let guardada = progresoGuardado.find(g => g.en === p.en);
            if (guardada) { 
                p.racha = guardada.racha || 0; 
                p.pesoExtra = guardada.pesoExtra || 0;
                p.fallos = guardada.fallos || 0; 
            }
        });
    } catch(e) { localStorage.removeItem('focusData'); }
}

// Variables Globales
let actual = {}, modo = 0;
let categoriaActual = "Todas";

/* TIEMPO EN APP */

let tiempoData = JSON.parse(localStorage.getItem('focusTime')) || {
    inicioSemana: Date.now(),
    totalMs: 0,
    semanas: {},
    ultimoInicio: null
};

let timerInterval = null;

// --- CORRECCIÓN 2: VARIABLE DE BLOQUEO PARA EL QUIZ ---
let quizBloqueado = false; 

// 2. NAVEGACIÓN

/* ===== TIEMPO EN APP ===== */

function iniciarTimer(){
    if(tiempoData.ultimoInicio) return;

    tiempoData.ultimoInicio = Date.now();

    timerInterval = setInterval(() => {
        actualizarTiempoPantalla();
    },1000);
}

function pausarTimer(){
    if(!tiempoData.ultimoInicio) return;

    let ahora = Date.now();
    let tiempoSesion = ahora - tiempoData.ultimoInicio;

    tiempoData.totalMs += tiempoSesion;

    let semana = obtenerSemana();

    if(!tiempoData.semanas[semana]){
        tiempoData.semanas[semana] = 0;
    }

    tiempoData.semanas[semana] += tiempoSesion;

    tiempoData.ultimoInicio = null;

    localStorage.setItem(
        'focusTime',
        JSON.stringify(tiempoData)
    );

    clearInterval(timerInterval);
}

function obtenerSemana(){
    let dias = Math.floor(
        (Date.now() - tiempoData.inicioSemana)
        / (1000*60*60*24)
    );

    return Math.floor(dias/7)+1;
}

function formatearTiempo(ms){
    let s = Math.floor(ms/1000);

    let h = String(Math.floor(s/3600)).padStart(2,'0');
    let m = String(Math.floor((s%3600)/60)).padStart(2,'0');
    let sec = String(s%60).padStart(2,'0');

    return `${h}:${m}:${sec}`;
}

function actualizarTiempoPantalla(){
    let total = tiempoData.totalMs;

    if(tiempoData.ultimoInicio){
        total += Date.now() - tiempoData.ultimoInicio;
    }

    let box = document.getElementById('tiempo-total');

    if(box){
        box.innerText = formatearTiempo(total);
    }
}

window.iniciar = function(m) {
    modo = m;
    document.querySelectorAll('#app > div').forEach(e => e.classList.add('hidden'));
    document.getElementById('juego').classList.remove('hidden');
    window.siguiente();
};

window.volver = function() {
    document.querySelectorAll('#app > div').forEach(e => e.classList.add('hidden'));
    document.getElementById('menu').classList.remove('hidden');
};

// 3. LÓGICA DE JUEGO
window.siguiente = function() {
    quizBloqueado = false; // Desbloqueamos el quiz al cambiar de palabra

    // FILTRAR POR CATEGORÍA
    let listaParaUsar = categoriaActual === "Todas" 
        ? masterDict 
        : masterDict.filter(p => p.categoria === categoriaActual);
        
    if (listaParaUsar.length === 0) return;

    let mazoPonderado = [];
    listaParaUsar.forEach(p => {
        mazoPonderado.push(p);
        for (let i = 0; i < p.pesoExtra; i++) {
            mazoPonderado.push(p);
        }
    });

    actual = mazoPonderado[Math.floor(Math.random() * mazoPonderado.length)];

    document.getElementById('texto-palabra').innerText = actual.en;
    
    if(modo === 2) {
        document.getElementById('btn-siguiente').classList.add('hidden');
        renderQuiz();
    } else {
        document.getElementById('btn-siguiente').classList.remove('hidden');
        document.getElementById('opciones').innerHTML = "";
    }
};

function renderQuiz() {
    let container = document.getElementById('opciones');
    container.innerHTML = "";
    quizBloqueado = false; // Aseguramos desbloqueo al renderizar
    
    let opciones = [actual.es];
    
    // Evita errores si hay menos de 4 palabras en la categoría
    while(opciones.length < 4 && opciones.length < masterDict.length) {
        let azar = masterDict[Math.floor(Math.random() * masterDict.length)].es;
        if(!opciones.includes(azar)) opciones.push(azar);
    }
    
    opciones.sort(() => Math.random() - 0.5);
    
    opciones.forEach(o => {
        let btn = document.createElement('button');
        btn.className = 'btn-opcion';
        btn.innerText = o;
        
        btn.onclick = function() { 
            // Si ya se hizo clic, se ignora el resto
            if (quizBloqueado) return; 
            
            quizBloqueado = true; // Bloqueamos el instante en que se presiona
            window.verificar(this, o); 
        };
        
        container.appendChild(btn);
    });
}

window.verificar = function(btn, op) {
    if(op === actual.es) {
        btn.className = "btn-opcion correcta";
        
        actual.racha++; 
        if(actual.pesoExtra > 0) {
            actual.pesoExtra--;
        }
        
        // BORRAR DEL REGISTRO VISUAL DESPUÉS DE 2 ACIERTOS
        if(actual.racha >= 2) {
            actual.fallos = 0;
        }
        
        localStorage.setItem('focusData', JSON.stringify(masterDict));
        setTimeout(window.siguiente, 350);
    } else {
        btn.className = "btn-opcion incorrecta";
        
        actual.racha = 0; 
        actual.pesoExtra += 2;
        actual.fallos++; 
        
        localStorage.setItem('focusData', JSON.stringify(masterDict));
        
        // Quita el color rojo y TE DEJA VOLVER A ELEGIR tras medio segundo
        setTimeout(() => { 
            btn.className = "btn-opcion"; 
            quizBloqueado = false; 
        }, 300);
    }
};

// 4. AJUSTES Y REGISTROS
window.mostrarAjustes = function() {
    document.querySelectorAll('#app > div').forEach(e => e.classList.add('hidden'));
    document.getElementById('ajustes').classList.remove('hidden');
    
    let categoriasUnicas = [...new Set(masterDict.map(p => p.categoria))];
    let contenedorBotones = document.getElementById('lista-categorias');
    contenedorBotones.innerHTML = "";
    
    // Botón "Todas"
    let btnTodas = `<button onclick="window.setCategoria('Todas')" class="btn-ajuste ${categoriaActual === 'Todas' ? 'btn-activa' : ''}">Todas</button>`;
    contenedorBotones.innerHTML += btnTodas;
    
    // Botones individuales por categoría
    categoriasUnicas.forEach(cat => {
        let btnCat = `<button onclick="window.setCategoria('${cat}')" class="btn-ajuste ${categoriaActual === cat ? 'btn-activa' : ''}">${cat}</button>`;
        contenedorBotones.innerHTML += btnCat;
    });
};

window.setCategoria = function(cat) {
    categoriaActual = cat;
    
    // --- CORRECCIÓN 3: REDIRIGIR AL MENÚ PRINCIPAL ---
    window.volver(); 
};

window.mostrarRegistros = function() {
    document.querySelectorAll('#app > div').forEach(e => e.classList.add('hidden'));
    document.getElementById('registros').classList.remove('hidden');
    
    let aprendidasTotales = masterDict.filter(p => p.racha >= 3).length;
    document.getElementById('titulo-aprendidas').innerText = `${aprendidasTotales} / ${masterDict.length}`;
    
    let categoriasHtml = "";
    let categoriasUnicas = [...new Set(masterDict.map(p => p.categoria))];
    
    categoriasUnicas.forEach(cat => {
        let palabrasDeCat = masterDict.filter(p => p.categoria === cat);
        let aprendidasDeCat = palabrasDeCat.filter(p => p.racha >= 3).length;
        let totalDeCat = palabrasDeCat.length;
        
        categoriasHtml += `
            <div class="stat-cat">
                <span class="stat-cat-title">${cat}</span>
                <span class="stat-cat-numbers">${aprendidasDeCat} / ${totalDeCat}</span>
            </div>
        `;
    });
    
    document.getElementById('stats-categorias').innerHTML = categoriasHtml;
    
    let conFallos = masterDict.filter(p => p.fallos > 0).sort((a, b) => b.fallos - a.fallos);
    let t = `<table><tr><th style="text-align: left;">Palabra</th><th style="text-align: center;">Fallos</th></tr>`;
    
    if (conFallos.length === 0) { 
        t += `<tr><td colspan="2" style="text-align: center;">¡Sin fallos pendientes!</td></tr>`;
    } else { 
        conFallos.forEach(p => { 
            t += `<tr class="fila-palabra" onclick="window.practicarPalabra('${p.en}')">
                    <td>${p.en}</td>
                    <td style="text-align: center;">${p.fallos}</td>
                  </tr>`; 
        });
    }
    
    document.getElementById('tabla-registros').innerHTML = t + "</table>";
};

// 5. UTILIDADES Y SALTO DIRECTO DESDE EL REGISTRO
window.practicarPalabra = function(palabraIngles) {
    let palabraEncontrada = masterDict.find(p => p.en === palabraIngles);
    if(!palabraEncontrada) return;
    
    actual = palabraEncontrada;
    modo = 1; // Forzar modo Flashcard
    
    document.querySelectorAll('#app > div').forEach(e => e.classList.add('hidden'));
    document.getElementById('juego').classList.remove('hidden');
    
    document.getElementById('texto-palabra').innerText = actual.en;
    document.getElementById('btn-siguiente').classList.remove('hidden');
    document.getElementById('opciones').innerHTML = "";
};

window.flip = function() { 
    if(modo === 1) { 
        let t = document.getElementById('texto-palabra');
        t.innerText = (t.innerText === actual.en) ? actual.es : actual.en; 
    } 
};

// --- CORRECCIÓN 4: SONIDO ADAPTATIVO AL IDIOMA ---
window.hablar = function() {
    window.speechSynthesis.cancel();

    const m = new SpeechSynthesisUtterance(actual.en);
    let voces = window.speechSynthesis.getVoices();

    // Siempre usar voz en inglés
    m.lang = 'en-US';

    let vozIngles =
        voces.find(v => v.name.includes("Google") && v.lang.includes("en")) ||
        voces.find(v => v.lang.includes("en"));

    if (vozIngles) m.voice = vozIngles;

    m.rate = 0.6;
    m.pitch = 1.2;

    window.speechSynthesis.speak(m);
};

window.presionar = function() { document.getElementById('pantalla').classList.add('presionado'); };
window.soltar = function() { document.getElementById('pantalla').classList.remove('presionado'); };

/* PAUSA / REANUDAR */

document.addEventListener('visibilitychange', () => {
    if(document.hidden){
        pausarTimer();
    }else{
        iniciarTimer();
    }
});

iniciarTimer();

console.log("App cargada");