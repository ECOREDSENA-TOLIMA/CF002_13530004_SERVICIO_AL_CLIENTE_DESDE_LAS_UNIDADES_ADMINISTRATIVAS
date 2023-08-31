<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mejoramiento continuo 

    p(data-aos="fade-right") La norma internacional ISO 9000:2015 e ISO 9001:2015 indica que dentro de los procesos de gestión de la calidad se deben implementar los procesos de mejora continua, que se enfocan en la mejora de los procesos operativos de las organizaciones. 
    p(data-aos="fade-right") La mejora se determina como la actividad que permite mejorar el desempeño, por lo cual este proceso es la actividad recurrente para mejorar el desempeño de las organizaciones. 
    p(data-aos="fade-right") Los procesos de mejora continua se determinan a partir de los hallazgos y conclusiones que dejan las auditorías y el análisis de los datos. Las organizaciones deben implementar la herramienta del ciclo PHVA, como implementación en sus procesos de mejora continua, alcanzada la última fase del ciclo PHVA se debe analizar dos situaciones que se pueden dar:

    .row.justify-content-center.mt-5
      .col-10
        .tarjeta--container.row
          .col-md.tarjeta(style="background-color:#E2E8EC").p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema5/img1.svg', alt='').img250
            .h5.text-center  Positiva
            p Indica que los objetivos trazados por la organización se han alcanzado; sin embargo, se deben evaluar qué mejoras continuas se pueden dar al ciclo PHVA.
      
          .col-md.tarjeta(style="background-color: #F6EFE9").p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema5/img2.svg', alt='')
            .h5.text-center Negativa
            p Indica que los objetivos trazados por la organización no se han alcanzado; sin embargo, por lo cual se debe evaluar todo el ciclo PHVA, identificando los errores que se cometieron para ajustar un nuevo ciclo que se inicia.
            
    p(data-aos="fade-right").mt-5 En el proceso de mejora las organizaciones deben determinar las oportunidades de mejora a implementar en los procesos, las cuales buscan satisfacer las necesidades de los clientes y aumentar la satisfacción hacia la organización. 

    .row.justify-content-center.mt-5
      .col-10
        .tarjeta.p-4(data-aos="fade-left")(style="background-color: #DEF8F3")
          .row.justify-content-center
            .col-3(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img3.png' alt='')
            .col-6(data-aos="fade-left")
              p Por lo cual debe de propender por: 
              ul.lista-ul.p-3
                li 
                  i.lista-ul__vineta
                  | Mejorar los productos y servicios que ofrece la organización.
                li 
                  i.lista-ul__vineta
                  | Corregir, prevenir y reducir los efectos no deseados.
                li 
                  i.lista-ul__vineta
                  | Mejoras en el sistema de gestión de la calidad.
              
              p La auditoría en su informe genera las oportunidades de mejora a implementar por la organización, debido a que establece las conformidades, observaciones y no conformidades del sistema de gestión de la calidad. 
              
        p(data-aos="fade-right").mt-5 En el momento en que la auditoría arroja no conformidad, la organización debe implementar acciones correctivas para controlar, corregir y contrarrestar las no conformidades. Estas no conformidades y acciones correctivas deben estar documentadas por la organización. 

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Lista de chequeo 

    p(data-aos="fade-right") En la verificación, análisis y evolución del sistema de gestión de la calidad las listas de chequeo permiten evaluar el ciclo PHVA como una herramienta para generar acciones de mejora continua.
    p(data-aos="fade-right") Las listas de chequeo son un formato de recopilación de datos asociados a un proceso, procedimiento o actividad al interior de una organización, el cual permite determinar el cumplimiento de unos requisitos, que con posterioridad permiten determinar unas conclusiones.

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el proceso de auditoría  del sistema de gestión de la calidad se implementan listas de chequeo o listas de verificación; la Norma ISO 9001 en el Capítulo 9.2 indica la necesidad de realizar auditorías internas al sistema de gestión de la calidad en las organizaciones. 
        
      p(data-aos="fade-right").mt-5 El auditor deberá preparar una lista de chequeo que le permitirá analizar cada uno de los requerimientos del sistema de gestión de la calidad, estas listas le facilitará tomar muestras, registros y llevar un orden de la auditoría, para la posterior elaboración del informe de auditoría. 

      .tarjeta.BGIMG04.p-3
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema3/img8.svg").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p Las listas de chequeo deben de establecer la siguiente estructura, ver anexo Lista de Verificación.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Codigo_de_comercio_DECRETO_410_DE_1971.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Evidencias

    p(data-aos="fade-right") Uno de los requisitos del sistema de gestión de la calidad es la documentación de las evidencias del ciclo PHVA, las cuales serán requeridas en los procesos de auditoría. 

    .row.justify-content-center.mt-5
      .col-8
        .bloque-texto-c(style="background-color:#DEF8F3").p-4
          i.fas.fa-quote-right
          h2.mb-2 La evidencia es un término que procede del latín evidentĭa y que permite indicar una certeza manifiesta que resulta innegable y que no se puede dudar.
          span - Pérez & Merino, 2021
        p.mt-3 Las evidencias como soporte para las auditorías al sistema de gestión de la calidad se consideran competentes y suficientes al cumplir las siguientes características: 
      .col-4 
        img(src='@/assets/curso/temas/tema5/img5.png' alt='')

    .row.mt-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img6.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p <b>Relevante:</b> cuando soportan la auditoría y ayudan a lograr el objetivo planteado en la auditoría.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img7.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p <b>Auténtica:</b> al verificar la evidencia el autor puede determinar que es verdadera de acuerdo con sus características. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img8.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p <b>Verificable:</b> la evidencia es solicitada y reconocida por dos o más auditores.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img9.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p <b>Neutral:</b> la evidencia está libre de prejuicios. 

    p(data-aos="fade-right").mt-5 En el proceso de auditoría del sistema de gestión de la calidad el auditor obtiene evidencia mediante la aplicación de pruebas y procedimientos, y la aplicación de las listas de chequeo o verificación, dentro de estas pruebas se relacionan las pruebas de control y sustantivas.

    .row.justify-content-center.mt-5.BGIMG02
      .col-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Figura 12.
          span <i>Pruebas de control y sustantivas</i>
        figure
          img(src='@/assets/curso/temas/tema5/img10.svg', alt='Se muestra una balanza, en la parte izquierda dice: Las pruebas sustantivas son realizadas por el auditor, con el objeto de validar las evidencias soportadas en la auditoría. Y en la derecha dice lo siguiente: Las pruebas de control son realizadas por los auditores con la finalidad de obtener evidencias sobre los criterios auditados del sistema de gestión de la calidad.')          

      p(data-aos="fade-right").mt-5 Todas las evidencias solicitadas por el auditor en el proceso de auditoría deben ser entregadas y sustentadas por el auditado, de no existir se debe justificar; debido a que las evidencias soportan los criterios de evaluación de las auditorías y pueden determinar una conformidad, no conformidad u observación en el proceso. 

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Plan de acción y mejora   

    p(data-aos="fade-right") De acuerdo con los planes de auditoría interna que adelanten las organizaciones se debe tomar en cuenta las conformidades, las no conformidades y las observaciones que se realizan al sistema de gestión de la calidad, debido a que las conformidades pueden indicar oportunidades de mejora, las no conformidades dejadas por la auditoría se deben corregir y evitar que se repitan, y las observaciones indican en qué se debe mejorar y no incurrir nuevamente para no caer en una no conformidad.
    p(data-aos="fade-right") Teniendo en cuenta el informe de auditoría, las organizaciones deben crear planes de acciones y de mejora, las cuales se enfoquen en mejorar continuamente los procesos operativos de acuerdo con el esquema de procesos adoptado y el ciclo PHVA. Los planes y acciones de mejora implican comprometer a los miembros de las organizaciones involucrados en todos los procesos, desde los directivos hasta cada responsable de las actividades al interior de la organización. 

    .row.justify-content-center.mt-5
      .col-10
        .tarjeta.p-4(data-aos="fade-left")(style="background-color: #F6EFE9")
          .row.justify-content-center.align-items-center
            .col-3(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img11.svg' alt='')
            .col-7(data-aos="fade-left")
              p Un plan es el diseño de algo que se quiere lograr, por lo cual los planes de acciones y mejora son documentos diseñados por las organizaciones para lograr la calidad total en sus procesos. Estos planes deben estar documentados y socializados a cada uno de los miembros de la organización; contar con un sistema de medición a través de indicadores de gestión, los cuales permiten medir los resultados del plan de acción y mejora; por lo cual es indispensable que todos los miembros tengan participación en la construcción y ejecución del mismos.
        
      .col-8
        p(data-aos="fade-right").mt-5 Para la elaboración de un plan de acción y de mejora al interior de las organizaciones se debe seguir el ciclo PDCA, el cual presenta las siguientes etapas: 

    .row.mt-5 
      .col-sm-3.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h5 Planificación (Plan): 
              p En esta fase la organización inicia la construcción del plan de acción, en el cual se establece un problema, se identifican unas causas y efectos, para con posterioridad establecer los objetivos, procesos  e indicadores de gestión. En esta etapa de planeación se deben tener en cuenta los informes de auditorías realizadas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img12.png')})`}")

      .col-sm-3.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img13.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h5 Hacer (DO): 
              p Es la etapa en la cual se socializa el plan de acción y de mejora, y se inicia con su ejecución; el éxito de esta etapa es el compromiso de los directivos y responsables de cada proceso. 
      
      .col-sm-3.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h5 Comprobar (check): 
              p En esta etapa se realiza el seguimiento al plan de acción y mejora, mediante la verificación de los indicadores de gestión, planteados en la planeación. Es la etapa de evaluación de la planeación. 

            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img14.png')})`}")

      .col-sm-3.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img15.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h5 Ajustar (Act): 
              p De acuerdo a la evaluación y seguimiento al plan, se deben tomar medidas de ajuste, que permitan dar alternativas de solución a los fallas o inconvenientes presentados en el proceso.

    p(data-aos="fade-right").mt-5 La implementación del ciclo PDCA permite a las organizaciones ser más eficientes y efectivos, cumplir con los requisitos y exigencias de los clientes, y cumplir las políticas organizacionales.
    p(data-aos="fade-right") La implementación de estos planes de acciones y mejora continua permiten cumplir con el requisito de la Norma ISO 9001:20015, Cláusula 10.3, en la cual las organizaciones deben implementar acciones de mejora continua; al no ser evidenciados los procesos de mejora continua en una auditoría se dejará una no conformidad. 


</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass"></style>
