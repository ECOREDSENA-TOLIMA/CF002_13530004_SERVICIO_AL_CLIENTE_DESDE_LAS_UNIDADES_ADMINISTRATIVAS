<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medios de comunicación y la información 
    
    p(data-aos="fade-right") En la era digital en la cual todos los seres humanos permanecen intercomunicados gracias a la Internet y el desarrollo masivo de los medios de comunicación y de las redes sociales, las organizaciones no son ajenas a estos cambios evolutivos, por tanto, su presencia en estos medios se ha convertido en una de sus estrategias de marketing para llegar a su mercado objetivo.
    
    .row.justify-content-center 
      .col-10
        .cajon.color-acento-contenido.p-4.mt-5(data-aos="fade-left")
          .row.justify-content-center 
            .col-8
                p Los medios de comunicación son sistemas empleados para la comunicación e interacción entre las personas, las organizaciones y los entes gubernamentales, comunicación que permite transmitir información; dentro de estos medios de comunicación se encuentran los medios masivos como la televisión y la radio; pero también se encuentran medios de comunicación interpersonales como el teléfono, el email, el chat.
            .col-3
              img(src="@/assets/curso/temas/tema3/img1.svg")

    p(data-aos="fade-right").mt-5 Estos medios son también denominados medios de la comunicación y de información, debido a que se emplean para comunicar e informar sobre temas de interés de las personas, las regiones, los países o a nivel mundial. 
    p(data-aos="fade-right") Los medios de comunicación sociales o masivos también se clasifican en:

    LineaTiempoB.color-secundario.mt-5(:datos="datosLineaTiempoB")(data-aos="fade-left").BGIMG03

    p(data-aos="fade-right").mt-5 Estos medios de comunicación y la información son de gran utilidad para informar no de forma masiva como lo hacen los medios de comunicación; pero han beneficiado a las organizaciones en su evolución, comunicación e información con sus clientes. 

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Uno de los grandes beneficios de los medios de comunicación y de información son las estrategias de marketing a través de la publicidad en los medios de comunicación, los cuales permiten informar y dar a conocer sus productos o servicios.
        
        p(data-aos="fade-right").mt-5 La comunicación e información más empleados por las organizaciones son los medios interpersonales, los cuales permiten ofrecer un servicio personalizado a sus clientes como lo son las páginas web, el teléfono, chat y otros empleados por estas como estrategia de comunicación e información. 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Procedimiento técnico y normativa del sector

    p(data-aos="fade-right") Las organizaciones deben implementar los procesos y procedimientos de comunicación internos y externos, los cuales permiten definir cuáles son los protocolos a seguir en la comunicación e información que se transmite. 
    p(data-aos="fade-right") Estos procedimientos técnicos tanto internos y externos permiten la transmisión de un mensaje o información de una forma organizada, acorde al lenguaje de la organización; estas técnicas de comunicación deben contener un mensaje, un código, un emisor y receptor.

    .row.justify-content-center.mt-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span <i>Elementos de la comunicación.</i>
        figure
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='Se ve una gráfica que muestra los elementos de la comunicación: *Canal de comunicación *Mensaje *Receptor *Emisor *El emisor, es la persona que transmite el mensaje; el receptor quien recibe el mensaje y como lo indicamos el mensaje es lo que queremos comunicar.')

        .cajon.color-primario.p-4.mt-5
          p Las organizaciones deben propender porque el personal de servicio al cliente exprese, comunique y sea receptivo a lo que el cliente comunica; pero también a lo que la organización comunica, estas características de la comunicación e información deben ser concebidas como uno de los atributos más relevantes dentro del proceso de servicio al cliente, para ello se resalta: 

    p(data-aos="fade-right").mt-5 Las solicitudes o peticiones en la actualidad se denominan con la sigla PQRS, la cual dimensiona cinco experiencias o solicitudes de los clientes, esta abreviatura corresponde a petición, quejas, reclamos, sugerencias y felicitaciones, que se traducen básicamente en la forma en que nos dirigimos a los clientes, en el siguiente vídeo, podrá consultar más al respecto: 

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MjYTz9vzCFw?si=XDo7cGB8vGiuhPdx" title="Proceso de atención y servicio al cliente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Proceso de atención y servicio al cliente

    .row.align-items-center.justify-content-center.mt-5
      .col-10
        .tarjeta.BGIMG04.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/img8.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Ampliar la información desde el Decreto 1078 de 2015, por medio del cual se expide el Decreto Único Reglamentario del sector de tecnologías de la información y las comunicaciones.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Codigo_de_comercio_DECRETO_410_DE_1971.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

        p(data-aos="fade-right").mt-5 Existen otras normas, que si bien no regulan la comunicación, si regulan el manejo de la información personal, como lo es la:

        .tarjeta.BGIMG04.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/img8.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Ley 1581 de 2012, que regula la protección de datos personales, por lo cual las organizaciones deben de establecer políticas respecto a la información que se va a divulgar, como la responsabilidad que tiene de custodiar la información de sus clientes. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Codigo_de_comercio_DECRETO_410_DE_1971.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Medios tecnológicos y su uso adecuado

    p(data-aos="fade-right") Con los cambios tecnológicos las organizaciones han tenido que adaptar sus procesos a estos medios tecnológicos, los cuales han permitido la modernización, mejoras en sus servicios, estandarización de procesos, conectividad con el cliente, toma de decisiones y lo más importante, estar en constate evolución, de lo contrario son organizaciones que están llamadas a desaparecer.
    p(data-aos="fade-right") Día a día se escucha con más fuerza la creación de nuevas startup, que son organizaciones o empresas que ofrecen sus productos o servicios a través del uso de las tecnologías; por lo cual se debe tener en cuenta que hacia estas nuevas organizaciones van creciendo los mercados de bienes y servicios, gracias a la utilidad que brindan las Tecnologías de la Información y la Comunicación, así como se detalla a continuación: 

    .tarjeta.BGIMG03.p-4.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Cambios y dinamismo de las tecnologías
            p Las organizaciones apuestan sus estrategias en la implementación y el uso de los medios tecnológicos de la información y comunicación, con la finalidad de estar más cerca a los clientes y cumplir sus expectativas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img9.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Medios tecnológicos de las tecnologías y las comunicaciones 
            p Implementados por las organizaciones, actualmente son: teléfono, fax, computador, celular, Internet, aplicaciones web, bases de datos, intranet, correo electrónico; sin embargo, algunas han empezado a evolucionar y a implementar tecnologías como la inteligencia artificial, videocomunicación, <i>chatbots, blockchain</i>, minería de datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img10.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 La inteligencia artificial 
            p Permite a las organizaciones automatizar sus tareas mediante el uso de máquinas inteligentes, en especial aquellas que se realizan de forma manual, rutinaria y repetitiva; que en algún momento puede crear desmotivación en los empleados y disminuir su productividad.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img11.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Casos de éxito de inteligencia artificial
            p Es el asistente virtual de la marca <i>Apple</i>, el cual funciona en todos sus dispositivos como <i>MAC, IPhone, IPad</i>; se llama Siri y ayuda a sus usuarios a realizar las actividades en sus dispositivos de una manera más rápida, incluso antes de que se lo pida.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img12.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Videocomunicaciones
            p La implementación del uso de tecnologías de la información con aplicaciones como <i>Meet, Zoom, Teams, Facebook, WhatsApp, YouTube</i>, otras aplicaciones que permiten la comunicación remota, han demostrado que no se hace necesario el contacto físico e incurrir en gastos de desplazamiento, oficinas y personal, ya que permite realizar reuniones, seminarios o videoconferencias por video, a las cuales se pueden conectar personas de todas partes del mundo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img13.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Los <i>chatbot</i>
            p Son otros de los medios tecnológicos que han revolucionado el servicio al cliente, debido a que permiten una atención al cliente más automatizada utilizando la inteligencia artificial; sin embargo, ha presentado algunas dificultades al no manejar un lenguaje natural; solo brindará soluciones para lo cual ha sido programado. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img14.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 La minería de datos
            p Es otro de los medios tecnológicos en mayor crecimiento por las empresas, debido a que existen empresas dedicadas a almacenar la información de los cibernautas de la Internet; quienes posteriormente analizan estos datos para implementar estrategias y toma de decisiones al interior de las organizaciones. La minería de datos utiliza herramientas tecnológicas como el big data y la inteligencia artificial.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img15.png', alt='')

    p(data-aos="fade-right").mt-5 Dados estos cambios tecnológicos en las organizaciones se empieza a hablar de las tecnologías disruptivas, debido a que son tecnologías que llegan a sustituir procesos o procedimientos que se realizaban con tecnologías anteriores, incluso se habla de que pueden empezar a reemplazar el personal de las organizaciones con la llegada de la inteligencia artificial y los robots, por lo cual se empieza a hablar de industria 5.0.
    p(data-aos="fade-right") La industria 5.0 se centra en la creación de nuevas tecnologías generadoras de conocimiento e inteligencia artificial; se espera que con esta nueva tecnología exista la fabricación personalizada, empoderamiento humano, inmediatez y calidad, y contribuya con el medioambiente y sostenibilidad.  

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  <i>Software</i> de servicio al cliente

    p(data-aos="fade-right") Las organizaciones como estrategia de servicio al cliente y el uso de las tecnologías implementan <i>software</i> como herramienta que permite la comunicación con los clientes, debido a que registra las solicitudes con sus datos personales, el momento de la solicitud y manifiesta su necesidad y deseo, estas herramientas también permiten consultar toda la trazabilidad de la petición o solicitud realizada por el cliente.
    p(data-aos="fade-right") Los <i>software</i> de servicio al cliente permiten tener almacenados todos los datos de los clientes en un mismo lugar, lo que permite administrar todos los medios de comunicación dispuestos por la organización para contactarse con sus clientes en un solo lugar; el software también trae beneficios para las organizaciones como gestionar las actividades rutinarias, debido a que las automatiza, lo que también genera ahorro de tiempo y respuesta. 

    .row.justify-content-center.mt-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span <i>Beneficio e implementación de software de servicio al cliente.</i>
        figure
          img(src='@/assets/curso/temas/tema3/img16.svg', alt='Se ve un gráfico que muestra los beneficios del uso del software así: *Disponibilidad de datos e información. *Satisfacción del cliente *Automatización del proceso *Ahorro de tiempo')

        p(data-aos="fade-right").mt-5 Dentro del <i>software</i> gestión del servicio al cliente se encuentra la gestión de las relaciones con los clientes o CRM y el sistema de automatización de ventas o SAV.
        p(data-aos="fade-right") El sistema de gestión de las relaciones con los clientes CRM permite la relación e interacción entre las organizaciones y el cliente, debido a que automatiza los procesos; la implementación de este sistema al interior de las organizaciones permite gestionar los contactos de los clientes, las ventas y el <i>marketing</i>.
        p(data-aos="fade-right") El CMR incluye tres conceptos importantes para la organización como la tecnología, las estrategias y los procesos como se comparte a continuación:

    TabsA.color-acento-botones.mt-5(data-aos="fade-left")
      .tarjeta.p-4(titulo="Clientes")(style="background-color:#DEF8F3")
        .row.justify-content-center 
          .col-xl-6
            p El sistema de gestión de las relaciones con los clientes desde la tecnología permite el registro y análisis de los datos gestionados de los clientes.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img17.png', alt='')


      .tarjeta.p-4(titulo="Estrategias organizacionales")(style="background-color:#DEF8F3")
        .row.justify-content-center 
          .col-xl-6
            p El sistema de gestión de las relaciones con los clientes desde las estrategias organizacionales de enfoque al cliente, en el cual las relaciones con los clientes es el centro principal de la organización. 
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img18.png', alt='')

      .tarjeta.p-4(titulo="Procesos")(style="background-color:#DEF8F3")
        .row.justify-content-center 
          .col-xl-6
            p El sistema de gestión de las relaciones con los clientes desde los procesos permite gestionar los procesos y procedimientos de servicio al cliente.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img19.png', alt='')

      .tarjeta.p-4(titulo="Servicio automatizado")(style="background-color:#DEF8F3")
        .row.justify-content-center 
          .col-xl-6
            p El servicio automatizado de ventas, SAV, gestiona las ventas de las organizaciones debido a que almacena, implementa y genera informes de los clientes, proveedores, vendedores, inventarios, cuentas por pagar, como también genera los soportes de las ventas como facturas, desprendibles de pago, orden de pago, entre otros soportes contables. 

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img20.png', alt='')

    p(data-aos="fade-right").mt-5 La implementación de los servicios automatizados de ventas permite a las organizaciones tener un contacto con los clientes y gestionar sus datos; pero el gran beneficio es el fortalecimiento a su fuerza de venta, debido a que le permite realizar el adecuado seguimiento al proceso de venta.

    .row.justify-content-center.mt-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span <i>Seguimiento al proceso de venta.</i>
        figure
          img(src='@/assets/curso/temas/tema3/img21.svg', alt='Es una infografía que permite ver las semejanzas entre CRM y SAV, esas semejanzas son las siguientes: • Satisfacción y fidelización del cliente. • Automatización de los procesos de servicio al cliente. • Almacenamiento de datos. • Respuesta eficiente y eficaz al cliente. • Seguridad de la información. • Reducción de tiempo. • Reducción de costos.')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: 'Medios audiovisuales',
        texto:
          'Son los que permiten ser vistos y escuchados por medio de dispositivos que permiten la emisión de imágenes y sonidos, dentro de estos se encuentran la televisión y YouTube.',
        icono: require('@/assets/curso/temas/tema3/img2.svg'),
      },
      {
        titulo: 'Medios radiofónicos',
        texto:
          'Son los que transmiten información por medio de formato sonoro a través de ondas; dentro de este medio se encuentra la radio, pero con la modernidad y la Internet también se encuentran los pódcast.',
        icono: require('@/assets/curso/temas/tema3/img3.svg'),
      },
      {
        titulo: 'Medios impresos',
        texto:
          'Son los que transmiten información por medio de la escritura y la redacción como los periódicos; sin embargo, han dejado de estar impresos y se han digitalizado como los periódicos que se encuentran en la Web.',
        icono: require('@/assets/curso/temas/tema3/img4.svg'),
      },
      {
        titulo: 'Medios digitales',
        texto:
          'Son los medios que permiten transmitir información a través de la Internet, por lo cual algunos medios tradicionales como la televisión, la radio, los periódicos y revistas han migrado a estos medios digitales. ',
        icono: require('@/assets/curso/temas/tema3/img5.svg'),
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
