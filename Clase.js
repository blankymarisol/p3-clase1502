class Cola {
    constructor(tamanoMaximo = 10) {
        this.items = [];
        this.tamanoMaximo = tamanoMaximo;
    }

    // CrearCola: Inicializa la cola (ya se hace en el constructor)
    CrearCola() {
        this.items = [];
    }

    // Insertar: Añade un elemento a la cola si no está llena
    Insertar(elemento) {
        if (this.ColaLlena()) {
            return "La cola está llena, no se puede insertar más elementos.";
        }
        this.items.push(elemento);
    }

    // Quitar: Elimina y retorna el elemento al frente de la cola
    Quitar() {
        if (this.ColaVacia()) {
            return "La cola está vacía, no se puede quitar ningún elemento.";
        }
        return this.items.shift();
    }

    // ColaVacia: Verifica si la cola está vacía
    ColaVacia() {
        return this.items.length === 0;
    }

    // ColaLlena: Verifica si la cola está llena
    ColaLlena() {
        return this.items.length === this.tamanoMaximo;
    }

    // Frente: Retorna el elemento al frente de la cola sin eliminarlo
    Frente() {
        if (this.ColaVacia()) {
            return "La cola está vacía, no hay ningún elemento al frente.";
        }
        return this.items[0];
    }

    // Tamaño: Retorna el número de elementos en la cola
    Tamaño() {
        return this.items.length;
    }

    // Mostrar: Muestra los elementos de la cola
    Mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola
let miCola = new Cola(10); // Crear una cola con un tamaño máximo de 10

miCola.Insertar("Cliente 1");
miCola.Insertar("Cliente 2");
miCola.Insertar("Cliente 3");
miCola.Mostrar(); // ["Cliente 1", "Cliente 2", "Cliente 3"]

console.log("Atendiendo:", miCola.Quitar()); // "Cliente 1"
console.log("Siguiente en la fila:", miCola.Frente()); // "Cliente 2"
console.log("Tamaño de la cola:", miCola.Tamaño()); // 2

// Intentar llenar la cola
for (let i = 4; i <= 12; i++) {
    let resultado = miCola.Insertar(`Cliente ${i}`);
    if (resultado) {
        console.log(resultado); // Mostrará el mensaje de cola llena cuando se intente insertar el cliente 12
    }
}

miCola.Mostrar(); // Mostrará los elementos actuales en la cola