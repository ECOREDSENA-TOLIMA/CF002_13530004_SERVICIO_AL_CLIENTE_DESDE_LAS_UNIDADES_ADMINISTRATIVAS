export default {
  global: {
    componenteFormativo: 'Gestión de la calidad en el servicio al cliente',
    descripcionCurso:
      'Permitirá que se apropie de los conocimientos de servicio al cliente, etiqueta y protocolo, solicitudes de servicio, conocimientos generales de los medios de comunicación, la información y la implementación en las organizaciones. Se abordará el sistema de gestión de la calidad desde la auditoría y los planes de mejoramiento continuo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Etiqueta y protocolo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'El cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Reglas de protocolo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Imagen corporativa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normas de cortesía',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Solicitudes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas de información',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Respuesta a usuarios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Trazabilidad del servicio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medios de comunicación y la información ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Procedimiento técnico y normativa del sector',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Medios tecnológicos y su uso adecuado',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<i>Software</i> de servicio al cliente',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normas técnicas de gestión de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Trazabilidad de los procesos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Libreta de calificaciones',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Auditoría',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mejoramiento continuo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Lista de chequeo ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Evidencias',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Plan de acción y mejora',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_13530004.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Etiqueta y protocolo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s.f.). Etiqueta y protocolo empresarial [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bLFCFLIaQ4A',
    },
    {
      tema: 'Normas técnicas de gestión de calidad',
      referencia:
        'Pinzón, J. (2018). ISO 19011:2018. Directrices para la auditoría de sistemas de gestión. Icontec Internacional.',
      tipo: 'Presentación',
      link:
        'https://siga.unal.edu.co/images/informes-presentaciones/ISO_19011_2018_Directrices_auditoria_sistemas_gestion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado: 'Inspección o verificación del cumplimiento de requisitos.',
    },
    {
      termino: 'Calidad',
      significado:
        'La calidad es una propiedad que tiene una cosa u objeto, y que define su valor, así como la satisfacción que provoca en un sujeto (Peirò, 2020).',
    },
    {
      termino: 'Cliente',
      significado:
        'Un cliente es una persona o entidad que compra los bienes y servicios que ofrece una empresa (Quiroa, 2019).',
    },
    {
      termino: 'Servicio',
      significado:
        'Se entiende en el ámbito económico como la acción o conjunto de actividades destinadas a satisfacer una determinada necesidad de los clientes, brindando un producto inmaterial y personalizado (Sánchez, 2016).',
    },
  ],
  referencias: [
    {
      referencia: 'Palomo, M. (2014). Atención al cliente. Paraninfo.',
      link: '',
    },
    {
      referencia: 'Peirò, R. (2020). Calidad. Economipedia. ',
      link: 'https://economipedia.com/definiciones/calidad-2.html',
    },
    {
      referencia:
        'Pinzón, J. (2018). ISO 19011:2018. Directrices para la auditoría de sistemas de gestión. Icontec Internacional. ',
      link:
        'https://siga.unal.edu.co/images/informes-presentaciones/ISO_19011_2018_Directrices_auditoria_sistemas_gestion.pdf',
    },
    {
      referencia: 'Sánchez, J. (2015). Empresa. Economipedia. ',
      link: 'https://economipedia.com/definiciones/empresa.html',
    },
    {
      referencia: 'SENA. (2021). Tipos de clientes [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=FxVNkf957tw',
    },
    {
      referencia: 'SENA. (2021). Trazabilidad del servicio [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=GDK-3pt7Pyg',
    },
    {
      referencia: 'SENA. (2020). Servicio al cliente [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=j7zSYKv7w6k',
    },
    {
      referencia:
        'Pérez & Merino. (2021). Definicion de Diccionario virtual de la web. 2023. ',
      link: 'https://definicion.de/evidencia/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Alejandra Tovar',
          cargo: 'Experta Temática',
          centro: 'Regional Tolima- Centro de Industria y la Construcción.',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
