const compantNumberFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
});
export function formatCompactNumber(number: number) {
  return compantNumberFormatter.format(number);
}
