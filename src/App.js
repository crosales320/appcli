const peliculas = [
  {
    "nombre" : "Un Crimen Argentino",
    "duracion" : 120
  },
  {
    "nombre" : "Minions",
    "duracion" : 95
  },
  {
    "nombre" : "After",
    "duracion" : 98
  }
]
const App = () => {
  return (
    <div className="App">
        <p> CINE  </p>
        {
          peliculas.map ( pelicula => (
            <div> 
              <p> Pelicula: {pelicula.nombre}</p>
              <p> Duracion: {pelicula.duracion}</p>
              <hr />
            </div>
          )
          )
        }
    </div>
  );
}

export default App;
