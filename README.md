# mongo-app
_Proyecto integrador de base de datos para compuo en la nube._

## Comenzando 🚀
_Primeramente hay que realizar una duplica del proyecto clonandolo o bien descargando el zip para poder verlo de forma local. Hay que ir al botón que dice "Clone or download" y en caso de clonarse se copia el enlace y en una terminal (con git instalado) dar "git clone https://github.com/mizraim168/mongo-app.git" o bien darle al botón de "download"._

### Pre-requisitos 📋
_Software necesario para correr el proyecto de forma correcta._
_Instalar NodeJS en la computadora. Pudes descargar e instalar Nodejs en el siguiente enlce: https://nodejs.org/es/download/_
_Instalar Angular-cli vía "npm" en una terminal. Instalar con el siguiente comando:_
```
npm install -g @angular/cli
```
_Ir al directorio /bapp/Scripts y realizar la insercción de los datos de ejemplo en la base de datos "sample_airbnb" mediante la terminal o bien mediante un cliente como dbkoda o Robo 3T. Puede hacer mediante un insertMany con todos los datos._ 

```
db.collection.insertMany([
    {object1},
    {object2},
])
```
_Estos datos són unicamente con fines de ejemplo (usted puede agregar o eliminar más información de la colección customers desde la interfaz gráfica)._
### Instalación 🔧
_Para hacer funcionar el proyecto tenemos que ir a la ruta /bapp/server y ejecutar el siguinte comando_
```
npm init
```
_Posteriormente precionar enter a todo lo que te pregunte el terminal_
_Una vez hecho el paso anterior es importante instalar los node__modules y para ello se utiliza el siguiente comando_
```
npm install
```
_Después es importante ir a la ruta /bapp/client en la terminal y ejecutar nuevamente el comando_
```
npm install
```

## Ejecutando el proyecto ⚙️
_Para correr el projecto es importante ir al directorio /bapp/server y dentro del directorio iniciar el servidor con el siguiente comando._
```
npm run dev
```
_El comando anterior va a ejecutar el servidor y eso va a permitir hacer las consultas mediante los métodos del protocolo HTTP._

_Automáticamente el software se conecta a sample_airbnb y cuando se agrega un customer desde la inetrfaz se crea la colección de "customers" (también puede agregarse manualmente desde un cliente de mongo)._

_Pra acceder a la interfaz gráfica tenemos que ir al directorio /bapp/client y ahí ejecutar el siguiente comando._
```
ng serve
```
_OJO: no cerrar el terminal dónde se ejecuto "npm run dev" ya que uno es el servido del REST API y el otro es el servidor de Angular._

_Para vizualizar los datos de customers del servidor del REST API vamos a la siguiente dirección desde nuestro navegador:_

```
http://localhost:3000/customers
```

_Para vizualizar la interfaz gráfica vamos a la siguiente dirección desde nuestro navegador:_

```
http://localhost:4200/
```

_Dentro de la inetrfaz gráfica ya se pueden seralizar las acciones correpondientes del punto 1 al punto 5 y adicionalmente el punto 10 ya que si así lo desea únicamnte puede cambiar el status de active a inactive y viceversa._

_Para los siguientes puntos se requiere un cliente de peticiones como sería Postman o bien curl._

_A continuación se muestran los métodos para realizar las acciones._

_Punto 6._
_método GET._
_Realizar un get a:_
```
http://localhost:3000/customers/customersrentals
```
_Punto 7._
_método GET._
_Realizar un get a:_
```
http://localhost:3000/listenings
```
_Punto 8._
_método GET._
_Realizar un get a:_
```
http://localhost:3000/listenings/ptype
```
_Punto 9._
_método GET._
_Realizar un get a:_
```
http://localhost:3000/listenings/price
```

_Punto 11._
_Para poder realizar un respaldo en demanda de todas la colleciones de sample_airbnb tenemos que ir al directorio /bapp/server/controllers._

_Una vez ahí dentro ejecutamos el siguiente comando._
```
node backup.js 
```
_El comando te creará un respaldo de todas las colecciones en el directorio root de tu pc / y ahí se encontrará en una carpeta llamada backup._


## Autores ✒️

_Todos los derechos reservados a los respectivos autores_

_Dudas o preguntas sobre el proyecto contactar a mizraimeliab168@gmail.com_

* **Mizraim Eliab** - *General Develop* - [mizraim168]
* **Rafael Adrián** - *DB* - [Adrian12317]