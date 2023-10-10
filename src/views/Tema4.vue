<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normas técnicas de gestión de calidad

    p(data-aos="fade-right") En la era digital en la cual todos los seres humanos permanecen intercomunicados gracias a la Internet y el desarrollo masivo de los medios de comunicación y de las redes sociales, las organizaciones no son ajenas a estos cambios evolutivos, por tanto, su presencia en estos medios se ha convertido en una de sus estrategias de marketing para llegar a su mercado objetivo.
    p(data-aos="fade-right") Se puede indicar que la gestión al interior de las organizaciones se genera a través de la interrelación entre los recursos, las políticas de procesos y procedimientos, y los objetivos, los cuales se implementan a partir de cuatro elementos, el recurso humano, los recursos económicos, la  infraestructura y los equipos, y el conocimiento y la experiencia.

    .tarjeta.mt-5.p-4(data-aos="fade-left")(style="background-color: #DEF8F3")
      .row.justify-content-center
        .col-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img1.png' alt='').p-3
        .col-9(data-aos="fade-left")
          p Los sistemas de la gestión de la calidad cumplen con la función de satisfacer las necesidades de la organización y de los clientes; sin embargo, existen algunos elementos de similitud entre ellos, como lo son: 
          ul.lista-ul.p-3
            li 
              i.lista-ul__vineta
              | Orientación de las organizaciones a las políticas y objetivos de calidad y, los objetivos de calidad de la organización.
            li 
              i.lista-ul__vineta
              | Estructuración y documentación de los manuales de calidad, procedimientos, instrucciones y registros.
            li 
              i.lista-ul__vineta
              | Gestión de datos de la organización y los clientes.
            li 
              i.lista-ul__vineta
              | Satisfacción y fidelización del cliente. 
            li 
              i.lista-ul__vineta
              | Oportunidades de mejora.
            li 
              i.lista-ul__vineta
              | Análisis de calidad.

    p(data-aos="fade-right").mt-5 Dentro de las normas más relevantes del sistema de gestión de calidad se encuentran:

    .row.mt-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img2.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p La ISO 9000 2015 que emite los fundamentos y vocabulario del sistema de gestión de la calidad. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img3.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p La ISO 9001:2015 que establece los requisitos del sistema de gestión de la calidad.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img4.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p La ISO 9004:2018 Gestión de la calidad, calidad de una organización y orientación para lograr el éxito sostenido.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img5.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p La ISO 19011 Directrices para la auditoría de los sistemas de gestión.

    p(data-aos="fade-right").mt-5 Al implementar el sistema de gestión de la calidad las organizaciones deben seguir las directrices de estas normas internacionales. 
    p(data-aos="fade-right") Como se indica el sistema de gestión de la calidad se debe basar en la integración de los procesos, por lo cual la Norma ISO 9001: 2015 estable el ciclo PHVA (planificar, hacer, verificar, actuar), que es una herramienta que se basa en los procesos y que permite planificar los procesos y su interacción.
    p(data-aos="fade-right") Los elementos del ciclo PHVA de la Norma IS0 9001 se describen como: 

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10 
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span <i>Elementos del ciclo PHVA</i>
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img6.svg', alt='Es una gráfica que muestra los elementos del ciclo PHVA así: Planificar: la organización debe de establecer los objetivos, políticas, procesos, y recursos necesarios para generar productos o servicios que satisfaga las necesidades de los clientes; como también se debe identificar y abordar los riesgos y oportunidades que genera el sistema. Hacer: En el cual la organización ejecuta e implementa lo que ha planificado. Verificar: realiza el seguimiento mediante la implementación de indicadores de gestión, lo cual permite realizar seguimiento a lo planificado. Actuar: Implementar acciones de mejora.')

          .tarjeta.tarjeta--blanca.p-3(x="18%" y="84%" numero="+")
            .h5.mb-2 Planificar.
            p La organización debe de establecer los objetivos, políticas, procesos, y recursos necesarios para generar productos o servicios que satisfaga las necesidades de los clientes; como también se debe identificar y abordar los riesgos y oportunidades que genera el sistema.

          .tarjeta.tarjeta--blanca.p-3(x="39%" y="84%" numero="+")
            .h5.mb-2 Hacer.
            p En el cual la organización ejecuta e implementa lo que ha planificado.

          .tarjeta.tarjeta--blanca.p-3(x="60%" y="83%" numero="+")
            .h5.mb-2 Verificar.
            p Realiza el seguimiento mediante la implementación de indicadores de gestión, lo cual permite realizar seguimiento a lo planificado.

          .tarjeta.tarjeta--blanca.p-3(x="81%" y="83%" numero="+")
            .h5.mb-2 Actuar.
            p Implementar acciones de mejora.

    p(data-aos="fade-right").mt-5 La ejecución del ciclo PHVA (Planificar, Hacer, Verificar, Actuar) contribuye de manera significativa al servicio al cliente al proporcionar un enfoque estructurado y sistemático para la mejora continua. Este ciclo, también conocido como ciclo de <i>Deming</i> o ciclo de mejora continua, ayuda a las organizaciones a identificar y corregir problemas, optimizar procesos y garantizar la satisfacción del cliente. A continuación, se detalla cómo cada etapa del ciclo PHVA contribuye al servicio al cliente:

    TabsC.color-acento-botones.mt-5
      .py-3.py-md-4(titulo="Planificar")
        .row
          .col-md-6.mb-4.mb-md-0
            p En esta etapa, se implementan los planes y estrategias establecidos en la etapa de planificación. Se llevan a cabo acciones concretas para mejorar el servicio al cliente, como capacitar al personal, implementar nuevas tecnologías, mejorar los procesos de atención al cliente y establecer canales de comunicación efectivos. Es fundamental ejecutar las acciones planificadas de manera eficiente y precisa para brindar un servicio al cliente de calidad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img7.png', alt='')
      .py-3.py-md-4(titulo="Hacer")
        .row
          
          .col-md-6
            p En esta etapa, se definen los objetivos, estrategias y planes para mejorar el servicio al cliente. Se establecen metas claras, se identifican las necesidades y expectativas de los clientes y se diseñan estrategias para satisfacer esas necesidades. La planificación también implica identificar los indicadores clave de rendimiento (KPI) relevantes para evaluar el servicio al cliente y establecer medidas para su seguimiento.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/img8.png', alt='')
      .py-3.py-md-4(titulo="Verificar")
        .row
          .col-md-6.mb-4.mb-md-0
            p En esta etapa, se monitorea y evalúa el desempeño del servicio al cliente utilizando los indicadores y medidas establecidos previamente. Se recopilan datos relevantes, se realizan análisis comparativos y se evalúa el nivel de satisfacción del cliente. Esto permite identificar áreas de mejora, identificar tendencias y patrones, y detectar cualquier desviación o problema en la calidad del servicio al cliente.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img9.png', alt='')
      .py-3.py-md-4(titulo="Actuar")
        .row
          
          .col-md-6
            p En esta etapa, se toman acciones correctivas y preventivas basadas en los hallazgos y resultados obtenidos en la etapa de verificación. Se implementan mejoras y se realizan ajustes en los procesos, políticas o sistemas para corregir deficiencias y garantizar una mejora continua del servicio al cliente. Se retroalimenta a los equipos involucrados y se promueve la participación de todos los miembros de la organización en la búsqueda de la excelencia en el servicio al cliente.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/img10.png', alt='')

    p(data-aos="fade-right").mt-5 En resumen, la ejecución del ciclo PHVA en el servicio al cliente permite una gestión más efectiva y orientada hacia la satisfacción del cliente. Proporciona un marco de trabajo para la identificación de problemas, la implementación de mejoras y la adaptación constante a las necesidades cambiantes de los clientes. Al adoptar un enfoque sistemático de mejora continua, las organizaciones pueden elevar la calidad de su servicio al cliente y fortalecer las relaciones con sus clientes, lo que a su vez puede llevar a una mayor fidelidad, recomendaciones positivas y un posicionamiento competitivo en el mercado.

    .tarjeta.mt-5.p-4(data-aos="fade-left").BGIMG01
      .row.justify-content-center
        .col-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img11.svg' alt='').p-3
        .col-9(data-aos="fade-left")
          p Los sistemas de gestión de la calidad basan sus principios en: 
          ul.lista-ul.p-3
            li 
              i.lista-ul__vineta
              | Enfoque al cliente, que busca satisfacer las necesidades de los clientes y cumplir con sus expectativas.
            li 
              i.lista-ul__vineta
              | Liderazgo en el cual la alta dirección demuestra su compromiso. 
            li 
              i.lista-ul__vineta
              | Compromiso de las personas que se encuentran al interior de las organizaciones. 
            li 
              i.lista-ul__vineta
              | Enfoque a procesos.
            li 
              i.lista-ul__vineta
              | La mejora permite a las organizaciones implementar acciones que mejoren el sistema de acuerdo con los requisitos del cliente.
            li 
              i.lista-ul__vineta
              | Toma de decisiones basada en la evidencia.
            li 
              i.lista-ul__vineta
              | Gestión de las relaciones.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1  Trazabilidad de los procesos

    p(data-aos="fade-right") La Norma ISO 9001 al estar basada en procesos también implementa la trazabilidad de los procesos al interior de las organizaciones, por lo cual se debe identificar qué es un  proceso, y de esta forma comprender la trazabilidad que se debe realizar a este.

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los procesos al interior de las organizaciones deben estar interrelacionados como un sistema, con la finalidad de obtener productos y servicios de calidad, de acuerdo con los requerimientos de los clientes.
        
        p(data-aos="fade-right").mt-5 Los procesos al interior de las organizaciones tienen unas entradas, que son los recursos necesarios para producir un bien o servicio, los cuales son transformados a lo cual se denomina como actividad, estas actividades que transforman los elementos de entrada generan unas salidas que son los productos y servicios que ofrece la organización. Ver figura.

        .titulo-sexto.color-acento-contenido.mt-5
          h5 Figura 10.
          span <i>Esquema de procesos</i>
          
        figure
          img(src='@/assets/curso/temas/tema4/img13.svg', alt='Se muestra un esquema del proceso con 5 puntos 1. Fuentes de entradas: *Procesos precedentes Por ejemplo, en proveedores (interno o externos). En clientes, el otras partes interesadas pertinentes. 2. Entradas: Materia, energía, información, por ejemplo, en la forma de materiales, recursos, requisitos 3. Actividades. 4. Salidas:Materia, energía, información, por ejemplo, en la forma de producto, servicio, decisión 5. Receptores de las salidas: Procesos posteriores, por ejemplo, en clientes (internos o externos) en otras partes interesadas pertinentes. *Posibles controles y punto de control para hacer seguimiento del desempeño y medirlo.')
          figcaption Nota. Tomado de ISO 9001:2015.
          
    p(data-aos="fade-right").mt-5 La implementación de la trazabilidad permite a las organizaciones realizar seguimiento a un producto o servicio, lo cual permite conocer el histórico, la aplicación, la ubicación y la trayectoria del mismo.

    .tarjeta.mt-5.p-4(data-aos="fade-left")
      .row.justify-content-center
        .col-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img14.png' alt='').p-3
        .col-9(data-aos="fade-left")
          p La trazabilidad en sistema de gestión de la calidad identifica el momento de la entrada y origen de los materiales, el momento o histórico del proceso o actividades de transformación y la salida de los productos y servicios, conocer el momento, la disposición y la distribución. Por lo cual, las organizaciones deben implementar sistemas que permitan realizar la trazabilidad a sus procesos. 
        
          .tarjeta.BGIMG04.p-3
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema3/img8.svg").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p De acuerdo con la Norma internacional ISO 9001:2015 en el numeral 8.5.2 la organización debe de cumplir con los siguientes requisitos en la identificación y trazabilidad de los procesos.
                  .col-sm-auto
                    a.boton.color-acento-botones(href=('https://www.forpo.gov.co/es/planeacion-gestion-y-control/control-interno-1/normatividad-2/5159-norma-iso-9001-2015/file') target="_blank")
                      span Descargar
                      i.fas.fa-file-download

          p.mt-3 Para cumplir con los requisitos de identificación y trazabilidad de los procesos se debe documentar las entradas de materiales, las actividades mediante la implementación de manuales de funciones, manuales de procesos y procedimientos y, las salidas se documentan mediante el registro de inventarios y ventas.  


    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2  Libreta de calificaciones

    p(data-aos="fade-right") El sistema de gestión de la calidad al basar sus principios en el enfoque al cliente de acuerdo con los requerimientos, buscando la satisfacción y fidelización hacia la organización debe realizar seguimiento al proceso de servicio al cliente mediante la implementación de las libretas de calificaciones, las cuales permiten al cliente calificar el servicio brindado por las organizaciones.

    .row.justify-content-center.mt-5
      .col-10
        .cajon.color-acento-contenido.p-4
          p Las libretas de calificación se convierten en un instrumento de análisis que permite a las organizaciones tomar acciones de mejora, se estructuran en tres etapas, atributos del producto o servicio, calidad del servicio, relación de la organización respecto a los atributos del producto.

        p(data-aos="fade-right") Las libretas de calificaciones deben contener como elementos básicos de información los siguientes elementos:

        SlyderF(columnas="col-lg-6 col-xl-4").mt-5
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/img15.svg' alt='AvatarTop')
            p.text-center <b>Producto:</b> se pretende que el cliente dé su opinión respecto al producto o servicio ofrecido, debe abarcar aspectos clave como el precio, cantidad, calidad, garantía, entre otros.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/img16.svg' alt='AvatarTop')
            p.text-center <b>Procedimiento:</b> el cliente da su opinión respecto a la metodología empleada por la organización en todo el procedimiento de adquisición del producto o servicio, la forma en que se adquiere, el canal de distribución, la forma de pago y otros elementos clave, que permiten que el cliente cumpla sus expectativas. 

          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/img17.svg' alt='AvatarTop')
            p.text-center <b>Instalaciones:</b> permite al cliente dar su opinión respecto a las instalaciones físicas o digitales, que soportan la atención o el servicio al cliente.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/img18.svg' alt='AvatarTop')
            p.text-center <b>Tecnología disponible:</b> se da la opinión respecto a la infraestructura tecnológica con la que cuenta la organización, para dar soporte al servicio al cliente, el fácil empleo de la misma, las comodidades y soluciones que ofrece a los clientes.

          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/img19.svg' alt='AvatarTop')
            p.text-center <b>Información:</b> lo que se comunica al cliente es adecuado, verídico y en los tiempos determinados, el acceso permanente a la información por parte del cliente es de vital importancia.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema4/img20.svg' alt='AvatarTop')
            p.text-center <b>El prestador del servicio:</b>  es la interacción que tiene el personal de la organización con el cliente, el cliente califica cómo fue su experiencia con el personal, si se transmitió el mensaje de una forma clara y asertiva, cumpliendo con las expectativas que tenía con la organización. 

        .tarjeta.BGIMG04.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/img8.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Observe un ejemplo de la libreta de calificaciones. Ver anexo Libreta Calificaciones. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Libreta_calificaciones.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Auditoría     

    p(data-aos="fade-right") La norma internacional ISO 19011 establece las directrices para la auditoría de los sistemas de gestión de la calidad al interior de las organizaciones, por lo cual las organizaciones deben diseñar un programa de auditoría. Las auditorías permiten a las organizaciones verificar los cumplimientos del sistema de gestión de la calidad, evaluar las competencias de los procesos de auditoría, identificar los riesgos y oportunidades de mejora. 
    p(data-aos="fade-right") Los alcances de un programa de auditoría del sistema de gestión de la calidad deben de estar enfocados en el riesgo y oportunidades de la auditoría.

    .row.justify-content-center.mt-5
      .col-10
        .tarjeta.p-4(data-aos="fade-left")(style="background-color: #DEF8F3")
          .row.justify-content-center
            .col-3(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/img21.svg' alt='')
            .col-6(data-aos="fade-left")
              p Un programa de auditorías debe tener en cuenta los siguientes elementos: 
              ul.lista-ul.p-3
                li 
                  i.lista-ul__vineta
                  | Los objetivos, programas y políticas de la organización.
                li 
                  i.lista-ul__vineta
                  | Entorno interno y externo de la organización.
                li 
                  i.lista-ul__vineta
                  | Necesidades y expectativas de las partes interesadas.
                li 
                  i.lista-ul__vineta
                  | Confidencialidad y seguridad de la información.

    p(data-aos="fade-right").mt-5 A continuación, se establecen los pasos para la realización de una auditoría del sistema de gestión de la calidad: 

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 11.
      span <i>Proceso de auditoría al sistema de gestión de la calidad</i>
    figure
      img(src='@/assets/curso/temas/tema4/img22.png', alt='Se muestra el proceso de una auditoría al sistema de gestión de calidad paso a paso: Paso 1: Inicio de la auditoría. Paso 2: Preparación de las actividades de la auditoría. Paso 3: Realización de así actividades de la auditoría. Paso 4: Preparación y distribución del informa de auditoría. Paso 5: Finalización de la auditoría. Paso 6 y final: Realización del seguimiento de la auditoría.')
      figcaption Nota. Tomado de Icontec Internacional.
</template>

<script>
export default {
  name: 'Tema4',
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
