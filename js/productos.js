export const productos = [
    {
        id: 1,
        nombre: "Alimento Gato Agility",
        descripcion: "Alimento balanceado para gatos adultos Agility",
        precio: 8000,
        imagen: "assets/Gato-AlimentoAgility.webp",
        destacado: false
    },
    {
        id: 2,
        nombre: "Alimento Humedo ProPlan Gato",
        descripcion: "Alimento húmedo ProPlan para gatos",
        precio: 4000,
        imagen: "assets/Gato-AlimentoHumedoProPlan.webp",
        destacado: false
    },
    {id: 3,
        nombre: "Alimento Humedo Purina Gato",
        descripcion: "Alimento húmedo Purina para gatos",
        precio: 3000,
        imagen: "assets/Gato-AlimentoHumedoPurina.webp",
        destacado: false
    },
    {
        id: 4,
        nombre: "Alimento Humedo Whiskas Gato",
        descripcion: "Alimento húmedo Whiskas para gatos",
        precio: 1500,
        imagen: "assets/Gato-AlimentoHumedoWhiskas.webp",
        destacado: false
    }, 
    {
        id: 5,
        nombre: "Alimento Dog Chow Perro",
        descripcion: "Alimento balanceado para perros adultos Dog Chow",
        precio: 8000,
        imagen: "assets/Perro-DogChow.webp",
        destacado: false
    }, 
    {
        id: 6,
        nombre: "Alimento Balanced Perro",
        descripcion: "Alimento balanceado para perros adultos Balanced",
        precio: 8000,
        imagen: "assets/Perro-Balanced.webp",
        destacado: false
    },
    {
        id: 7,
        nombre: "Alimento Old Prince Perro",
        descripcion: "Alimento balanceado para perros adultos Old Prince",
        precio: 8000,
        imagen: "assets/Perro-OldPrince.webp",
        destacado: false
    },
    {
        id: 8,
        nombre: "Alimento Excellent Perro",
        descripcion: "Alimento balanceado para perros adultos Excellent",
        precio: 8000,
        imagen: "assets/Perro-Excellent.webp",
        destacado: false
    },

    {
        id: 9,
        nombre: "Cama Moises",
        categoria: "Comodidad",
        descripcion: "Cama Moises Dona de Corderito (45 x 45 x 25 cm)",
        precio: 45500,
        imagen: "assets/CamaGatoMoises.png",
        especificaciones: [
            { titulo: "Medidas", valor: "45 x 45 x 25 cm" },
            { titulo: "Detalles", valor: "Cama cubierta con felpa súper suave de alta calidad y una parte inferior de microgamuza ideal para que tu gato se acurruque. El relleno de poliéster súper suave le brinda a tu gato la comodidad y el soporte que necesita para una siesta en cualquier momento." }
        ],
        destacado: false
    },
    {
        id: 10,
        nombre: "Colchon Corderito Oval Camel",
        categoria: "Comodidad",
        descripcion: "Colchon Corderito Oval Camel (50 x 35 x 12 cm)",
        precio: 37966,
        imagen: "assets/CamaPeluche.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "50 x 35 x 12 cm" },
            { titulo: "Detalles", valor: "El Colchón Corderito Oval esta confeccionado con tela fibrosa similar corderito muy suave y confortable. Cuenta con pana con tratamiento antimancha y un relleno en vellón siliconado" }
        ],
        destacado: false
    },
    {
        id: 11,
        nombre: "Cama Dogit Rectangular Con Corderito Azul Mediana",
        categoria: "Comodidad",
        descripcion: "Cama Dogit Rectangular Con Corderito Azul Mediana (60 x 51 x 23 cm)",
        precio: 81500,
        imagen: "assets/CamaPerroAzul.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "60 x 51 x 23 cm" },
            { titulo: "Detalles", valor: "Las camas Donut tienen corderito en el interior para brindar sensación de comodidad y calor a tu mascota. Su diseño rectangular amplio brinda el espacio que tu perro necesita para un apropiado descanso" }
        ],
        destacado: false
    },
    {
        id: 12,
        nombre: "Cama Basquet Reversible Beige",
        categoria: "Comodidad",
        descripcion: "Cama Basquet Reversible (59 x 55 x 15 cm) Beige",
        precio: 95200,
        imagen: "assets/CamaPerroBeige.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "59 x 55 x 15 cm" },
            { titulo: "Detalles", valor: "Los colchones de Huella son de calidad superior con diseños cómodos y suaves. La cama reversible Basket esta confeccionada en pana con tratamiento antimanchas y relleno con vellón siliconado de primera calidad." }
        ],
        destacado: false
    },
    {
        id: 13,
        nombre: "Cama Paris N° 4 Gris",
        categoria: "Comodidad",
        descripcion: "Cama Paris N° 4 Gris (66 x 46 cm)",
        precio: 75000,
        imagen: "assets/CamaPerroGris.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "66 x 46 cm" },
            { titulo: "Detalles", valor: "Telas tejidas Panamá. Espuma de alta densidad. Incluye 2 almohadones toys (color aleatorio). Fresco, suave, muy confortable. Modo de lavado: Lavar A MANO con agua fría. No refregar ni centrifugar." }
        ],
        destacado: false
    },
    {
        id: 14,
        nombre: "Peine/Cardina Universal Mediana",
        categoria: "Higiene",
        descripcion: "Peine/Cardina Universal Mediana (17 x 10 cm)",
        precio: 20000,
        imagen: "assets/Cepillo.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "17 x 10 cm" },
            { titulo: "Detalles", valor: "Peine universal para perros y gatos de tamaño mediano. Ideal para desenredar el pelaje y eliminar pelo muerto. Diseño ergonómico para un manejo cómodo." }
        ],
        destacado: true
    },
    {
        id: 15,
        nombre: "Cepillo Para Perro/Gato Simil Furminator",
        categoria: "Higiene",
        descripcion: "Cepillo Para Perro/Gato Simil Furminator (11 × 15 cm)",
        precio: 71200,
        imagen: "assets/CepilloFino.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "11 × 15 cm" },
            { titulo: "Detalles", valor: "Cepillo especial para eliminar pelo muerto en perros y gatos. Diseño similar al Furminator con cuchillas de acero inoxidable que llegan hasta la capa inferior del pelaje sin dañar la piel." }
        ],
        destacado: false
    },
    {
        id: 16,
        nombre: "Cepillo a vapor con Cardina 3 en 1 Blanco Beepaw",
        categoria: "Higiene",
        descripcion: "Cepillo a vapor con Cardina 3 en 1 Blanco Beepaw",
        precio: 160000,
        imagen: "assets/CepilloVapor.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "25 x 8 x 6 cm" },
            { titulo: "Detalles", valor: "El cepillo a vapor BEEPAW GROOM-E recargable con cardinas son cepillos para mascotas con dientes metálicos (muy suaves y sus puntas no lastiman) que pueden ayudar a desenredar, quitar la suciedad y dar brillo al pelaje. Son ideales para remover el pelo muerto, dejándolo suave y sin nudos. Aptas para todo tipo de pelo. Contiene botón un toque de autolimpieza para remover el cabello fácilmente." }
        ],
        destacado: true
    },
    {
        id: 17,
        nombre: "Collar Ajustable Sport Reflex Talle M",
        categoria: "Collares y Correas",
        descripcion: "Collar Ajustable Sport Reflex Talle M",
        precio: 16000,
        imagen: "assets/CollarAjustable.webp",
        especificaciones: [
            { titulo: "Talle", valor: "M" },
            { titulo: "Detalles", valor: "Correa para perros de cordón de nylon enrollado con colores vivos y a la moda. Extremadamente robustas, están realizadas con el cuidado de siempre y una especial atención al confort y a la seguridad de tu amigo de cuatro patas." }
        ],
        destacado: true
    },
    {
        id: 18,
        nombre: "Collar Gato Cascabel Ajustable",
        categoria: "Collares y Correas",
        descripcion: "Collar Gato Ajustable con Cascabel",
        precio: 2000,
        imagen: "assets/CollaresGatosCascabel.jpg",
        especificaciones: [
            { titulo: "Colores", valor: "Rojo, Naranja, Verde, Azul, Rosa, Amarillo, Violeta" },
            { titulo: "Talle", valor: "Único" },
            { titulo: "Detalles", valor: "Collar ajustable para gatos con cascabel incorporado. Material suave y resistente, ideal para identificar la ubicación de tu mascota." }
        ],
        destacado: false
    },
    {
        id: 19,
        nombre: "Collar Pez Gato Ajustable",
        categoria: "Collares y Correas",
        descripcion: "Collar Gato Ajustable con cierre de pez",
        precio: 4000,
        imagen: "assets/CollarGato.png",
        especificaciones: [
            { titulo: "Colores", valor: "Verde, Turquesa" },
            { titulo: "Talle", valor: "Único" },
            { titulo: "Detalles", valor: "Collar para gatos con diseño de pez en el cierre. Material suave y seguro con mecanismo de liberación rápida." }
        ],
        destacado: false
    },
    {
        id: 20,
        nombre: "Collar Para Perro Verde",
        categoria: "Collares y Correas",
        descripcion: "Collar Verde para Perro",
        precio: 8000,
        imagen: "assets/CollaVerdeOliva.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "2.5 x 42-65 cm" },
            { titulo: "Talles", valor: "Chico, Mediano, Gigante" },
            { titulo: "Detalles", valor: "Collar de nylon resistente para perros. Color verde oliva, ajustable y duradero." }
        ],
        destacado: false
    },
    {
        id: 21,
        nombre: "Comedero gato simple",
        categoria: "Comederos",
        descripcion: "Comedero gato simple 18 x 20 cm",
        precio: 11000,
        imagen: "assets/ComederoAceroGato.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "18 x 20 cm" },
            { titulo: "Material", valor: "Acero inoxidable" },
            { titulo: "Detalles", valor: "Comedero simple para gatos de acero inoxidable. Fácil de limpiar y antideslizante." }
        ],
        destacado: false
    },
    {
        id: 22,
        nombre: "Comedero de Acero Inoxidable Antideslizante",
        categoria: "Comederos",
        descripcion: "Comedero de Acero Inoxidable Antideslizante 18 cm",
        precio: 8000,
        imagen: "assets/ComederoAceroNormal.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "18 cm" },
            { titulo: "Tamaños", valor: "Varios" },
            { titulo: "Detalles", valor: "Comedero de acero inoxidable con base antideslizante. Fácil de limpiar y duradero." }
        ],
        destacado: false
    },
    {
        id: 23,
        nombre: "Comedero Automatico Inteligente con Camara y Wifi",
        categoria: "Comederos",
        descripcion: "Comedero Automatico Inteligente con Camara y Wifi",
        precio: 80000,
        imagen: "assets/ComederoAutomatico.webp",
        especificaciones: [
            { titulo: "Tamaño", valor: "Pequeño, Mediano" },
            { titulo: "Capacidad", valor: "2.5 kg" },
            { titulo: "Detalles", valor: "Dispensador automático para mascotas de tamaño pequeño y mediano. Se puede seleccionar la porción adecuada a tu mascota, pudiendo elegir también el horario en el que la misma se sirve. Además posee una cámara de alta definición integrada para que puedas ver que hacen tus mascotas en todo momento." }
        ],
        destacado: true
    },
    {
        id: 24,
        nombre: "Comedero doble con altura regulable antiderrame",
        categoria: "Comederos",
        descripcion: "Comedero doble con altura regulable antiderrame (56 x 30 x 20 cm)",
        precio: 40000,
        imagen: "assets/ComederoDobleRegulable.png",
        especificaciones: [
            { titulo: "Medidas", valor: "56 x 30 x 20 cm" },
            { titulo: "Detalles", valor: "Comedero doble a prueba de derrames: la comida permanece en la parte superior y el agua drena por debajo. Le proporciona a su mascota una posición de alimentación elevada que es buena para la digestión y las articulaciones, también puede ajustar el ángulo del recipiente para adaptarse mejor a las necesidades de razas específicas. Facil de armar y limpiar." }
        ],
        destacado: false
    },
    {
        id: 25,
        nombre: "Conjunto Pretal Y Correa Para Perro",
        categoria: "Collares y Correas",
        descripcion: "Conjunto Pretal Y Correa Para Perro M",
        precio: 44000,
        imagen: "assets/ConjuntoPretalCorrea.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "Diámetro: 19 cm. Largo de correa: 1,15 m. Ancho de correa: 2 cm" },
            { titulo: "Detalles", valor: "Este pretal regulable es una gran opción para pasear a tu mascota con la comodidad que le otorga tener su cuello libre. Está fabricado con materiales de alta calidad, es extra grueso y resistente. Además, es muy manejable y lavable. Se ajusta al pecho de tu mascota, y es fácil de poner y quitar gracias a su sistema de cierre de seguridad. Incluye una correa con el ramal y el mosquetón reforzado, para poder controlar la distancia a la que querés llevar a tu mascota. Resiste los tirones durante todo el paseo." },
            { titulo: "Talles", valor: "XS, S, M, L" }
        ],
        destacado: false
    },
    {
        id: 26,
        nombre: "Pretal Para Perros Helios Mochila De Pecho",
        categoria: "Collares y Correas",
        descripcion: "Pretal Para Perros Helios Mochila De Pecho L",
        precio: 75000,
        imagen: "assets/ConjuntoPretalMochila.webp",
        especificaciones: [
            { titulo: "Detalles", valor: "El pretal Helios Chest Compression es ideal para perros atletas que disfruten de correr durante sus paseos o de acompañar a sus dueños en sus aventuras al aire libre. Este arnés deportivo aplica presión al esternón, aliviando otras áreas del torso del animal. Tanto la parte superior como la inferior brindan un ajuste seguro alrededor del pecho y el cuello de su mascota. Incluye manijas en la parte superior que permiten tomar a tu mascota con mayor firmeza. Posee cintas reflectivas que brindan una mejor visibilidad para caminar de noche, al atardecer o temprano en la mañana." },
            { titulo: "Talles", valor: "L, M" }
        ],
        destacado: false
    },
    {
        id: 27,
        nombre: "Correa Extensible Flexible",
        categoria: "Collares y Correas",
        descripcion: "Correa Extensible Flexible M 5 M Azul Perro Hasta 20 Kg",
        precio: 30000,
        imagen: "assets/CorreaExtensibleFlexible.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "M Azul Perro Hasta 20 Kg" },
            { titulo: "Largo", valor: "5 metros" },
            { titulo: "Detalles", valor: "Correa extensible con botón de frenado para paseo de mascotas de hasta 20 kilos. Diseño de manija ergonómico para evitar lesiones en las manos." }
        ],
        destacado: false
    },
];