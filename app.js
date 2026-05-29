// 1. BASE DE DATOS (Lista maestra)
let masterDict = [
    // ⚠️ PEGA AQUÍ ADENTRO TUS 1000 PALABRAS EXACTAMENTE COMO LAS TIENES
    {en: "1", es: "uno", categoria: "numero 1", racha: 0, pesoExtra: 0, fallos: 0}
    {en: "chair", es: "silla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "desk", es: "escritorio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bed", es: "cama", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sofa", es: "sofá", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lamp", es: "lámpara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "door", es: "puerta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "window", es: "ventana", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "wall", es: "pared", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "floor", es: "piso / suelo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "roof", es: "techo (exterior)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "key", es: "llave", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lock", es: "cerradura / candado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bag", es: "bolsa / saco", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "box", es: "caja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bottle", es: "botella", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cup", es: "taza", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "glass", es: "vaso / vidrio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "plate", es: "plato", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bowl", es: "tazón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "spoon", es: "cuchara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "fork", es: "tenedor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "knife", es: "cuchillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pan", es: "sartén", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pot", es: "olla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "towel", es: "toalla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "soap", es: "jabón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "brush", es: "cepillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "mirror", es: "espejo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "clock", es: "reloj (de pared)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "watch", es: "reloj (de pulsera)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "phone", es: "teléfono", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "computer", es: "computadora", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "book", es: "libro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pen", es: "bolígrafo / pluma", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pencil", es: "lápiz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "paper", es: "papel", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "notebook", es: "cuaderno", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "wallet", es: "billetera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "purse", es: "bolso (de mujer)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "money", es: "dinero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "coin", es: "moneda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bill", es: "billete / cuenta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "card", es: "tarjeta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "shirt", es: "camisa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pants", es: "pantalones", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "dress", es: "vestido", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "skirt", es: "falda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "jacket", es: "chaqueta / chamarra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "coat", es: "abrigo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "shoes", es: "zapatos", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "socks", es: "calcetines", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hat", es: "sombrero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cap", es: "gorra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "glove", es: "guante", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "scarf", es: "bufanda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ring", es: "anillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "necklace", es: "collar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "umbrella", es: "paraguas", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bread", es: "pan", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "butter", es: "mantequilla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cheese", es: "queso", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "milk", es: "leche", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "egg", es: "huevo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "meat", es: "carne", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "chicken", es: "pollo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "fish", es: "pescado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "fruit", es: "fruta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "apple", es: "manzana", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "banana", es: "plátano / banano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "vegetable", es: "vegetal / verdura", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "potato", es: "papa / patata", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tomato", es: "tomate", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "onion", es: "cebolla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "salt", es: "sal", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pepper", es: "pimienta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sugar", es: "azúcar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "water", es: "agua", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "juice", es: "jugo / zumo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "coffee", es: "café", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tea", es: "té", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "rice", es: "arroz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "beans", es: "frijoles / judías", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pasta", es: "pasta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "soup", es: "sopa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "salad", es: "ensalada", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sauce", es: "salsa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "kitchen", es: "cocina", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bathroom", es: "baño", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bedroom", es: "dormitorio / recámara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "living room", es: "sala de estar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "house", es: "casa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "apartment", es: "apartamento / departamento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "building", es: "edificio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "office", es: "oficina", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "school", es: "escuela", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "class", es: "clase", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "teacher", es: "maestro / profesor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "student", es: "estudiante", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lesson", es: "lección", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "homework", es: "tarea escolar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "test", es: "examen / prueba", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "grade", es: "calificación / grado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "university", es: "universidad", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "college", es: "colegio / facultad", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "library", es: "biblioteca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hospital", es: "hospital", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "doctor", es: "doctor / médico", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "nurse", es: "enfermera/o", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "patient", es: "paciente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "medicine", es: "medicina / medicamento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pharmacy", es: "farmacia", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "store", es: "tienda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "shop", es: "tienda pequeña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "market", es: "mercado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "supermarket", es: "supermercado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "mall", es: "centro comercial", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "restaurant", es: "restaurante", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hotel", es: "hotel", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bank", es: "banco", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "church", es: "iglesia", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "park", es: "parque", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "street", es: "calle", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "road", es: "camino / carretera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "highway", es: "autopista", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sidewalk", es: "acera / banqueta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bridge", es: "puente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "car", es: "auto / coche", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bus", es: "autobús", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "train", es: "tren", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bicycle", es: "bicicleta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "airplane", es: "avión", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "boat", es: "barco / bote", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "station", es: "estación", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "airport", es: "aeropuerto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "harbor", es: "puerto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "city", es: "ciudad", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "town", es: "pueblo / ciudad pequeña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "village", es: "aldea", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "country", es: "país / campo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "state", es: "estado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "nation", es: "nación", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "world", es: "mundo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "continent", es: "continente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ocean", es: "océano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sea", es: "mar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "river", es: "río", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lake", es: "lago", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pond", es: "estanque", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pool", es: "piscina / alberca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "mountain", es: "montaña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hill", es: "colina / cerro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "valley", es: "valle", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "forest", es: "bosque", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "jungle", es: "selva", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "desert", es: "desierto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "beach", es: "playa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "coast", es: "costa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "island", es: "isla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "field", es: "campo / cancha", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "garden", es: "jardín", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "farm", es: "granja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "yard", es: "patio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "balcony", es: "balcón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "garage", es: "garaje / cochera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "basement", es: "sótano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "attic", es: "ático", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "chimney", es: "chimenea", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "fence", es: "cerca / valla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "gate", es: "puerta exterior / portón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "path", es: "sendero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lawn", es: "césped", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "mud", es: "lodo / barro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "dirt", es: "tierra / suciedad", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "dust", es: "polvo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sand", es: "arena", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "rock", es: "roca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "stone", es: "piedra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "clay", es: "arcilla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "gold", es: "oro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "silver", es: "plata", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "iron", es: "hierro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "copper", es: "cobre", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "steel", es: "acero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "wood", es: "madera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "plastic", es: "plástico", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cloth", es: "tela", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "leather", es: "cuero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "wool", es: "lana", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "silk", es: "seda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cotton", es: "algodón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "thread", es: "hilo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "needle", es: "aguja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "scissors", es: "tijeras", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tool", es: "herramienta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hammer", es: "martillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "nail", es: "clavo / uña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "screw", es: "tornillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "saw", es: "sierra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ladder", es: "escalera (de mano)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "rope", es: "cuerda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "chain", es: "cadena", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "wheel", es: "rueda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "engine", es: "motor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "machine", es: "máquina", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "instrument", es: "instrumento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "radio", es: "radio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "television", es: "televisión", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "camera", es: "cámara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "calendar", es: "calendario", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "map", es: "mapa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "compass", es: "brújula / compás", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "flag", es: "bandera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "picture", es: "imagen / cuadro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "photo", es: "fotografía", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "frame", es: "marco", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "vase", es: "jarrón / florero", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "flower", es: "flor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "plant", es: "planta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "leaf", es: "hoja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tree", es: "árbol", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "branch", es: "rama", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "root", es: "raíz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "seed", es: "semilla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "grass", es: "pasto / hierba", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "weed", es: "maleza", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bush", es: "arbusto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "animal", es: "animal", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "dog", es: "perro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cat", es: "gato", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bird", es: "pájaro / ave", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "horse", es: "caballo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cow", es: "vaca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "pig", es: "cerdo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sheep", es: "oveja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "duck", es: "pato", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lion", es: "león", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tiger", es: "tigre", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bear", es: "oso", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "elephant", es: "elefante", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "monkey", es: "mono", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "snake", es: "serpiente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "frog", es: "rana", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lizard", es: "lagarto / lagartija", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "insect", es: "insecto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ant", es: "hormiga", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bee", es: "abeja", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "fly", es: "mosca (sustantivo)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "mosquito", es: "mosquito", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "spider", es: "araña", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "worm", es: "gusano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "shell", es: "concha / caparazón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "bone", es: "hueso", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "blood", es: "sangre", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "heart", es: "corazón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "brain", es: "cerebro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lung", es: "pulmón", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "stomach", es: "estómago", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "liver", es: "hígado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "skin", es: "piel", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hair", es: "cabello / pelo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "face", es: "cara", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "eye", es: "ojo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ear", es: "oreja / oído", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "nose", es: "nariz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "mouth", es: "boca", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lip", es: "labio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tooth", es: "diente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tongue", es: "lengua", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "neck", es: "cuello", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "shoulder", es: "hombro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "arm", es: "brazo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "elbow", es: "codo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "wrist", es: "muñeca (anatomía)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hand", es: "mano", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "finger", es: "dedo (de la mano)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "thumb", es: "pulgar", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "leg", es: "pierna", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "knee", es: "rodilla", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ankle", es: "tobillo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "foot", es: "pie", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "toe", es: "dedo del pie", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "chest", es: "pecho", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "waist", es: "cintura", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hip", es: "cadera", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "side", es: "lado", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "muscle", es: "músculo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "nerve", es: "nervio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "vein", es: "vena", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "breath", es: "aliento / respiración", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "voice", es: "voz", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "laugh", es: "risa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "smile", es: "sonrisa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tear", es: "lágrima", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sigh", es: "suspiro", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "dream", es: "sueño", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "thought", es: "pensamiento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "mind", es: "mente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "soul", es: "alma", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "spirit", es: "espíritu", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ghost", es: "fantasma", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "angel", es: "ángel", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "devil", es: "diablo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "god", es: "dios", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "heaven", es: "cielo / paraíso", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "hell", es: "infierno", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "universe", es: "universo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "galaxy", es: "galaxia", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "space", es: "espacio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "planet", es: "planeta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "star", es: "estrella", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sun", es: "sol", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "moon", es: "luna", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "sky", es: "cielo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cloud", es: "nube", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "rain", es: "lluvia (sustantivo)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "snow", es: "nieve (sustantivo)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "wind", es: "viento", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "storm", es: "tormenta", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "thunder", es: "trueno", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "lightning", es: "relámpago / rayo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "weather", es: "clima / tiempo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "climate", es: "clima (general)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "temperature", es: "temperatura", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "heat", es: "calor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "cold", es: "frío (sustantivo)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ice", es: "hielo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "frost", es: "escarcha", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "vapor", es: "vapor", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "steam", es: "vapor (de agua)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "smoke", es: "humo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ash", es: "ceniza", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "flame", es: "llama / fuego", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "spark", es: "chispa", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "wave", es: "ola / onda", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tide", es: "marea", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "current", es: "corriente", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "flood", es: "inundación", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "drought", es: "sequía", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "earthquake", es: "terremoto", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "volcano", es: "volcán", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "fire", es: "fuego / incendio", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "air", es: "aire", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "earth", es: "tierra (planeta)", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "ground", es: "suelo / tierra", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "focus", es: "enfoque", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "habit", es: "hábito", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "tradition", es: "tradición", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "goal", es: "meta / objetivo", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
{en: "idea", es: "idea", categoria: "Sustantivos de Entorno", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "3", es: "tres", categoria: "numero 2", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "4", es: "cuatro", categoria: "numero 2", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "5", es: "cinco", categoria: "numero 3", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "6", es: "seis", categoria: "numero 3", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "7", es: "siete", categoria: "numero 3", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "8", es: "ocho", categoria: "numero 4", racha: 0, pesoExtra: 0, fallos: 0},
  {en: "9", es: "nueve", categoria: "numero 5", racha: 0, pesoExtra: 0, fallos: 0}
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
