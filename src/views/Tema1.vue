<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Comerciante

    .bloque-texto-a.gris-azul.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0        
          img(src="@/assets/tema1/img_1_01.png", alt="alt",style="width:225px;").m-auto          
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Antes de hablar de empresa, sociedad y su clasificación, es importante enforcarse en el tema de comerciantes; sus deberes, derechos y obligaciones. Teniendo en cuenta que a partir de aquí comienzan a configurarse las actividades que se consideran mercantiles y son ejercidas por los comerciantes, se verán reflejadas en el momento de crear la empresa de acuerdo con el marco normativo vigente.
    
    #t_1_1.titulo-segundo
      h2 1.1 Concepto y calidad

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/wCN8MwqenJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

    separador

    #t_1_2.titulo-segundo
      h2 1.2 Deberes, derechos y obligaciones

    p.mb-5 De acuerdo con el Código de Comercio es obligación de todo comerciante:

    .row.justify-content-center
      .col-auto
        img(src="@/assets/tema1/img_1_2_01.svg", alt="alt",style="width:255px;").m-auto
      .col-auto
        img(src="@/assets/tema1/img_1_2_02.svg", alt="alt",style="width:255px;").m-auto
      .col-auto
        img(src="@/assets/tema1/img_1_2_03.svg", alt="alt",style="width:255px;").m-auto
    .row.justify-content-center.mb-5
      .col-auto
        img(src="@/assets/tema1/img_1_2_04.svg", alt="alt",style="width:255px;").m-auto
      .col-auto
        img(src="@/assets/tema1/img_1_2_05.svg", alt="alt",style="width:255px;").m-auto
      .col-auto
        img(src="@/assets/tema1/img_1_2_06.svg", alt="alt",style="width:255px;").m-auto

    p.mb-4 Respecto al último punto, además de considerar lo dispuesto en el Código de Comercio (Secretaría del Senado, 2020), también se considera lo dispuesto en las Normas sobre Competencia Desleal (Secretaría del Senado, 2020), donde se especifican las acciones que se consideran competencia desleal:

    .tarjeta.tarjeta--coyote.mb-5
      .row.justify-content-center.align-items-center
        .col-xl-5
          img(src="@/assets/tema1/img_1_2_07.svg", alt="alt",style="width:455px;").m-auto
        .col-9.col-xl-7.p-4
          .row
            .col-lg-6
              ul.lista-ul--color
                li.mb-4 
                  i.fas.fa-check
                  | Actos de desviación de la clientela        
                li.mb-4  
                  i.fas.fa-check
                  | Actos de desorganización           
                li.mb-4  
                  i.fas.fa-check
                  | Actos de confusión      
                li.mb-4  
                  i.fas.fa-check
                  | Actos de engaño        
                li.mb-4.mb-lg-0 
                  i.fas.fa-check
                  | Actos de descrédito
                li.mb-4.mb-lg-0 
                  i.fas.fa-check
                  | Actos de comparación
            .col-lg-6
              ul.lista-ul--color                
                li.mb-4  
                  i.fas.fa-check
                  | Actos de imitación          
                li.mb-4 
                  i.fas.fa-check
                  | Explotación de la reputación ajena         
                li.mb-4 
                  i.fas.fa-check
                  | ●	Violación de secretos         
                li.mb-4  
                  i.fas.fa-check
                  | Inducción a la ruptura contractual         
                li.mb-4  
                  i.fas.fa-check
                  | Violación de normas     
                li
                  i.fas.fa-check
                  | Pactos desleales de exclusividad   

  
    .titulo-tercero
      h3 Trámites legales para ejercer el comercio

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/n5Bv63FxmNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    separador

    #t_1_3.titulo-segundo
      h2 1.3 Registro mercantil

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0        
        img(src="@/assets/tema1/img_1_3_01.svg", alt="alt", style="width:350px;").m-auto
      .col-lg-6
        .cajon.box-custonclr.p-4.mb-4        
          p El registro mercantil se tramita ante la Cámara de Comercio y su principal objetivo es identificar a los comerciantes y los establecimientos de comercio; por ende, al inscribirse se otorga la calidad de comerciantes. Así mismo, se registran todos los actos, libros y documentos respecto de los cuales la ley exigiere esa formalidad (Secretaría del Senado, 2020).

        p Para realizar la inscripción es importante identificar el tipo de empresa y/o sociedad que va a registrar, teniendo en cuenta determinar si se constituye bajo persona natural o jurídica. Esto para el diligenciamiento y presentación de los documentos pertinentes.

    p.text-center #[strong Antes de señalar el proceso de matrícula mercantil, es indispensable dar claridad a los siguientes conceptos:]
    
    iframe(width="100%" height="700" :src="obtenerLink('/downloads/info/index.html')" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 


    p Cabe resaltar, que el comerciante debe realizar la inscripción en la cámara de comercio de la jurisdicción donde se encuentra ubicado el establecimiento de comercio. Una vez finalice el proceso se podrá obtener el certificado de registro mercantil.   Así mismo, se debe realizar la renovación de la matrícula mercantil de forma anual, entre el 1 de enero al 31 de marzo de cada año.

    separador

    #t_1_4.titulo-segundo
      h2 1.4 Cámara de Comercio: actos mercantiles

    .bloque-texto-a.gris-azul.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0        
          img(src="@/assets/tema1/img_1_4_01.png", alt="alt",style="width:225px;").m-auto          
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-3 De acuerdo con el Código de Comercio “Las cámaras de comercio son instituciones de orden legal con personería jurídica, creadas por el Gobierno Nacional, de oficio o a petición de los comerciantes del territorio donde hayan de operar. Dichas entidades serán representadas por sus respectivos presidentes” (Secretaría del Senado, 2020. Art 78).
            p.mb-0 Estas instituciones tienen como objetivo llevar la matrícula de los comerciantes y sus establecimientos. En el Art. 86 del Código de Comercio (Secretaría del Senado, 2020), se establecen las siguientes funciones a las cámaras de comercio:

    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 1
          .col
            p.mb-0 Servir de órgano de los intereses generales del comercio ante el Gobierno y ante los comerciantes mismos.      
        .sep_01  
      .col-lg-6
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 2
          .col
            p.mb-0 Adelantar investigaciones económicas sobre aspectos o ramos específicos del comercio interior y exterior y formular recomendaciones a los organismos estatales y semioficiales encargados de la ejecución de los planes respectivos.
        .sep_01
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 3
          .col
            p.mb-0 Llevar el registro mercantil y certificar sobre los actos y documentos en él inscritos, como se prevé en este código.   
        .sep_01  
      .col-lg-6
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 4
          .col
            p.mb-0 Dar noticia en sus boletines u órganos de publicidad de las inscripciones hechas en el registro mercantil y de toda modificación, cancelación o alteración que se haga de dichas inscripciones.
        .sep_01
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 5
          .col
            p.mb-0 Organizar exposiciones y conferencias, editar o imprimir estudios o informes relacionados con sus objetivos.
        .sep_01  
      .col-lg-6
        .row.align-items-center.h_100
          .col-auto
            span.custom_Number 6
          .col
            p.mb-0 Rendir en el mes de enero de cada año un informe o memoria al Superintendente de Industria y Comercio acerca de las labores realizadas en el año anterior y su concepto sobre la situación económica de sus respectivas zonas, así como el detalle de sus ingresos y egresos.
        .sep_01

    .hr-blank

    .titulo-tercero
      h3 De los actos, operaciones y empresas mercantiles

    p.mb-5 De acuerdo con el Código de Comercio se consideran actos mercantiles los siguientes (Secretaría del Senado, 2020):

    .row.justify-content-center.mb-5
      .col-7.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema1/img_1_4_02.svg' alt='AvatarTop')  
          .tarjeta.cl--gris
            .p-4            
              p.text-center La adquisición de bienes para enajenarlos o arrendarlos, dedicadas a la comercialización.
      .col-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema1/img_1_4_03.svg' alt='AvatarTop')  
          .tarjeta.cl--gris
            .p-4            
              p.text-center Las operaciones financieras.
      .col-7.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema1/img_1_4_04.svg' alt='AvatarTop')  
          .tarjeta.cl--gris
            .p-4            
              p.text-center Las empresas de servicios, que satisfacen necesidades.
      .col-7.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/tema1/img_1_4_05.svg' alt='AvatarTop')  
          .tarjeta.cl--gris
            .p-4            
              p.text-center Las empresas industriales que se dedican a transformar materia prima en producto terminado.

    p Con el fin de ampliar la información, lo invitamos a explorar el Código de Comercio a través del siguiente enlace:

    .row
      .col-auto
        a.anexo(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr003.html" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web.] Código de comercio


      
          
   
    
    

    


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
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
