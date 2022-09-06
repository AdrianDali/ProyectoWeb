const stampit = require("stampit");

const Formulario = stampit({
    props: {
        nombre: null,
        correo: null,
        telefono: null,
        comentario: null,
    },
    init({ nombre = this.nombre, correo = this.correo,
         telefono = this.telefono, comentario = this.comentario }) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.comentario = comentario;
        return true; 
    },
    methods: {
        toString() {
            return `Nombre: ${this.nombre}, Correo: ${this.correo}, Telefono: ${this.telefono}, Comentario: ${this.comentario}`;
        },
    },
});

module.exports = {Formulario};
