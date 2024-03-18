const usuario = {
    "id": 123456,
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 30,
    "correo": "juan@example.com",
    "telefono": "1234567890",
    "direccion": {
      "calle": "Calle Principal",
      "numero": "123",
      "ciudad": "Ciudad Ejemplo",
      "codigo_postal": "12345",
      "pais": "País Ejemplo"
    },
    "suscripciones": ["newsletter", "ofertas"],
    "ultima_actividad": "2024-03-18T10:00:00Z",
    "activo": true
  }

  // veo el nombre de cada propiedad del objeto
  for (const key in usuario) {
    console.log(key);
  }

  //para ver el contenido de cada propiedad tengo que usar los []
  for( const clave in usuario){
    //console.log(usuario.clave); // esta buscando la propiedad 'clave' y como no la encuentra imprime 'undefined'
    //console.log(usuario.edad); // busca la propiedad edad y me devuelve 30. Como imprime eso por cada propiedad del objeto, me imprime muchas veces 30
    console.log(usuario[clave]); // imprime el contenido de cada propiedad
  }

  // Ejemplo mas claro
  for (const key in usuario) {
    console.log(key);
    console.log(usuario[key]);
    console.log("--------------");
  }

  //Hacer una funcion que reciba un objeto y retorne un array con todos los valores de sus propiedades como elementos

  const obj = {
    nombre: "Lothar",
    apellido: "Rojas",
    edad: 10
  }

  function transformarObjeto(obj){
    const elementos = [];
    let index = 0;

    for (const key in obj) {
       elementos[index] = obj[key];
       index++;
    }

    return elementos;
  }

  console.log(transformarObjeto(obj));

// Desarrollar una función range() que tome como parámetros dos valores tipo number, start y end, y que retorne un array con todos los numeros enteros desde start hasta e incluyendo a end.
// Además, esta funcion tiene un tercer parámetro opcional de tipo number, step, que modifica la cantidad en la que se incrementa el contador interno. Si ningun step es indicado, los elementos del array se incrementarán de uno en uno, sino, según el step indicado:

function range(start, end, step = 1) {
    const arr = [];
    let index = 0;
    
    for (let i = start; i <= end; i = i + step) {
    arr[index] = i;
    index++;
    }
    
    return arr;
    }
    
    console.log(range(1, 10, 3));