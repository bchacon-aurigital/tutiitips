import{
    logo,
    libroBanner,
    tulsi,
    arte1,
    arte2,
    arte3,
    arte4,
    arte5,
    arte,
    talleres,
    familia,
    individual,
    pareja,
} from '../assets';

export const navLinks = [
    {
        id: 'tulsi',
        title: 'Tulsi',
    },
    {
        id: 'servicios',
        title: 'Servicios',
    },
    {
        id: 'blog',
        title: 'Blog',
    },
    {
        id: 'testimonios',
        title: 'Testimonios',
    },
    {
        id:'faq',
        title: 'Preguntas',
    },
]

const servicios = [
    {
        title: 'Terapia Individual',
        img: individual,
    },
    {
        title: 'Terapia de Pareja',
        img: pareja,
    },
    {
        title: 'Terapia Familiar',
        img: familia,
    },
    {
        title: 'Talleres Privados',
        img: talleres,
    },
    {
        title: 'Arteterapia',
        img: arte,
    },
]

const arteterapia = [
    {
        title: 'Ejercicio Teatral',
        img: arte1,
    },
    {
        title: 'Expresión Corporal',
        img: arte2,
    },
    {
        title: 'Pintura',
        img: arte3,
    },
    {
        title: 'Danza',
        img: arte4,
    },
    {
        title: 'Canto',
        img: arte5,
    },
]
const preguntas = [
    {
      label: "¿Qué modalidades ofreces?",
      points: [
        "Modalidad Presencial: Consultorio ubicado en La Uruca, Barrio Cristal.",
        "Modalidad Virtual: Videollamada.",
      ],
    },
    {
      label: "¿Cuál es tu especialidad en psicología?",
      points: [
        "Licenciada en psicología clínica con más de 20 años de experiencia artística.",
        "Arteterapia como recurso para explorar emociones y potenciar el autoconocimiento.",
        "Integración de enfoques terapéuticos diversos: cognitivo-conductual, humanístico, gestalt, psicodinámico, sistémico, sociocultural y de desarrollo.",
        "Integración de ciencia espiritualidad y arte para abordar el bienestar emocional, mental y físico de manera equilibrada.",
      ],
    },
    {
      label: "¿Qué temas se abordan en Psicoterapia?",
      points: [
        "Cuando percibimos una sensación de malestar o de insatisfacción, de forma persistente, es motivo de consulta.",
        "Si se ha modificado de manera negativa su manera de alimentarse y dormir.",
        "Si desea conocerse a profundidad y estudiar las raíces de sus heridas heredadas.",
        "Si desea mejorar su calidad de vida y analizar sus áreas de oportunidad.",
      ],
    },
    {
      label: "¿Cúales son algunos ejemplos de las personas que llegan a consulta?",
      points: [
        "Baja Autoestima.",
        "Problemas en el trabajo.",
        "Manejo de la ira.",
        "Problemas de pareja.",
        "Fobias específicas.",
        "Episodios de ansiedad/Ansiedad generalizada.",
        "Depresión.",
        "Trastornos de personalidad.",
        "Crisis vitales (divorcio, separación, duelo por pérdida de seres queridos, etc.).",
        "Estrés postraumático.",
        "Conflictos familiares.",
        "Cambios en el estado de ánimo.",
        "Problemas de alimentación.",
      ],
    },
    {
      label: "¿De qué se trata el secreto profesional?",
      points: [
        "Todo lo que se diga en sesión es confidencial a excepción de que el paciente sea participe de un juicio, algún menor de edad esté involucrado, la vida de este se encuentre en peligro.",
      ],
    },
    {
      label: "¿Qué tengo que decir en mi primera sesión?",
      points: [
        "Las terapias son un espacio seguro para hablar sobre cualquier tema que sea de su preferencia.",
        "En la primera sesión se le guiará con preguntas generadoras, pero es importante recordar que es un ambiente libre de juicios donde usted decide cuáles son sus propios objetivos y relata su historia desde la perspectiva que desee.",
      ],
    },
    {
      label: "¿Para las sesiones de arteterapia es necesario tener experiencia?",
      points: [
        "No es necesario, estas herramientas están hechas para que cualquier persona pueda aprovecharlas.",
        "Las personas menos experimentadas en el ámbito artístico podrán explorar diferentes técnicas que les abrirá un abanico de oportunidades y retos para disfrutar de su creatividad.",
        "Mientras que los profesionales en el campo artístico podrán diversificar sus habilidades y expandir su conciencia en torno a los diferentes beneficios del arte y la sublimación emocional.",
      ],
    },
  ];

export { servicios, arteterapia, preguntas };