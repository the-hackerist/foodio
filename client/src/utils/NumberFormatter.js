const formatNumber = (number) => {
  const formatter = new Intl.NumberFormat("en-PH", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const result = formatter.format(number);

  return result;
};

export { formatNumber };
