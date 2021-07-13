<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4
      .col-lg-5       
        img(src='@/assets/tema1/img-intro.svg', alt='Marketing', style="width:450px").m-auto
      .col-lg-7
        .cajon.box-custonclr.p-4.mb-4        
          p El objetivo de este componente es fortalecer conocimientos en las generalidades de comerciantes, empresas, sociedades, registro mercantil y principios básicos de administración, con el fin de dar aplicabilidad a la normatividad legal vigente. 

        p.mb-0  Cabe resaltar que el aprendiz se encuentra en la capacidad de reconocer los procesos para la formalización de empresas en Colombia, observando las obligaciones comerciales, laborales, financieras y tributarias inherentes al desarrollo del objeto social de una organización económica. De allí la importancia de analizar la normatividad establecida en el Código de Comercio, el Estatuto Tributario y el marco normativo de Normas Internacionales de Información Financiera (NIIF), con el fin de emitir informes sólidos a los usuarios de la información financiera, que reflejen la realidad de la empresa y contribuyan a la adecuada toma de decisiones.       
    
    p.mb-0 De igual forma, en el ámbito administrativo se abordan los temas relacionados con la planeación estratégica, organización y control. Esto le permitirá al aprendiz dimensionar la importancia de la empresa y, de esta manera, desarrollar estrategias que permitan dar cumplimiento con los objetivos organizacionales y financieros



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
