# #AbrazaLaDiversidad (Challenge Diversidad e inclusión - reto BBVA)
<p align="center"><img src="https://w7.pngwing.com/pngs/771/451/png-transparent-group-of-children-and-earth-illustration-equality-and-diversity-multiculturalism-social-group-child-social-equality-youth-activities-hand-people-friendship-thumbnail.png"/> </p>

## Índice

* [1.Resumen del proyecto](#1-resumen-del-proyecto)
* [2.Conoce nuestra aplicación](#2-conoce-nuestra-aplicacion)
* [3.Tecnologías](#3-tecnologías)
* [4.Creadores ](#4-creadores)

***

## 1. Resumen del proyecto
**Conoce si esxisten sesgos de género en twitter** ¿Sabías que existen sesgos de género en los contenidos de internet que consumimos a diario de forma conciente o inconciente? ¿o que en los contenidos que comparten o comentan tus amigos pueden existir sesgos de género?
Los sesgos de género son una una inclinación consiente o inconsiente a favor o en contra de una persona sin una base objetiva, es decir, puede ser con base en atributos que son inherentes a la persona y que no son cambiables, como puede ser el género, la nacionalidad, la religión, la etnia, etc.
Con el propósito de detectar estos sesgos en los contenidos que consumimos a diario en la red social Twitter, hemos creado la iniciativa #AbrazaLaDiversidad, que está estructurada de la siguiente manera:
* El usuario ingresa un tema de su interés que se esté tratando en twitter a través de la UI, los colores, la presentación y el diseño de la UI se seleccionaron con base en un análisis del usuario objetivo 
* A partir de lo anterior se extraen los tweets relacionados al tema, usando la librería de python snscrape y se hace limpieza del texto mediante el uso de expresiones regulares, para posteriormente hacer la conexión del analizador de texto de aws, Amazon Comprehend.
* Se hace el análisis del sentimiento de los tweets en Amazon Comprehend que internamente utiliza el esquema NLP y nos arroja un análisis del sentimiento reconociendo las entidades (personas, organizaciones, cosas, etc), palabras clave, sintaxis entre otras. 
* Con los resultados del paso anterior se hace el análisis del sesgo a partir de un árbol de decisión y un modelo de la librería de Python nltk que nos permite determinar los géneros de las personas en los tweets, los resultados en este paso son si cada uno de los tweets analizados presentan sesgo o no -Se generan estadísticas usando lo que se obtuvo del análisis de sesgo: porcentajes de tweets sesgados hacía cualquiera de los géneros y porcentaje de tweets no sesgados. 
* Se presentan los resultados al usuario por medio de gráficas que reflejen las estadísticas de manera intuitiva.

## 2. Conoce nuestra aplicación.
 Prueba nuestra aplicación y esta funcionalidad que hemos pensado para ti. Danos un tema de tu interés que se esté tratando en Twitter y nosotros analizaremos si existen sesgos de género. Usa @ si quieres hacer una búsqueda por usuario, **no uses #**.
 
 Visita nuestra App aquí [click aqui ](https://sesgos-de-genero-1pued2rd5-melissa-bracamonte.vercel.app/)






## 3. Tecnologías.

<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>




### 4.Conociendo a nuestro usuario.
Melissa creció rodeada de amigos, pasar tiempo con las personas que quiere y divertirse es algo que ama hacer, sus padres siempre le enseñaron que lo más valioso de la vida son las experiencias que acumulas cerca de los que amas y por esto para ella es muy importante hacer planes cada fin de semana para estar cerca de su familia y sus amigos, por lo menos 2 fines de semana al mes le gusta ir con sus amigos a bailar y conocer nuevos lugares, sin embargo, la diversión suele ser empañada cuando después de algunos tragos, deben pagar la cuenta y por lo general no logran organizarse con respecto a lo que le toca pagar a cada uno, por lo que quien presta su tarjeta, termina pagando siempre más que todos los demás. 
En Citibanamex queremos ayudar a nuestros clientes a compartir gastos con su familia y amigos sin que tengan que estresarse por hacer las cuentas ellos mismos para saber qué le toca poner a cada uno, por esta razón desarrollamos la iniciativa “Comparte tus gastos con quien quieras y bájale al estrés” 


![pantalla1](https://user-images.githubusercontent.com/97549677/186747029-03e4559c-64d6-4a19-a827-250c83514b7c.png)
![pantalla2](https://user-images.githubusercontent.com/97549677/186747758-9c3791e0-8bf7-48ba-a4db-6ec03e0be7d3.png)
![pantalla4](https://user-images.githubusercontent.com/97549677/186747178-81efcb64-684a-4b0f-8416-c5ce07128b9c.png)
![pantalla3](https://user-images.githubusercontent.com/97549677/186747362-5d63363a-b618-4b2e-abad-35de13764adb.png)
![codigoqr](https://user-images.githubusercontent.com/97549677/186750386-a1e4a6af-e054-4328-ba30-365cf6473373.png)
![transaccion](https://user-images.githubusercontent.com/97549677/186748372-0a21e737-251f-4863-b120-fb483853fdd8.png)




## 5. Pruebas de usabilidad.
Se realizaron diferentes pruebas de usabilidad a través de la plataforma de maze para poder corroborar que la aplicación estaba siendo intuitiva y amigable con al usuario.
Se observaron puntos de mejora con cada una de ellas.




 ## 6. Creadoras.
 
 Berenice Zavala Jiménez - **Cientifica de datos**

 Melissa Bracamonte Jaraba - **Desarrolladora Frontend**

Jessica Astrid Valle Dávila - **Desarrolladora Backend**

Emmanuel Rosas López - **Desarrollador Backend**

Marcos Olguín Martinez - **Cientifica de datos**

Jose Ángel Chavez Vizcaíno - **Desarrolladora Backend**

