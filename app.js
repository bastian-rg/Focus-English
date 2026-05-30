// 1. BASE DE DATOS (Lista maestra)
let masterDict = [
    // ⚠️ PEGA AQUÍ ADENTRO TUS 1000 PALABRAS EXACTAMENTE COMO LAS TIENES
    
{
  en: "barely",
  es: "apenas",
  ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para decir que algo ocurre con muy poca intensidad o cantidad:</p>
            <ul style="padding-left: 20px; list-style-type: disc;">
                <li style="margin-bottom: 8px;"><b>I barely slept:</b><br><span style="color: #555;">-Apenas dormí</span></li>
                <li><b>He barely passed the exam:</b><br><span style="color: #555;">-Apenas aprobó el examen</span></li>
            </ul>
        </div>
    `,
  categoria: "Prueba 1",
  racha: 0,
  pesoExtra: 0,
  fallos: 0
},
    
{en: "A", es: "Un / Una (Antes De Sonido Consonante)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "An", es: "Un / Una (Antes De Sonido Vocal)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "The", es: "El / La / Los / Las", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "I", es: "Yo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "You", es: "Tú / Usted / Ustedes", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "He", es: "Él", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "She", es: "Ella", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "It", es: "Ello / Eso (Objeto O Animal)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "We", es: "Nosotros / Nosotras", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "They", es: "Ellos / Ellas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Me", es: "Me / A Mí", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Him", es: "Le / Lo / A Él", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Her", es: "Le / La / A Ella", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Us", es: "Nos / A Nosotros", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Them", es: "Los / Las / Les / A Ellos", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "My", es: "Mi / Mis", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Your", es: "Tu / Tus / Su / Sus (De Ustedes)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "His", es: "Su / Sus (De Él)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Its", es: "Su / Sus (De Ello O Animal)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Our", es: "Nuestro / Nuestra / Nuestros / Nuestras", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Their", es: "Su / Sus (De Ellos / Ellas)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mine", es: "Mío / Mía / Míos / Mías", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Yours", es: "Tuyo / Tuya / Suyos / Suyas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hers", es: "Suyo / Suya (De Ella)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ours", es: "Nuestro / Nuestra / Nuestros / Nuestras (Pronombre)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Theirs", es: "Suyo / Suya / Suyos / Suyas (De Ellos / Ellas)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Myself", es: "Yo Mismo / Me", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Yourself", es: "Tú Mismo / Te", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Himself", es: "Él Mismo / Se", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Herself", es: "Ella Misma / Se", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Itself", es: "Sí Mismo / Se (Objeto O Animal)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ourselves", es: "Nosotros Mismos / Nos", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Yourselves", es: "Ustedes Mismos / Se", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Themselves", es: "Ellos Mismos / Se", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "This", es: "Este / Esta", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "That", es: "Ese / Esa / Aquel / Aquella", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "These", es: "Estos / Estas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Those", es: "Esos / Esas / Aquellos / Aquellas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Who", es: "Quién / Que / Quien", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whom", es: "A Quién / Al Cual", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whose", es: "De Quién / Cuyo / Cuya", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Which", es: "Cuál / El Cual / La Cual", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "What", es: "Qué / Lo Que", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whoever", es: "Quienquiera Que", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whomever", es: "A Quienquiera Que", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whosever", es: "De Quienquiera Que", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whatever", es: "Lo Que Sea / Cualquier Cosa Que", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Someone", es: "Alguien", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Somebody", es: "Alguien (Uso Común)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Something", es: "Algo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Somewhere", es: "En Algún Lugar", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Anyone", es: "Cualquiera / Nadie (En Negación)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Anybody", es: "Cualquiera / Alguien (En Preguntas)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Anything", es: "Cualquier Cosa / Nada", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Anywhere", es: "En Cualquier Lugar", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "No One", es: "Nadie", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nobody", es: "Nadie (Común)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nothing", es: "Nada", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nowhere", es: "En Ningún Lugar", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Everyone", es: "Todos / Todo El Mundo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Everybody", es: "Todos / Cada Uno", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Everything", es: "Todo / Todas Las Cosas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Everywhere", es: "En Todas Partes", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Each", es: "Cada / Cada Uno", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Every", es: "Cada (Acompaña A Un Sustantivo)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "All", es: "Todo / Todos / Todas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Any", es: "Cualquier / Alguno / Algo De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Some", es: "Algunos / Algunas / Un Poco De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "None", es: "Ninguno / Ninguna", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Both", es: "Ambos / Ambas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Either", es: "Cualquiera De Los Dos / Tampoco", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Neither", es: "Ninguno De Los Dos / Tampoco", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Another", es: "Otro / Otra", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Other", es: "Otro / Otros / Otra / Otras", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Others", es: "Otros / Otras (Pronombre Plural)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Several", es: "Varios / Varias", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Many", es: "Muchos / Muchas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Much", es: "Mucho / Mucha", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Few", es: "Pocos / Pocas", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Little", es: "Poco / Poca (Cantidad Incontable)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "More", es: "Más", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Most", es: "La Mayoría De / El Más", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Less", es: "Menos", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Am", es: "Soy / Estoy", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Is", es: "Es / Está", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Are", es: "Somos / Son / Estás / Están", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Was", es: "Era / Fue / Estaba / Estuvo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Were", es: "Eran / Fueron / Estaban / Estuvieron", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Be", es: "Ser / Estar", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Been", es: "Sido / Estado", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Being", es: "Siendo / Estando", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Have", es: "Haber / Tener (Como Auxiliar De Tiempos Compuestos)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Has", es: "Ha / Tiene (Auxiliar Para Tercera Persona)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Had", es: "Había / Tenía / Hubo / Tuvo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Do", es: "Hacer (Auxiliar Para Preguntas/Negaciones En Presente)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Does", es: "Hace (Auxiliar Para Tercera Persona En Presente)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Did", es: "Hizo (Auxiliar Para Tiempo Pasado)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Can", es: "Poder (Habilidad O Permiso)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Could", es: "Podría / Podía / Pudo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Will", es: "Auxiliar Para Formar El Tiempo Futuro", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Would", es: "Auxiliar Para Formar El Condicional (", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shall", es: "Deber (Futuro Formal O Sugerencia)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Should", es: "Debería (Consejo O Recomendación)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "May", es: "Poder (Permiso Formal O Probabilidad)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Might", es: "Podría (Probabilidad Remota)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Must", es: "Deber / Tener Que (Obligación O Deducción Lógica)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ought", es: "Debería / Tener La Obligación Moral De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Of", es: "De (Indica Pertenencia, Origen O Material)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "To", es: "A / Hacia / Para (Dirección O Propósito)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "In", es: "En / Dentro De (Espacio O Tiempo)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "For", es: "Para / Por / Durante", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "On", es: "Sobre / Encima De / En (Superficies O Días)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "With", es: "Con", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "At", es: "En (Lugar Específico, Hora O Dirección)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "By", es: "Por / Al Lado De / Para (Límite De Tiempo)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "From", es: "De / Desde (Origen O Punto De Partida)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Up", es: "Arriba / Hacia Arriba", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "About", es: "Sobre / De / Alrededor De / Aproximadamente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Into", es: "Dentro De / Hacia El Interior De (Con Movimiento)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Over", es: "Sobre / Por Encima De / Más De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Down", es: "Abajo / Hacia Abajo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Off", es: "Fuera De / De / Separado (Indica Desconexión O Alejamiento)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Through", es: "A Través De / Por Medio De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Between", es: "Entre (Dos Personas, Objetos O Puntos)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Out", es: "Fuera / Hacia Afuera", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Against", es: "En Contra De / Contra", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "During", es: "Durante", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Without", es: "Sin", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Under", es: "Debajo De / Bajo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Among", es: "Entre (Tres O Más Personas U Objetos)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Within", es: "Dentro De / A Menos De (Límites Internos De Tiempo/Espacio)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Along", es: "A Lo Largo De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Across", es: "A Través De / Al Otro Lado De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Behind", es: "Detrás De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Toward", es: "Hacia / En Dirección A", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Towards", es: "Hacia (Variante Gramatical)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Up To", es: "Hasta (Límites Cuantitativos O Espaciales)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Out Of", es: "Fuera De / De Entre", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Inside", es: "Dentro / En El Interior De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Outside", es: "Fuera / En El Exterior De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Near", es: "Cerca De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Above", es: "Por Encima De / Arriba De (Sin Contacto Físico)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Below", es: "Por Debajo De / Abajo De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Beneath", es: "Debajo De / Bajo (Estilo Más Formal)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Underneath", es: "Debajo De / Justo Abajo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Beside", es: "Al Lado De / Junto A", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Next To", es: "Al Lado De / Junto A", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Too", es: "Demasiado / También", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Very", es: "Muy", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Quite", es: "Bastante / Completamente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rather", es: "Más Bien / Un Tanto", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Somewhat", es: "Un Tanto / Algo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fairly", es: "Bastante / Medianamente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Almost", es: "Casi", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nearly", es: "Casi / Por Poco", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Enough", es: "Suficiente / Bastante (Modificador De Grado)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Just", es: "Justo / Solo / Apenas / Acabar De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Even", es: "Incluso / Aun", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Already", es: "Ya (En Oraciones Afirmativas)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Yet", es: "Todavía / Ya (En Preguntas Y Negaciones)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Still", es: "Todavía / Aún (Continuidad De Una Acción)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Anymore", es: "Ya No (Usado Al Final De Oraciones Negativas)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ever", es: "Alguna Vez / Siempre", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Never", es: "Nunca / Jamás", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Always", es: "Siempre", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Often", es: "A Menudo / Frecuentemente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sometimes", es: "A Veces", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rarely", es: "Rara Vez / Raras Veces", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Seldom", es: "Casi Nunca / Rara Vez", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scarcely", es: "Apenas / Casi No", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Barely", es: "Apenas / Escasamente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Usually", es: "Usualmente / Por Lo General", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mostly", es: "Mayormente / Principalmente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Perhaps", es: "Tal Vez / Quizás", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Maybe", es: "Tal Vez / A Lo Mejor", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Possibly", es: "Posiblemente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Probably", es: "Probablemente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Not", es: "No (Partícula Para Negar Verbos Y Adjetivos)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Yes", es: "Sí", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "No", es: "No (Como Respuesta O Determinante De Ausencia)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Please", es: "Por Favor", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ouch", es: "¡Ay! (Interjección De Dolor Físico)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Oh", es: "Oh (Interjección De Sorpresa O Comprensión)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hey", es: "Oye / Hola (Interjección Para Llamar La Atención)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hi", es: "Hola (Saludo Informal)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hello", es: "Hola (Saludo Estándar)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bye", es: "Adiós (Despedida Informal)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Why", es: "Por Qué / La Razón Por La Cual", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "How", es: "Cómo / De Qué Manera", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whosoever", es: "Quienquiera Que (Formal)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whatsoever", es: "En Absoluto / Para Nada / De Cualquier Tipo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whichsoever", es: "Cualquiera De Los Cuales / El Que Sea", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Howsoever", es: "De La Manera Que Sea / Comoquiera Que", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whensoever", es: "Cuandoquiera Que / En Cualquier Momento En Que", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wheresoever", es: "Dondequiera Que", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Plenty", es: "De Sobra / Abundancia", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "A Lot", es: "Mucho / Un Montón", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lots", es: "Muchos / Montones", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "A Bit", es: "Un Poco", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "None Of", es: "Ninguno De / Ninguna De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Each Other", es: "El Uno Al Otro / Mutuamente (Entre Dos)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "One Another", es: "Los Unos A Los Otros (Entre Tres O Más)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Else", es: "Más / Otro / De Lo Contrario (Ej: Someone Else)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Least", es: "El Menos / Lo Menos", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fewer", es: "Menos (Para Elementos Contables En Plural)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fewest", es: "El Menor Número De / La Menor Cantidad De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ahead", es: "Adelante / Al Frente / Por Delante", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Forward", es: "Hacia Adelante", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Backward", es: "Hacia Atrás", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Backwards", es: "Hacia Atrás (Direccional Alternativo)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Upwards", es: "Hacia Arriba / De Forma Ascendente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Downwards", es: "Hacia Abajo / De Forma Descendente", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sideways", es: "De Lado / Hacia Un Lado", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Indoors", es: "Dentro De Casa / Bajo Techo", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Outdoors", es: "Al Aire Libre / Afuera", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Abroad", es: "En El Extranjero / Fuera Del País", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Alongside", es: "Al Lado De / Junto A", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Onto", es: "Sobre / Hacia Encima De (Implica Transición O Movimiento)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Upon", es: "Sobre / Encima De (Variante Formal De On)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Throughout", es: "A Lo Largo De / Por Todo (Tiempo O Espacio)", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Past", es: "Más Allá De / Por Delante De / Pasando", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Beyond", es: "Más Allá De / Fuera Del Alcance De", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Versus", es: "Contra / Frente A", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Via", es: "Por Medio De / A Través De / Vía", categoria: "Palabras Funcionales", racha: 0, pesoExtra: 0, fallos: 0},





{en: "Feel", es: "Sentir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fight", es: "Pelear / Luchar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fill", es: "Llenar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Find", es: "Encontrar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Finish", es: "Terminar / Finalizar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fix", es: "Arreglar / Reparar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fly", es: "Volar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fold", es: "Doblar (Ropa, Papel)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Follow", es: "Seguir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Forbid", es: "Prohibir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Forget", es: "Olvidar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Forgive", es: "Perdonar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Freeze", es: "Congelar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fry", es: "Freír", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Gather", es: "Reunir / Juntar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Get", es: "Obtener / Conseguir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Give", es: "Dar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Go", es: "Ir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Grow", es: "Crecer / Cultivar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Guess", es: "Adivinar / Suponer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Guide", es: "Guiar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hang", es: "Colgar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Happen", es: "Ocurrir / Suceder", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hate", es: "Odiar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hear", es: "Oír", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Help", es: "Ayudar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hide", es: "Esconder / Ocultar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hit", es: "Golpear / Pegar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hold", es: "Sostener / Aguantar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hope", es: "Esperar (Tener Esperanza)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hug", es: "Abrazar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hunt", es: "Cazar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hurry", es: "Apresurarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hurt", es: "Lastimar / Doler", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Imagine", es: "Imaginar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Improve", es: "Mejorar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Include", es: "Incluir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Increase", es: "Aumentar / Incrementar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Inform", es: "Informar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Introduce", es: "Presentar (A Alguien)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Invent", es: "Inventar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Invite", es: "Invitar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Join", es: "Unirse / Acompañar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Joke", es: "Bromear", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Jump", es: "Saltar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Keep", es: "Mantener / Guardar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Kick", es: "Patear", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Kill", es: "Matar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Kiss", es: "Besar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Knock", es: "Tocar (La Puerta) / Golpear", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Know", es: "Saber / Conocer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Laugh", es: "Reír", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lay", es: "Colocar / Poner", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lead", es: "Liderar / Guiar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Learn", es: "Aprender", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Leave", es: "Dejar / Salir / Irse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lend", es: "Prestar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Let", es: "Permitir / Dejar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lie", es: "Mentir / Recostarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lift", es: "Levantar / Elevar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Like", es: "Gustar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Listen", es: "Escuchar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Live", es: "Vivir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Load", es: "Cargar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lock", es: "Cerrar Con Llave", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Look", es: "Mirar / Parecer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lose", es: "Perder", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Love", es: "Amar / Encantar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Make", es: "Hacer / Fabricar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Manage", es: "Gestionar / Administrar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mark", es: "Marcar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Marry", es: "Casarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Match", es: "Emparejar / Combinar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Matter", es: "Importar (Relevancia)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mean", es: "Significar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Measure", es: "Medir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Meet", es: "Conocer / Reunirse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Melt", es: "Derretir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mention", es: "Mencionar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mix", es: "Mezclar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Move", es: "Mover / Mudarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Multiply", es: "Multiplicar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Name", es: "Nombrar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Notice", es: "Notar / Darse Cuenta", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Offer", es: "Ofrecer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Open", es: "Abrir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Order", es: "Ordenar / Pedir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Organize", es: "Organizar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pack", es: "Empacar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Paint", es: "Pintar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pass", es: "Pasar / Aprobar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pay", es: "Pagar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Perform", es: "Interpretar / Ejecutar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pick", es: "Recoger / Elegir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Plan", es: "Planear", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Play", es: "Jugar / Tocar (Instrumento)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Point", es: "Señalar / Apuntar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pour", es: "Verter", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Practice", es: "Practicar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Praise", es: "Elogiar / Alabar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Prefer", es: "Preferir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Prepare", es: "Preparar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Present", es: "Presentar / Exponer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Prevent", es: "Prevenir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Print", es: "Imprimir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Produce", es: "Producir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Promise", es: "Prometer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Protect", es: "Proteger", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Prove", es: "Probar / Demostrar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Provide", es: "Proveer / Proporcionar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pull", es: "Jalar / Tirar De", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Punish", es: "Castigar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Push", es: "Empujar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Put", es: "Poner / Colocar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Quarrel", es: "Discutir / Pelear Verbalmente", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Question", es: "Cuestionar / Interrogar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Quiet", es: "Calmar / Silenciar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Quit", es: "Renunciar / Abandonar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Race", es: "Competir (En Carrera)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rain", es: "Llover", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Raise", es: "Levantar / Criar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Reach", es: "Alcanzar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Read", es: "Leer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Receive", es: "Recibir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Record", es: "Grabar / Registrar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Reduce", es: "Reducir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Refuse", es: "Rechazar / Negarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Regret", es: "Lamentar / Arrepentirse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rejoice", es: "Alegrarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Relax", es: "Relajarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Remain", es: "Permanecer / Quedarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Remember", es: "Recordar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Remind", es: "Recordar (A Alguien Más)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Remove", es: "Quitar / Eliminar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Repair", es: "Reparar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Repeat", es: "Repetir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Replace", es: "Reemplazar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Reply", es: "Responder (Mensajes/Preguntas)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Report", es: "Reportar / Informar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Request", es: "Solicitar / Pedir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rescue", es: "Rescatar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Reserve", es: "Reservar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Reset", es: "Reiniciar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Resist", es: "Resistir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Resolve", es: "Resolver", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Respect", es: "Respetar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rest", es: "Descansar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Result", es: "Resultar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Return", es: "Regresar / Devolver", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Review", es: "Revisar / Repasar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Reward", es: "Recompensar / Premiar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ride", es: "Montar / Pasear En", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ring", es: "Sonar (Teléfono/Timbre)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rise", es: "Subir / Elevarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Risk", es: "Arriesgar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rob", es: "Robar (Con Fuerza/A Alguien)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rock", es: "Mecer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Roll", es: "Rodar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Row", es: "Remar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rub", es: "Frotar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ruin", es: "Arruinar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Run", es: "Correr", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rush", es: "Apresurarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sail", es: "Navegar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Satisfy", es: "Satisfacer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Save", es: "Salvar / Ahorrar / Guardar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Say", es: "Decir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scare", es: "Asustar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scold", es: "Regañar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scrape", es: "Raspar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scratch", es: "Rascar / Rayar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scream", es: "Gritar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scrub", es: "Fregar / Tallar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Search", es: "Buscar (Minuciosamente)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "See", es: "Ver", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Seek", es: "Buscar (Objetivos/Ideas)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Seem", es: "Parecer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Seize", es: "Agarrar / Incautar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Select", es: "Seleccionar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sell", es: "Vender", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Send", es: "Enviar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sense", es: "Percibir / Sentir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Separate", es: "Separar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Serve", es: "Servir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Set", es: "Configurar / Establecer", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Settle", es: "Establecerse / Resolver", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sew", es: "Coser", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shake", es: "Sacudir / Agitar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Share", es: "Compartir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sharpen", es: "Afilar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shave", es: "Afeitarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shelter", es: "Refugiar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shine", es: "Brillar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shiver", es: "Temblar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shock", es: "Impactar / Conmocionar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shoot", es: "Disparar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shop", es: "Comprar (Ir De Compras)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shout", es: "Gritar (Voz Alta)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Show", es: "Mostrar / Enseñar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shrink", es: "Encoger", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shut", es: "Cerrar (De Golpe)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sigh", es: "Suspirar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sign", es: "Firmar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Signal", es: "Hacer Señales", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Silence", es: "Silenciar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sin", es: "Pecar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sing", es: "Cantar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sink", es: "Hundir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sip", es: "Sorber", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sit", es: "Sentarse", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ski", es: "Esquiar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Skip", es: "Omitir / Saltar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Slap", es: "Abofetear", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sleep", es: "Dormir", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Slide", es: "Deslizar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Slip", es: "Resbalar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Slow", es: "Ralentizar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Smash", es: "Aplastar / Estrellar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Smell", es: "Oler", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Smile", es: "Sonreír", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Smoke", es: "Fumar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Smooth", es: "Alisar / Suavizar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Snap", es: "Chasquear", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sneeze", es: "Estornudar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Snow", es: "Nevar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Solve", es: "Resolver (Problemas)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Speak", es: "Hablar", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Spell", es: "Deletrear", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Spend", es: "Gastar (Dinero) / Pasar (Tiempo)", categoria: "Verbos de Acción", racha: 0, pesoExtra: 0, fallos: 0},





{en: "Chair", es: "Silla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Desk", es: "Escritorio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bed", es: "Cama", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sofa", es: "Sofá", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lamp", es: "Lámpara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Door", es: "Puerta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Window", es: "Ventana", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wall", es: "Pared", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Floor", es: "Piso / Suelo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Roof", es: "Techo (Exterior)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Key", es: "Llave", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lock", es: "Cerradura / Candado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bag", es: "Bolsa / Saco", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Box", es: "Caja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bottle", es: "Botella", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cup", es: "Taza", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Glass", es: "Vaso / Vidrio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Plate", es: "Plato", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bowl", es: "Tazón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Spoon", es: "Cuchara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fork", es: "Tenedor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Knife", es: "Cuchillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pan", es: "Sartén", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pot", es: "Olla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Towel", es: "Toalla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Soap", es: "Jabón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Brush", es: "Cepillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mirror", es: "Espejo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Clock", es: "Reloj (De Pared)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Watch", es: "Reloj (De Pulsera)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Phone", es: "Teléfono", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Computer", es: "Computadora", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Book", es: "Libro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pen", es: "Bolígrafo / Pluma", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pencil", es: "Lápiz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Paper", es: "Papel", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Notebook", es: "Cuaderno", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wallet", es: "Billetera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Purse", es: "Bolso (De Mujer)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Money", es: "Dinero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Coin", es: "Moneda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bill", es: "Billete / Cuenta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Card", es: "Tarjeta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shirt", es: "Camisa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pants", es: "Pantalones", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dress", es: "Vestido", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Skirt", es: "Falda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Jacket", es: "Chaqueta / Chamarra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Coat", es: "Abrigo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shoes", es: "Zapatos", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Socks", es: "Calcetines", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hat", es: "Sombrero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cap", es: "Gorra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Glove", es: "Guante", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scarf", es: "Bufanda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ring", es: "Anillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Necklace", es: "Collar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Umbrella", es: "Paraguas", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bread", es: "Pan", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Butter", es: "Mantequilla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cheese", es: "Queso", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Milk", es: "Leche", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Egg", es: "Huevo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Meat", es: "Carne", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Chicken", es: "Pollo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fish", es: "Pescado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fruit", es: "Fruta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Apple", es: "Manzana", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Banana", es: "Plátano / Banano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Vegetable", es: "Vegetal / Verdura", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Potato", es: "Papa / Patata", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tomato", es: "Tomate", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Onion", es: "Cebolla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Salt", es: "Sal", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pepper", es: "Pimienta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sugar", es: "Azúcar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Water", es: "Agua", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Juice", es: "Jugo / Zumo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Coffee", es: "Café", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tea", es: "Té", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rice", es: "Arroz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Beans", es: "Frijoles / Judías", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pasta", es: "Pasta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Soup", es: "Sopa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Salad", es: "Ensalada", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sauce", es: "Salsa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Kitchen", es: "Cocina", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bathroom", es: "Baño", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bedroom", es: "Dormitorio / Recámara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Living Room", es: "Sala De Estar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "House", es: "Casa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Apartment", es: "Apartamento / Departamento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Building", es: "Edificio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Office", es: "Oficina", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "School", es: "Escuela", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Class", es: "Clase", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Teacher", es: "Maestro / Profesor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Student", es: "Estudiante", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lesson", es: "Lección", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Homework", es: "Tarea Escolar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Test", es: "Examen / Prueba", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Grade", es: "Calificación / Grado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "University", es: "Universidad", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "College", es: "Colegio / Facultad", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Library", es: "Biblioteca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hospital", es: "Hospital", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Doctor", es: "Doctor / Médico", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nurse", es: "Enfermera/O", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Patient", es: "Paciente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Medicine", es: "Medicina / Medicamento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pharmacy", es: "Farmacia", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Store", es: "Tienda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shop", es: "Tienda Pequeña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Market", es: "Mercado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Supermarket", es: "Supermercado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mall", es: "Centro Comercial", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Restaurant", es: "Restaurante", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hotel", es: "Hotel", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bank", es: "Banco", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Church", es: "Iglesia", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Park", es: "Parque", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Street", es: "Calle", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Road", es: "Camino / Carretera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Highway", es: "Autopista", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sidewalk", es: "Acera / Banqueta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bridge", es: "Puente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Car", es: "Auto / Coche", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bus", es: "Autobús", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Train", es: "Tren", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bicycle", es: "Bicicleta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Airplane", es: "Avión", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Boat", es: "Barco / Bote", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Station", es: "Estación", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Airport", es: "Aeropuerto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Harbor", es: "Puerto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "City", es: "Ciudad", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Town", es: "Pueblo / Ciudad Pequeña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Village", es: "Aldea", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Country", es: "País / Campo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "State", es: "Estado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nation", es: "Nación", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "World", es: "Mundo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Continent", es: "Continente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ocean", es: "Océano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sea", es: "Mar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "River", es: "Río", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lake", es: "Lago", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pond", es: "Estanque", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pool", es: "Piscina / Alberca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mountain", es: "Montaña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hill", es: "Colina / Cerro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Valley", es: "Valle", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Forest", es: "Bosque", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Jungle", es: "Selva", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Desert", es: "Desierto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Beach", es: "Playa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Coast", es: "Costa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Island", es: "Isla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Field", es: "Campo / Cancha", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Garden", es: "Jardín", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Farm", es: "Granja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Yard", es: "Patio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Balcony", es: "Balcón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Garage", es: "Garaje / Cochera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Basement", es: "Sótano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Attic", es: "Ático", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Chimney", es: "Chimenea", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fence", es: "Cerca / Valla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Gate", es: "Puerta Exterior / Portón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Path", es: "Sendero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lawn", es: "Césped", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mud", es: "Lodo / Barro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dirt", es: "Tierra / Suciedad", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dust", es: "Polvo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sand", es: "Arena", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rock", es: "Roca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Stone", es: "Piedra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Clay", es: "Arcilla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Gold", es: "Oro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Silver", es: "Plata", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Iron", es: "Hierro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Copper", es: "Cobre", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Steel", es: "Acero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wood", es: "Madera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Plastic", es: "Plástico", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cloth", es: "Tela", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Leather", es: "Cuero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wool", es: "Lana", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Silk", es: "Seda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cotton", es: "Algodón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Thread", es: "Hilo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Needle", es: "Aguja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Scissors", es: "Tijeras", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tool", es: "Herramienta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hammer", es: "Martillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nail", es: "Clavo / Uña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Screw", es: "Tornillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Saw", es: "Sierra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ladder", es: "Escalera (De Mano)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rope", es: "Cuerda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Chain", es: "Cadena", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wheel", es: "Rueda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Engine", es: "Motor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Machine", es: "Máquina", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Instrument", es: "Instrumento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Radio", es: "Radio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Television", es: "Televisión", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Camera", es: "Cámara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Calendar", es: "Calendario", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Map", es: "Mapa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Compass", es: "Brújula / Compás", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Flag", es: "Bandera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Picture", es: "Imagen / Cuadro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Photo", es: "Fotografía", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Frame", es: "Marco", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Vase", es: "Jarrón / Florero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Flower", es: "Flor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Plant", es: "Planta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Leaf", es: "Hoja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tree", es: "Árbol", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Branch", es: "Rama", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Root", es: "Raíz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Seed", es: "Semilla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Grass", es: "Pasto / Hierba", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Weed", es: "Maleza", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bush", es: "Arbusto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Animal", es: "Animal", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dog", es: "Perro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cat", es: "Gato", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bird", es: "Pájaro / Ave", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Horse", es: "Caballo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cow", es: "Vaca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pig", es: "Cerdo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sheep", es: "Oveja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Duck", es: "Pato", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lion", es: "León", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tiger", es: "Tigre", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bear", es: "Oso", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Elephant", es: "Elefante", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Monkey", es: "Mono", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Snake", es: "Serpiente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Frog", es: "Rana", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lizard", es: "Lagarto / Lagartija", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Insect", es: "Insecto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ant", es: "Hormiga", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bee", es: "Abeja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fly", es: "Mosca (Sustantivo)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mosquito", es: "Mosquito", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Spider", es: "Araña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Worm", es: "Gusano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shell", es: "Concha / Caparazón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bone", es: "Hueso", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Blood", es: "Sangre", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Heart", es: "Corazón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Brain", es: "Cerebro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lung", es: "Pulmón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Stomach", es: "Estómago", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Liver", es: "Hígado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Skin", es: "Piel", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hair", es: "Cabello / Pelo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Face", es: "Cara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Eye", es: "Ojo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ear", es: "Oreja / Oído", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nose", es: "Nariz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mouth", es: "Boca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lip", es: "Labio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tooth", es: "Diente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tongue", es: "Lengua", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Neck", es: "Cuello", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shoulder", es: "Hombro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Arm", es: "Brazo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Elbow", es: "Codo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wrist", es: "Muñeca (Anatomía)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hand", es: "Mano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Finger", es: "Dedo (De La Mano)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Thumb", es: "Pulgar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Leg", es: "Pierna", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Knee", es: "Rodilla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ankle", es: "Tobillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Foot", es: "Pie", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Toe", es: "Dedo Del Pie", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Chest", es: "Pecho", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Waist", es: "Cintura", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hip", es: "Cadera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Side", es: "Lado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Muscle", es: "Músculo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nerve", es: "Nervio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Vein", es: "Vena", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Breath", es: "Aliento / Respiración", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Voice", es: "Voz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Laugh", es: "Risa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Smile", es: "Sonrisa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tear", es: "Lágrima", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sigh", es: "Suspiro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dream", es: "Sueño", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Thought", es: "Pensamiento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Mind", es: "Mente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Soul", es: "Alma", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Spirit", es: "Espíritu", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ghost", es: "Fantasma", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Angel", es: "Ángel", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Devil", es: "Diablo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "God", es: "Dios", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Heaven", es: "Cielo / Paraíso", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hell", es: "Infierno", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Universe", es: "Universo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Galaxy", es: "Galaxia", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Space", es: "Espacio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Planet", es: "Planeta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Star", es: "Estrella", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sun", es: "Sol", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Moon", es: "Luna", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sky", es: "Cielo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cloud", es: "Nube", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rain", es: "Lluvia (Sustantivo)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Snow", es: "Nieve (Sustantivo)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wind", es: "Viento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Storm", es: "Tormenta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Thunder", es: "Trueno", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Lightning", es: "Relámpago / Rayo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Weather", es: "Clima / Tiempo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Climate", es: "Clima (General)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Temperature", es: "Temperatura", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Heat", es: "Calor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cold", es: "Frío (Sustantivo)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ice", es: "Hielo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Frost", es: "Escarcha", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Vapor", es: "Vapor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Steam", es: "Vapor (De Agua)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Smoke", es: "Humo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ash", es: "Ceniza", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Flame", es: "Llama / Fuego", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Spark", es: "Chispa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wave", es: "Ola / Onda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tide", es: "Marea", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Current", es: "Corriente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Flood", es: "Inundación", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Drought", es: "Sequía", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Earthquake", es: "Terremoto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Volcano", es: "Volcán", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fire", es: "Fuego / Incendio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Air", es: "Aire", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Earth", es: "Tierra (Planeta)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ground", es: "Suelo / Tierra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Focus", es: "Enfoque", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Habit", es: "Hábito", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tradition", es: "Tradición", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Goal", es: "Meta / Objetivo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Idea", es: "Idea", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},







{en: "Small", es: "Pequeño", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tall", es: "Alto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Short", es: "Corto / Bajo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Long", es: "Largo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wide", es: "Ancho", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Narrow", es: "Estrecho", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Heavy", es: "Pesado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Light", es: "Ligero / Claro", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Strong", es: "Fuerte", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Weak", es: "Débil", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fast", es: "Rápido", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Slow", es: "Lento", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Young", es: "Joven", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Old", es: "Viejo / Antiguo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "New", es: "Nuevo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ancient", es: "Antiguo (Muy Viejo)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Modern", es: "Moderno", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Clean", es: "Limpio", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dirty", es: "Sucio", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hot", es: "Caliente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cold", es: "Frío (Adjetivo)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Warm", es: "Cálido", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cool", es: "Fresco / Genial", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dry", es: "Seco", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wet", es: "Mojado / Húmedo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Soft", es: "Suave", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hard", es: "Duro / Difícil", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rough", es: "Áspero", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Smooth", es: "Liso / Suave", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sharp", es: "Afilado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dull", es: "Sin Filo / Aburrido", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bright", es: "Brillante", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dark", es: "Oscuro", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Quiet", es: "Silencioso / Tranquilo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Loud", es: "Ruidoso / Fuerte (Sonido)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rich", es: "Rico / Adinerado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Poor", es: "Pobre", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Full", es: "Lleno", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Empty", es: "Vacío", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Safe", es: "Seguro", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dangerous", es: "Peligroso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Simple", es: "Simple", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Complex", es: "Complejo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Easy", es: "Fácil", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Difficult", es: "Difícil", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Possible", es: "Posible", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Impossible", es: "Imposible", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ready", es: "Listo / Preparado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Busy", es: "Ocupado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Free", es: "Libre / Gratis", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Happy", es: "Feliz", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sad", es: "Triste", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Angry", es: "Enojado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Calm", es: "Calmado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nervous", es: "Nervioso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Proud", es: "Orgulloso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shy", es: "Tímido", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Brave", es: "Valiente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Honest", es: "Honesto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Kind", es: "Amable", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Polite", es: "Educado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rude", es: "Grosero", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Friendly", es: "Amigable", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Helpful", es: "Útil / Servicial", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Careful", es: "Cuidadoso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Careless", es: "Descuidado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Curious", es: "Curioso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Creative", es: "Creativo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Serious", es: "Serio", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Funny", es: "Divertido / Gracioso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Strange", es: "Extraño / Raro", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Normal", es: "Normal", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Famous", es: "Famoso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Popular", es: "Popular", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Local", es: "Local", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Global", es: "Global / Mundial", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Cheap", es: "Barato", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Expensive", es: "Caro / Costoso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Valuable", es: "Valioso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Worthless", es: "Sin Valor", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Real", es: "Real / Verdadero", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fake", es: "Falso (Imitación)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "True", es: "Verdadero (Hecho)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "False", es: "Falso (Incorrecto)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Right", es: "Correcto / Derecho", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wrong", es: "Incorrecto / Equivocado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Correct", es: "Correcto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Incorrect", es: "Incorrecto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Beautiful", es: "Hermoso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Ugly", es: "Feo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Pretty", es: "Bonito", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Handsome", es: "Guapo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Neat", es: "Ordenado / Pulcro", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Messy", es: "Desordenado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Thick", es: "Grueso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Thin", es: "Delgado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fat", es: "Gordo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Skinny", es: "Flaco", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Healthy", es: "Saludable / Sano", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sick", es: "Enfermo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Alive", es: "Vivo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Dead", es: "Muerto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Public", es: "Público", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Private", es: "Privado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Secret", es: "Secreto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "General", es: "General", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Special", es: "Especial", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Common", es: "Común", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Rare", es: "Raro / Inusual", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Natural", es: "Natural", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Artificial", es: "Artificial", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Perfect", es: "Perfecto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Imperfect", es: "Imperfecto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Early", es: "Temprano", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Late", es: "Tarde (Tiempo)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Deep", es: "Profundo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Shallow", es: "Superficial / Poco Profundo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Tight", es: "Apretado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Loose", es: "Flojo / Suelto", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sweet", es: "Dulce", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sour", es: "Agrio", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Bitter", es: "Amargo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Salty", es: "Salado", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Spicy", es: "Picante", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Delicious", es: "Delicioso", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Fresh", es: "Fresco", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Stale", es: "Rancio / Viejo (Comida)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Well", es: "Bien (Adverbio)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Badly", es: "Mal (Adverbio)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Quickly", es: "Rápidamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Slowly", es: "Lentamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Softly", es: "Suavemente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Loudly", es: "Fuertemente (Sonido)", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Quietly", es: "Silenciosamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Silently", es: "En Silencio", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Easily", es: "Fácilmente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hardly", es: "Apenas / Casi No", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Carefully", es: "Cuidadosamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Carelessly", es: "Descuidadamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Happily", es: "Felizmente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Sadly", es: "Tristemente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Angrily", es: "Con Enojo", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Calmly", es: "Calmadamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Beautifully", es: "Hermosamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Correctly", es: "Correctamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wrongly", es: "Erróneamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Truly", es: "Verdaderamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Perfectly", es: "Perfectamente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Naturally", es: "Naturalmente", categoria: "Adjetivos y Adverbios", racha: 0, pesoExtra: 0, fallos: 0},








{en: "But", es: "Pero", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Or", es: "O", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "So", es: "Así Que / Por Lo Tanto", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Because", es: "Porque (Respuesta/Razón)", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Although", es: "Aunque", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Though", es: "Aunque / Sin Embargo", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Even Though", es: "A Pesar De Que / Aun Cuando", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "While", es: "Mientras / Mientras Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whereas", es: "Mientras Que / Por El Contrario", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Since", es: "Ya Que / Puesto Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "As", es: "Como / A Medida Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "If", es: "Si (Condición)", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Unless", es: "A Menos Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Until", es: "Hasta Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Before", es: "Antes De Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "After", es: "Después De Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "When", es: "Cuando", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whenever", es: "Cada Vez Que / Siempre Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Where", es: "Donde", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wherever", es: "Dondequiera Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Once", es: "Una Vez Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Therefore", es: "Por Lo Tanto", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "However", es: "Sin Embargo", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Moreover", es: "Es Más / Además", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Furthermore", es: "Además", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Besides", es: "Además De / Aparte De", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Instead", es: "En Lugar De Eso", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Otherwise", es: "De Otro Modo / De Lo Contrario", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Meanwhile", es: "Mientras Tanto", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Afterward", es: "Después / Más Tarde", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Hence", es: "De Ahí Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Thus", es: "Por Consiguiente / De Este Modo", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Thereby", es: "Con Ello / De Tal Modo", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Wherein", es: "En Donde / En El Cual", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whereby", es: "Por Medio Del Cual", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Namely", es: "A Saber / Es Decir", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nevertheless", es: "No Obstante", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Nonetheless", es: "Sin Embargo / Aún Así", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Consequently", es: "En Consecuencia / Por Consiguiente", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Instead Of", es: "En Lugar De", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "As Well As", es: "Así Como / Además De", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "In Order To", es: "Para / Con El Fin De", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "So That", es: "Para Que / De Modo Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Even If", es: "Incluso Si / Aun Si", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Provided That", es: "Siempre Y Cuando / Con Tal De Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "In Case", es: "En Caso De Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Whether", es: "Si (En Alternativas:Si Esto O Lo Otro)", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "Due To", es: "Debido A", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},
{en: "As Long As", es: "Siempre Que / Mientras Que", categoria: "Conectores", racha: 0, pesoExtra: 0, fallos: 0},


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
    estadoFlashcard = 0;
    
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
    
    
    // SOLO palabras de la categoría seleccionada
let poolCategoria = categoriaActual === "Todas"
    ? masterDict
    : masterDict.filter(p => p.categoria === categoriaActual);

// Evita errores si hay menos de 4 palabras
while(opciones.length < 4 && opciones.length < poolCategoria.length) {
    let azar = poolCategoria[
        Math.floor(Math.random() * poolCategoria.length)
    ].es;

    if(!opciones.includes(azar)) {
        opciones.push(azar);
    }
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
    estadoFlashcard = 0;
    document.getElementById('btn-siguiente').classList.remove('hidden');
    document.getElementById('opciones').innerHTML = "";
};

let estadoFlashcard = 0;

window.flip = function() {
    if(modo !== 1) return;

    let t = document.getElementById('texto-palabra');

    if(estadoFlashcard === 0){
        t.innerText = actual.es;
        estadoFlashcard = 1;
    }
    else if(estadoFlashcard === 1){
        t.innerHTML = actual.ejemplo || "Sin ejemplo";
        estadoFlashcard = 2;
    }
    else{
        t.innerText = actual.en;
        estadoFlashcard = 0;
    }
};

// --- CORRECCIÓN 4: SONIDO ADAPTATIVO AL IDIOMA ---
// --- CORRECCIÓN 4: SONIDO ADAPTATIVO AL IDIOMA ---
window.hablar = function() {
    window.speechSynthesis.cancel();

    const m = new SpeechSynthesisUtterance(actual.en);
    let voces = window.speechSynthesis.getVoices();

    // Siempre usar idioma inglés estadounidense
    m.lang = 'en-US';

    // Buscador inteligente de la mejor voz disponible
    let vozIngles =
        // 1. Intentar buscar voces premium mejoradas de Apple (iPhone)
        voces.find(v => v.lang === 'en-US' && v.name.includes('Enhanced')) ||
        // 2. Si no hay, intentar usar la voz de Siri (iPhone)
        voces.find(v => v.lang === 'en-US' && v.name.includes('Siri')) ||
        // 3. Si no hay, usar a 'Samantha' (La voz de mujer clásica y ultra clara de Apple)
        voces.find(v => v.lang === 'en-US' && v.name.includes('Samantha')) ||
        // 4. Si es Android, usar la voz de Google por defecto
        voces.find(v => v.name.includes("Google") && v.lang.includes("en")) ||
        // 5. Emergencia por si falla todo lo anterior
        voces.find(v => v.lang.includes("en"));

    if (vozIngles) m.voice = vozIngles;

    // --- MEJORA DE PRONUNCIACIÓN PARA APRENDIZAJE ---
    // Subido de 0.6 a 0.85 (0.6 era demasiado lento y hacía sonar la voz robótica/deformada)
    m.rate = 0.85; 
    
    // Bajado de 1.2 a 1.0 (El tono 1.0 es el tono humano natural, 1.2 hacía sonar la voz chillona)
    m.pitch = 1.0; 

    window.speechSynthesis.speak(m);
};

// Asegurar que iPhone cargue la lista de voces a tiempo
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

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

