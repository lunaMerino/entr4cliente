class Alumno {
    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }

    getNombre() {
        return this.nombre;
    }

    getDni() {
        return this.dni;
    }
}

const arrayAlumnos = [
    new Alumno("Laura", "23456789A"),
    new Alumno("Ortega", "23456789B"),
    new Alumno("Samuel", "23456789C"),
    new Alumno("David", "23456789D"),
    new Alumno("Pepe", "23456789E"),
    new Alumno("Polo", "23456789F"),
    new Alumno("Santiago", "23456789G"),
    new Alumno("Diana", "23456789H"),
    new Alumno("Kike", "23456789I"),
    new Alumno("Luna", "23456789J"),
    new Alumno("Alicia", "23456789K"),
    new Alumno("Fernando", "23456789L"),
    new Alumno("Ivan", "23456789M"),
    new Alumno("Miguel", "23456789N"),
    new Alumno("Fernando2", "23456789O"),
    new Alumno("Hugo", "23456789P"),
    new Alumno("Jose Antonio", "23456789Q"),
    new Alumno("Sergio", "23456789R"),
    new Alumno("Jose", "23456789S"),
    new Alumno("Ale", "23456789T"),
    new Alumno("Juan Antonio", "23456789U")
];

let alumnosGenerados = [];

function generarAlumnoAleatorio() {
    if (alumnosGenerados.length === arrayAlumnos.length) {
        alert("No se pueden generar más alumnos.");
        return;
    }

    let alumno;
    do {
        const indiceAleatorio = Math.floor(Math.random() * arrayAlumnos.length);
        alumno = arrayAlumnos[indiceAleatorio];
    } while (alumnosGenerados.some(a => a.getDni() === alumno.getDni()));

    alumnosGenerados.push(alumno);
    crearCarta(alumno);
}

function crearCarta(alumno) {
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg p-4";

    const h2 = document.createElement("h2");
    h2.textContent = alumno.getNombre();

    const p = document.createElement("p");
    p.textContent = `DNI: ${alumno.getDni()}`;

    const button = document.createElement("button");
    button.className = "bg-red-500 text-white mt-2 py-1 px-2 rounded hover:bg-red-600 eliminar-btn";
    button.textContent = "Eliminar";

    button.addEventListener("click", () => {
        card.remove();
        alumnosGenerados = alumnosGenerados.filter(a => a.getDni() !== alumno.getDni()); 
    });

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(button);
    cardContainer.appendChild(card);
}
document.getElementById("generar-btn").addEventListener("click", generarAlumnoAleatorio);
