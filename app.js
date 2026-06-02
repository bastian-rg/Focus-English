// 1. BASE DE DATOS (Lista maestra)
let masterDict = [
    // ⚠️ PEGA AQUÍ ADENTRO TUS 1000 PALABRAS EXACTAMENTE COMO LAS TIENES


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



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
    en: "Feel",
    es: "Sentir / Sentirse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar sentimientos, emociones o estados físicos.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I feel happy today.</b><br><span style="color: #555;">-Me siento feliz hoy.</span></li>
                <li><b>Do you feel cold?</b><br><span style="color: #555;">-¿Tienes frío?</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Aclaración: No confundir su pronunciación con Fill. Feel suena con una "i" larga (fíil).</p>
        </div>
    `
},
{
    en: "Fight",
    es: "Pelear / Luchar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para hablar de pelear, discutir o luchar por algo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>They fight a lot.</b><br><span style="color: #555;">-Ellos pelean mucho.</span></li>
                <li><b>Fight for your dreams.</b><br><span style="color: #555;">-Lucha por tus sueños.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Fill",
    es: "Llenar / Completar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar que se está llenando o completando algo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Fill the glass with water.</b><br><span style="color: #555;">-Llena el vaso con agua.</span></li>
                <li><b>Fill out this form.</b><br><span style="color: #555;">-Llena este formulario.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Aclaración: No confundir con Feel. Fill suena con una "i" corta y seca (fil).</p>
        </div>
    `
},
{
    en: "Find",
    es: "Encontrar / Localizar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando localizas algo que estabas buscando o descubres algo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I can't find my keys.</b><br><span style="color: #555;">-No encuentro mis llaves.</span></li>
                <li><b>Did you find a job?</b><br><span style="color: #555;">-¿Encontraste un trabajo?.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Finish",
    es: "Terminar / Acabar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar que se ha terminado una tarea, acción o evento.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I need to finish my homework.</b><br><span style="color: #555;">-Necesito terminar mi tarea.</span></li>
                <li><b>What time does the movie finish?</b><br><span style="color: #555;">-¿A qué hora termina la película?.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Aclaración: A diferencia de End (que habla del límite o final de algo), Finish se enfoca en completar una acción.</p>
        </div>
    `
},
{
    en: "Fix",
    es: "Reparar / Solucionar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa principalmente para reparar algo roto o solucionar un problema.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Can you fix my phone?</b><br><span style="color: #555;">-¿Puedes reparar mi teléfono?.</span></li>
                <li><b>Let's fix this problem.</b><br><span style="color: #555;">-Vamos a solucionar este problema.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Fly",
    es: "Volar / Mosca",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para la acción de volar. También significa "mosca" como sustantivo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Birds can fly high.</b><br><span style="color: #555;">-Los pájaros pueden volar alto.</span></li>
                <li><b>There is a fly in my room.</b><br><span style="color: #555;">-Hay una mosca en mi habitación.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Fold",
    es: "Doblar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para la acción de doblar materiales flexibles como ropa o papel.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Please, fold your clothes.</b><br><span style="color: #555;">-Por favor, dobla tu ropa.</span></li>
                <li><b>Fold the paper in half.</b><br><span style="color: #555;">-Dobla el papel por la mitad.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Follow",
    es: "Seguir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para ir detrás de alguien, continuar un camino o seguir a alguien en redes.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Follow me, please.</b><br><span style="color: #555;">-Sígueme, por favor.</span></li>
                <li><b>I follow you on Instagram.</b><br><span style="color: #555;">-Te sigo en Instagram.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Forbid",
    es: "Prohibir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para prohibir formalmente que se haga algo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I forbid you to go.</b><br><span style="color: #555;">-Te prohíbo ir.</span></li>
                <li><b>Rules forbid smoking here.</b><br><span style="color: #555;">-Las reglas prohíben fumar aquí.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Forget",
    es: "Olvidar / Olvidarse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando no recuerdas una información, un evento o una acción.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Don't forget to lock the door.</b><br><span style="color: #555;">-No olvides cerrar la puerta con llave.</span></li>
                <li><b>I always forget his name.</b><br><span style="color: #555;">-Siempre olvido su nombre.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Forgot /fərgɒt/. Participio: Forgotten /fərgɒtn/.</p>
        </div>
    `
},
{
    en: "Forgive",
    es: "Perdonar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para dejar de sentir enfado o resentimiento hacia alguien por una falta.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Please, forgive me.</b><br><span style="color: #555;">-Por favor, perdóname.</span></li>
                <li><b>It's hard to forgive a betrayal.</b><br><span style="color: #555;">-Es difícil perdonar una traición.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Forgave /fərgéɪv/. Participio: Forgiven /fərgívn/.</p>
        </div>
    `
},
{
    en: "Freeze",
    es: "Congelar / Congelarse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando un líquido se transforma en sólido por el frío, o para expresar frío extremo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Water freezes at 0°C.</b><br><span style="color: #555;">-El agua se congela a los 0°C.</span></li>
                <li><b>I'm freezing out here!</b><br><span style="color: #555;">-¡Me estoy congelando aquí afuera!</span></li>
            </ul>
        </div>
    `
},
{
    en: "Fry",
    es: "Freír",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa en la cocina para indicar la acción de cocinar un alimento con aceite o grasa caliente.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Fry the onions until golden.</b><br><span style="color: #555;">-Fríe las cebollas hasta que estén doradas.</span></li>
                <li><b>I like to fry potatoes.</b><br><span style="color: #555;">-Me gusta freír patatas.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Gather",
    es: "Reunir / Recolectar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para juntar personas en un grupo, o recolectar cosas dispersas.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>We gathered in the main hall.</b><br><span style="color: #555;">-Nos reunimos en el vestíbulo principal.</span></li>
                <li><b>They gather data for the project.</b><br><span style="color: #555;">-Ellos recolectan datos para el proyecto.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Get",
    es: "Conseguir / Obtener / Llegar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Es uno de los verbos más comunes; se usa para obtener cosas, cambiar de estado o llegar a un sitio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Did you get my email?</b><br><span style="color: #555;">-¿Recibiste mi correo electrónico?</span></li>
                <li><b>Call me when you get home.</b><br><span style="color: #555;">-Llámame cuando llegues a casa.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Got /gɒt/. Participio: Gotten (US) / Got (UK).</p>
        </div>
    `
},
{
    en: "Give",
    es: "Dar / Entregar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para transferir la posesión de algo de forma voluntaria a otra persona.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Give me your hand.</b><br><span style="color: #555;">-Dame tu mano.</span></li>
                <li><b>She gave him a present.</b><br><span style="color: #555;">-She gave him a present.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Gave /géɪv/. Participio: Given /gívn/.</p>
        </div>
    `
},
{
    en: "Go",
    es: "Ir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar el movimiento de un lugar a otro.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I have to go to work now.</b><br><span style="color: #555;">-Tengo que ir a trabajar ahora.</span></li>
                <li><b>Where are you going?</b><br><span style="color: #555;">-¿A dónde vas?</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Went /wɛnt/. Participio: Gone /gɒn/.</p>
        </div>
    `
},
{
    en: "Grow",
    es: "Crecer / Cultivar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para el desarrollo de seres vivos (personas, plantas) o el aumento de tamaño de algo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Children grow very fast.</b><br><span style="color: #555;">-Los niños crecen muy rápido.</span></li>
                <li><b>They grow tomatoes in the garden.</b><br><span style="color: #555;">-Ellos cultivan tomates en el jardín.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Grew /grú/. Participio: Grown /gróun/.</p>
        </div>
    `
},
{
    en: "Guess",
    es: "Adivinar / Suponer",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para intentar acertar una respuesta sin estar seguro, o para indicar una suposición.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Guess what happened today!</b><br><span style="color: #555;">-¡Adivina qué pasó hoy!</span></li>
                <li><b>I guess you are right.</b><br><span style="color: #555;">-Supongo que tienes razón.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Guide",
    es: "Guiar / Dirigir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para mostrar el camino a alguien o dirigir el desarrollo de una actividad.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>She will guide you through the city.</b><br><span style="color: #555;">-Ella te guiará a través de la ciudad.</span></li>
                <li><b>Let experience guide your decision.</b><br><span style="color: #555;">-Deja que la experiencia guíe tu decisión.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Hang",
    es: "Colgar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para sujetar algo en lo alto sin que toque el suelo, como la ropa o un cuadro.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Hang your coat on the hook.</b><br><span style="color: #555;">-Cuelga tu abrigo en el gancho.</span></li>
                <li><b>They hang the paintings in the gallery.</b><br><span style="color: #555;">-Ellos cuelgan las pinturas en la galería.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Hung /hʌŋ/ (para objetos). Nota: Su uso común con "out" (hang out) significa pasar el rato.</p>
        </div>
    `
},
{
    en: "Happen",
    es: "Pasar / Suceder / Ocurrir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para referirse a eventos o situaciones que toman lugar o se desarrollan de forma planificada o imprevista.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>What happened last night?</b><br><span style="color: #555;">-¿Qué pasó anoche?</span></li>
                <li><b>Accidents can happen anywhere.</b><br><span style="color: #555;">-Los accidentes pueden suceder en cualquier lugar.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Hate",
    es: "Odiar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar una profunda aversión, disgusto o antipatía hacia algo o alguien.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I hate waiting in long lines.</b><br><span style="color: #555;">-Odio esperar en filas largas.</span></li>
                <li><b>She hates cold weather.</b><br><span style="color: #555;">-Ella odia el clima frío.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Hear",
    es: "Oír / Escuchar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa principalmente para percibir sonidos a través del oído.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Did you hear that noise?</b><br><span style="color: #555;">-¿Oíste ese ruido?</span></li>
                <li><b>I can't hear you clearly.</b><br><span style="color: #555;">-No puedo oírte claramente.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Heard /hɜːrd/. No confundir semánticamente con "Listen" (que implica prestar atención activa).</p>
        </div>
    `
},
{
    en: "Help",
    es: "Ayudar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para colaborar con alguien haciendo parte de su trabajo o facilitándole una tarea.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Can you help me with this box?</b><br><span style="color: #555;">-¿Puedes ayudarme con esta caja?</span></li>
                <li><b>She loves to help other people.</b><br><span style="color: #555;">-A ella le encanta ayudar a otras personas.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Hide",
    es: "Esconder / Ocultar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para poner algo o a alguien en un lugar donde no se pueda encontrar o ver fácilmente.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Where did you hide the keys?</b><br><span style="color: #555;">-¿Dónde escondiste las llaves?</span></li>
                <li><b>Don't hide your feelings.</b><br><span style="color: #555;">-No ocultes tus sentimientos.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Hid /hɪd/. Participio: Hidden /hídn/.</p>
        </div>
    `
},
{
    en: "Hit",
    es: "Golpear / Pegar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando se impacta algo de manera física y con fuerza, ya sea de forma intencional o accidental.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>He hit the ball with the bat.</b><br><span style="color: #555;">-Él golpeó la bola con el bate.</span></li>
                <li><b>The car hit the wall.</b><br><span style="color: #555;">-El auto chocó contra la pared.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado invariable: Hit /hɪt/. Se escribe igual en presente, pasado y participio.</p>
        </div>
    `
},
{
    en: "Hold",
    es: "Sostener / Agarrar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para mantener algo agarrado con las manos o los brazos, o para soportar un peso.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Hold my bag for a moment, please.</b><br><span style="color: #555;">-Sostén mi bolso un momento, por favor.</span></li>
                <li><b>They hold hands while walking.</b><br><span style="color: #555;">-Ellos se toman de las manos mientras caminan.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Held /hɛld/.</p>
        </div>
    `
},
{
    en: "Hope",
    es: "Esperar / Tener esperanza",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para desear que algo bueno ocurra en el futuro y creer que es posible.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I hope to see you soon.</b><br><span style="color: #555;">-Espero verte pronto.</span></li>
                <li><b>We hope everything goes well.</b><br><span style="color: #555;">-Esperamos que todo salga bien.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">No confundir semánticamente con "Wait" (esperar físicamente que pase el tiempo) o "Expect" (esperar que algo pase porque es probable).</p>
        </div>
    `
},
{
    en: "Hug",
    es: "Abrazar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar la acción de rodear a alguien con los brazos como muestra de afecto.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>She hugged her mother tightly.</b><br><span style="color: #555;">-Ella abrazó a su madre fuertemente.</span></li>
                <li><b>I love to hug my friends.</b><br><span style="color: #555;">-Me encanta abrazar a mi amigos.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Hunt",
    es: "Cazar / Buscar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para la acción de perseguir animales para capturarlos o para buscar intensamente algo (como un trabajo o apartamento).</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Lions hunt in groups.</b><br><span style="color: #555;">-Los leones cazan en grupos.</span></li>
                <li><b>I'm hunting for a new apartment.</b><br><span style="color: #555;">-Estoy buscando un apartamento nuevo.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Hurry",
    es: "Apurarse / Dar prisa",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar que se debe hacer una acción con rapidez porque el tiempo es limitado.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Hurry up, or we will miss the train!</b><br><span style="color: #555;">-¡Apúrate, o perderemos el tren!</span></li>
                <li><b>You don't need to hurry, we have time.</b><br><span style="color: #555;">-No necesitas darte prisa, tenemos tiempo.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Hurt",
    es: "Doler / Lastimar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar dolor físico o emocional, o la acción de causar daño a alguien.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>My head hurts a lot today.</b><br><span style="color: #555;">-Me duele mucho la cabeza hoy.</span></li>
                <li><b>I didn't mean to hurt your feelings.</b><br><span style="color: #555;">-No fue mi intención lastimar tus sentimientos.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado invariable: Hurt /hɜːrt/. Se escribe y pronuncia igual en presente, pasado y participio.</p>
        </div>
    `
},
{
    en: "Imagine",
    es: "Imaginar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para representar mentalmente cosas, personas o situaciones que no están presentes o que no son reales.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Imagine living on a tropical island.</b><br><span style="color: #555;">-Imagina vivir en una isla tropical.</span></li>
                <li><b>I can't imagine my life without music.</b><br><span style="color: #555;">-No puedo imaginar mi vida sin música.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Improve",
    es: "Mejorar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar que algo pasa a tener un estado, calidad o rendimiento superior al que tenía.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I practice every day to improve my English.</b><br><span style="color: #555;">-Practico todos los días para mejorar mi inglés.</span></li>
                <li><b>The weather is starting to improve.</b><br><span style="color: #555;">-El clima está empezando a mejorar.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Include",
    es: "Incluir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando una cosa contiene a otra como parte de un todo, o para meter a alguien en un grupo o actividad.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Does the price include breakfast?</b><br><span style="color: #555;">-¿El precio incluye el desayuno?</span></li>
                <li><b>Please include your phone number in the form.</b><br><span style="color: #555;">-Por favor incluye tu número de teléfono en el formulario.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Increase",
    es: "Aumentar / Incrementar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando algo se hace mayor en cantidad, tamaño, precio, intensidad o grado.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>The company wants to increase sales.</b><br><span style="color: #555;">-La empresa quiere aumentar las ventas.</span></li>
                <li><b>Temperatures increase during the summer.</b><br><span style="color: #555;">-Las temperaturas aumentan durante el verano.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Inform",
    es: "Informar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para comunicar datos, noticias o un hecho concreto a alguien de manera formal.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Please inform us of any changes.</b><br><span style="color: #555;">-Por favor infórmenos de cualquier cambio.</span></li>
                <li><b>He informed the police about the accident.</b><br><span style="color: #555;">-Él informó a la policía sobre el accidente.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Introduce",
    es: "Presentar (a alguien) / Introducir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa principalmente para dar a conocer a una persona con otra, o para incorporar un nuevo concepto o producto.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Let me introduce you to my brother.</b><br><span style="color: #555;">-Permíteme presentarte a mi hermano.</span></li>
                <li><b>They introduced a new system at work.</b><br><span style="color: #555;">-Ellos introdujeron un sistema nuevo en el trabajo.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Invent",
    es: "Inventar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar la acción de crear, diseñar o producir algo nuevo que no existía antes.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Thomas Edison invented the lightbulb.</b><br><span style="color: #555;">-Thomas Edison inventó la bombilla.</span></li>
                <li><b>Children love to invent stories.</b><br><span style="color: #555;">-A los niños les encanta inventar historias.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Invite",
    es: "Invitar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para solicitar cordialmente la presencia de alguien en un evento, reunión o lugar.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>They invited us to their wedding.</b><br><span style="color: #555;">-Ellos nos invitaron a su boda.</span></li>
                <li><b>Who did you invite to the party?</b><br><span style="color: #555;">-¿A quién invitaste a la fiesta?</span></li>
            </ul>
        </div>
    `
},
{
    en: "Join",
    es: "Unirse / Juntar / Conectar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para formar parte de un grupo, club o actividad, o para conectar físicamente dos cosas.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Would you like to join our team?</b><br><span style="color: #555;">-¿Te gustaría unirte a nuestro equipo?</span></li>
                <li><b>Join the two cables together.</b><br><span style="color: #555;">-Junta los dos cables.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Joke",
    es: "Bromear",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando alguien dice o hace algo con la intención de divertir o hacer reír, sin ser serio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Don't take it seriously, I'm just joking.</b><br><span style="color: #555;">-No te lo tomes en serio, solo estoy bromeando.</span></li>
                <li><b>They always joke about the weather.</b><br><span style="color: #555;">-Ellos siempre bromean sobre el clima.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Jump",
    es: "Saltar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para la acción de impulsarse hacia arriba o hacia adelante despegando los pies del suelo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>The cat can jump onto the table.</b><br><span style="color: #555;">-El gato puede saltar sobre la mesa.</span></li>
                <li><b>He jumped with joy when he heard the news.</b><br><span style="color: #555;">-Él saltó de alegría cuando escuchó la noticia.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Keep",
    es: "Mantener / Guardar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para continuar teniendo algo en tu posesión, o para mantener un estado o condición constante.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>You can keep the change.</b><br><span style="color: #555;">-Puedes quedarte con el cambio.</span></li>
                <li><b>Please keep the door closed.</b><br><span style="color: #555;">-Por favor mantén la puerta cerrada.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Kept /kɛpt/.</p>
        </div>
    `
},
{
    en: "Kick",
    es: "Patear / Dar una patada",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para golpear algo de manera deliberada o accidental utilizando el pie.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Kick the ball as hard as you can.</b><br><span style="color: #555;">-Patea la bola tan fuerte como puedas.</span></li>
                <li><b>He accidentally kicked the table leg.</b><br><span style="color: #555;">-Él pateó accidentalmente la pata de la mesa.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Kill",
    es: "Matar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar la acción de causar la muerte de un ser vivo, o figuradamente cuando algo causa mucho dolor/cansancio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Smoking can kill you.</b><br><span style="color: #555;">-Fumar puede matarte.</span></li>
                <li><b>My feet are killing me after that walk.</b><br><span style="color: #555;">-Mis pies me están matando después de esa caminata.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Kiss",
    es: "Besar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para la acción de tocar a alguien o algo con los labios como muestra de amor, saludo o afecto.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>She kissed her son on the cheek.</b><br><span style="color: #555;">-Ella besó a su hijo en la mejilla.</span></li>
                <li><b>They kissed goodbye at the station.</b><br><span style="color: #555;">-Ellos se besaron de despedida en la estación.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Knock",
    es: "Tocar (la puerta) / Golpear",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa principalmente para dar golpes en una puerta para llamar la atención, o para derribar algo (knock down).</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Always knock before entering.</b><br><span style="color: #555;">-Siempre toca la puerta antes de entrar.</span></li>
                <li><b>The wind knocked down the tree.</b><br><span style="color: #555;">-El viento derribó el árbol.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Aclaración: La 'K' inicial es muda; se pronuncia /nɒk/.</p>
        </div>
    `
},
{
    en: "Know",
    es: "Saber / Conocer",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para tener información en la mente o estar familiarizado con una persona, lugar o cosa.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I know the answer to this question.</b><br><span style="color: #555;">-Sé la respuesta a esta pregunta.</span></li>
                <li><b>Do you know a good restaurant near here?</b><br><span style="color: #555;">-¿Conoces un buen restaurante cerca de aquí?</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Aclaración: La 'K' inicial es muda; se pronuncia /noʊ/. Pasado irregular: Knew /nuː/. Participio: Known /noʊn/.</p>
        </div>
    `
},
{
    en: "Laugh",
    es: "Reír / Reírse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar la reacción física y sonora ante algo gracioso o divertido.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>The joke made everyone laugh.</b><br><span style="color: #555;">-El chiste hizo reír a todos.</span></li>
                <li><b>Don't laugh at his mistakes.</b><br><span style="color: #555;">-No te rias de sus errores.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Aclaración: La combinación 'gh' se pronuncia como una 'F'; suena /læf/ o /lɑːf/.</p>
        </div>
    `
},
{
    en: "Lay",
    es: "Colocar / Poner / Recostar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para poner algo plano sobre una superficie con cuidado. Su uso más común es "lay the table" (poner la mesa).</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Please, lay the book on the desk.</b><br><span style="color: #555;">-Por favor, coloca el libro en el escritorio.</span></li>
                <li><b>Can you help me lay the table?</b><br><span style="color: #555;">-¿Puedes ayudarme a poner la mesa?</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Laid /leɪd/. A menudo se confunde con "Lie", pero "Lay" requiere obligatoriamente un objeto directo.</p>
        </div>
    `
},
{
    en: "Lead",
    es: "Guiar / Liderar / Conducir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para ir al frente mostrando el camino, o para dirigir a un grupo de personas o una organización.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>She will lead the project next month.</b><br><span style="color: #555;">-Ella liderará el proyecto el próximo mes.</span></li>
                <li><b>This path leads to the beach.</b><br><span style="color: #555;">-Este camino conduce a la playa.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Led /lɛd/.</p>
        </div>
    `
},
{
    en: "Learn",
    es: "Aprender",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para adquirir conocimientos, habilidades o destrezas a través del estudio o la experiencia.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I want to learn how to drive.</b><br><span style="color: #555;">-Quiero aprender a conducir.</span></li>
                <li><b>We learn from our mistakes.</b><br><span style="color: #555;">-Aprendemos de nuestros errores.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Leave",
    es: "Salir / Dejar / Irse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para marcharse de un lugar, o para olvidar/colocar algo intencionadamente en un sitio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>What time do you leave the office?</b><br><span style="color: #555;">-¿A qué hora sales de la oficina?</span></li>
                <li><b>Don't leave your keys in the car.</b><br><span style="color: #555;">-No dejes tus llaves en el auto.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Left /lɛft/.</p>
        </div>
    `
},
{
    en: "Lend",
    es: "Prestar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando entregas algo tuyo a alguien con la condición de que te lo devuelva en el futuro.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Can you lend me a pen, please?</b><br><span style="color: #555;">-¿Puedes prestarme un bolígrafo, por favor?</span></li>
                <li><b>I never lend my books to anyone.</b><br><span style="color: #555;">-Nunca le presto mi libros a nadie.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Lent /lɛnt/. Recuerda: Lend es dar prestado, mientras que "Borrow" es pedir prestado.</p>
        </div>
    `
},
{
    en: "Let",
    es: "Permitir / Dejar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para dar permiso o permitir que una acción suceda sin poner obstáculos.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Let me know if you need help.</b><br><span style="color: #555;">-Déjame saber si necesitas ayuda.</span></li>
                <li><b>Her parents didn't let her go out.</b><br><span style="color: #555;">-Sus padres no la dejaron salir.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado invariable: Let /lɛt/. Se mantiene igual en todos los tiempos.</p>
        </div>
    `
},
{
    en: "Lie",
    es: "Mentir / Recostarse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Tiene dos significados comunes: decir algo falso intencionadamente, o colocar el cuerpo horizontalmente en una superficie (ej. cama).</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>He lied about his age.</b><br><span style="color: #555;">-Él mintió sobre su edad.</span></li>
                <li><b>I love to lie on the beach.</b><br><span style="color: #555;">-Me encanta recostarme en la playa.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Ojo con el pasado: Si significa "mentir" es regular (Lied). Si significa "recostarse" es irregular: Pasado Lay /leɪ/, Participio Lain /leɪn/.</p>
        </div>
    `
},
{
    en: "Lift",
    es: "Levantar / Elevar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para la acción física de mover algo pesado o ligero hacia una posición más alta.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>This box is too heavy to lift.</b><br><span style="color: #555;">-Esta caja es demasiado pesada para levantarla.</span></li>
                <li><b>He lifts weights at the gym.</b><br><span style="color: #555;">-Él levanta pesas en el gimnasio.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Like",
    es: "Gustar / Agradar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar que algo o alguien resulta agradable, atractivo o placentero.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I like this song a lot.</b><br><span style="color: #555;">-Me gusta mucho esta canción.</span></li>
                <li><b>Do you like coffee?</b><br><span style="color: #555;">-¿Te gusta el café?</span></li>
            </ul>
        </div>
    `
},
{
    en: "Listen",
    es: "Escuchar / Prestar atención",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar el esfuerzo voluntario y consciente de prestar atención a un sonido (suele ir acompañado de "to").</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Listen to me carefully.</b><br><span style="color: #555;">-Escúchame con atención.</span></li>
                <li><b>I like to listen to music while working.</b><br><span style="color: #555;">-Me gusta escuchar música mientras trabajo.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Live",
    es: "Vivir / Habitar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar el hecho de estar vivo o para referirse al lugar de residencia permanente.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>They live in a big house.</b><br><span style="color: #555;">-Ellos viven en una casa grande.</span></li>
                <li><b>He wants to live a long life.</b><br><span style="color: #555;">-Él quiere vivir una vida larga.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Load",
    es: "Cargar / Llenar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para poner peso o mercancía en un vehículo, o para meter datos/páginas en un sistema digital.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Help me load the boxes into the truck.</b><br><span style="color: #555;">-Ayúdame a cargar las cajas en el camión.</span></li>
                <li><b>The webpage takes too long to load.</b><br><span style="color: #555;">-La página web tarda demasiado en cargar.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Lock",
    es: "Cerrar con llave / Bloquear",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para asegurar una puerta, ventana o contenedor utilizando una llave o un mecanismo de seguridad.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Don't forget to lock the back door.</b><br><span style="color: #555;">-No olvides cerrar con llave la puerta trasera.</span></li>
                <li><b>I locked my phone by accident.</b><br><span style="color: #555;">-Bloqueé mi teléfono por accidente.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Look",
    es: "Mirar / Parecer",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para dirigir la vista hacia algo (usualmente con "at") o para describir la apariencia física de algo o alguien.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Look at that beautiful sunset.</b><br><span style="color: #555;">-Mira ese hermoso atardecer.</span></li>
                <li><b>You look tired today.</b><br><span style="color: #555;">-Te ves / Pareces cansado hoy.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Lose",
    es: "Perder",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando ya no se posee algo que se tenía, cuando se extravía un objeto o cuando no se gana un juego/competencia.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I always lose my keys.</b><br><span style="color: #555;">-Siempre pierdo mis llaves.</span></li>
                <li><b>We can't afford to lose this match.</b><br><span style="color: #555;">-No podemos permitirnos perder este partido.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Lost /lɒst/.</p>
        </div>
    `
},
{
    en: "Love",
    es: "Amar / Encantar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar un afecto profundo hacia una persona o un gusto extremo por una actividad o cosa.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I love my family.</b><br><span style="color: #555;">-Amo a mi familia.</span></li>
                <li><b>She loves reading novels.</b><br><span style="color: #555;">-Le encanta leer novelas.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Make",
    es: "Hacer / Fabricar / Crear",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para acciones que implican construir, elaborar o producir algo físico o abstracto con las manos o la mente.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I need to make dinner now.</b><br><span style="color: #555;">-Necesito hacer la cena ahora.</span></li>
                <li><b>She made a big mistake.</b><br><span style="color: #555;">-Ella cometió (hizo) un gran error.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Made /meɪd/. Recuerda: "Make" se enfoca en la creación o resultado final, a diferencia de "Do" que se enfoca en la actividad en sí.</p>
        </div>
    `
},
{
    en: "Manage",
    es: "Gestionar / Administrar / Lograr",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para dirigir un negocio o equipo, o para expresar que se logró hacer algo difícil (manage to).</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>He manages a small team at work.</b><br><span style="color: #555;">-Él gestiona un equipo pequeño en el trabajo.</span></li>
                <li><b>How did you manage to finish so early?</b><br><span style="color: #555;">-¿Cómo lograste terminar tan temprano?</span></li>
            </ul>
        </div>
    `
},
{
    en: "Mark",
    es: "Marcar / Corregir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para hacer una señal visible en una superficie, o en el ámbito educativo para evaluar o corregir exámenes.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Mark the correct answer with an X.</b><br><span style="color: #555;">-Marca la respuesta correcta con una X.</span></li>
                <li><b>The teacher is marking the exams.</b><br><span style="color: #555;">-El profesor está corrigiendo los exámenes.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Marry",
    es: "Casarse / Casar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar la unión legal o religiosa de dos personas en matrimonio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>They decided to marry next summer.</b><br><span style="color: #555;">-Ellos decidieron casarse el próximo verano.</span></li>
                <li><b>Will you marry me?</b><br><span style="color: #555;">-¿Te casarías conmigo?</span></li>
            </ul>
        </div>
    `
},
{
    en: "Match",
    es: "Combinar / Emparejar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando dos cosas van bien juntas por color/diseño, o para conectar elementos que se corresponden mutuamente.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Your shoes don't match your belt.</b><br><span style="color: #555;">-Tus zapatos no combinan con tu cinturón.</span></li>
                <li><b>Match the words with their definitions.</b><br><span style="color: #555;">-Empareja las palabras con sus definiciones.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Matter",
    es: "Importar / Tener importancia",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar que algo es relevante, significativo o causa una diferencia.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Your opinion matters to us.</b><br><span style="color: #555;">-Tu opinión nos importa.</span></li>
                <li><b>It doesn't matter anymore.</b><br><span style="color: #555;">-Eso ya no importa.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Mean",
    es: "Significar / Querer decir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar el sentido de una palabra, o para expresar la verdadera intención detrás de un comentario.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>What does this word mean?</b><br><span style="color: #555;">-¿Qué significa esta palabra?</span></li>
                <li><b>I didn't mean to upset you.</b><br><span style="color: #555;">-No quise decir eso para molestarte / No fue mi intención molestarte.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Meant /mɛnt/.</p>
        </div>
    `
},
{
    en: "Measure",
    es: "Medir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para determinar el tamaño, longitud, peso o cantidad de algo utilizando un instrumento o unidad métrica.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Measure the distance before cutting.</b><br><span style="color: #555;">-Mide la distancia antes de cortar.</span></li>
                <li><b>The nurse measured my height.</b><br><span style="color: #555;">-La enfermera midió mi estatura.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Meet",
    es: "Conocer (a alguien por primera vez) / Reunirse / Encontrarse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para entablar contacto por primera vez con alguien, o para verse de forma planificada en un sitio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Nice to meet you.</b><br><span style="color: #555;">-Gusto en conocerte.</span></li>
                <li><b>Let's meet outside the cinema.</b><br><span style="color: #555;">-Reunámonos / Encontrémonos fuera del cine.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Met /mɛt/.</p>
        </div>
    `
},
{
    en: "Melt",
    es: "Derretir / Derretirse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando una sustancia sólida pasa a estado líquido debido al incremento de la temperatura.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>The ice is starting to melt.</b><br><span style="color: #555;">-El hielo está empezando a derretirse.</span></li>
                <li><b>Melt the butter in a pan.</b><br><span style="color: #555;">-Derrite la mantequilla en una sartén.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Mention",
    es: "Mencionar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para nombrar o hacer referencia breve a algo o alguien mientras se habla o se escribe.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Don't mention this problem to him.</b><br><span style="color: #555;">-No le menciones este problema a él.</span></li>
                <li><b>Did she mention where she was going?</b><br><span style="color: #555;">-¿Ella mencionó a dónde iba?</span></li>
            </ul>
        </div>
    `
},
{
    en: "Mix",
    es: "Mezclar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para juntar o combinar dos o más sustancias, elementos o ingredientes de modo que formen una sola cosa.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Mix the flour with the water.</b><br><span style="color: #555;">-Mezcla la harina con el agua.</span></li>
                <li><b>Oil and water don't mix.</b><br><span style="color: #555;">-El aceite y el agua no se mezclan.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Move",
    es: "Mover / Moverse / Mudarse",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para cambiar de posición, cambiar de residencia o mover un objeto de lugar.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Please, move that chair.</b><br><span style="color: #555;">-Por favor, mueve esa silla.</span></li>
                <li><b>We are moving to a new house.</b><br><span style="color: #555;">-Nos mudamos a una casa nueva.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Multiply",
    es: "Multiplicar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para realizar la operación aritmética de multiplicación o para referirse al aumento rápido de algo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Multiply 5 by 10.</b><br><span style="color: #555;">-Multiplica 5 por 10.</span></li>
                <li><b>Our problems seem to multiply.</b><br><span style="color: #555;">-Nuestros problemas parecen multiplicarse.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Name",
    es: "Nombrar / Llamar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para identificar a alguien o algo dándole un nombre, o para designar a alguien para un cargo.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Can you name all the capitals?</b><br><span style="color: #555;">-¿Puedes nombrar todas las capitales?</span></li>
                <li><b>They named the baby Sophia.</b><br><span style="color: #555;">-Llamaron (nombraron) al bebé Sofía.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Notice",
    es: "Notar / Darse cuenta / Observar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar que has percibido algo a través de los sentidos o de la atención.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Did you notice his new haircut?</b><br><span style="color: #555;">-¿Notaste su nuevo corte de pelo?</span></li>
                <li><b>I didn't notice that it was raining.</b><br><span style="color: #555;">-No me di cuenta de que estaba lloviendo.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Offer",
    es: "Ofrecer / Proponer",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa cuando propones dar algo a alguien o cuando sugieres realizar un servicio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Can I offer you something to drink?</b><br><span style="color: #555;">-¿Puedo ofrecerte algo de beber?</span></li>
                <li><b>They offered me a better job.</b><br><span style="color: #555;">-Ellos me ofrecieron un trabajo mejor.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Open",
    es: "Abrir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para la acción de dejar un acceso libre, desplegar algo o iniciar un evento/negocio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Please, open the window.</b><br><span style="color: #555;">-Por favor, abre la ventana.</span></li>
                <li><b>The store opens at 9 AM.</b><br><span style="color: #555;">-La tienda abre a las 9 AM.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Order",
    es: "Ordenar / Pedir / Mandar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para solicitar comida en un restaurante, para poner cosas en orden o para dar instrucciones (mandar).</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>What would you like to order?</b><br><span style="color: #555;">-¿Qué le gustaría pedir?</span></li>
                <li><b>You must order your desk.</b><br><span style="color: #555;">-Debes ordenar tu escritorio.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Organize",
    es: "Organizar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para planificar un evento, o para poner cosas en un orden lógico y eficiente.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>We are organizing a surprise party.</b><br><span style="color: #555;">-Estamos organizando una fiesta sorpresa.</span></li>
                <li><b>He is good at organizing his time.</b><br><span style="color: #555;">-Él es bueno organizando su tiempo.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Pack",
    es: "Empacar / Hacer la maleta",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para preparar el equipaje antes de viajar o para guardar cosas en cajas.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Have you packed your suitcase?</b><br><span style="color: #555;">-¿Ya empacaste tu maleta?</span></li>
                <li><b>We need to pack everything for the move.</b><br><span style="color: #555;">-Necesitamos empacar todo para la mudanza.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Paint",
    es: "Pintar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para aplicar pintura sobre una superficie o para crear una obra de arte.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>We are going to paint the kitchen white.</b><br><span style="color: #555;">-Vamos a pintar la cocina de blanco.</span></li>
                <li><b>She loves to paint landscapes.</b><br><span style="color: #555;">-A ella le encanta pintar paisajes.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Pass",
    es: "Pasar / Aprobar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para indicar el movimiento de un lado a otro, entregar algo a alguien, o superar un examen.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Can you pass the salt?</b><br><span style="color: #555;">-¿Puedes pasarme la sal?</span></li>
                <li><b>She passed the final exam.</b><br><span style="color: #555;">-Ella aprobó el examen final.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Pay",
    es: "Pagar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para entregar dinero a cambio de un producto o servicio.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>How much do I have to pay?</b><br><span style="color: #555;">-¿Cuánto tengo que pagar?</span></li>
                <li><b>She paid in cash.</b><br><span style="color: #555;">-Ella pagó en efectivo.</span></li>
            </ul>
            <p style="margin-top: 15px; font-style: italic; font-size: 14px; color: #7f8c8d;">Pasado irregular: Paid /peɪd/.</p>
        </div>
    `
},
{
    en: "Perform",
    es: "Realizar / Ejecutar / Actuar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para llevar a cabo una tarea compleja, o para actuar frente a una audiencia (música, teatro).</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>The surgeon performed the operation.</b><br><span style="color: #555;">-El cirujano realizó la operación.</span></li>
                <li><b>The band will perform tonight.</b><br><span style="color: #555;">-La banda actuará esta noche.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Pick",
    es: "Escoger / Recoger / Cosechar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para seleccionar algo entre varias opciones, o para levantar cosas del suelo/cosechar frutas.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Pick a card from the deck.</b><br><span style="color: #555;">-Escoge una carta del mazo.</span></li>
                <li><b>We picked apples at the farm.</b><br><span style="color: #555;">-Recogimos/cosechamos manzanas en la granja.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Plan",
    es: "Planear / Planificar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para organizar los pasos necesarios para alcanzar un objetivo futuro.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>We are planning a trip to Europe.</b><br><span style="color: #555;">-Estamos planeando un viaje a Europa.</span></li>
                <li><b>It's important to plan ahead.</b><br><span style="color: #555;">-Es importante planificar con antelación.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Play",
    es: "Jugar / Tocar (un instrumento) / Reproducir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para actividades de recreación, para ejecutar música o para poner en marcha un archivo multimedia.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Children love to play outside.</b><br><span style="color: #555;">-A los niños les encanta jugar afuera.</span></li>
                <li><b>She plays the guitar very well.</b><br><span style="color: #555;">-Ella toca la guitarra muy bien.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Point",
    es: "Señalar / Apuntar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para dirigir la atención hacia algo extendiendo el dedo o algún objeto.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Don't point at people, it's rude.</b><br><span style="color: #555;">-No señales a las personas, es grosero.</span></li>
                <li><b>She pointed to the map.</b><br><span style="color: #555;">-Ella señaló el mapa.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Pour",
    es: "Verter / Servir",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para el acto de vaciar un líquido de un recipiente a otro.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>Pour the milk into the glass.</b><br><span style="color: #555;">-Vierte la leche en el vaso.</span></li>
                <li><b>She poured some wine for him.</b><br><span style="color: #555;">-Ella le sirvió (vertió) algo de vino.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Practice",
    es: "Practicar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para repetir una actividad constantemente con el fin de mejorar una destreza.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>I need to practice my English daily.</b><br><span style="color: #555;">-Necesito practicar mi inglés diariamente.</span></li>
                <li><b>They practice basketball every day.</b><br><span style="color: #555;">-Ellos practican baloncesto todos los días.</span></li>
            </ul>
        </div>
    `
},
{
    en: "Praise",
    es: "Elogiar / Alabar",
    categoria: "Verbos de Acción",
    ejemplo: `
        <div style="font-size: 18px; text-align: left; font-weight: normal; padding: 10px; color: #2c3e50;">
            <p style="margin-bottom: 15px; font-size: 20px;">Se usa para expresar admiración o aprobación por las acciones o cualidades de alguien.</p>
            <ul style="padding-left: 0px; list-style-type: none;">
                <li style="margin-bottom: 8px;"><b>The teacher praised her for the hard work.</b><br><span style="color: #555;">-El profesor la elogió por el arduo trabajo.</span></li>
                <li><b>It's good to praise children.</b><br><span style="color: #555;">-Es bueno elogiar a los niños.</span></li>
            </ul>
        </div>
    `
},
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
window.speechSynthesis.cancel(); // Detiene cualquier audio anterior al girar

