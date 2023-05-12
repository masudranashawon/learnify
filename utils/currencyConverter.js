export const currencyConverter = (
  amount,
  locale = "en-us",
  currency = "USD"
) => {
  return amount?.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};
