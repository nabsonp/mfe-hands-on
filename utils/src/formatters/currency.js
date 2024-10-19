const currencyFormatter = (value) =>
  `R$ ${value?.toFixed(2).replace(".", ",")}`;

export default currencyFormatter;
