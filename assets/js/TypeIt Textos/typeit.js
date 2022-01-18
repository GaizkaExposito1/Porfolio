new TypeIt("#pruebas", {
  speed: 75,
  waitUntilVisible: true,
})
  .delete(1)
  .type("Dssar", { delay: 300 })
  .move(-3)
  .delete(1)
  .type("e")
  .move(null, { to: "END" })
  .type("rollador")
  .pause(300)
  .type("Web")
  .move(-3)
  .type(" ")
  .move(null, { to: "END" }) 
  .type("  ")
  .pause(1000)
  .type("dessta")
  .move(-2)
  .delete(2)
  .type("llista :)")
  .pause(200) 
  .delete(2)
  .delete(19, { speed: 300 }) //Aqui poniendo {speed: x}, hacemos que valla mas lento o mas rapido la animacion de borrar
  .move(null, {to: "End", speed: 75}) // Si quieres poner 2 Atributos en un movimiento, los pones dentro de {} con coma
  .type("  ")

  .go();