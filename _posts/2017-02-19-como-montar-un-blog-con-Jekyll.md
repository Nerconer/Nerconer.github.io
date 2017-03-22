---
layout: post
title: Cómo crear de forma sencilla un blog con Jekyll
author: David Solà
time: 15
---

Este blog ha sido creado utilizando Jekyll. Tú mismo puedes crear ahora mismo un blog y alojarlo en GitHub utilizando esta herramienta. La creación de blogs con Jekyll es fácil y eficiente si cuentas con un mínimo conocimiento de desarrollo web.

Hace ya un tiempo que me rondaba por la cabeza la idea de crear mi web personal y tener un pequeño blog para aportar un granito de arena al mundo. Durante la carrera, prácticamente no vi nada de desarrollo web, algo bastante cómico, ya que la mayoría de ofertas de trabajo que hay por el campus están relacionadas con esta rama de la informática. Al no contar con demasiada experiencia en esta área, tuve ciertas dudas: 

* ¿Debería hacer la web desde cero o utilizar alguna herramienta ya existente?
* ¿Cuánto tiempo deberé dedicar al mantenimiento de la web?
* ¿Existe alguna solución que me permita alojar la web de forma gratuita?
* ¿Sabré diseñarla de forma correcta?

Mientras investigaba, fui resolviendo estas preguntas sobre la marcha, pero al mismo tiempo, iban surgiendo otras. Como al final parecía este asunto un bucle sin fin, decidí ponerme manos a la obra cuando descubrí Jekyll por una razón bastante sencilla. ¿Si GitHub lo recomienda para crear tu blog personal, por qué no darle una oportunidad?

En mi [anterior artículo]({{ site.baseurl }}{% post_url 2017-02-18-7-razones-usar-Jekyll %}), expliqué por qué Jekyll me parece una buena solución para crear un blog. Al ser software de código abierto, es gratuito y puede ser alojado en un repositorio de GitHub (que a su vez, también es gratuito). 

Por los motivos que allí comenté y junto al tutorial que viene a continuación, ya no tienes excusa para montar tu blog ahora mismo.

### Requisitos previos

Antes de empezar con el tutorial, hay unos requisitos que necesitas saber y tener:

* Cuenta en GitHub
* Conocimientos de HTML/CSS (básicos)
* Un poco de tu tiempo

