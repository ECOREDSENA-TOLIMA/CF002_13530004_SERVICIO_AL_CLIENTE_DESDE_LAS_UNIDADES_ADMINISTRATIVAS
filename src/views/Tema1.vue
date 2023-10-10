<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Etiqueta y protocolo

    p(data-aos="fade-right") Para el servicio al cliente es importante reconocer en las organizaciones elementos como la etiqueta y el protocolo, los cuales se abordan desde el conocimiento de las empresas, plataforma estratégica, cultura organizacional, las solicitudes de servicio, medios de comunicación, la información y las normas técnicas de gestión de la calidad desde la ISO 9000:2015 del sistema de gestión de calidad; el cual permitirá a las mismas y a los empleados brindar un servicio de calidad aceptable para los clientes.
    p(data-aos="fade-right") Estos conocimientos permitirán que el personal de las organizaciones adquiera habilidades de comunicación y estructuración de los servicios, en las cuales podrá interactuar con el cliente, abordar sus necesidades y estructurar un adecuado portafolio de servicios, que permita que el cliente adquiera los productos o servicios ofertados por la organización y califique su experiencia.

    .row.justify-content-center.mt-5
      .col-10(style="background-color:#DEF8F3").p-4
        SlyderB(:datos="datosSlyder")
      .col-10
        p(data-aos="fade-right").mt-5 Para brindar un ambiente de amabilidad, confianza y calidez al cliente, el personal de las organizaciones debe adoptar unos comportamientos y formalidades, que se deben brindar en todo momento de la cotidianidad de las organizaciones, como eventos, reuniones, comunicación con los clientes internos y externos, y en relación con los proveedores. Por lo cual, las organizaciones deben de adoptar unas reglas o normas de protocolos y etiqueta al interior de las organizaciones, definidos como: 

    .row.mt-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img4.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p <b>Los protocolos</b> son unas normas o reglas que establecen las organizaciones para llevar el orden u organización de sus eventos o actividades. 


      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img5.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p <b>La etiqueta</b> son las normas o reglas de comportamiento personal que deben seguir los empresarios y personal vinculado en las organizaciones en los eventos o actos empresariales.


      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img6.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#F6EFE9")
            .p-4
              p <b>El protocolo</b> indica un orden para los eventos y la <b>etiqueta</b> un comportamiento personal en eventos públicos, estas normas y reglas se deben adaptar a la cotidianidad de las organizaciones, debido a que brindan parámetros de orden y comportamiento. 

    p(data-aos="fade-right").mt-5 La implementación y documentación de los protocolos y la etiqueta brinda a las organizaciones una imagen corporativa aceptable y la apropiación de una cultura organizacional que será identificada por los clientes.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  El cliente
      
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4WIq433jNMA?si=yYpsxsPnV_rxhvbp" title="Cliente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Cliente

    p(data-aos="fade-right").mt-5 Los clientes o consumidores son personas u organizaciones que adquieren bienes o servicios, con la finalidad de satisfacer sus necesidades. Los clientes se pueden clasificar en clientes internos y clientes externos, quienes son consumidores de productos y servicios, los cuales tienen las siguientes características:

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Características de consumidores de productos y servicios</i>  
        figure
          img(src='@/assets/curso/temas/tema1/img7.svg', alt='Se muestra un gráfica con la clasificación de los clientes según si son internos o externos. Los clientes internos pueden ser: Propietarios. Franquiciados. Distribuidores. Personales. Accionistas. Por el otro lado se tiene al cliente externo que puede ser: Clientes. Gobiernos. Organizaciones.')          

    p(data-aos="fade-right").mt-5 Dentro del contexto colombiano del servicio al cliente, es importante tener en cuenta que existen diferentes tipos de clientes, los cuales pueden agruparse en dos grandes categorías: personas naturales y personas jurídicas. Cada una de estas categorías posee una naturaleza jurídica distinta y se caracteriza por comportamientos, ubicaciones, gustos y necesidades específicas. Es fundamental identificar claramente a cada tipo de cliente con el fin de desarrollar canales de comercialización adecuados, efectivos y eficaces. A continuación, se describen brevemente estos dos grupos de clientes: 

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 La persona natural <br>
            p.mb-0 Se puede definir como la persona que a nombre propio ejerce una actividad económica, en el caso de Colombia se registra ante el Registro Único Tributario (RUT) como persona natural y se le asigna los códigos CIIU de acuerdo con la actividad económica que ejerce. Es la responsable de las obligaciones adquiridas con terceros. 

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 La persona jurídica <br>
            p.mb-0 Es en sí, la forma jurídica que se le da a una o más personas que voluntariamente desean conformar una sociedad para ejercer una actividad económica; estas personas pueden se natural o jurídica; en el caso de la persona jurídica, la sociedad es la responsable de las obligaciones adquiridas con terceros, y al no cumplir con estas obligaciones, los socios deben responder de acuerdo con el tipo de constitución de la sociedad y de conformidad con la ley.

   
    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-6 
        p Para lo anterior se hace necesario considerar sus diferencias:
      
      .titulo-sexto.color-acento-contenido.mt-5
        h5 Figura 2. 
        span <i>Diferencias entre persona jurídica y persona natural</i>  
      .col-5
        figure
          img(src='@/assets/curso/temas/tema1/img10.svg', alt='Se hace la comparación entre los clientes que son personas naturales y personas jurídicas. Las personas jurídicas son: Es personas ficticias. Se componente de una o más personas. Actúa a nombre de la sociedad por medio del representante legal. Tiene un patrimonio diferente al de los socios.  Mientras que las personas naturales son: Una persona. Esa persona es una persona humana. Actúa a nombre propio. Cuenta con el patrimonio personal.')                
      .col-5
        figure
          img(src='@/assets/curso/temas/tema1/img11.svg', alt='Se hace la comparación entre los clientes que son personas naturales y personas jurídicas. Las personas jurídicas son: Es personas ficticias. Se componente de una o más personas. Actúa a nombre de la sociedad por medio del representante legal. Tiene un patrimonio diferente al de los socios.  Mientras que las personas naturales son: Una persona. Esa persona es una persona humana. Actúa a nombre propio. Cuenta con el patrimonio personal.')          

    p(data-aos="fade-right").mt-5 A parte de su procedencia jurídica los clientes internos y externos se clasifican en dos categorías, el cliente actual quien en el presente consume los productos y servicios y, el cliente potencial, quien pueden ser un posible comprador de los productos y servicios, estos son: 

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10 
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img12.svg', alt='Se clasifica el tipo de cliente en una gráfica en dos categorías, cliente actual y cliente potencial. El cliente actual puede ser un cliente activo e inactivo que se definen así: Cliente activo es la persona que en la actualidad adquiere los productos o servicios. Cliente inactivo es la persona que compró el producto o servicio, en un periodo de tiempo y en la actualidad no se beneficia de este. Por el lado del cliente potencial se tienen los clientes que están en la competencia y los clientes con decisión de compra y sus respectivas definiciones son las siguientes, Cliente en la competencia: quien en la actualidad adquiere sus productos y servicios en la competencia. Cliente con decisión de compra: quien tiene la necesidad del producto o servicio y tiene los recursos para adquirirlo.')              

          .tarjeta.tarjeta--blanca.p-3(x="14%" y="84%" numero="+")
            .h5.mb-2 Cliente activo
            p Es la persona que en la actualidad adquiere los productos o servicios.

          .tarjeta.tarjeta--blanca.p-3(x="38%" y="84%" numero="+")
            .h5.mb-2 Cliente inactivo
            p Es la persona que compró el producto o servicio, en un periodo de tiempo y en la actualidad no se beneficia de este.

          .tarjeta.tarjeta--blanca.p-3(x="63%" y="83%" numero="+")
            .h5.mb-2 Cliente en la competencia
            p Quien en la actualidad adquiere sus productos y servicios en la competencia.

          .tarjeta.tarjeta--blanca.p-3(x="87%" y="83%" numero="+")
            .h5.mb-2 Cliente con decisión de compra
            p Quien tiene la necesidad del producto o servicio y tiene los recursos para adquirirlo.

        p(data-aos="fade-right").mt-5 Los clientes, sean personas naturales o personas jurídicas, consumidor activo o potencial, posee unas características, que pueden ser cualitativas y cuantitativas, y se deben identificar de forma correcta para poder dirigir las estrategias organizacionales y atraer al cliente y fidelizarlo, dentro de las estrategias están los sistemas de gestión de la calidad al interior de la organización, con el enfoque al cliente y las estrategias del <i>marketing</i>; lo que permitirá posicionar la marca de la entidad u organización.
    
        .cajon.color-acento-contenido.p-4.mt-5
          p Dentro de las características cuantitativas se encuentran las que pueden ser cuantificables como edad, ingresos mensuales o anuales, activos, pasivos y patrimonio, las inversiones que realiza, entre otros, recordando que estas características deben de ser medibles.

        p(data-aos="fade-right").mt-5 Las características cualitativas son aquellas que no pueden ser medibles, son más subjetivas al consumidor, son características o cualidades como:

      figure.mt-5
        img(src='@/assets/curso/temas/tema1/img13.svg', alt='Se comparten las características cualitativas que son las que permiten que el cliente tenga preferencias a la hora de decidir en adquirir un producto o servicio. Esas características con las siguientes: Sexo. Hobbies. Religión o creencias. Estado civil. Profesión. Cultura. Situación financiera.')

      p(data-aos="fade-right").mt-5 En el proceso se debe identificar el tipo de cliente, debido a que permitirá construir y dirigir las estrategias orientadas al servicio al cliente, de una forma adecuada que permitan tener acceso al cliente y lograr el fin último, que es crear una fidelidad hacia la entidad, la organización o la marca. 
      p(data-aos="fade-right") Para ello, es importante reconocer los tipos de clientes como se detalla a continuación: 

      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/FxVNkf957tw?si=kuFtADa97VylXpMJ" title="Tipos de clientes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Tipos de clientes

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
    h2 1.2  Reglas de protocolo

    p(data-aos="fade-right") El protocolo al interior de las organizaciones permite que se adopten unas normas o reglas, que orientan a sus miembros en la organización u orden de sus eventos o actividades, estos protocolos deben estar documentados en un manual que contenga las reglas de los protocolos en los diferentes escenarios. 

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10 
        .cajon.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-3
              figure
                img(src='@/assets/curso/temas/tema1/img14.svg')
            .col-9
              p Las reglas de protocolo permiten a las organizaciones implementar las normas de comportamiento de todos sus miembros, estableciendo jerarquías y el orden estructural al interior de la organización; estas adecuadas normas de comportamiento permiten un correcto posicionamiento de imagen corporativa tanto con los clientes internos como externos.
        
        p(data-aos="fade-right").mt-5 Los protocolos al interior de las organizaciones se pueden clasificar en seis tipos tal como se ve en la siguiente tabla:

        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 1.
          span <i>Tipos de protocolos en las organizaciones.</i>

        .tabla-b.color-acento-contenido.mt-5(data-aos="fade-left")
          table
            thead.tabla-b__header
              tr
                th Tipos de Protocolos en las Organizaciones
                th Descripción
            tr
              th Protocolos de comunicación
              td Establecen pautas y normas para la comunicación efectiva interna y externa.
            tr
              th Protocolos de seguridad
              td Establecen medidas y procedimientos para garantizar la seguridad de los activos de la organización.
            tr
              th Protocolos de gestión de crisis
              td Definen los pasos a seguir en caso de situaciones de emergencia o crisis.
            tr 
              th Protocolos de calidad
              td Establecen los estándares y procesos para asegurar la calidad de los productos o servicios de la organización.
            tr
              th Protocolos de gestión del conocimiento
              td Establecen cómo se comparte, organiza y aprovecha el conocimiento dentro de la organización.
            tr 
              th Protocolos de ética y conducta
              td Establecen normas y valores éticos que deben seguir los miembros de la organización en sus interacciones.

    p(data-aos="fade-right").mt-5 Esta tabla proporciona una descripción breve de cada tipo de protocolo y su área de aplicación dentro de una organización. Cada tipo de protocolo tiene su importancia y contribuye al funcionamiento adecuado y eficiente de la empresa en distintos aspectos, como la comunicación, la seguridad, la gestión de crisis, la calidad, la gestión del conocimiento y la ética corporativa.
              
    .row.justify-content-center.mt-5 
      .col-10
        .tarjeta.p-4(data-aos="fade-left")(style="background-color: #DEF8F3")
          .row.align-items-center
            
            .col-md-8.mb-4.mb-md-0
              p El protocolo debe ser un manual documentado para toda la organización, el cual debe ser práctico, de acceso a todos los miembros, claro, conciso y flexible; estos manuales deben de incluir un índice, información de la organización y capítulos.
              p Dentro de los manuales de protocolo de la organización se deben contemplar unas reglas básicas o esenciales como son: puntualidad, el saludo, la imagen corporativa, la imagen de los miembros, la ortografía en los escritos, el trato adecuado, entre otros, que se consideran relevantes para la organización, a continuación, se describen algunas de estas:

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img15.png', alt='')

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
    h2 1.3  Imagen corporativa
    
    p(data-aos="fade-right") Es la percepción que tienen de la empresa los clientes internos y externos, y el público en general; la imagen corporativa recoge un conjunto de elementos característicos que la definen como los productos y servicios que ofrece, las relaciones con sus clientes y el entorno.

    .tarjeta.mt-5.p-4(data-aos="fade-left")(style="background-color: #F6EFE9")
      .row.justify-content-center
        .col-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img16.svg' alt='')
        .col-8(data-aos="fade-left")
          p Las organizaciones deben propender por transmitir una imagen corporativa positiva, que brinde los siguientes beneficios:
          ul.lista-ul.p-3
            li 
              i.lista-ul__vineta
              | El cliente se identifica con la organización y se logra fidelización.

            li 
              i.lista-ul__vineta
              | Se crea recordación de marca en el público en general.

            li 
              i.lista-ul__vineta
              | Los miembros crean vínculos fuertes hacia la organización. 

            li 
              i.lista-ul__vineta
              | Crea valor hacia la marca.
      
    p(data-aos="fade-right").mt-5 Las organizaciones al crear su imagen corporativa deben realizar un análisis de su entorno interno y externo, el cual permite determinar la misión, visión, objetivos, principios, códigos y valores corporativos, a partir de los cuales se crea la imagen corporativa, la cual debe contener: 

    .row.justify-content-center(data-aos="fade-left").mt-5
      .col-10
        .tarjeta(style="background-color: #DEF8F3")
          figure.p-5
            img(src='@/assets/curso/temas/tema1/img17.svg' alt='Se muestra la marca Sena y los elementos que esa marca contiene enlistados así: - Nombre de la empresa.- Identidad cromática.- Eslogan- Logotipo o isotopo.- Símbolos.')
          p.p-5 Se recomienda que cada marca o empresa empiece por generar esos elementos según su orden de prioridades, en la actualidad gracias al impacto del Internet el nombre y su marca de manera visual se requieren con prioridad, ese es el mayor elemento identificativo de las empresas.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido
    h2 1.4  Normas de cortesía

    p(data-aos="fade-right") Se encuentran relacionadas con el protocolo y la etiqueta de las organizaciones, son un principio básico de comportamiento de las personas en su entorno social, son necesarias para poder tener una adecuada interacción y relación en el ambiente laboral, como con el personal externo, ya sea proveedores, clientes u otras organizaciones.

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img18.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estas normas se aprenden desde la niñez principalmente en el entorno familiar; pero también se aprenden en el entorno social como en la escuela, ya que son de gran importancia para la interacción en la sociedad.
            br
            br
            p Al interior de las organizaciones también se deben implementar estas normas de cortesía, debido a que en el día a día se interactúa con personas, que pueden ser: compañeros de trabajo, clientes, proveedores, entes gubernamentales, entre otros, por lo cual estas normas se basan principalmente en el respeto por el otro, observe:
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/a-BgD2Cb0po?si=SZ6mzElgnzHEcjCi" title="Normas de Etiqueta y Protocolo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Normas de Etiqueta y Protocolo

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '¡Importante!',
        texto:
          'A través de la historia, el ser humano ha evolucionado y con ello sus hábitos de consumo, por lo cual las organizaciones se han visto en la necesidad de mejorar sus procesos y adaptarse al entorno.',
        imagen: require('@/assets/curso/temas/tema1/img1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Con ello, ha debido posicionar su imagen corporativa tanto interna como externa.',
        imagen: require('@/assets/curso/temas/tema1/img2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'En su entorno interno los empresarios y personal que labora para cada una de las organizaciones se ha apropiado de la imagen corporativa, la cual genera para los clientes o usuarios externos confianza, amabilidad y una excelente experiencia con el producto o servicio.',
        imagen: require('@/assets/curso/temas/tema1/img3.png'),
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
