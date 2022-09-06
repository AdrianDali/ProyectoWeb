//const Formulario = require('../js/replit.js');
const Formulario = require('../js/Formulario.js');
const stampit = require("stampit");
const QUnit = require('qunit');
QUnit.module("Formulario");
//---------------------------------------------------

const formulario = Formulario.Formulario({ 
    nombre: "Juan Perez",
    correo: "sdafdhjd@gmail.com",
    telefono: "5566774335",
    comentario: "Hola Mundo",
});

//formulario.toString();
//const char01 = Formulario.Character({ name: "Thumper2" });
//const peleador = Formulario.Fighter({ name: "Thumper" });
//const mage = Formulario.Mage({ name: "Zapper" });


QUnit.test("Formulario", assert => {
    
    assert.equal(formulario.toString(), 'Nombre: Juan Perez, Correo: sdafdhjd@gmail.com, Telefono: 5566774335, Comentario: Hola Mundo', "Peleador lucha");
});