window.flip = function() {
    if(modo !== 1) return;

    let t = document.getElementById('texto-palabra');
    let icono = document.getElementById('icono-sonido');

    if(estadoFlashcard === 0){
        t.innerText = actual.es;
        icono.style.visibility = "visible"; // Cambiado a visibility
        estadoFlashcard = 1;
    }
    else if(estadoFlashcard === 1){
        t.innerHTML = agregarAudioEjemplos(actual.ejemplo || "Sin ejemplo");
        icono.style.visibility = "hidden"; // Ocultar, pero mantener el espacio
        estadoFlashcard = 2;
    }
    else{
        t.innerText = actual.en;
        icono.style.visibility = "visible";
        estadoFlashcard = 0;
    }
};

let velocidadLenta = true;
window.playAudio = function(text) {
    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-US";

    // 1er toque lento, 2do más fluido
    msg.rate = velocidadLenta ? 0.75 : 0.75;

    velocidadLenta = !velocidadLenta;

    setTimeout(() => {
        speechSynthesis.speak(msg);
    }, 50);
};

function agregarAudioEjemplos(html) {
    return html.replace(
        /•?\s*<b>(.*?)<\/b>/g,
        (match, texto) =>
            `<span 
                onclick="event.stopPropagation(); playAudio('${texto.replace(/'/g,"\\'")}')"
                style="margin-right:8px; cursor:pointer; display:inline-flex; vertical-align:middle;">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#808080">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </span><b>${texto}</b>`
    );
}

// --- CORRECCIÓN 4: SONIDO ADAPTATIVO AL IDIOMA ---
window.hablar = function() {
    window.speechSynthesis.cancel();

    const m = new SpeechSynthesisUtterance(actual.en);
    let voces = window.speechSynthesis.getVoices();

    m.lang = 'en-US';

    // Lista de nombres comunes de voces femeninas en diferentes plataformas
    let vozFemenina = voces.find(v => 
        v.lang.includes("en") && (
            v.name.includes("Zira") ||        // Windows
            v.name.includes("Samantha") ||    // macOS / iOS
            v.name.includes("Victoria") ||    // macOS
            v.name.includes("Google US English") || // Chrome (suele ser mujer por defecto)
            v.name.toLowerCase().includes("female") // Algunos navegadores móviles
        )
    ) || voces.find(v => v.lang.includes("en")); // Respaldo: cualquier voz en inglés si no encuentra las anteriores

    if (vozFemenina) {
        m.voice = vozFemenina;
    }

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
