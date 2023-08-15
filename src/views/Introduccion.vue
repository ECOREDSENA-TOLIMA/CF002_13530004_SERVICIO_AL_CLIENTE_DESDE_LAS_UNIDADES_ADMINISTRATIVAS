<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right").mb-5 A continuación podrá conocer la información fundamental sobre el servicio al cliente que brindará los lineamientos para la información posterior. Se invita a visualizarlo:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/25hHFRh4Mjg" title="Evaluación y monitoreo en la implementación de BPG en la Producción Porcina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Evaluación y monitoreo en la implementación de BPG en la Producción Porcina
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
