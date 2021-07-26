export default {
  global: {
    componenteFormativo: 'Normatividad y formalización empresa',
    descripcionCurso:
      'El presente componente busca fortalecer los conocimientos en las generalidades de comerciantes, empresas y demás asociadas a estas, así mismo, facilita la manera de reconocer los procesos para la formalización de empresas en Colombia, estableciendo el conocimiento en obligaciones comerciales, laborales, financieras y tributarias inherentes al desarrollo del objeto social de una organización económica. De allí la importancia de analizar la normatividad a nivel Internacional y Nacional de Información Financiera (NIIF), que reflejen la realidad de la empresa y contribuyan a la adecuada toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comerciante',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '1.1',
            titulo: 'Concepto y calidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.2',
            titulo: 'Deberes, derechos y obligaciones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Registro mercantil',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Cámara de Comercio: actos mercantiles',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '2.1',
            titulo:
              'Definición, clasificaciones, naturaleza y estructura de las organizaciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Sociedad: concepto, clasificación, requisitos para constitución y liquidación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Normas comerciales, laborales, tributarias y de información financiera para la constitución de la empresa',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Principios básicos de áreas funcionales, planeación estratégica, organización, dirección y control',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //nombreRuta: 'complementario',
      //icono: 'far fa-folder-open',
      //titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U. ',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá (2020, 6 de noviembre). Decreto 1252 de 1990.',
      link: 'https://bibliotecadigital.ccb.org.co/handle/11520/13702',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá (2020, 6 de noviembre). Decreto 726 de 2000',
      link: 'https://bibliotecadigital.ccb.org.co/handle/11520/14660',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública (2020, noviembre 6).',
      link: 'https://www.ctcp.gov.co/',
    },
    {
      referencia:
        'Cuaspa, C. (2013). Normas internacionales de información financiera convergencia a Colombia y aplicación a empresas de salud. Ediciones Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas nacionales -DIAN- (2020, noviembre 6).',
      link: 'https://www.dian.gov.co/',
    },
    {
      referencia:
        'Fayol, H. (1971). Administración industrial y general. Editorial Herrero Hermanos S.A.',
      link: '',
    },
    {
      referencia:
        'Instituto nacional de contadores públicos (2020, noviembre 6).',
      link: 'https://www.incp.org.co/',
    },
    {
      referencia: 'Junta central de contadores (2020, noviembre 6).',
      link: 'http://www.jcc.gov.co/',
    },
    {
      referencia:
        'Ministerio de Comercio Industria y Turismo -MINCIT- (2020, 6 de noviembre). Decreto 957 de 2019',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      referencia:
        'Münch, L. (2015). Administración: proceso administrativo, clave del éxito empresarial. Pearson.',
      link: '',
    },
    {
      referencia:
        'Santos-Cid, C. (2018). Una mirada a la historia de la Contabilidad. Revista Cubana De Finanzas Y Precios, 2(1), 139-155.',
      link: '',
    },
    {
      referencia:
        'Sánchez, V. (2015). La redefinición del papel de la empresa en la sociedad. Barataria: revista Castellano-Manchega de Ciencias Sociales, (20),129-145. ',
      link: '',
    },
    {
      referencia:
        'Secretaria del Senado (2020, octubre 15). Código del Comercio: Decreto-Ley 410 de 1971.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia: 'Secretaría del Senado (2020, noviembre 6). Ley 222 de 1995.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0222_1995.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, noviembre 6). Ley 1258 de 2008.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1258_2008.html',
    },
    {
      referencia: 'Secretaría del Senado (2020, noviembre 6) Ley 1014 de 2006.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1014_2006.html',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. Mc. Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Sistema Único de Información Normativa (2020, noviembre 6) Decreto 2420 de 2015 Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019674',
    },
    {
      referencia: 'Superintendencia de Sociedades (2020, noviembre 6).',
      link: 'http://www.supersociedades.gov.co/',
    },
    {
      referencia:
        'Vilches, R. (2019). Apuntes de contabilidad básica. Editorial El Cid.',
      link: '',
    },
    {
      referencia:
        'Warren, C., Reeves, J. y Duchac, J. (2016). Contabilidad financiera. Cengage Learning.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad financiera',
      significado:
        'Sistema de información integrado a la empresa, cuyas funciones son recolectar, clasificar, registrar, resumir, analizar e interpretar la información financiera de la organización.',
    },
    {
      termino: 'Comerciantes',
      significado:
        'Personas que ejercen alguna de las actividades que se consideran mercantiles.',
    },
    {
      termino: 'Empresa comercial',
      significado:
        'Ente económico dedicado a la compra y venta de bienes, conocidos como mercancías.',
    },
    {
      termino: 'Empresa de manufactura',
      significado:
        'Ente económico dedicado a producir y vender un producto elaborado a partir de materias primas y sometido a un proceso productivo.',
    },
    {
      termino: 'Empresa de servicio',
      significado:
        'Ente económico dedicado a la prestación de servicios o a la venta de una capacidad profesional.',
    },
    {
      termino: 'Normas básicas',
      significado:
        'Conceptos básicos y reglas que se deben observar al efectuar los registros contables correspondientes a las actividades que desarrollan las personas jurídicas o naturales, y que deben aplicar todas las personas obligadas a llevar contabilidad.',
    },
    {
      termino: 'Razón comercial',
      significado:
        'Es el nombre que se asigna a la empresa, para darse a conocer ante el público o mercado.',
    },
    {
      termino: 'Razón social',
      significado:
        'Es el nombre de la empresa, que se encuentra registrado en la cámara de comercio y demás entidades de control.',
    },
    {
      termino: 'Registro Único Tributario (RUT) ',
      significado:
        'Es el documento que se tramita ente la Dirección de Impuestos y Aduanas Nacionales (DIAN), el cual relaciona la clasificación y responsabilidades del contribuyente.',
    },
    {
      termino: 'Sociedad anónima',
      significado:
        'Sociedad que requiere para su constitución un mínimo de cinco socios. Su capital se divide en acciones de igual valor y la responsabilidad de los socios se limita a los aportes de capital.También se conoce con el nombre de corporación.',
    },
    {
      termino: 'Unidad de valor tributario (UVT) ',
      significado:
        'Es una medida que busca estandarizar el cumplimiento de las obligaciones tributarias.',
    },
  ],
  complementario: [
    {
      texto:
        'Gerencia del servicio.	Prieto, J. (2018). Gerencia del servicio. (4a. ed.). Ecoe Ediciones. ',
      tipo: 'Capítulo I, II, III',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6320',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Patricia Mantilla Galvis',
        cargo: 'Instructora',
        centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
