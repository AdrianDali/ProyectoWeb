const Formulario = require('../js/replit.js');
const stampit = require("stampit");
const QUnit = require('qunit');
QUnit.module("Formulario");
//---------------------------------------------------

const char01 = Formulario.Character({ name: "Thumper2" });
const peleador = Formulario.Fighter({ name: "Thumper" });
const mage = Formulario.Mage({ name: "Zapper" });


QUnit.test("Formulario", assert => {
    assert.equal(peleador.fight(), 99, "Peleador lucha");
});



