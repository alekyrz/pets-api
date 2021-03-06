//  iniciar sesion es un end point es stateles no guardaremos sesiones, se crea un objeto sesion. puede decir cuando expira jwt tien etres partes podemos parsarle un objeto con informacio tokern que no se guarda en base de datos, si se guardan token deja de ser stateless. el middleware es por quien pasa y es de autenticazion se pasara en una cabecera , gchecksoon para que nadie pueda entrar . Payload es donde guarda la info, en verify signature firma,  //middle ware out  para finalizar, //lib guarda librerias que sean funciones que no pertenecen a ninguna que se pueden reutilizar en todo el codigo para hacer un wrappenir para promificacion de jwt //modelo equivale a un collection y el formulario, el contrato , genera documentos //rutas pertinetes, dde nuestros usuarios y dei las mascotas, y se puede hacer una ruta y sus endpoints //server la configuracion del servidor // entidad: deonde se guardan los objetos
const { server, port } = require('./src/server')
const db = require('./src/lib/db')

db.connect()
  .then(() => {
    console.log('db connected')
    server.listen(port, () => {
      console.log('server ready 8080')
    })
  })
  .catch(error => {
    console.error('error: ', error)
  })
