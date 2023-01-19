// Criar um método para ler as propriedades de um objeto e 
//Exibir apenas as que forem strings


const movie = {
    title: 'Avatar',
    year: 2018,
    director: 'Mary',
    hero: 'Thor'
  }
  
  exibirPropriedades(movie);
  
  function exibirPropriedades(obj) {
    for (prop in obj)
      if (typeof obj[prop] === 'string')
        console.log(prop, obj[prop])
  }