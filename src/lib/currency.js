export const numberToCurrency = (number, currency = "BRL") => {
  switch (currency) {
    case "BRL":
      return `R$ ${number / 100}`; // TODO
    default:
      return String(number);
  }
};

export const maskInputToCurrency = ({
  value,
  prefix = "R$ ",
  thousandSeparator = ".",
  decimalSeparator = ",",
}) => {
  const valueStr = value.toString();
  const minLength = 3;

  const normalizedValueStr = value.toString().padStart(minLength, valueStr);
  const decimalPartStr = normalizedValueStr.slice(-2);
  const integerPartStr = normalizedValueStr.slice(0, -2);

  const thousandsScale = (Number(integerPartStr) % 3) - 1;
  const thousandSeparatorAmount = thousandsScale < 0 ? thousandsScale : 0;

  const interationsToFindIndexParts = thousandSeparatorAmount + 1;
  const indexPairs = Array.from({ length: interationsToFindIndexParts }).reduce(
    (indexPairs, _, index) => {
      const firstPosition = index * 3;
      const lastPossibleIndex = integerPartStr.split("").length - 1;
      const lastExpectedPosition = firstPosition + 2;

      const lastPosition =
        lastExpectedPosition > lastPossibleIndex
          ? lastPossibleIndex
          : lastExpectedPosition;

      const indexPair = { first: firstPosition, last: lastPosition };

      return [...indexPairs, indexPair];
    },
    []
  );

  const reverseIntegerPartArr = integerPartStr.split("").reverse();
  const integerPartWithThousandSeparator = indexPairs
    .reduce((acc, indexPair) => {
      const { first, last } = indexPair;
      const lastIndexNotInclusive = last + 1;
      return `${acc}${thousandSeparator}${reverseIntegerPartArr.slice(
        first,
        lastIndexNotInclusive
      )}`;
    }, "")
    .slice(1)
    .reverse();

  return `${prefix}${integerPartWithThousandSeparator}${decimalSeparator}${decimalPartStr}`;
};
