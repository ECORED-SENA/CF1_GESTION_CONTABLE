<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 La empresas

    .bloque-texto-a.gris-azul.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0        
          img(src="@/assets/tema2/img_2_01.svg", alt="alt",style="width:275px;").m-auto          
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Para iniciar el proceso contable en una organización, es indispensable hablar de empresa y sociedades teniendo en cuenta la clasificación, características y requisitos. La contextualización de estos elementos contribuye en la identificación de la normatividad financiera y tributaria aplicable en cada caso; por lo tanto, es importante la apropiación de los conceptos que se proponen en esta unidad.


    #t_2_1.titulo-segundo
      h2 2.1 Definición, clasificaciones, naturaleza y estructura de las organizaciones

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yvEoYhSCaV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    h3 Clasificaciones, naturaleza y estructura de las organizaciones

    p.mb-5 Las empresas se clasifican de la siguiente manera (Angulo, 2018; Münch, 2015; Sánchez, 2015Vilches, 2019; Warren, Reeves y Duchac, 2016; Cuaspa, 2013):

    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-cafe")
          .row.align-items-top.my-3.p-3(titulo="Según su objetivo")
            .col-auto.mb-4.mb-lg-0        
              img(src="@/assets/tema2/img_2_1_01.svg", alt="alt", style="width:90px;")          
            .col-lg
              p #[strong Con ánimo de lucro:] son empresas que tienen por objetivo la generación de rentabilidad o beneficios económicos, los cuales serán distribuidos entre los socios o propietarios. En esta clasificación podemos mencionar: persona naturales y jurídicas. 
              p #[strong Sin ánimo de lucro:] son empresas creadas en apoyo de la comunidad. No se distribuyen las ganancias, estas son invertidas en la organización para beneficio social. En este grupo se encuentran: fundaciones de beneficencia, fondos de empleados, corporaciones civiles, clubes deportivos, etc.
          .row.align-items-top.my-3.p-3(titulo="Según su actividad económica")
            .col-auto.mb-4.mb-lg-0        
              img(src="@/assets/tema2/img_2_1_02.svg", alt="alt", style="width:70px;")          
            .col-lg
              p #[strong Empresas agropecuarias:] son las empresas dedicadas a la producción de bienes agrícolas y pecuarios. Ejemplo: granjas avícolas, de cultivos de hortalizas y granos.

              p #[strong Empresas mineras:] son las empresas que explotan los recursos del subsuelo.  Ejemplo: empresas petroleras, de piedras preciosas.

              p #[strong Empresas industriales:] son aquellas que transforman materia prima en producto terminados. Ejemplo: fábricas de jean, de calzado y muebles.

              p #[strong Empresas comerciales:] realizan actividades de compra y venta de bienes. Ejemplo: empresas de electrodomésticos, supermercados, etc.

              p #[strong Empresas de servicios:] son aquellas empresas que tienen como objetivo satisfacer una necesidad. Ejemplo: empresas de salud, transporte, educación, etc.

          .row.align-items-top.my-3.p-3(titulo="Según la procedencia de capital")
            .col-auto.mb-4.mb-lg-0        
              img(src="@/assets/tema2/img_2_1_03.svg", alt="alt", style="width:90px;")          
            .col-lg
              p #[strong Empresas privadas:] están constituidas con capital privado; es decir, aporte de particulares.

              p #[strong Empresas oficiales o públicas:] son las empresas constituidas con capital del Estado.

              p #[strong Empresas de economía mixta:] son creadas con aportes de capital privado y público.  

          .row.align-items-top.my-3.p-3(titulo="Según el grupo de presentación de información financiera")
            .col-auto.mb-4.mb-lg-0        
              img(src="@/assets/tema2/img_2_1_04.svg", alt="alt", style="width:90px;")          
            .col-lg
              p.mb-4 #[strong Grupo 1:] son las empresas que aplican las NIIF plenas. De acuerdo con el Decreto 2420 y 2496 de 2015, son: Emisores de valores, Entidades de interés público, Entidades que tengan Activos totales superiores a treinta mil (30.000) SMMLV o planta de personal superior a doscientos (200) trabajadores; que no sean emisores de valores ni entidades de interés público y que cumplan además cualquiera de los siguientes requisitos: 

              ul.lista-ul--color.mb-4
                li.mb-3
                  i.fas.fa-check
                  | Ser subordinada o sucursal de una compañía extranjera que aplique NIIF. 
                li.mb-3
                  i.fas.fa-check
                  | Ser subordinada o matriz de una compañía nacional que deba aplicar NIIF. 
                li.mb-3
                  i.fas.fa-check
                  | Realizar importaciones (pagos al exterior) o exportaciones (ingresos del exterior) que representen más del 50% de las compras o de las ventas respectivamente (Sistema Único de Información Normativa, 2020).

              p #[strong Grupo 2:] son las empresas que aplican las NIIF para Pymes. De acuerdo con el Decreto 2420 y 2496 de 2015, son: Empresas que tengan activos totales por valor entre quinientos (500) y treinta mil (30.000) SMMLV o planta de personal entre once (11) y doscientos (200) trabajadores, y que no sean emisores de valores ni entidades de interés público. Microempresas que tengan activos totales excluida la vivienda por un valor máximo de quinientos (500) SMMLV o planta de personal no superior a los (10) trabajadores, y cuyos ingresos brutos anuales sean iguales o superiores a 6.000 SMMLV (Sistema Único de Información Normativa, 2020).

              p #[strong Grupo 3:] son las empresas que aplican contabilidad simplificada para microempresas. De acuerdo con el Decreto 2420 y 2496 de 2015, son: personas naturales o jurídicas que cumplan los criterios establecidos en el art. 499 del Estatuto Tributario (ET) y normas posteriores que lo modifiquen. Para el efecto se tomará el equivalente a UVT, en salarios mínimos legales vigentes. b) Microempresas que tengan Activos totales excluida la vivienda por un valor máximo de quinientos (500) SMMLV o planta de personal no superior a los (10) trabajadores que no cumplan con los requisitos para ser incluidas en el grupo 2 ni en el literal anterior (Sistema Único de Información Normativa, 2020).      
      
          .row.align-items-top.my-3.p-3(titulo="Según Conformación del Capital")
            .col-auto.mb-4.mb-lg-0        
              img(src="@/assets/tema2/img_2_1_05.svg", alt="alt", style="width:90px;")          
            .col-lg
              p #[strong Multinacionales:] son aquellas empresas que realizan operaciones a nivel mundial, generalmente constituida con capital extranjero. Ejemplo: BBVA.
              p #[strong Grupos económicos:] son empresas que pertenecen a al mismo grupo de socios o propietarios, se dedican a diferentes sectores de la economía. Ejemplo: Grupo Santo Domingo, Grupo Luis Carlos Sarmiento Angulo.
              p #[strong Nacionales:] son las empresas creadas en el territorio colombiano, cuentan con una empresa principal y varias sucursales. Ejemplo: Arturo calle, Panamericana.
              p #[strong Locales:] son las empresas que funcionan dentro de la misma localidad.

          .row.align-items-top.my-3.p-3(titulo="Según su naturaleza")
            .col-auto.mb-4.mb-lg-0        
              img(src="@/assets/tema2/img_2_1_06.svg", alt="alt", style="width:90px;")          
            .col-lg
              p #[strong Personas naturales:] son las empresas constituidas por una persona, quienes adquieren derechos y obligaciones. Es cualquier individuo de la especie humana.
              p #[strong Personas jurídicas:] son un ente ficticio, pertenecen las sociedades, quienes adquieren derechos y contraer obligaciones civiles.

          .row.align-items-top.my-3.p-3(titulo="Según el tamaño")
            .col-auto.mb-4.mb-lg-0        
              img(src="@/assets/tema2/img_2_1_06.svg", alt="alt", style="width:90px;")          
            .col-lg
              p.mb-4 De acuerdo con el Decreto 957 del 5 de junio de 2019, las empresas según el tamaño se clasifican en micro, pequeña, mediana y gran empresa, el criterio de clasificación se encuentra definido por los ingresos de las actividades ordinarias anuales de acuerdo con el sector manufacturero, de servicios y comercial. La clasificación está determinada de la siguiente manera (MINCIT, 2020):
              
              h4.mb-4.text-center.text-brown Sector manufacturero

              .overflow_x.mb-5
                table(style="min-width: 650px;")
                  thead                   
                  tbody
                    tr
                      td.c1 Microempresa
                      td.c2 Ingresos <= 23.563 Unidad de valor Tributario (UVT)
                    tr
                      td.c1 Peque&ntilde;a
                      td.c2 Ingresos >= 23.563 Unidad de valor Tributario (UVT) y <= 204.995 UVT.
                    tr
                      td.c1 Mediana
                      td.c2 Ingresos >= 204.995 Unidad de valor Tributario (UVT) y <= 1.736.565 UVT.
                    tr
                      td.c1 Grande
                      td.c2 Ingresos >= 1.736.565 UVT.

              h4.mb-4.text-center.text-brown Sector servicios:

              .overflow_x.mb-5
                table(style="min-width: 650px;")
                  thead                   
                  tbody
                    tr
                      td.c1 Microempresa
                      td.c2 Ingresos <= 32.988 Unidad de valor Tributario (UVT)
                    tr
                      td.c1 Peque&ntilde;a
                      td.c2 Ingresos >= 32.988 Unidad de valor Tributario (UVT) y <= 131.951 UVT.
                    tr
                      td.c1 Mediana
                      td.c2 Ingresos >= 131.951 Unidad de valor Tributario (UVT) y <= 483.034 UVT.
                    tr
                      td.c1 Grande
                      td.c2 Ingresos >= 483.034 UVT.

              h4.mb-4.text-center.text-brown Sector comercial:

              .overflow_x.mb-5
                table(style="min-width: 650px;")
                  thead                   
                  tbody
                    tr
                      td.c1 Microempresa
                      td.c2 Ingresos <= 44.769 Unidad de valor Tributario (UVT)
                    tr
                      td.c1 Peque&ntilde;a
                      td.c2 Ingresos >= 44.769 Unidad de valor Tributario (UVT) y <= 431.196 UVT.
                    tr
                      td.c1 Mediana
                      td.c2 Ingresos >= 431.196 Unidad de valor Tributario (UVT) y <= 2.160.692 UVT.
                    tr
                      td.c1 Grande
                      td.c2 Ingresos >= 2.160.692 UVT.

              p.mb-0 Cabe resaltar que el presente decreto empezó a regir a partir de diciembre de 2019, donde se constituye como criterio de clasificación los ingresos ordinarios del año inmediatamente anterior, los cuales corresponden a las ventas brutas anuales derivadas del objeto social. En caso de que los ingresos generados sean de diferentes sectores, se tendrá en cuenta el rango de los ingresos del sector económico más altos (MINCIT, 2020).
    separador

    #t_2_2.titulo-segundo
      h2 2.2 Sociedad: concepto, clasificación, requisitos para constitución y liquidación

    h3.mb-4 #[span.square a] Concepto

    .row.mb-5
      .col-lg-4
        figure.mb-4.mb-lg-0
          img(src="@/assets/tema2/img_2_2_01.svg", alt="alt", style="width:250px;").m-auto
      .col-lg
        .cajon.box-custonclr.p-4.mb-4
          p.mb-0 Según el Código de Comercio la constitución de una sociedad consiste en que “dos o más personas se obligan a hacer un aporte en dinero, en trabajo o en otros bienes apreciables en dinero, con el fin de repartirse entre sí las utilidades obtenidas en la empresa o actividad social” (Secretaría del Senado, 2020, Art. 98).
        p De acuerdo con lo anterior, en la constitución de la sociedad intervienen diferentes personas, las cuales se denominan socios, quienes realizan aportes de diferente índole. Esto con el objetivo de distribuirse las ganancias generadas en el curso normal del desarrollo de las operaciones comerciales. Cabe resaltar, que las sociedades se crean bajo la figura de persona jurídica distinta de los socios individualmente considerados.

    h3.mb-4 #[span.square b] Clasificación

    p De acuerdo con el Código de Comercio las sociedades se clasifican de la siguiente forma (Secretaría del Senado, 2020):

    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta-cafe")
          .row.align-items-top.my-3.p-3(titulo="Sociedad colectiva")            
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_02.svg", alt="alt", style="width:90px;").m-auto                     
                .col-lg
                  p.mb-0 #[strong Número de socios]
                  p.mb-0 Para su constitución deben existir mínimo dos socios. 
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_03.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Responsabilidad de los socios]
                  p.mb-0 Responden solidaria e ilimitadamente por las operaciones sociales.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_04.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Razón social]
                  p.mb-0 Se forma con el nombre completo o el solo apellido de alguno o algunos de los socios seguido de las expresiones "& compañía", "hermanos", "e hijos", u otras análogas, si no se incluyen los nombres completos o los apellidos de todos los socios.
            .sep_01             
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_05.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Conformación del capital]
                  p.mb-0 El capital lo constituye el aporte de los socios.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-start.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_06.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-3 #[strong Causales de disolución y liquidación (Secretaría del Senado, 2020, Art. 218).]

                  ul
                    li.mb-3 #[strong Por muerte de alguno de los socios] si no se hubiere estipulado su continuación con uno o más de los herederos, o con los socios supérstites.
                    li.mb-3 #[strong Por incapacidad sobreviniente a alguno de los socios,] a menos que se convenga que la sociedad continúe con los demás, o que acepten que los derechos del incapaz sean ejercidos por su representante.
                    li.mb-3 #[strong Por declaración de quiebra de alguno de los socios,] si los demás no adquieren su interés social o no aceptan la cesión a un extraño, una vez requeridos por el síndico de la quiebra, dentro de los treinta días siguientes.
                    li.mb-3 #[strong Por enajenación forzada del interés de alguno de los socios en favor de un extraño,] si los demás asociados no se avienen dentro de los treinta días siguientes a continuar la sociedad con el adquirente.
                    li.mb-0 #[strong Por renuncia o retiro justificado de alguno de los socios,] si los demás no adquieren su interés en la sociedad o no aceptan su cesión a un tercero.            

          .row.align-items-top.my-3.p-3(titulo="Sociedad en comandita simple")            
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_02.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Número de socios]
                  p.mb-0 Intervienen dos categorías de socios: #[strong comanditarios (aportes de capital) y gestores (aporte industrial)].  
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_03.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Responsabilidad de los socios]
                  p.mb-0 Responden los socios gestores solidaria e ilimitadamente por las operaciones sociales.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_04.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Razón social]
                  p.mb-0 Se forma con el nombre completo o apellido de uno o más de los socios colectivo seguido de "& compañía", finalmente se registra la expresión “Sociedad en comandita”.
            .sep_01             
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_05.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Conformación del capital]
                  p.mb-0 El capital lo constituye el aporte de los socios comanditarios y los socios gestores.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-start.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_06.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p #[strong Causales de disolución y liquidación]
                  ul
                    li.mb-3 Causales definidas en el Art. 218 del Código de comercio.
                    li.mb-3 Causales definidas en el Art. 319 del Código de comercio.
                    li.mb-3 Por desaparición de alguna de las categorías de socios.
                    li.mb-0 Cuando ocurran pérdidas que reduzcan el patrimonio neto a menos del cincuenta por ciento del capital suscrito.  

          .row.align-items-top.my-3.p-3(titulo="Sociedad en comandita por acciones")            
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_02.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Número de socios]
                  p.mb-0 Intervienen dos categorías de socios: #[strong comanditarios (aportes de capital) y gestores (aporte industrial).]   
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_03.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Responsabilidad de los socios]
                  p.mb-0 Responden los socios gestores solidaria e ilimitadamente por las operaciones sociales.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_04.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Razón social]
                  p.mb-0 Se forma con el nombre completo o apellido de uno o más de los socios colectivo seguido de "& compañía", finalmente se registra la expresión “Sociedad en comandita por acciones”.
            .sep_01             
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_05.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Conformación del capital]
                  p.mb-0 El capital lo constituye el aporte de los socios, mediante acciones de igual valor.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-start.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_06.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p #[strong Causales de disolución y liquidación]
                  ul
                    li.mb-3 Causales definidas en el Art. 218 del Código de comercio.
                    li.mb-3 Causales definidas en el Art. 319 del Código de comercio.
                    li.mb-3 Por desaparición de alguna de las categorías de socios.
                    li.mb-0 Cuando ocurran pérdidas que reduzcan el patrimonio neto a menos del cincuenta por ciento del capital suscrito.                  
          .row.align-items-top.my-3.p-3(titulo="Sociedad de responsabilidad limitada")            
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_02.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Número de socios]
                  p.mb-0 Para su constitución deben existir mínimo dos socios y máximo 25.   
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_03.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Responsabilidad de los socios]
                  p.mb-0 Responden limitadamente; es decir, hasta el límite de sus aportes.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_04.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Razón social]
                  p.mb-0 Se forma con el nombre o denominación de la sociedad, seguido de la expresión “Limitada o LTDA”.
            .sep_01             
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_05.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Conformación del capital]
                  p.mb-0 El capital lo constituye las cuotas de igual valor.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-start.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_06.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p #[strong Causales de disolución y liquidación]
                  ul
                    li.mb-3 Causales definidas en el Art. 218 del Código de comercio.
                    li.mb-3 Cuando ocurran pérdidas que reduzcan el patrimonio neto a menos del cincuenta por ciento.
                    li.mb-0 Cuando el número de socios exceda de 25.    

          .row.align-items-top.my-3.p-3(titulo="Sociedad anónima")            
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_02.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Número de socios]
                  p.mb-0 Para su constitución deben existir mínimo cinco socios.  
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_03.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Responsabilidad de los socios]
                  p.mb-0 Responden limitadamente; es decir, hasta el límite de sus aportes.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_04.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Razón social]
                  p.mb-0 Se forma con el nombre o denominación de la sociedad, seguido de la expresión “Sociedad anónima o S.A.”.
            .sep_01             
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_05.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Conformación del capital]
                  p.mb-0 El capital lo constituye acciones de igual valor.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-start.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_06.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p #[strong Causales de disolución y liquidación]
                  ul
                    li.mb-3 Causales definidas en el Art. 218 del Código de comercio.
                    li.mb-3 Cuando ocurran pérdidas que reduzcan el patrimonio neto a menos del cincuenta por ciento, del capital suscrito.
                    li.mb-0 Cuando el 95% o más de las acciones suscritas pertenezcan a un solo socio.

          .row.align-items-top.my-3.p-3(titulo="Sociedad por acciones simplificada")            
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_02.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Número de socios]
                  p.mb-0 Se encuentran constituidas por uno o más socios.   
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_03.svg", alt="alt", style="width:90px;").m-auto
                     
                .col
                  p.mb-0 #[strong Responsabilidad de los socios]
                  p.mb-0 Responden limitadamente; es decir, hasta el límite de sus aportes.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_04.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Razón social]
                  p.mb-0 Se forma con el nombre o denominación de la sociedad, seguido de la expresión “Sociedad por acciones o S.A.S”.
            .sep_01             
            .col-lg.mb-lg-0
              .row.align-items-center.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_05.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p.mb-0 #[strong Conformación del capital]
                  p.mb-0 El capital lo constituye acciones de igual valor, las cuales no pueden inscribirse en el Registro Nacional de Valores.
            .sep_01 
            .col-lg.mb-lg-0
              .row.align-items-start.h_100
                .col-auto
                  figure
                    img(src="@/assets/tema2/img_2_2_06.svg", alt="alt", style="width:90px;").m-auto                     
                .col
                  p #[strong Causales de disolución y liquidación]
                  p De acuerdo con la Ley 1258 de 2008 (Secretaría del Senado, 2020. Art 34), las causales de disolución son:
                  ul
                    li.mb-3 Por vencimiento del término previsto en los estatutos.
                    li.mb-3 Por imposibilidad de desarrollar las actividades previstas en su objeto social.
                    li.mb-3 Por la iniciación del trámite de liquidación judicial.     
                    li.mb-3 Por las causales previstas en los estatutos.     
                    li.mb-3 Por voluntad de los accionistas adoptada en la asamblea o por decisión del accionista único.    
                    li.mb-3 Por orden de autoridad competente.   
                    li.mb-0 Por pérdidas que reduzcan el patrimonio neto de la sociedad por debajo del cincuenta por ciento del capital suscrito.     

    h3.mb-4 #[span.square c] Requisitos para constitución  

    .tarjeta.tarjeta-gris.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure
            img(src="@/assets/tema2/img_2_2_07.svg", alt="alt", style="width:150px;").m-auto
        .col
          p De acuerdo con el Código de Comercio (Secretaría del Senado, 2020, Art. 110), se relacionan los requisitos para la constitución de una sociedad, la cual se realizará mediante escritura pública, relacionando:

    .tarjeta.tarjeta--gris.p-4.mb-5        
      PasosB.color-acento-contenido
        .row.align-items-center(titulo="El nombre")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_08.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p El nombre y domicilio de las personas que intervengan como otorgantes. Con el nombre de las personas naturales deberá indicarse su nacionalidad y documento de identificación legal; con el nombre de las personas jurídicas, la ley, decreto o escritura de que se deriva su existencia.
        .row.align-items-center(titulo="La clase")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_09.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p La clase o tipo de sociedad que se constituye y el nombre de esta, formado como se dispone en relación con cada uno de los tipos de sociedad que regula este Código.
        .row.align-items-center(titulo="El domicilio")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_10.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p El domicilio de la sociedad y el de las distintas sucursales que se establezcan en el mismo acto de constitución.
        .row.align-items-center(titulo="El objeto social")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_11.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p El objeto social, esto es, la empresa o negocio de la sociedad, haciendo una enunciación clara y completa de las actividades principales. Será ineficaz la estipulación en virtud de la cual el objeto social se extienda a actividades enunciadas en forma indeterminada o que no tengan una relación directa con aquel.
        .row.align-items-center(titulo="El capital")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_12.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p El capital social, la parte de este que se suscribe y la que se paga por cada asociado en el acto de la constitución. En las sociedades por acciones deberá expresarse, además, el capital suscrito y el pagado, la clase y valor nominal de las acciones representativas del capital, la forma y términos en que deberán cancelarse las cuotas debidas, cuyo plazo no podrá exceder de un año.
        .row.align-items-center(titulo="La forma")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_13.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p La forma de administrar los negocios sociales, con indicación de las atribuciones y facultades de los administradores, y de las que se reserven los asociados, las asambleas y las juntas de socios, conforme a la regulación legal de cada tipo de sociedad.
        .row.align-items-center(titulo="La época")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_14.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p La época y la forma de convocar y constituir la asamblea o la junta de socios en sesiones ordinarias o extraordinarias, y la manera de deliberar y tomar los acuerdos en los asuntos de su competencia.
        .row.align-items-center(titulo="Las fechas")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_15.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p Las fechas en que deben hacerse inventarios y balances generales, y la forma en que han de distribuirse los beneficios o utilidades de cada ejercicio social, con indicación de las reservas que deban hacerse.
        .row.align-items-center(titulo="La duración")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_16.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p La duración precisa de la sociedad y las causales de disolución anticipada de la misma.
        .row.align-items-center(titulo="La liquidación")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_17.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p La forma de hacer la liquidación, una vez disuelta la sociedad, con indicación de los bienes que hayan de ser restituidos o distribuidos en especie, o de las condiciones en que, a falta de dicha indicación, puedan hacerse distribuciones en especie.
        .row.align-items-center(titulo="Las diferencias")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_18.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p Si las diferencias que ocurran a los asociados entre sí o con la sociedad, con motivo del contrato social, han de someterse a decisión arbitral o de amigables componedores y, en caso afirmativo, la forma de hacer la designación de los árbitros o amigables componedores.
        .row.align-items-center(titulo="El nombre")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_08.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p El nombre y domicilio de la persona o personas que han de representar legalmente a la sociedad, precisando sus facultades y obligaciones, cuando esta función no corresponda, por la ley o por el contrato, a todos o a algunos de los asociados.
        .row.align-items-center(titulo="Las facultades")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_19.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p Las facultades y obligaciones del revisor fiscal, cuando el cargo esté previsto en la ley o en los estatutos.
        .row.align-items-center(titulo="Los demás pactos")
          .col-auto
            figure
              img(src="@/assets/tema2/img_2_2_20.svg", alt="alt", style="width:300px").m-auto               
          .col-lg
            p Los demás pactos que, siendo compatibles con la índole de cada tipo de sociedad, estipulen los asociados para regular las relaciones a que da origen el contrato.

    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/tema2/img_2_2_21.svg', alt="alt", style="width:190px;").m-auto     
      .col-lg
        p De acuerdo con la Ley 1014 de 2006 (Secretaría del Senado, 2020), pueden constituirse sociedades pluripersonales bajo documento privado que reúna los siguientes requisitos:

    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 1
          .col
            p.mb-0 Nombre, documento de identidad, domicilio y dirección del socio o socios.
        .sep_01 
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 2
          .col
            p.mb-0 El domicilio social. 
        .sep_01 
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 3
          .col
            p.mb-0 El término de duración o la indicación de que este es indefinido. 
        .sep_01 
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 4
          .col
            p.mb-0 Una enunciación clara y completa de las actividades principales, a menos que se exprese que la sociedad podrá realizar cualquier acto lícito de comercio. 
        .sep_01 
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 5
          .col
            p.mb-0 El monto del capital haciendo una descripción pormenorizada de los bienes aportados, con estimación de su valor. El socio o socios responderá por el valor asignado a los bienes en el documento constitutivo.
        .sep_01 
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 6
          .col
            p.mb-0 El número de cuotas, acciones o partes de interés de igual valor nominal en que se dividirá el capital de la sociedad y la forma en que serán distribuidas si fuere el caso. 
        .sep_01 
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 7
          .col
            p.mb-0 La forma de administración dentro del tipo o especie de sociedad de que se trate, así como el nombre, documento de identidad y las facultades de sus administradores. A falta de estipulaciones se entenderá que los administradores podrán adelantar todos los actos comprendidos dentro de las actividades previstas. 
        .sep_01 
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 8
          .col
            p.mb-0 Declaración por parte del constituyente o constituyentes, según sea el caso, o de sus representantes o apoderados sobre el cumplimiento de al menos uno de los requisitos señalados en el artículo 22 de la Ley 1014 de 2006 (Secretaría del Senado, 2020), esto es, que cuenten con diez (10) o menos trabajadores, o con activos totales, excluida la vivienda, por valor inferior a quinientos (500) salarios mínimos legales mensuales vigentes. 
        .sep_01 

    p.mb-5 Recuerde que, una vez se obtiene la escritura pública o documento privado debe tramitarse el registro mercantil ante la cámara de comercio en la jurisdicción del domicilio.

    h3.mb-4 #[span.square d] Liquidación  

    p.mb-5 Según el Código de Comercio (Secretaría del Senado, 2020, Art. 218 y 225) se relacionan las causales de disolución y liquidación de una sociedad.

    h4.text-center.mb-5 Causales de disolución

    .row.align-items-center.mb-5
      .col-lg-4.order-2.order-lg-1
        ul.lista-ul--color
          li.mb-4 
            i.fas.fa-check
            | Por vencimiento del término previsto para su duración en el contrato.
          li.mb-4 
            i.fas.fa-check
            | Por la imposibilidad de desarrollar el objeto social.
          li.mb-4 
            i.fas.fa-check
            | Por reducción del número de asociados a menos del requerido en la ley para su formación o funcionamiento, o por aumento que exceda del límite máximo fijado en la misma ley.
          li.mb-4 
            i.fas.fa-check
            | Por la declaración de quiebra de la sociedad.
      .col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
        figure
          img(src="@/assets/tema2/img_2_2_22.svg", alt="alt", style="width:300px").m-auto
      .col-lg-4.order-3
        ul.lista-ul--color
          li.mb-4 
            i.fas.fa-check
            | Por las causales que expresa y claramente se estipulen en el contrato.
          li.mb-4 
            i.fas.fa-check
            | Por decisión de los asociados.
          li.mb-4 
            i.fas.fa-check
            | Por decisión de autoridad competente en los casos expresamente previstos en las leyes.
          li.mb-4 
            i.fas.fa-check
            | Por las demás causales establecidas en las leyes, en relación con todas o algunas de las formas de sociedad que regula este Código.

    h3 Liquidación de una sociedad
    p.mb-5 La liquidación de una sociedad hace referencia a su terminación definitiva, la cual se deriva de las causales de disolución presentadas anteriormente; además, de las señaladas de forma específica, conforme con el tipo de sociedad constituida.

    h3.text-center.mb-5 Proceso de liquidación de la sociedad

    LineaTiempoIcon.mb-5(:datos="datosLineaTiempoIcon")

    h3.mb-4 #[span.square e] Fenómenos societarios 

    .row.mb-5
      .col-lg-6
        .tarjeta.tarjeta-azul.p-5.h_100
          figure.mb-4
            img(src="@/assets/tema2/img_2_2_23.svg", alt="alt", style="width:200px;").m-auto
          p #[strong Transformación:] la transformación es una reforma estatutaria en la cual la sociedad cambia de tipo societario, modificando el tipo de organización jurídica de la entidad según lo estipulado en el Código de Comercio (Secretaría del Senado, 2020, Art. 167).
          p.mb-0 Por ejemplo, cuando las empresas unipersonales se transformaron en Sociedad de Acciones Simplificadas (SAS), conforme los lineamientos establecidos en la Ley 1258 de 2008 (Secretaría del Senado, 2020).
      .col-lg-6
        .tarjeta.tarjeta-caki.p-5.h_100
          figure.mb-4
            img(src="@/assets/tema2/img_2_2_24.svg", alt="alt", style="width:180px;").m-auto
          p #[strong Fusión:] la fusión es una reforma estatutaria en la cual una o más sociedades se disuelven sin liquidarse, para ser absorbidas por otra o crear una nueva. De esta manera, traspasan sus activos, pasivos, derechos y obligaciones a otra(s) sociedad(es) existente (sociedad absorbente) o a la nueva sociedad según lo estipulado en el Código de Comercio (Secretaría del Senado, 2020, Art. 172). 

    separador

    #t_2_3.titulo-segundo
      h2 2.3 Normas comerciales, laborales, tributarias y de información financiera para la constitución de la empresa

    .row.mb-5
      .col-lg
        p.mb-0 Para constituir una empresa es importante dar cumplimiento a los requisitos comerciales, laborales, tributarios y de funcionamiento; sin olvidar, aplicar adecuadamente las Normas Internacionales de Información Financiera (NIIF) para llevar a cabo el proceso contable de forma satisfactoria.  A continuación, se relacionan los diversos requisitos, los cuales aplican de acuerdo con el tipo de empresa que se desea constituir:
      .col-auto
        figure
          img(src="@/assets/tema2/img_2_2_25.svg", alt="alt", style="width:450px;").m-auto

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Comerciales")
        .row.justify-content-center
          .col-lg-10
            h4 Normas comerciales
            ul.lista-ul--color
              li.mb-4 
                i.fas.fa-check
                | Identificar el tipo de empresa y/o empresa que se desea constituir, teniendo en cuenta la figura de persona natural o jurídica.
              li.mb-4 
                i.fas.fa-check
                | Verificar ante la cámara de comercio el nombre de la empresa, con el fin de evitar que ya se encuentre en el sistema creado; adicionalmente, confirmar la actividad económica (código CIIU).
              li.mb-4 
                i.fas.fa-check
                | Dependiendo del tipo de empresa y/o sociedad se debe generar la escritura pública o documento privado en la notaría. Este documento es utilizado en el momento de constituir una sociedad, donde participan diferentes socios y sus aportes son de diversas formas.
              li.mb-4 
                i.fas.fa-check
                | Diligenciar y presentar el formulario de Registro Único empresarial y social (RUES) y formulario de matrícula en la Cámara de Comercio de la jurisdicción donde se encuentra ubicada la empresa.
              li.mb-4 
                i.fas.fa-check
                | Una vez diligenciados los formularios pertinentes se genera la inscripción del registro mercantil y se obtiene el certificado de existencia y representación legal.
      .py-3.py-md-4(titulo="Normas laborales")
        .row.justify-content-center
          .col-lg-10
            h4 Normas laborales
            ul.lista-ul--color
              li.mb-4 
                i.fas.fa-check
                | En el caso de contratar colaboradores para el desarrollo de las actividades de la empresa se debe realizar el contrato de trabajo que reúna los requisitos legales; además de presentar los exámenes de ingreso a que hay lugar. 
              li.mb-4 
                i.fas.fa-check
                | Afiliar a los colaboradores a Entidades Promotoras de salud (EPS), Fondos de pensión y Administradora de Riesgos Laborales (ARL). 
              li.mb-4 
                i.fas.fa-check
                | Realizar aportes parafiscales: cajas de compensación familiar, SENA e ICBF, teniendo en cuenta las directrices para su aplicación.
              li.mb-4 
                i.fas.fa-check
                | Diseñar e implementar un programa de Seguridad y Salud en el Trabajo, aplicable de acuerdo con el número de trabajadores.
      .py-3.py-md-4(titulo="Normas tributirias")
        .row.justify-content-center
          .col-lg-10
            h4 Normas tributarias
            ul.lista-ul--color
              li.mb-4 
                i.fas.fa-check
                | Registrar la inscripción ante la Dirección de impuestos y Aduanas Nacionales (DIAN) para obtener el Registro Único Tributario (RUT).
              li.mb-4 
                i.fas.fa-check
                | Solicitar autorización de numeración para facturar, teniendo en cuenta los requisitos establecidos. 
              li.mb-4 
                i.fas.fa-check
                | Presentar oportunamente las declaraciones de IVA, de renta y complementarios, de industria y comercio si cumple con los requisitos para hacerlo.
              li.mb-4 
                i.fas.fa-check
                | Presentar oportunamente las declaraciones de retención en la fuente por renta, IVA y de ICA, teniendo en cuenta la norma vigente y si cumple con los requisitos para realizarlo.
      .py-3.py-md-4(titulo="Normas de funcionamiento")
        .row.justify-content-center
          .col-lg-10
            h4 Normas de funcionamiento
            ul.lista-ul--color
              li.mb-4 
                i.fas.fa-check
                | Adquirir el certificado de sanidad, el cual indica que el establecimiento cuenta con los estándares de salubridad exigidos.
              li.mb-4 
                i.fas.fa-check
                | Obtener el Certificado de bomberos, que tiene como objetivo la seguridad de los colaboradores mediante la identificación de riesgos. 
              li.mb-4 
                i.fas.fa-check
                | Requerir el certificado de estudio de uso de suelos, expedido por las oficinas de planeación.
              li.mb-4 
                i.fas.fa-check
                | Solicitar paz y salvo de Sayco y Acinpro para el pago de derechos de autor e intérpretes musicales.
      .py-3.py-md-4(titulo="Información financiera")
        .row.justify-content-center
          .col-lg-10
            h4 Normas de información financiera
            p La contabilidad existe desde la antigüedad, surgió a partir de la necesidad de llevar un control de las operaciones comerciales. Esta profesión ha ido evolucionando con los diferentes cambios del mercado a través del tiempo. Esto ha incentivado la sistematización de los procesos contables, agilizando de cierta manera la entrega de información financiera para la toma de decisiones (Santos-Cid, 2018).

            p En desarrollo de los procesos contables, es importante tener en cuenta las Normas Internacionales de Información Financiera (NIIF), las cuales presentan constantemente cambios. Por tanto, se requiere que los profesionales en esta área se encuentren actualizados.

            p El International Accounting Standars Board (IASB), es el organismo que emite los estándares internacionales NIIF o IFRS (International Financial Reporting Standars). Estos contienen los criterios de reconocimiento, medición, presentación y revelación de los hechos económicos de la empresa, los cuales son reflejados en los estados financieros; de esta manera, se establece un lenguaje contable homogéneo que genere información financiera comprensible, oportuna y útil para la toma de decisiones.

            p En el marco de la Globalización y el acceso de mercados internacionales surge la necesidad de estandarizar la información Financiera; en consecuencia, en Colombia, a partir de la expedición de la Ley 1314 de 2009 (Secretaría del Senado, 2020), se establece la regulación de los principios y normas de contabilidad e información financiera, con el fin de implementar las Normas Internacionales de Información Financiera (NIIF) de acuerdo con el tipo de empresa y actividades que desarrolla.

            p Con la expedición de dicha ley, comienza el desafío para los empresarios colombianos y los usuarios que de una u otra manera se encuentran involucrados en las empresas. Estos son: los colaboradores de las áreas administrativa, financiera, tecnológica y de talento humano. Todos tuvieron que ser capacitados y entrenados con el nuevo marco normativo para iniciar el proceso de implementación de acuerdo con los estándares establecidos.

            p Teniendo en cuenta lo anterior, es emitido el documento “Direccionamiento estratégico” por parte del Consejo Técnico de la Contaduría Pública (CTCP), con el fin de iniciar el proceso de convergencia hacia las normas internacionales; por lo tanto, se establecen los grupos de presentación de información financiera y se estipulan los requisitos para iniciar el periodo de preparación, transición, aplicación y reporte de las normas internacionales.          


      .py-3.py-md-4(titulo="Grupos de presentación")
        .row.justify-content-center
          .col-lg-10
            h4.mb-4 Grupos de presentación
            p #[strong Grupo 1 - NIIF Plenas]
              br
              | Decreto 2784 de 2012

            ul.lista-ul--color.mb-4
              li.mb-3
                i.fas.fa-check
                | Emisores de valores.
              li.mb-3
                i.fas.fa-check
                | Entidades de interés público.
              li.mb-3
                i.fas.fa-check
                | Entidades que tengan activos totales superiores a treinta mil (30.000) SMMLV o planta de personal superior a doscientos (200) trabajadores; que no sean emisores de valores ni entidades de interés público.

            p #[strong Grupo 2 - NIIF para Pymes]
              br
              | Decreto 3022 de 2013

            ul.lista-ul--color.mb-4
              li.mb-3
                i.fas.fa-check
                | Empresas que no cumplan con los requisitos del literal c) del grupo 1.
              li.mb-3
                i.fas.fa-check
                | Empresas que tengan Activos totales por valor entre quinientos (500) y treinta mil (30.000) SMMLV' o planta de personal entre once (11) y doscientos (200) trabajadores, y que no sean emisores de valores ni entidades de interés público.
              li.mb-3
                i.fas.fa-check
                | Microempresas que tengan Activos totales excluida la vivienda por un valor máximo de quinientos (500) SMMLV o planta de personal no superior a los (10) trabajadores, y cuyos ingresos brutos anuales sean iguales o superiores a 6.000 SMMLV'.
              li.mb-3
                i.fas.fa-check
                | Dichos ingresos brutos son los ingresos correspondientes al año inmediatamente anterior al periodo sobre el que se informa.

            p #[strong Grupo 3 - NIIF Microempresas]
              br
              | Decreto 2706 de 2012

            ul.lista-ul--color.mb-4
              li.mb-3
                i.fas.fa-check
                | Personas naturales o jurídicas que cumplan los criterios establecidos en el art. 499 del Estatuto Tributario (ET) y normas posteriores que lo modifiquen. Para el efecto, se tomará el equivalente a UVT, en salarios mínimos legales vigentes.
              li.mb-3
                i.fas.fa-check
                | Microempresas que tengan Activos totales excluida la vivienda por un valor máximo de quinientos (500) SMMLV o Planta de personal no superior a los diez (10) trabajadores que no cumplan con los requisitos para ser incluidas en el grupo 2 ni en el literal anterior.        
            
    p La información de los decretos relacionados anteriormente, se encuentran compilados en el Decreto Único Reglamentario 2420 de 2015, modificado por el Decreto 2496 2015, 2131 de 2016, 2170 de 2017, 2483 de 2018 y 2270 de 2019.

    p.mb-4 Según el grupo de presentación al cual pertenece la empresa, se realiza el proceso de aplicación de Normas Internacionales de Información Financiera (NIIF). Por tanto, con el fin de lograr apropiación de conocimiento y fortalecer su aprendizaje se sugiere revisar el siguiente enlace:

    .row
      .col-auto
        a.anexo.mb-4.mb-lg-0(href="https://www.ctcp.gov.co/normatividad/normas-locales" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Consejo Técnico de Contaduría Pública (CTCP)
  


</template>

<script>
import LineaTiempoIcon from '../components/LineaTiempoIcon'
export default {
  name: 'Tema2',
  components: {
    LineaTiempoIcon,
  },
  data: () => ({
    datosLineaTiempoIcon: [
      {
        img: require('@/assets/tema2/t1.svg'),
        texto:
          'Convocar una reunión de la junta directiva donde se realice el acta que relacione las causales de disolución y presentadas, que hacen parte del objeto de liquidación.',
      },
      {
        img: require('@/assets/tema2/t2.svg'),
        texto: 'Registrar el acta de disolución ante la cámara de comercio.',
      },
      {
        img: require('@/assets/tema2/t3.svg'),
        texto:
          'Nombrar un liquidador para determinar el patrimonio social y el inventario.',
      },
      {
        img: require('@/assets/tema2/t4.svg'),
        texto:
          'Informar a las entidades de control, supervisión y al público en general que la sociedad se encuentra en liquidación.',
      },
      {
        img: require('@/assets/tema2/t5.svg'),
        texto:
          'El liquidador deberá cancelar pasivos externos y distribuir el remanente entre los socios.',
      },
      {
        img: require('@/assets/tema2/t6.svg'),
        texto:
          'El liquidador realiza el proyecto de liquidación de acuerdo con la información financiera.',
      },
      {
        img: require('@/assets/tema2/t7.svg'),
        texto:
          'Citar a reunión de junta directiva para aprobar el proyecto de liquidación.',
      },
      {
        img: require('@/assets/tema2/t8.svg'),
        texto: 'Registrar el acta de liquidación en la cámara de comercio.',
      },
      {
        img: require('@/assets/tema2/t9.svg'),
        texto:
          'Solicitar cancelación del RUT ante la Dirección de Impuestos y Aduana Nacionales.',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
