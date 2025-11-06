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
        id: 26,
        nombre: "Alimento Humedo ProPlan Gato",
        descripcion: "Alimento húmedo ProPlan para gatos",
        precio: 4000,
        imagen: "assets/Gato-AlimentoHumedoProPlan.webp",
        destacado: false
    },
    {id: 27,
        nombre: "Alimento Humedo Purina Gato",
        descripcion: "Alimento húmedo Purina para gatos",
        precio: 3000,
        imagen: "assets/Gato-AlimentoHumedoPurina.webp",
        destacado: false
    },
    {
        id: 29,
        nombre: "Alimento Humedo Whiskas Gato",
        descripcion: "Alimento húmedo Whiskas para gatos",
        precio: 1500,
        imagen: "assets/Gato-AlimentoHumedoWhiskas.webp",
        destacado: false
    }, 
    {
        id: 74,
        nombre: "Alimento Dog Chow Perro",
        descripcion: "Alimento balanceado para perros adultos Dog Chow",
        precio: 8000,
        imagen: "assets/Perro-DogChow.webp",
        destacado: false
    }, 
    {
        id: 73,
        nombre: "Alimento Balanced Perro",
        descripcion: "Alimento balanceado para perros adultos Balanced",
        precio: 8000,
        imagen: "assets/Perro-Balanced.webp",
        destacado: false
    },
    {
        id: 77,
        nombre: "Alimento Old Prince Perro",
        descripcion: "Alimento balanceado para perros adultos Old Prince",
        precio: 8000,
        imagen: "assets/Perro-OldPrince.webp",
        destacado: false
    },
    {
        id: 76,
        nombre: "Alimento Excellent Perro",
        descripcion: "Alimento balanceado para perros adultos Excellent",
        precio: 8000,
        imagen: "assets/Perro-Excellent.webp",
        destacado: false
    },

    {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
    /*{
        id: 21,
        nombre: "Cortador de Uñas para Perros y Gatos Nail-e Beepaw",
        categoria: "Higiene",
        descripcion: "Cortador de Uñas para Perros y Gatos Nail-e Beepaw",
        precio: 80000,
        imagen: "assets/CortadordeUñas.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "12 x 4 x 2 cm" },
            { titulo: "Detalles", valor: "Cortaúñas para Mascotas Beepaw NAIL-E Mantener las uñas de tus mascotas cuidadas y en perfecto estado nunca fue tan fácil y seguro. Con el cortaúñas Beepaw NAIL-E, diseñado específicamente para gatos y perros, puedes garantizar un cuidado delicado y preciso sin dañar la salud de sus uñas." },
            { titulo: "Beneficios", valor: "Unas uñas bien cortadas previenen lesiones, protegen tus muebles, mejoran la comodidad y movilidad de tu mascota." },
            { titulo: "Características", valor: "Luz LED blanca, diseño ergonómico, hoja de acero inoxidable, lima integrada" }
        ],
        destacado: false
    },
    {
        id: 22,
        nombre: "Enjuague Reac Espec",
        categoria: "Higiene",
        descripcion: "Enjuague Reac Espec X 250 Cc",
        precio: 8000,
        imagen: "assets/EnjuagueReacEspec.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "250 Cc" },
            { titulo: "Detalles", valor: "Enjuague especial con componentes grasos incorporados como vaselina y bactericida suave. Indicado para aumentar el peso del pelo en las razas que lo necesitan." }
        ],
        destacado: false
    },
    {
        id: 23,
        nombre: "Espuma Seca Para Baño En Aerosol Cachorros",
        categoria: "Higiene",
        descripcion: "Espuma Seca Para Baño En Aerosol Cachorros 250Ml",
        precio: 8000,
        imagen: "assets/EspumaSeca.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "250 ml" },
            { titulo: "Detalles", valor: "Espuma seca para la limpieza de perros y gatos. Ideal para cuando no podés mojar a tu mascota o para una limpieza rápida. Cuando vacunan a tus mascotas, recién nacidos o animales convalecientes, enfermos o simplemente para prevenir resfriados en épocas muy frías. Si estás de viaje y tu mascota necesita una limpieza express o si no le gusta o le tiene miedo al agua no dudes en probar este producto." }
        ],
        destacado: false
    },
    {
        id: 24,
        nombre: "Alimento Gato Agility",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para gatos adultos Agility",
        precio: 8000,
        imagen: "assets/Gato-AlimentoAgility.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Gatos adultos" },
            { titulo: "Sabor", valor: "Pollo y pescado" },
            { titulo: "Detalles", valor: "Alimento balanceado para gatos adultos con nutrientes esenciales para su salud y vitalidad." }
        ],
        destacado: false
    },
    {
        id: 25,
        nombre: "Alimento Humedo Balanced Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento húmedo Balanced para gatos",
        precio: 5000,
        imagen: "assets/Gato-AlimentoHumedoBalanced.webp",
        especificaciones: [
            { titulo: "Peso", valor: "85 g" },
            { titulo: "Sabor", valor: "Pescado" },
            { titulo: "Detalles", valor: "Alimento húmedo completo y balanceado para gatos adultos. Rico en proteínas y nutrientes esenciales." }
        ],
        destacado: false
    },
    {
        id: 26,
        nombre: "Alimento Humedo ProPlan Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento húmedo ProPlan para gatos",
        precio: 4000,
        imagen: "assets/Gato-AlimentoHumedoProPlan.webp",
        especificaciones: [
            { titulo: "Peso", valor: "85 g" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento húmedo premium para gatos. Formulado con ingredientes de alta calidad para una nutrición completa." }
        ],
        destacado: false
    },
    {
        id: 27,
        nombre: "Alimento Humedo Purina Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento húmedo Purina para gatos",
        precio: 3000,
        imagen: "assets/Gato-AlimentoHumedoPurina.webp",
        especificaciones: [
            { titulo: "Peso", valor: "85 g" },
            { titulo: "Sabor", valor: "Atún" },
            { titulo: "Detalles", valor: "Alimento húmedo para gatos con receta Purina. Nutrición balanceada para mascotas saludables." }
        ],
        destacado: false
    },
    {
        id: 28,
        nombre: "Alimento Humedo Sieger Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento húmedo Sieger para gatos",
        precio: 4000,
        imagen: "assets/Gato-AlimentoHumedoSieger.webp",
        especificaciones: [
            { titulo: "Peso", valor: "85 g" },
            { titulo: "Sabor", valor: "Salmón" },
            { titulo: "Detalles", valor: "Alimento húmedo premium Sieger para gatos. Con ingredientes naturales y alto contenido proteico." }
        ],
        destacado: false
    },
    {
        id: 29,
        nombre: "Alimento Humedo Whiskas Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento húmedo Whiskas para gatos",
        precio: 1500,
        imagen: "assets/Gato-AlimentoHumedoWhiskas.webp",
        especificaciones: [
            { titulo: "Peso", valor: "85 g" },
            { titulo: "Sabor", valor: "Carne" },
            { titulo: "Detalles", valor: "Alimento húmedo Whiskas para gatos. Delicioso y nutritivo, con vitaminas y minerales esenciales." }
        ],
        destacado: false
    },
    {
        id: 30,
        nombre: "AntiParasitario Drontal Gato",
        categoria: "Salud",
        descripcion: "Antiparasitario Drontal para gatos",
        precio: 8000,
        imagen: "assets/Gato-AntiparasitarioDrontal.webp",
        especificaciones: [
            { titulo: "Peso", valor: "Tabletas" },
            { titulo: "Aplicación", valor: "Oral" },
            { titulo: "Detalles", valor: "Antiparasitario interno para gatos. Eficaz contra lombrices y parásitos intestinales." }
        ],
        destacado: false
    },
    {
        id: 31,
        nombre: "AntiParasitario Feline Gato",
        categoria: "Salud",
        descripcion: "Antiparasitario Feline para gatos",
        precio: 8000,
        imagen: "assets/Gato-AntiparasitarioFeline.webp",
        especificaciones: [
            { titulo: "Peso", valor: "Tabletas" },
            { titulo: "Aplicación", valor: "Oral" },
            { titulo: "Detalles", valor: "Antiparasitario específico para gatos. Protección completa contra parásitos internos." }
        ],
        destacado: false
    },
    {
        id: 32,
        nombre: "AntiParasitario Meltra Gato",
        categoria: "Salud",
        descripcion: "Antiparasitario Meltra para gatos",
        precio: 8000,
        imagen: "assets/Gato-AntiparasitarioMeltra.webp",
        especificaciones: [
            { titulo: "Peso", valor: "Tabletas" },
            { titulo: "Aplicación", valor: "Oral" },
            { titulo: "Detalles", valor: "Antiparasitario Meltra para gatos. Fórmula avanzada para protección interna." }
        ],
        destacado: false
    },
    {
        id: 33,
        nombre: "AntiPulgas Feline Gato",
        categoria: "Salud",
        descripcion: "Antipulgas Feline para gatos",
        precio: 8000,
        imagen: "assets/Gato-AntipulgasFeline.webp",
        especificaciones: [
            { titulo: "Peso", valor: "Pipeta" },
            { titulo: "Aplicación", valor: "Tópica" },
            { titulo: "Detalles", valor: "Antipulgas y garrapatas para gatos. Protección duradera hasta por 30 días." }
        ],
        destacado: false
    },
    {
        id: 34,
        nombre: "Alimento Balanced Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento seco Balanced para gatos",
        precio: 8000,
        imagen: "assets/Gato-Balanced.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Gatos adultos" },
            { titulo: "Sabor", valor: "Pescado" },
            { titulo: "Detalles", valor: "Alimento seco balanceado para gatos adultos. Nutrición completa para una vida saludable." }
        ],
        destacado: false
    },
    {
        id: 35,
        nombre: "Alimento Cat Chow Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento Cat Chow para gatos",
        precio: 8000,
        imagen: "assets/Gato-CatChow.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Todas las edades" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento Cat Chow para gatos de todas las edades. Nutrición balanceada y delicioso sabor." }
        ],
        destacado: false
    },
    {
        id: 36,
        nombre: "Alimento Cat Selection Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento Cat Selection para gatos",
        precio: 8000,
        imagen: "assets/Gato-CatSelection.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Gatos adultos" },
            { titulo: "Sabor", valor: "Salmón" },
            { titulo: "Detalles", valor: "Alimento premium Cat Selection para gatos adultos. Selección de ingredientes de alta calidad." }
        ],
        destacado: false
    },
    {
        id: 37,
        nombre: "Cepillo para Gato",
        categoria: "Higiene",
        descripcion: "Cepillo especial para gatos",
        precio: 8000,
        imagen: "assets/Gato-Cepillo.webp",
        especificaciones: [
            { titulo: "Tipo", valor: "Cepillo suave" },
            { titulo: "Uso", valor: "Gatos" },
            { titulo: "Detalles", valor: "Cepillo especial para el cuidado del pelaje de gatos. Cerdas suaves que no dañan la piel." }
        ],
        destacado: false
    },
    {
        id: 38,
        nombre: "Alimento Excellent Purina Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento Excellent Purina para gatos",
        precio: 8000,
        imagen: "assets/Gato-ExcellentPurinaFrente.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Gatos adultos" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento premium Excellent de Purina para gatos adultos. Nutrición superior para mascotas saludables." }
        ],
        destacado: false
    },
    {
        id: 39,
        nombre: "Fuente Bebedero Automatico Para Gatos de Acero Inoxidable",
        categoria: "Comederos",
        descripcion: "Fuente Bebedero Automatico Para Gatos de Acero Inoxidable 3L",
        precio: 110000,
        imagen: "assets/Gato-FuenteAgua.webp",
        especificaciones: [
            { titulo: "Capacidad", valor: "3L" },
            { titulo: "Material", valor: "Acero inoxidable" },
            { titulo: "Detalles", valor: "Fuente de agua automática para gatos. Mantiene el agua fresca y circulante, incentivando la hidratación." }
        ],
        destacado: false
    },
    {
        id: 40,
        nombre: "Litera Comun para Gato",
        categoria: "Higiene",
        descripcion: "Litera básica para gatos",
        precio: 8000,
        imagen: "assets/Gato-LiteraComun.jpg",
        especificaciones: [
            { titulo: "Medidas", valor: "40 x 30 x 15 cm" },
            { titulo: "Material", valor: "Plástico" },
            { titulo: "Detalles", valor: "Litera básica para gatos. Diseño simple y funcional, fácil de limpiar." }
        ],
        destacado: false
    },
    {
        id: 41,
        nombre: "Litera Con Puerta para Gato",
        categoria: "Higiene",
        descripcion: "Litera para gatos con puerta",
        precio: 8000,
        imagen: "assets/Gato-LiteraConPuerta.webp",
        especificaciones: [
            { titulo: "Medidas", valor: "50 x 40 x 40 cm" },
            { titulo: "Material", valor: "Plástico" },
            { titulo: "Detalles", valor: "Litera para gatos con puerta de entrada. Diseño cerrado que contiene olores y arena." }
        ],
        destacado: true
    },
    {
        id: 42,
        nombre: "Litera Rosa para Gato",
        categoria: "Higiene",
        descripcion: "Litera para gatos color rosa",
        precio: 8000,
        imagen: "assets/Gato-LiteraRosa.jpg",
        especificaciones: [
            { titulo: "Medidas", valor: "40 x 30 x 15 cm" },
            { titulo: "Material", valor: "Plástico" },
            { titulo: "Color", valor: "Rosa" },
            { titulo: "Detalles", valor: "Litera para gatos color rosa. Diseño funcional y estético para el hogar." }
        ],
        destacado: false
    },
    {
        id: 43,
        nombre: "Alimento Old Prince Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento Old Prince para gatos",
        precio: 8000,
        imagen: "assets/Gato-OldPrince.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Gatos adultos" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento Old Prince para gatos adultos. Nutrición completa con ingredientes naturales." }
        ],
        destacado: false
    },
    {
        id: 44,
        nombre: "Piedras Sanitarias Alta Gama Negra",
        categoria: "Higiene",
        descripcion: "Piedras Sanitarias Alta Gama Negra x 3.6 Kg",
        precio: 4500,
        imagen: "assets/Gato-PiedrasAltaGama.webp",
        especificaciones: [
            { titulo: "Cantidad", valor: "3.6 Kg" },
            { titulo: "Color", valor: "Negra" },
            { titulo: "Detalles", valor: "Las piedras sanitarias Absorsol Alta Gama son 100% naturales, no son tóxicas, no contienen polvo y poseen máximo rendimiento, ya que su composición es ecológica y reciclable. Ayudan a neutralizar el olor de los excrementos, absorben rápidamente y no tiene efecto esponja (no desprende el líquido absorbido). Son piedras porosas y livianas, no hacen barro ni se deshacen. Mantienen su apariencia sólida y granulada durante toda su vida útil y, cuando están saturadas de líquido, cambian de color." }
        ],
        destacado: false
    },
    {
        id: 45,
        nombre: "Piedras Sanitarias Alta Gama Perfumada Lavanda",
        categoria: "Higiene",
        descripcion: "Piedras Sanitarias Alta Gama Perfumada Lavanda X 3.6 Kg",
        precio: 4500,
        imagen: "assets/Gato-PiedrasAltaGamaLavanda.webp",
        especificaciones: [
            { titulo: "Cantidad", valor: "3.6 Kg" },
            { titulo: "Color", valor: "Blanca" },
            { titulo: "Aroma", valor: "Lavanda" },
            { titulo: "Detalles", valor: "Piedras sanitarias perfumadas con aroma a lavanda. Absorción rápida y control de olores efectivo." }
        ],
        destacado: false
    },
    {
        id: 46,
        nombre: "Piedras Sanitarias Alta Gama Perfumada Manzana Verde",
        categoria: "Higiene",
        descripcion: "Piedras Sanitarias Alta Gama Perfumada Manzana Verde X 3.6 Kg",
        precio: 4500,
        imagen: "assets/Gato-PiedrasAltaGamaManzana.webp",
        especificaciones: [
            { titulo: "Cantidad", valor: "3.6 Kg" },
            { titulo: "Color", valor: "Verde" },
            { titulo: "Aroma", valor: "Manzana verde" },
            { titulo: "Detalles", valor: "Piedras sanitarias perfumadas con aroma a manzana verde. Control de olores y alta absorción." }
        ],
        destacado: false
    },
    {
        id: 47,
        nombre: "Piedras Sanitarias Alta Gama Perfumada Rosa",
        categoria: "Higiene",
        descripcion: "Piedras Sanitarias Alta Gama Perfumada Rosa X 3.6 Kg",
        precio: 4500,
        imagen: "assets/Gato-PiedrasAltaGamaRosa.webp",
        especificaciones: [
            { titulo: "Cantidad", valor: "3.6 Kg" },
            { titulo: "Color", valor: "Rosa" },
            { titulo: "Aroma", valor: "Flores" },
            { titulo: "Detalles", valor: "Piedras sanitarias perfumadas con aroma floral. Efectivo control de olores y alta absorción." }
        ],
        destacado: false
    },
    {
        id: 48,
        nombre: "Piedras Sanitarias Alta Gama Perfumada Vainilla",
        categoria: "Higiene",
        descripcion: "Piedras Sanitarias Alta Gama Perfumada Vainilla X 3.6 Kg",
        precio: 4500,
        imagen: "assets/Gato-PiedrasAltaGamaVainilla.webp",
        especificaciones: [
            { titulo: "Cantidad", valor: "3.6 Kg" },
            { titulo: "Color", valor: "Amarillo" },
            { titulo: "Aroma", valor: "Vainilla" },
            { titulo: "Detalles", valor: "Piedras sanitarias perfumadas con aroma a vainilla. Control de olores suave y agradable." }
        ],
        destacado: false
    },
    {
        id: 49,
        nombre: "Piedras Sanitarias Comunes",
        categoria: "Higiene",
        descripcion: "Piedras Sanitarias Comunes X 4 Kg",
        precio: 3500,
        imagen: "assets/Gato-PiedrasComunes.webp",
        especificaciones: [
            { titulo: "Cantidad", valor: "4 Kg" },
            { titulo: "Color", valor: "Gris" },
            { titulo: "Detalles", valor: "Piedras sanitarias comunes para gatos. Absorción básica y económica." }
        ],
        destacado: false
    },
    {
        id: 50,
        nombre: "Piedras Sanitarias Silica",
        categoria: "Higiene",
        descripcion: "Piedras Sanitarias Silica X 3.6 L",
        precio: 8000,
        imagen: "assets/Gato-PiedrasSilica.webp",
        especificaciones: [
            { titulo: "Cantidad", valor: "3.6 L" },
            { titulo: "Color", valor: "Cristal" },
            { titulo: "Detalles", valor: "Piedras sanitarias de sílice. Alta absorción y control de olores superior." }
        ],
        destacado: false
    },
    {
        id: 51,
        nombre: "Pipeta Antipulgas Gato",
        categoria: "Salud",
        descripcion: "Pipeta antipulgas para gatos",
        precio: 8000,
        imagen: "assets/Gato-PipetaAntipulgas.webp",
        especificaciones: [
            { titulo: "Aplicación", valor: "Tópica" },
            { titulo: "Duración", valor: "30 días" },
            { titulo: "Detalles", valor: "Pipeta antipulgas para gatos. Protección efectiva contra pulgas y garrapatas." }
        ],
        destacado: false
    },
    {
        id: 52,
        nombre: "Rascador de Carton para Gato",
        categoria: "Juguetes",
        descripcion: "Rascador de cartón para gatos",
        precio: 8000,
        imagen: "assets/Gato-RascadorCarton.webp",
        especificaciones: [
            { titulo: "Material", valor: "Cartón" },
            { titulo: "Uso", valor: "Rascador" },
            { titulo: "Detalles", valor: "Rascador de cartón para gatos. Ideal para mantener las uñas en buen estado y evitar daños en muebles." }
        ],
        destacado: false
    },
    {
        id: 53,
        nombre: "Rascador con Cama para Gato",
        categoria: "Juguetes",
        descripcion: "Rascador con cama para gatos",
        precio: 8000,
        imagen: "assets/Gato-RascadorConCama.webp",
        especificaciones: [
            { titulo: "Material", valor: "Sisal y felpa" },
            { titulo: "Uso", valor: "Rascador y cama" },
            { titulo: "Detalles", valor: "Rascador con cama integrada para gatos. Combina diversión y descanso en un solo producto." }
        ],
        destacado: false
    },
    {
        id: 54,
        nombre: "Rascador Grande para Gato",
        categoria: "Juguetes",
        descripcion: "Rascador grande para gatos",
        precio: 8000,
        imagen: "assets/Gato-RascadorGrande.webp",
        especificaciones: [
            { titulo: "Material", valor: "Sisal" },
            { titulo: "Uso", valor: "Rascador" },
            { titulo: "Detalles", valor: "Rascador grande para gatos. Diseño robusto y duradero para uso intensivo." }
        ],
        destacado: false
    },
    {
        id: 55,
        nombre: "Rascador Mediano para Gato",
        categoria: "Juguetes",
        descripcion: "Rascador mediano para gatos",
        precio: 8000,
        imagen: "assets/Gato-RascadorMediano.webp",
        especificaciones: [
            { titulo: "Material", valor: "Sisal" },
            { titulo: "Uso", valor: "Rascador" },
            { titulo: "Detalles", valor: "Rascador mediano para gatos. Tamaño ideal para espacios reducidos." }
        ],
        destacado: false
    },
    {
        id: 56,
        nombre: "Rascador Pequeño para Gato",
        categoria: "Juguetes",
        descripcion: "Rascador pequeño para gatos",
        precio: 8000,
        imagen: "assets/Gato-RascadorPequeno.webp",
        especificaciones: [
            { titulo: "Material", valor: "Sisal" },
            { titulo: "Uso", valor: "Rascador" },
            { titulo: "Detalles", valor: "Rascador pequeño para gatos. Compacto y funcional para cualquier espacio." }
        ],
        destacado: false
    },
    {
        id: 57,
        nombre: "Alimento Royal Canin Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento Royal Canin para gatos",
        precio: 8000,
        imagen: "assets/Gato-RoyalCanin.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Gatos adultos" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento premium Royal Canin para gatos adultos. Nutrición especializada para necesidades específicas." }
        ],
        destacado: false
    },
    {
        id: 58,
        nombre: "Alimento Sieger Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento Sieger para gatos",
        precio: 8000,
        imagen: "assets/Gato-Sieger.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Gatos adultos" },
            { titulo: "Sabor", valor: "Pescado" },
            { titulo: "Detalles", valor: "Alimento Sieger para gatos adultos. Nutrición balanceada con ingredientes seleccionados." }
        ],
        destacado: false
    },
    {
        id: 59,
        nombre: "Alimento Whiskas Gato",
        categoria: "Alimentacion",
        descripcion: "Alimento Whiskas para gatos",
        precio: 8000,
        imagen: "assets/Gato-Whiskas.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Gatos adultos" },
            { titulo: "Sabor", valor: "Carne" },
            { titulo: "Detalles", valor: "Alimento Whiskas para gatos adultos. Delicioso sabor y nutrición completa." }
        ],
        destacado: false
    },
    {
        id: 60,
        nombre: "Juguete Hueso de Goma para Perro",
        categoria: "Juguetes",
        descripcion: "Juguete hueso de goma para perro",
        precio: 8000,
        imagen: "assets/HuesoGomaPerro.webp",
        especificaciones: [
            { titulo: "Material", valor: "Goma" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Juguete hueso de goma para perros. Resistente y duradero, ideal para masticar." }
        ],
        destacado: false
    },
    {
        id: 61,
        nombre: "Juguete Hueso de Tela para Perro",
        categoria: "Juguetes",
        descripcion: "Juguete hueso de tela para perro",
        precio: 8000,
        imagen: "assets/HuesoTelaPerro.webp",
        especificaciones: [
            { titulo: "Material", valor: "Tela" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Juguete hueso de tela para perros. Suave y seguro para jugar." }
        ],
        destacado: false
    },
    {
        id: 62,
        nombre: "Juguete Kong para Perro",
        categoria: "Juguetes",
        descripcion: "Juguete Kong para perro",
        precio: 8000,
        imagen: "assets/JugueteKongPerro.webp",
        especificaciones: [
            { titulo: "Material", valor: "Goma" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Juguete Kong para perros. Diseñado para ser rellenado con comida, ideal para estimulación mental." }
        ],
        destacado: false
    },
    {
        id: 63,
        nombre: "Juguete Pelota con Sonido para Perro",
        categoria: "Juguetes",
        descripcion: "Juguete pelota con sonido para perro",
        precio: 8000,
        imagen: "assets/JuguetePelotaSonidoPerro.webp",
        especificaciones: [
            { titulo: "Material", valor: "Goma" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Pelota con sonido para perros. Divertida y estimulante, ideal para juego interactivo." }
        ],
        destacado: false
    },
    {
        id: 64,
        nombre: "Juguete Pelota para Perro",
        categoria: "Juguetes",
        descripcion: "Juguete pelota para perro",
        precio: 8000,
        imagen: "assets/JuguetePelotaPerro.webp",
        especificaciones: [
            { titulo: "Material", valor: "Goma" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Pelota para perros. Resistente y segura para jugar al aire libre." }
        ],
        destacado: false
    },
    {
        id: 65,
        nombre: "Juguete Peluche para Perro",
        categoria: "Juguetes",
        descripcion: "Juguete peluche para perro",
        precio: 8000,
        imagen: "assets/JuguetePeluchePerro.webp",
        especificaciones: [
            { titulo: "Material", valor: "Peluche" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Juguete peluche para perros. Suave y adorable, ideal para mordedores suaves." }
        ],
        destacado: false
    },
    {
        id: 66,
        nombre: "Juguete Rascador para Gato",
        categoria: "Juguetes",
        descripcion: "Juguete rascador para gato",
        precio: 8000,
        imagen: "assets/JugueteRascadorGato.webp",
        especificaciones: [
            { titulo: "Material", valor: "Sisal" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Juguete rascador para gatos. Combina diversión y cuidado de uñas." }
        ],
        destacado: false
    },
    {
        id: 67,
        nombre: "Juguete Raton para Gato",
        categoria: "Juguetes",
        descripcion: "Juguete ratón para gato",
        precio: 8000,
        imagen: "assets/JugueteRatonGato.webp",
        especificaciones: [
            { titulo: "Material", valor: "Peluche" },
            { titulo: "Tamaño", valor: "Pequeño" },
            { titulo: "Detalles", valor: "Juguete ratón para gatos. Estimula el instinto de caza de tu mascota." }
        ],
        destacado: false
    },
    {
        id: 68,
        nombre: "Juguete Soga para Perro",
        categoria: "Juguetes",
        descripcion: "Juguete soga para perro",
        precio: 8000,
        imagen: "assets/JugueteSogaPerro.webp",
        especificaciones: [
            { titulo: "Material", valor: "Cuerda" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Juguete soga para perros. Ideal para juego de tira y afloja, ayuda a la salud dental." }
        ],
        destacado: false
    },
    {
        id: 69,
        nombre: "Kit de Juguetes para Gato",
        categoria: "Juguetes",
        descripcion: "Kit de juguetes para gato",
        precio: 8000,
        imagen: "assets/KitJuguetesGato.webp",
        especificaciones: [
            { titulo: "Contenido", valor: "Varios juguetes" },
            { titulo: "Cantidad", valor: "5 piezas" },
            { titulo: "Detalles", valor: "Kit completo de juguetes para gatos. Incluye diferentes tipos de juguetes para estimulación." }
        ],
        destacado: false
    },
    {
        id: 70,
        nombre: "Kit de Juguetes para Perro",
        categoria: "Juguetes",
        descripcion: "Kit de juguetes para perro",
        precio: 8000,
        imagen: "assets/KitJuguetesPerro.webp",
        especificaciones: [
            { titulo: "Contenido", valor: "Varios juguetes" },
            { titulo: "Cantidad", valor: "5 piezas" },
            { titulo: "Detalles", valor: "Kit completo de juguetes para perros. Variedad de opciones para diferentes tipos de juego." }
        ],
        destacado: false
    },
    {
        id: 71,
        nombre: "Mochila Transportadora para Gato",
        categoria: "Transporte",
        descripcion: "Mochila transportadora para gato",
        precio: 8000,
        imagen: "assets/MochilaTransportadoraGato.webp",
        especificaciones: [
            { titulo: "Material", valor: "Tela y plástico" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Mochila transportadora para gatos. Cómoda y segura para viajes y paseos." }
        ],
        destacado: false
    },
    {
        id: 72,
        nombre: "Alimento Agility Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Agility",
        precio: 8000,
        imagen: "assets/Perro-Agility.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento balanceado para perros adultos Agility. Nutrición completa para energía y vitalidad." }
        ],
        destacado: false
    },
    {
        id: 73,
        nombre: "Alimento Balanced Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Balanced",
        precio: 8000,
        imagen: "assets/Perro-Balanced.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Carne" },
            { titulo: "Detalles", valor: "Alimento balanceado para perros adultos Balanced. Nutrición equilibrada para una vida saludable." }
        ],
        destacado: false
    },
    {
        id: 74,
        nombre: "Alimento Dog Chow Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Dog Chow",
        precio: 8000,
        imagen: "assets/Perro-DogChow.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento balanceado para perros adultos Dog Chow. Nutrición completa y delicioso sabor." }
        ],
        destacado: false
    },
    {
        id: 75,
        nombre: "Alimento Dog Selection Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Dog Selection",
        precio: 8000,
        imagen: "assets/Perro-DogSelection.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Carne" },
            { titulo: "Detalles", valor: "Alimento premium para perros adultos Dog Selection. Ingredientes seleccionados de alta calidad." }
        ],
        destacado: false
    },
    {
        id: 76,
        nombre: "Alimento Excellent Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Excellent",
        precio: 8000,
        imagen: "assets/Perro-Excellent.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento premium para perros adultos Excellent. Nutrición superior para mascotas saludables." }
        ],
        destacado: false
    },
    {
        id: 77,
        nombre: "Alimento Old Prince Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Old Prince",
        precio: 8000,
        imagen: "assets/Perro-OldPrince.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Carne" },
            { titulo: "Detalles", valor: "Alimento para perros adultos Old Prince. Nutrición completa con ingredientes naturales." }
        ],
        destacado: false
    },
    {
        id: 78,
        nombre: "Alimento Pedigree Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Pedigree",
        precio: 8000,
        imagen: "assets/Perro-Pedigree.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Carne" },
            { titulo: "Detalles", valor: "Alimento balanceado para perros adultos Pedigree. Nutrición completa para perros activos." }
        ],
        destacado: false
    },
    {
        id: 79,
        nombre: "Alimento Pro Plan Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Pro Plan",
        precio: 8000,
        imagen: "assets/Perro-ProPlan.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento premium para perros adultos Pro Plan. Nutrición especializada para necesidades específicas." }
        ],
        destacado: false
    },
    {
        id: 80,
        nombre: "Alimento Royal Canin Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Royal Canin",
        precio: 8000,
        imagen: "assets/Perro-RoyalCanin.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Carne" },
            { titulo: "Detalles", valor: "Alimento premium para perros adultos Royal Canin. Nutrición de alta calidad para razas específicas." }
        ],
        destacado: false
    },
    {
        id: 81,
        nombre: "Alimento Sieger Perro",
        categoria: "Alimentacion",
        descripcion: "Alimento balanceado para perros adultos Sieger",
        precio: 8000,
        imagen: "assets/Perro-Sieger.webp",
        especificaciones: [
            { titulo: "Peso", valor: "1 kg" },
            { titulo: "Edad", valor: "Perros adultos" },
            { titulo: "Sabor", valor: "Pollo" },
            { titulo: "Detalles", valor: "Alimento para perros adultos Sieger. Nutrición balanceada con ingredientes seleccionados." }
        ],
        destacado: false
    },
    {
        id: 82,
        nombre: "Pretal para Perro",
        categoria: "Collares y Correas",
        descripcion: "Pretal para perro",
        precio: 8000,
        imagen: "assets/PretalPerro.webp",
        especificaciones: [
            { titulo: "Material", valor: "Nylon" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Pretal para perros. Cómodo y seguro para paseos diarios." }
        ],
        destacado: false
    },
    {
        id: 83,
        nombre: "Shampoo para Perro",
        categoria: "Higiene",
        descripcion: "Shampoo para perro",
        precio: 8000,
        imagen: "assets/ShampooPerro.webp",
        especificaciones: [
            { titulo: "Volumen", valor: "500 ml" },
            { titulo: "Tipo", valor: "Limpieza profunda" },
            { titulo: "Detalles", valor: "Shampoo para perros. Limpieza efectiva y cuidado del pelaje." }
        ],
        destacado: false
    },
    {
        id: 84,
        nombre: "Transportadora para Gato",
        categoria: "Transporte",
        descripcion: "Transportadora para gato",
        precio: 8000,
        imagen: "assets/TransportadoraGato.webp",
        especificaciones: [
            { titulo: "Material", valor: "Plástico" },
            { titulo: "Tamaño", valor: "Mediano" },
            { titulo: "Detalles", valor: "Transportadora para gatos. Segura y cómoda para viajes y visitas al veterinario." }
        ],
        destacado: false
    },
    {
        id: 85,
        nombre: "Transportadora Valija",
        categoria: "Transporte",
        descripcion: "Transportadora para mascotas",
        precio: 120000,
        imagen: "assets/TrasportadoraValija.webp",
        especificaciones: [
            { titulo: "Material", valor: "Tela" },
            { titulo: "Tamaño", valor: "Grande" },
            { titulo: "Detalles", valor: "Transportadora para mascotas. Resistente y segura para transporte de mascotas." }
        ],
        destacado: false
    }*/
];