<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Solicitudes

    p(data-aos="fade-right") En el sistema de servicio al cliente en las organizaciones existen solicitudes o peticiones internas o externas, las cuales se realizan de forma verbal o escrita, estas solicitudes o peticiones permiten que las organizaciones tengan lazos de conexión con los clientes internos o externos.
    p(data-aos="fade-right") El área de servicio al cliente es la encargada de gestionar peticiones, quejas, reclamos, sugerencias o felicitaciones de sus clientes, por lo cual una correcta gestión de las mismas, genera en el cliente una satisfacción en el servicio, la cual se corrobora con una lista de chequeo de satisfacción del cliente.
    p(data-aos="fade-right") Las solicitudes o peticiones en la actualidad se denominan con la sigla PQRS, la cual dimensiona cinco experiencias o solicitudes de los clientes, esta abreviatura corresponde a petición, queja, reclamos, sugerencias y felicitaciones, definidos así:

    .tarjeta--container.row.mt-5
      .col-md.tarjeta(style="background-color:#DEF8F3").p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img1.svg', alt='').img250
        .h5 El canal de comunicación personal 
        p Permite tener una mayor interacción con el consumidor, y se encuentran medios como la atención en oficina, llamada telefónica, o chat.
  
      .col-md.tarjeta(style="background-color: #F6EFE9").p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='')
        .h5 El canal interpersonal
        p Es la comunicación que se emite a muchos receptores, pero está dirigida a un grupo de personas específico; como medio se encuentran el e-mail, circulares y diarios oficiales.

      .col-md.tarjeta(style="background-color: #E2E8EC").p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='')
        .h5 Los canales interactivos
        p Son los que permiten tener una mayor participación en los medios digitales, aquí el consumidor interactúa y espera una respuesta de la entidad en esta interacción; el medio que más se emplea son las redes sociales.
  
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Sistemas de información

    p(data-aos="fade-right") El mundo actual se encuentra en una era digital, que posibilita acelerar los procesos al interior de las organizaciones y les ha permitido evolucionar, debido a que ha encontrado en esta nueva era retos y desafíos; pero también grandes oportunidades, como es el almacenamiento de datos, el cual permite realizar un análisis adecuado que soporta decisiones y estrategias organizacionales.

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0Debido Debido a estos cambios y nuevos retos que se han dado en esta nueva era digital, las organizaciones han implementado los sistemas de la información (SI), que son un conjunto de elementos ordenados que permiten la administración de datos, de acceso constante y permanente para las organizaciones.

        p(data-aos="fade-right").mt-5 Estos sistemas de la información al estar interconectados y en interacción, permiten el almacenamiento de datos, los cuales se encuentran disponibles para la toma de decisiones al interior de las organizaciones, facilitando la recopilación, el procesamiento y el almacenamiento de datos, para su posterior análisis y toma de decisiones a partir de esta información.
        p(data-aos="fade-right") Todos los sistemas de información de las organizaciones deben de contar con los siguientes componentes:

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-4
        figure
          img(src="@/assets/curso/temas/tema2/img5.png")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="<i>Software</i>") programas o sistemas que permiten el procesamiento y administración de datos.

          p(numero="2" titulo="<i>Hardware</i>") los sistemas de información deben de contar con un conjunto de elementos físicos y materiales, que permitan su soporte como los computadores u ordenadores.

          p(numero="3" titulo="Base de datos") También conocidas como banco de datos, recopilan información ordenada y sistemática para ser analizada y soportar las decisiones en las organizaciones.

          p(numero="4" titulo="Red") Es la interconexión de sistemas, que permiten compartir información entre sí.

          p(numero="5" titulo="Procesamiento") Procesa y analiza los datos recopilados.
      
    .row.justify-content-center.mt-5.BGIMG02
      .col-10
        p Existen diferentes tipos de sistemas de información, los cuales se adaptan a las necesidades de cada organización, entre los cuales se encuentran:
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Figura 3.
          span <i>Tipos de sistemas de información</i>
        figure
          img(src='@/assets/curso/temas/tema2/img6.png', alt='Se puede ver un organizador gráfico a manera de diagrama en el que se muestran los 4 sistemas que componen el sistema de Información; el primer sistema es el sistema de procesamiento de transacciones conocido como TPS y es el que procesa las gestiones operativas, el segundo es el sistema de información ejecutiva conocido como EIS que es el que procesa la información gerencial de áreas específicas, el tercero el el sistema de información gerencial conocido como MIS que es el encargado del procesamiento de la información gerencial de toda la organización y por último el sistema de soporte de decisiones o DSS que se encarga de procesar la información interna y externa para la toma de decisiones.')    
     
    p(data-aos="fade-right").mt-5 Los sistemas de información a nivel de las organizaciones se componen de elementos financieros, tecnológicos, de personal, materiales y administrativos.
    p(data-aos="fade-right") Los sistemas de información en las organizaciones se fundamentan en la creación de base o banco de datos, por lo cual las organizaciones realizan inversiones en estos sistemas, debido a que ordenan la información de modo que se pueda analizar o transmitir, estas bases de datos cubren una necesidad requerida por las personas y las organizaciones, la cual es el almacenamiento de información. Los sistemas de base de datos se gestionan a través del sistema de base de datos (DBMS).
    p(data-aos="fade-right") Dentro de los tipos de bases de datos se pueden clasificar según su variabilidad y el contenido, de acuerdo con la variabilidad se refiere al tipo de datos que se almacenan y las bases de datos de contenido se refiere a la naturaleza de los datos.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 4.
      span <i>Tipo de base de datos</i>
    figure
      img(src='@/assets/curso/temas/tema2/img7.svg', alt='Se muestra un organizado visual que comparte la siguiente información: *•Tipo de base de datos: *Según la viabilidad y contiene: Datos estáticos históricos Datos dinámicos: proceso de operación de las organizaciones *Según el contenido que contiene: Bibliográficas Texto Especializadas Directorios')     

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Respuesta a usuarios
    
    p(data-aos="fade-right") En el sistema de servicio al cliente en las organizaciones, los clientes realizan solicitudes o peticiones, las cuales se realizan de forma verbal o escrita por los medios empleados o dispuestos; las peticiones, quejas, reclamos, sugerencias o felicitaciones deben ser respondidas por las organizaciones en el tiempo establecido por el sistema de servicio al cliente.

    .row.justify-content-center.mt-5
      .col-10(style="background-color:#DEF8F3").p-4
        SlyderB(:datos="datosSlyder")
      .col-10
        p(data-aos="fade-right").mt-5 El tiempo de respuesta es el lapso de tiempo en el que un cliente realiza una PQRS y el tiempo que emplea la organización para dar respuesta, este tiempo se conoce como tiempo de primera respuesta o FRT (<i>First replay time</i>).

    .tarjeta.p-4.mt-5(data-aos="fade-left")(style="background-color: #F6EFE9")
      .row.align-items-center
        .col-md-4.mb-4.mb-md-0
          p El tiempo de respuesta varía de acuerdo con el medio por el cual el cliente ha realizado la petición, como por ejemplo, teléfono, email, chat, personal, página web, entre otros medios de comunicación dispuestos para implementar la comunicación con los clientes.
          p Algunos de los pasos para calcular el tiempo de respuesta de la PQRS son:
        .col-md-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.
            span <i>Calcular el tiempo de respuesta a una petición</i>
          figure
            img(src='@/assets/curso/temas/tema2/img12.png', alt='Es una gráfica que muestra: Fecha de petición - Fecha- Fecha de respuesta. Hora de petición - Hora de respuesta.')

    .row.align-items-center.mb-4.mt-5
      .col-auto
        figure
          img(src='@/assets/curso/temas/tema2/flecha.svg').m-auto(data-aos="fade-right")

    p(data-aos="fade-right").mt-5 Suma los tiempos empleados en dar respuesta a las solicitudes, dividido en el número de peticiones.
    p(data-aos="fade-right") A continuación, se presenta una relación de los tiempos óptimos en dar respuesta de acuerdo con los medios de comunicación empleados por las organizaciones.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 2.
      span <i>Tiempo de respuesta.</i>

    .tabla-b.color-acento-contenido.mt-5(data-aos="fade-left")
        table
          table
            thead.tabla-b__header
              tr
                th(style="width: 40%") Tipos de Protocolos en las Organizaciones
                th Descripción
          table
            tr
              th(style="width: 40%") Protocolos de comunicación
              td 1 hora
              td 4 horas
              td 12 horas
            tr
              th Protocolos de seguridad
              td 15 minutos
              td 1 hora
              td 1 hora
            tr
              th <i>Chat</i>
              td 2 minutos
              td 7 minutos 
              td 1 hora 
            tr 
              th Teléfono 
              td 5 minutos 
              td 10 minutos 
              td 30 minutos
            tr
              th Personal 
              td 5 minutos 
              td 10 minutos 
              td 20 minutos

    p(data-aos="fade-right").mt-5 En cuanto a las organizaciones de carácter público de acuerdo con la Ley 1755 de 2015, las peticiones realizadas por los usuarios deben ser resueltas en quince días, en cuanto a las solicitudes de documentos e información deben ser resueltas en diez días.

    .tarjeta.p-4.mt-5(data-aos="fade-left")(style="background-color: #DEF8F3; border-radius:0px")
      .row.align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/img13.png')          
        .col-md-8
          p Algunas de las técnicas o mecanismos para mejorar los tiempos de respuesta son: la implementación de <i>software</i>, de soporte o servicio al cliente, cualificar al personal, portales de autoayuda para los clientes, <i>software</i> de <i>chat</i>, asistentes virtuales y estandarización de procesos.
          p En esta era digital los clientes esperan respuesta casi que de inmediato, una demora en la respuesta y que a su vez no sea clara o brinde solución, afecta la relación con el cliente.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Trazabilidad del servicio
      
    p(data-aos="fade-right") Las organizaciones deben documentar las PQRSF, y por consiguiente, realizar un seguimiento a las mismas, por lo cual la trazabilidad a las solicitudes o peticiones permite identificar el momento en que se realiza, y los procesos y procedimientos que ha seguido la misma.
    p(data-aos="fade-right") Por lo cual se define la trazabilidad del servicio como el momento inicial en el cual se realiza la solicitud de servicio por parte del cliente, hasta el momento en el que el proceso y procesamiento ha finalizado, permitiendo la medición del mismo, por ello observe:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/GDK-3pt7Pyg?si=B0_dCLo5X3T9IRTU" title="Trazabilidad del servicio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Trazabilidad del servicio

    p(data-aos="fade-right").mt-5 Dentro de las trazabilidades de servicio se encuentran la trazabilidad documental y metrológica, observe en qué consisten:

    .tarjeta(style="background-color: #DEF8F3").p-4
      PasosB.color-acento-botones
        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img14.svg', alt='La grafica revela una conversación de dos personajes sobre la trazabilidad de servicio. Juan: Hola. Me gustaría saber en qué consiste la trazabilidad documental y metrológica. Ana: Claro que sí. Te cuento. La trazabilidad documental hace alusión al rastreo de la solicitud de servicio.  La trazabilidad metrológica se refiere al resultado de medición del proceso o procedimiento de solicitud de servicio. Juan: Un cliente se acerca a servicio al cliente solicitando soporte técnico para un celular que presenta fallas en el sistema a las 10:00 a.m, por lo cual ingresan el celular a servicio técnico a las 10:05 a.m. y el mismo se entrega en perfecto funcionamiento a las 11:15 a.m. Ana: Si, por ejemplo. Juan: Al realizar la trazabilidad documental se indica que se ingresa un celular a servicio técnico a las 10:00 a.m., al cual se realiza actualización del sistema y se entrega en óptimas condiciones y funcionamiento al cliente a las 11:15 am. Ana: En cuanto a la trazabilidad metrológica se indica que el servicio técnico se prestó desde las 10:00 a.m. a las 11:15 a.m., con una duración de 75 minutos. Juan: Un correcto análisis de las trazabilidades permite a las organizaciones: - Prestar servicios de calidad. - Encontrar cuellos de botella en el servicio.  - Establecer planes de mejora continua. Ana: ¡Así es! reconoces muy bien la diferencia entre ambas. Juan: Muchas gracias por tu ayuda. Ana: Es con todo el gusto.')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img15.svg', alt='La grafica revela una conversación de dos personajes sobre la trazabilidad de servicio. Juan: Hola. Me gustaría saber en qué consiste la trazabilidad documental y metrológica. Ana: Claro que sí. Te cuento. La trazabilidad documental hace alusión al rastreo de la solicitud de servicio.  La trazabilidad metrológica se refiere al resultado de medición del proceso o procedimiento de solicitud de servicio. Juan: Un cliente se acerca a servicio al cliente solicitando soporte técnico para un celular que presenta fallas en el sistema a las 10:00 a.m, por lo cual ingresan el celular a servicio técnico a las 10:05 a.m. y el mismo se entrega en perfecto funcionamiento a las 11:15 a.m. Ana: Si, por ejemplo. Juan: Al realizar la trazabilidad documental se indica que se ingresa un celular a servicio técnico a las 10:00 a.m., al cual se realiza actualización del sistema y se entrega en óptimas condiciones y funcionamiento al cliente a las 11:15 am. Ana: En cuanto a la trazabilidad metrológica se indica que el servicio técnico se prestó desde las 10:00 a.m. a las 11:15 a.m., con una duración de 75 minutos. Juan: Un correcto análisis de las trazabilidades permite a las organizaciones: - Prestar servicios de calidad. - Encontrar cuellos de botella en el servicio.  - Establecer planes de mejora continua. Ana: ¡Así es! reconoces muy bien la diferencia entre ambas. Juan: Muchas gracias por tu ayuda. Ana: Es con todo el gusto.')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img16.svg', alt='La grafica revela una conversación de dos personajes sobre la trazabilidad de servicio. Juan: Hola. Me gustaría saber en qué consiste la trazabilidad documental y metrológica. Ana: Claro que sí. Te cuento. La trazabilidad documental hace alusión al rastreo de la solicitud de servicio.  La trazabilidad metrológica se refiere al resultado de medición del proceso o procedimiento de solicitud de servicio. Juan: Un cliente se acerca a servicio al cliente solicitando soporte técnico para un celular que presenta fallas en el sistema a las 10:00 a.m, por lo cual ingresan el celular a servicio técnico a las 10:05 a.m. y el mismo se entrega en perfecto funcionamiento a las 11:15 a.m. Ana: Si, por ejemplo. Juan: Al realizar la trazabilidad documental se indica que se ingresa un celular a servicio técnico a las 10:00 a.m., al cual se realiza actualización del sistema y se entrega en óptimas condiciones y funcionamiento al cliente a las 11:15 am. Ana: En cuanto a la trazabilidad metrológica se indica que el servicio técnico se prestó desde las 10:00 a.m. a las 11:15 a.m., con una duración de 75 minutos. Juan: Un correcto análisis de las trazabilidades permite a las organizaciones: - Prestar servicios de calidad. - Encontrar cuellos de botella en el servicio.  - Establecer planes de mejora continua. Ana: ¡Así es! reconoces muy bien la diferencia entre ambas. Juan: Muchas gracias por tu ayuda. Ana: Es con todo el gusto.')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img17.svg', alt='La grafica revela una conversación de dos personajes sobre la trazabilidad de servicio. Juan: Hola. Me gustaría saber en qué consiste la trazabilidad documental y metrológica. Ana: Claro que sí. Te cuento. La trazabilidad documental hace alusión al rastreo de la solicitud de servicio.  La trazabilidad metrológica se refiere al resultado de medición del proceso o procedimiento de solicitud de servicio. Juan: Un cliente se acerca a servicio al cliente solicitando soporte técnico para un celular que presenta fallas en el sistema a las 10:00 a.m, por lo cual ingresan el celular a servicio técnico a las 10:05 a.m. y el mismo se entrega en perfecto funcionamiento a las 11:15 a.m. Ana: Si, por ejemplo. Juan: Al realizar la trazabilidad documental se indica que se ingresa un celular a servicio técnico a las 10:00 a.m., al cual se realiza actualización del sistema y se entrega en óptimas condiciones y funcionamiento al cliente a las 11:15 am. Ana: En cuanto a la trazabilidad metrológica se indica que el servicio técnico se prestó desde las 10:00 a.m. a las 11:15 a.m., con una duración de 75 minutos. Juan: Un correcto análisis de las trazabilidades permite a las organizaciones: - Prestar servicios de calidad. - Encontrar cuellos de botella en el servicio.  - Establecer planes de mejora continua. Ana: ¡Así es! reconoces muy bien la diferencia entre ambas. Juan: Muchas gracias por tu ayuda. Ana: Es con todo el gusto.')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img18.svg', alt='La grafica revela una conversación de dos personajes sobre la trazabilidad de servicio. Juan: Hola. Me gustaría saber en qué consiste la trazabilidad documental y metrológica. Ana: Claro que sí. Te cuento. La trazabilidad documental hace alusión al rastreo de la solicitud de servicio.  La trazabilidad metrológica se refiere al resultado de medición del proceso o procedimiento de solicitud de servicio. Juan: Un cliente se acerca a servicio al cliente solicitando soporte técnico para un celular que presenta fallas en el sistema a las 10:00 a.m, por lo cual ingresan el celular a servicio técnico a las 10:05 a.m. y el mismo se entrega en perfecto funcionamiento a las 11:15 a.m. Ana: Si, por ejemplo. Juan: Al realizar la trazabilidad documental se indica que se ingresa un celular a servicio técnico a las 10:00 a.m., al cual se realiza actualización del sistema y se entrega en óptimas condiciones y funcionamiento al cliente a las 11:15 am. Ana: En cuanto a la trazabilidad metrológica se indica que el servicio técnico se prestó desde las 10:00 a.m. a las 11:15 a.m., con una duración de 75 minutos. Juan: Un correcto análisis de las trazabilidades permite a las organizaciones: - Prestar servicios de calidad. - Encontrar cuellos de botella en el servicio.  - Establecer planes de mejora continua. Ana: ¡Así es! reconoces muy bien la diferencia entre ambas. Juan: Muchas gracias por tu ayuda. Ana: Es con todo el gusto.')

        .row(titulo="")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img19.svg', alt='La grafica revela una conversación de dos personajes sobre la trazabilidad de servicio. Juan: Hola. Me gustaría saber en qué consiste la trazabilidad documental y metrológica. Ana: Claro que sí. Te cuento. La trazabilidad documental hace alusión al rastreo de la solicitud de servicio.  La trazabilidad metrológica se refiere al resultado de medición del proceso o procedimiento de solicitud de servicio. Juan: Un cliente se acerca a servicio al cliente solicitando soporte técnico para un celular que presenta fallas en el sistema a las 10:00 a.m, por lo cual ingresan el celular a servicio técnico a las 10:05 a.m. y el mismo se entrega en perfecto funcionamiento a las 11:15 a.m. Ana: Si, por ejemplo. Juan: Al realizar la trazabilidad documental se indica que se ingresa un celular a servicio técnico a las 10:00 a.m., al cual se realiza actualización del sistema y se entrega en óptimas condiciones y funcionamiento al cliente a las 11:15 am. Ana: En cuanto a la trazabilidad metrológica se indica que el servicio técnico se prestó desde las 10:00 a.m. a las 11:15 a.m., con una duración de 75 minutos. Juan: Un correcto análisis de las trazabilidades permite a las organizaciones: - Prestar servicios de calidad. - Encontrar cuellos de botella en el servicio.  - Establecer planes de mejora continua. Ana: ¡Así es! reconoces muy bien la diferencia entre ambas. Juan: Muchas gracias por tu ayuda. Ana: Es con todo el gusto.')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Respuesta de las PQRSF',
        texto:
          'Una adecuada atención y respuesta permite al interior de las organizaciones tener una mayor conexión y fidelización, por parte del cliente ayuda a potenciar la imagen corporativa de la organización, generando mayores ventas de bienes o servicios.',
        imagen: require('@/assets/curso/temas/tema2/img8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sistema de respuesta',
        texto:
          'Para que sea eficiente y eficaz se debe de implementar al interior de las organizaciones, mecanismos que permitan que las PQRSF se respondan de fondo y de una forma oportuna, verificando que los canales de comunicación sean los idóneos y las respuestas lleguen a los clientes. ',
        imagen: require('@/assets/curso/temas/tema2/img9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tipo de solicitud',
        texto:
          'Las respuestas a las mismas se pueden clasificar de acuerdo con el medio por el cual se realiza la PQRSF, la cual puede ser por medio presencial, como el contacto con el servicio al cliente o la radicación en las instalaciones de una petición de forma escrita; medio virtual como teléfono, chat, email y página web. ',
        imagen: require('@/assets/curso/temas/tema2/img10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Los clientes',
        texto:
          'Al realizar una solicitud ante las organizaciones, se espera que a esta se le dé respuesta en el menor tiempo posible, por lo cual la medición del tiempo de respuesta es uno de los mayores indicadores de gestión en el área de servicio al cliente; sin embargo, se debe tener claro que las respuestas deben ser de fondo y brindar una solución al cliente.',
        imagen: require('@/assets/curso/temas/tema2/img11.png'),
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

<style lang="sass"></style>