Crear una cuenta en [GitHub](https://github.com) es gratuito y necesario para alojar el blog en él. Existen otras alternativas como Amazon AWS, pero suelen ser más complejas, y con GitHub ya contamos con todo lo necesario para empezar con buen pie.

### Paso 1: Instala Ruby

En esta sección, me centraré en usuarios de Mac ya que es la plataforma donde lo he instalado. Aún asi, si utilizas Windows (los que estéis utilizando Windows podéis seguir [este tutorial](https://jekyllrb.com/docs/windows/#installation)) o Linux, no te preocupes, es muy similar.

Lo primero que hay que asegurarse, es tener instalado <code>Xcode Command Line Tools</code>. Se puede instalar con el siguiente comando:

```
xcode-select --install
```

Lo siguiente que debes hacer es instalar Ruby. En principio, ya deberías tenerlo instalado, pero puede que no esté en la versión más reciente. Para hacerlo, instalaremos el gestor de paquetes [Homebrew](https://brew.sh/index_es.html).

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Si ya lo tienes instalado, actualízalo con:

```
brew update
```

A continuación, instala Ruby siguiendo estos pasos:

```
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby
rbenv install 2.2.2
rbenv global 2.2.2
ruby -v
```

A partir de este punto, deberías tener instalada la última versión de Ruby. Puedes comprobarlo con el comando:

```
gem -v
```

### Paso 2: Instala Jekyll

Ahora que ya tienes todos los requerimientos del sistema instalados, instalar Jekyll es tan simple como ejecutar:

```
gem install jekyll
```

Si te encuentras con algún problema derivado de la falta de permisos durante la ejecución del comando anterior, escribe el comando <code>sudo</code> al principio:

```
sudo gem install jekyll
```

Una vez ha sido instalado, deberías ser capaz de ejecutar en cualquier dirección el siguiente comando:

```
jekyll -v
```

### Paso 3: Encuentra un tema que encaje con tus necesidades

Una vez que ya tenemos Jekyll correctamente instalado, es buen momento para elegir un tema. Un tema (*theme*, en inglés), es importante, ya que ofrece un diseño agradable visualmente al blog. Puedes empezar con el tema que viene por defecto para jugar un poco con el entorno y ver cómo funciona. Si crees que el diseño no es tu fuerte o quieres empezar rápido, puedes optar por un tema pre diseñado. Encontrarás una gran variedad en:

1. [themes.jekyllrc.org](http://themes.jekyllrc.org)
2. [jekyllthemes.org](http://jekyllthemes.org)
3. [jekyllthemes.io](https://jekyllthemes.io)

Una vez hayas elegido el que más te guste o el que cumpla con los requisitos que esperabas encontrar, solo tienes que descargarlo.

<p class="nota">
	Puede que a estas alturas estés un poco perdido. Recuerda que instalar un tema no es más que descargarse un conjunto de ficheros estructurados que conforman la web en su totalidad con el diseño ya hecho y sin contenido.
</p>

El tema que estoy usando actualmente es [Jekyll-Mono](http://jekyllthemes.org/themes/Jekyll-Mono/).

Recuerda que puedes personalizar los temas a tu gusto (aunque es necesario un cierto grado de conocimiento en desarrollo web).

La estructura del directorio será parecida a lo que verás a continuación. Puedes que no tengas todos los ficheros que aparecen, pero no te preocupes, tendrás los necesarios.

<pre class="highlight"><code class="nohighlight">
	.
	├── _config.yml
	├── _data
	|   └── members.yml
	├── _drafts
	|   ├── begin-with-the-crazy-ideas.md
	|   └── on-simplicity-in-technology.md
	├── _includes
	|   ├── footer.html
	|   └── header.html
	├── _layouts
	|   ├── default.html
	|   └── post.html
	├── _posts
	|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
	|   └── 2009-04-26-barcamp-boston-4-roundup.md
	├── _sass
	|   ├── _base.scss
	|   └── _layout.scss
	├── _site
	├── .jekyll-metadata
	└── index.html # can also be an 'index.md' with valid YAML Frontmatter
</code></pre>



### Paso 4: Crea un repositorio

Como usuario de GitHub, tienes derecho a un sitio web de "usuario" gratuito (en contraposición a un sitio web de "proyecto") que se encuentra en la dirección <code>http://usuario.github.io</code>. Esta dirección es ideal para alojar tu blog. Puedes encontrar más información leyendo [aquí](https://help.github.com/articles/user-organization-and-project-pages/).

<p class="aviso">
	Solo puedes usar tu cuenta para crear un repositorio de tipo <strong>User Page</strong>.
</p>

La mejor parte de esto es que simplemente puedes colocar tu blog sin construir en la rama principal (*master branch*, en inglés) de tu repositorio de usuario y GitHub te construirá la web y la servirá por ti. De este modo, no hace falta que te preocupes de la etapa de construcción, ya que está automatizada.

Una vez creado un repositorio, sube el tema que te has descargado previamente y asegúrate que el nombre del repositorio sea <code>usuario.github.io</code>. Si por algun motivo el nombre no sigue este patrón, puedes cambiarlo haciendo click en el botón de *Settings* y cambiar el nombre del repositorio a <code>usuario.github.io</code> reemplazando <code>usuario</code> con tu usuario de GitHub.

<figure>
<img src="/images/settings-jekyll-screenshot.png" alt="settings" class="full">
<figcaption>El botón "Settings" se encuentra en la parte superior derecha del repositorio</figcaption>
</figure>

En este momento, tu web ya debería poderse visualizar con la url <code>http://usuario.github.io</code>. ¡Felicidades, ya tienes tu blog publicado!

### Paso 5: Personaliza tu blog

Una vez ya instalado el blog y subido correctamente, verás que contiene valores por defecto que deben ser modificados, como el nombre de la web, su descripción, enlaces a redes sociales, etc. Modificar el archivo <code>_config.yml</code> debería ser tu prioridad. 

<figure>
<img src="/images/config-jekyll-screenshot.png" alt="fichero _config.yml">
<figcaption>Editando el fichero _config.yml con Sublime Text</figcaption>
</figure>

Recuerda que Jekyll te ofrece máxima libertad para modificar todo lo que consideres necesario y que el límite estará en tu imaginación. 

### Paso 5: Publica tu primer post

Tu web está ahora mismo personalizada, publicada y con un diseño atractivo. Ahora ¡sólo debes empezar a escribir tu primer post!

Habitualmente, los temas contienen algún post de ejemplo dentro del directorio <code>_posts</code>. Los posts están en formato <code>.md</code>, que significa markdown. Markdown es un formato fácil de leer y de escribir que se convertirá en html durante la etapa de construcción.

Puedes editar los posts ya existentes o puedes crear de nuevos con la extensión <code>.md</code>, y el nombre del fichero debe seguir el formato <code>YYYY-MM-DD-título.md</code>. Usa [esta chuleta](http://assemble.io/docs/Cheatsheet-Markdown.html) mientras escribes tu post.

<figure>
<img src="/images/posts-jekyll-screenshot.png" alt="listado posts">
<figcaption>Listado de artículos con su formato correspondiente</figcaption>
</figure>

### Conclusión

Jekyll no sirve para todos los proyectos. La principal desventaja de un generador de webs estáticas es que incorporar funcionalidades en el lado del servidor es difícil. 

Su punto fuerte radica en su facilidad de uso y escasa (o nula) mantenibilidad. Esto lo hace perfecto para montar un blog personal y portfolio.

Te sugiero que pruebes Jekyll y le des una oportunidad para ver si satisface todas tus necesidades. Para cualquier duda, déjame un comentario debajo o envíame un email e intentaré responder lo más rápido posible.
