export const formatCurrency = value => {
  if (!value) return value;
  value = value.replace(/\./g, ',');

  const index = value.lastIndexOf(',');
  const first = `${value.substr(0, index).replace(/,/g, '')}`;
  const decimal = `${value.substr(index).replace(',', '.')}`;

  const currency = index > 0 ? Number(`${first}${decimal}`) : value;

  return currency;
};

export const formatCurrencyBR = (value, prefix = true) => {
  let numberFormatted;

  if (prefix) {
    numberFormatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  } else {
    numberFormatted = new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
    }).format(value);
  }

  return numberFormatted;
};
