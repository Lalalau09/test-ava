import test from 'ava';
import { Persona } from "./clases";
test('testeando la clase Persona', function(t) {
    const nuevaPersona = new Persona ("Laura")
	t.is(nuevaPersona.nombre, "Laura");
});