<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Administración       

    .bloque-texto-a.gris-azul.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0        
          img(src="@/assets/tema3/img_3_01.svg", alt="alt",style="width:225px;").m-auto          
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 El término administración existe desde la época primitiva, donde se realizaban trabajos rudimentarios. Toma importancia a partir de la revolución Industrial, atendiendo la necesidad de coordinar esfuerzos y organizar las actividades con el fin de generar productividad y eficiencia.

    p.mb-5 A lo largo de la historia se han configurado diversos aportes que lograron consolidar lo que se conoce hoy en día como el proceso administrativo, el cual está integrado por las siguientes etapas: planeación, organización, dirección y control. A continuación, se presentan algunos autores con sus principales aportes (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019):

    h4.text-center.mb-4 Aportes

    .tabla-a.color-acento-contenido.overflow_x.mb-5
      table(style="min-width:1000px")
        thead
          tr
            th(style="width:20%;").text-center Teor&iacute;a   
            th(style="width:30%;").text-center Autores   
            th(style="width:50%;").text-center Aportes   
        tbody
          tr
            td.text-center Administraci&oacute;n   cient&iacute;fica   
            td.text-center Frederick Taylor,   Henry Lawrence Gantt, Robinson Towne, Henry Metcalf  
            td Se da importancia al   manejo de incentivos, selecci&oacute;n del personal 
              
          tr.oddRow
            td.text-center Teor&iacute;a Cl&aacute;sica               
            td.text-center Henri Fayol             
            td Desarrolla las &aacute;reas   funcionales que debe tener la organizaci&oacute;n. De igual manera se establecen los   14 principios de administraci&oacute;n relacionados con la organizaci&oacute;n del trabajo   y especializaci&oacute;n del trabajador   
            
          tr
            td.text-center Escuela Humanista   
            td.text-center George Elton Mayo, Roberto Owen  
            td Tiene &eacute;nfasis en los valores humanos, motivaci&oacute;n, liderazgo y estudio de las necesidades del   personal
          tr.oddRow
            td.text-center Enfoque   estructuralista   
            td.text-center Renate Mayntz, Etzioni Amitai  
            td Relaciona los tipos de   autoridad, estructura de las organizaciones, descentralizaci&oacute;n, manejo de conflictos,   busca interrelacionar las empresas con el entorno          
          tr
            td.text-center Escuela Neocl&aacute;sica              
            td.text-center Peter Drucker,   Lawrence Appley, George Terry   
            td Tienen en cuenta la   administraci&oacute;n por objetivos, profundizaci&oacute;n en el proceso administrativo.   Hace &eacute;nfasis al modelo actual

    p Actualmente, existen otros enfoques que contribuyen notoriamente con las necesidades de las organizaciones y su entorno, entre ellas se encuentran: Benchmarking, Calidad total, Empowerment, Downsizing, Coaching, Balanced Scorecard y Teorías de restricciones, las cuales dan respuesta a los criterios de eficiencia, eficacia y valor agregado (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019).

    separador

    #t_3_1.titulo-segundo
      h2 3.1 Principios básicos de áreas funcionales, planeación estratégica, organización, dirección y control

    h4.text-center.mb-5 Principios básicos de áreas funcionales

    figure.mb-5
      img(src="@/assets/tema3/img_3_1_01.svg", alt="alt", style="width:1050px").m-auto

    h3.mb-5 Proceso administrativo

    .cajon.box-custonclr.p-4.mb-5 
      p.mb-0 El proceso administrativo es el conjunto de pasos que se aplican en una empresa para llevar a cabo una actividad que contribuya al cumplimiento de los objetivos propuestos. Las etapas que lo integran son: planeación, organización, dirección y control (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Fayol, 1971).

    h3.mb-4 #[span.square a] Planeación

    .tarjeta.tarjeta-gris.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure
            img(src="@/assets/tema3/img_3_2_02.svg", alt="alt", style="width:190px;").m-auto 
        .col-lg
          p Son las actividades iniciales que desarrollará la empresa para obtener los resultados deseados. Los elementos que intervienen son:  

    .row.mb-5
      .col-md-6.col-lg-3.mb-4
        .tarjeta.tarjeta-gris.p-4.h_100.topBottomLines
          p.mb-0 #[strong Filosofía:] son los valores y principios que aplica la empresa en el desarrollo de su objeto social, ratificando el compromiso con la sociedad.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.tarjeta-gris.p-4.h_100.topBottomLines
          p.mb-0 #[strong Misión:] es la razón de ser de la empresa, el motivo por el cual existe. Allí se establece el mercado objetivo, los productos y la ventaja competitiva. Debe ser motivadora, amplia y permanente.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.tarjeta-gris.p-4.h_100.topBottomLines
          p.mb-0 #[strong Visión:] es lo que se espera en un futuro, por ello se implementan estrategias que contribuyan a los resultados esperados. Es importante que sea inspiradora y se actualice conforme los cambios del entorno.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.tarjeta-gris.p-4.h_100.topBottomLines
          p.mb-0 #[strong Objetivos estratégicos:] deben ser medibles y cuantificables en el tiempo, hace referencia a los resultados específicos por alcanzar. 
      .col-md-6.col-lg-3.mb-4
        .tarjeta.tarjeta-gris.p-4.h_100.topBottomLines
          p.mb-0 #[strong Políticas:] son los lineamientos que diseña e implementa la empresa para el desarrollo de las diferentes actividades empresariales. Tienen enfoque tecnológico, talento humano, ambiental, etc.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.tarjeta-gris.p-4.h_100.topBottomLines
          p.mb-0 #[strong Estrategias:] son las acciones que se implementan para el cumplimiento de objetivos.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.tarjeta-gris.p-4.h_100.topBottomLines
          p.mb-0 #[strong Programas:] relaciona el conjunto de actividades, responsable, tiempo y recursos involucrados para llevar a cabo las estrategias.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.tarjeta-gris.p-4.h_100.topBottomLines
          p.mb-0 #[strong Presupuestos:] aquí se definen los recursos en términos cuantificables para llevar a cabo los programas que contribuyan a alcanzar los objetivos. 

    h3.mb-4 #[span.square b] Organización

    .tarjeta.tarjeta-gris.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure
            img(src="@/assets/tema3/img_3_2_03.svg", alt="alt", style="width:190px;").m-auto 
        .col-lg
          p Hace referencia a la coordinación de funciones, recursos y división del trabajo, teniendo en cuenta los procesos, sistemas, estructuras y jerarquías para el cumplimento de objetivos. El establecimiento de la estructura depende de las características de la empresa, objetivos y recursos. Entre las posibles estructuras se encuentran (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Fayol, 1971):

    .tarjeta.tarjeta-gris.p-4.mb-5
      SlyderB.mb-5(:datos="datosSlyder")

    h3.mb-4 #[span.square c] Dirección

    .tarjeta.tarjeta-gris.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure
            img(src="@/assets/tema3/img_3_2_04.svg", alt="alt", style="width:190px;").m-auto 
        .col-lg
          p En esta etapa se materializan los planes y programas, teniendo en cuenta la asignación de recursos, responsables, tiempo y actividades establecidas en la etapa de planeación. Para llevar a cabo el proceso de forma satisfactoria se requiere de habilidades como liderazgo, comunicación asertiva, trabajo en equipo, motivación, actitud, responsabilidad, administración de tiempo, innovación, creatividad, disciplina y cultura organizacional. Es por esto, que es importante seleccionar cuidadosamente el personal que ejecutará los planes propuestos (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Fayol, 1971). 

    h3.mb-4 #[span.square d] Control

    .tarjeta.tarjeta-gris.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure
            img(src="@/assets/tema3/img_3_2_05.svg", alt="alt", style="width:190px;").m-auto 
        .col-lg
          p Esta etapa es muy importante en el proceso administrativo, pues se verifica que los programas se hayan desarrollado conforme a lo planeado, teniendo en cuenta el manejo de recursos de forma eficiente. Además, permite observar las posibles desviaciones, con el fin de implementar acciones correctivas o preventivas que ayuden a alcanzar los objetivos (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019).  

    p.mb-5 Para realizar el proceso de control se debe contar con elementos de medición como los indicadores de gestión o indicadores financieros, los cuales permiten valorar los resultados obtenidos y, los recursos consumidos. El seguimiento de los resultados conduce a la mejora continua de los procesos de la organización; por ende, debe darse la importancia que merece, con el fin de garantizar el cumplimiento de los planes (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Fayol, 1971).

    .row.justify-content-center
      .col-lg-8
        .cajon.box-custonclr.p-4.mb-5 
          p Recuerde ingresar a la Biblioteca SENA y explorar las diferentes referencias bibliográficas como:
          p Münch, L. (2015). Administración: proceso administrativo, clave del éxito empresarial. Pearson 
          p Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U.
          p.mb-0 Fayol, H. (1971). Administración industrial y general. Editorial Herrero Hermanos S.A.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Lineal o militar',
        texto:
          'Las decisiones son tomadas por una persona, por lo que se dice que la autoridad en la empresa es ejercida por ésta, a quien los subalternos le entregan reportes de las actividades realizadas.',
        imagen: require('@/assets/tema3/slide_01.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Líneo-funcional',
        texto:
          'Las funciones son asignadas a las diferentes áreas de la empresa, con el fin de alcanzar los objetivos mediante el esfuerzo colectivo.',
        imagen: require('@/assets/tema3/slide_02.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Staff',
        texto:
          'En esta estructura se combina la autoridad directa con la asesoría de un profesional para llevar a cabo los procesos organizacionales.',
        imagen: require('@/assets/tema3/slide_03.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Matricial',
        texto:
          'En términos generales es utilizada por las grandes empresas, donde se combinan los recursos y materiales para ejecutar actividades específicas o proyectos.',
        imagen: require('@/assets/tema3/slide_04.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
