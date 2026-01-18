// Počká, až se načte HTML (díky defer ve script tagu už je DOM připravený)
const vstup1 = document.getElementById('cislo1');
const vstup2 = document.getElementById('cislo2');
const vysledekDiv = document.getElementById('vysledek');
const tlacitka = document.querySelectorAll('.tlacitka button');

// Při zadání desetinných čísel s čárkou místo tečky
function spocitej(operace) {
  const hodnota1 = parseFloat(vstup1.value.replace(',', '.'));
  const hodnota2 = parseFloat(vstup2.value.replace(',', '.'));

  // Kontrola prázdných vstupů
  if (vstup1.value.trim() === '' || vstup2.value.trim() === '') {
    vysledekDiv.textContent = 'Zadej prosím obě čísla.';
    return;
  }

  // Kontrola, že jsou to čísla
  if (Number.isNaN(hodnota1) || Number.isNaN(hodnota2)) {
    vysledekDiv.textContent = 'Zadal(a) jsi neplatnou hodnotu. Použij čísla.';
    return;
  }

  let vysledek;

  switch (operace) {
    case 'plus':
      vysledek = hodnota1 + hodnota2;
      break;
    case 'minus':
      vysledek = hodnota1 - hodnota2;
      break;
    case 'krat':
      vysledek = hodnota1 * hodnota2;
      break;
    case 'deleno':
      if (hodnota2 === 0) {
        vysledekDiv.textContent = 'Nelze dělit nulou.';
        return;
      }
      vysledek = hodnota1 / hodnota2;
      break;
    default:
      vysledekDiv.textContent = 'Neznámá operace.';
      return;
  }

  vysledekDiv.textContent = 'Výsledek: ' + vysledek;
}

// Přiřazení posluchačů na všechna tlačítka
tlacitka.forEach((btn) => {
  btn.addEventListener('click', () => {
    const operace = btn.getAttribute('data-operace');
    spocitej(operace);
  });
});
