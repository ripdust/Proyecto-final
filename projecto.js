const getSurcharge = (age, basePrice) => {
  if (age <= 24) return basePrice * 0.1;
  if (age <= 49) return basePrice * 0.2;
  return basePrice * 0.3;
};

const getPrice = () => {
  const basePrice = 2000;

  let price = 2000;

  const age = parseInt(prompt('¿Qué edad tiene?'));

  if (age < 18) return alert('No tiene la edad suficiente');

  const salary = parseInt(prompt('¿Cuál es su salario?'));

  price += salary * 0.05;

  price += getSurcharge(age, basePrice);

  const isMarried = confirm('¿Tiene pareja?');

  if (isMarried) {
    const age = parseInt(prompt('¿Qué edad tiene?'));

    price += getSurcharge(age, basePrice);
  }

  const hasChildren = confirm('¿Tiene hijos?');

  if (hasChildren) {
    const quantityOfChildren = parseInt(prompt('¿Cuántos hijos tiene?'));

    for (let i = 0; i < quantityOfChildren; i++) {
      price += basePrice * 0.2;
    }
  }

  const properties = confirm('¿Tiene propiedades?');

  if (properties) {
    const quantity = parseInt(prompt('¿Cuántas propiedades tiene?'));

    const tax = price * 0.35;

    for (let i = 0; i < quantity; i++) {
      price += tax;
    }
  }

  return price;
};

let isFirst = true;

while (true) {
  if (!isFirst) {
    const continueProgram = prompt('Ingrese la palabra "salir" para detener el programa.');

    if (continueProgram.toLowerCase() == 'salir') break;
  }
  if (isFirst) isFirst = !isFirst;

  alert(`Su cotización es: ${getPrice()}`);
}
