export const defaultCaculator = {
  showValue: null,
  operator: null,
  secondValue: null,
};

const HistoryState = [];

export const handleNumber = (value, state) => {
  if (state.showValue === null) {
    return { showValue: `${value}` };
  }
  return { showValue: `${state.showValue}${value}` };
};

export const handleEqual = (state) => {
  const { showValue, operator, secondValue } = state;
  const second = parseFloat(showValue);
  const first = parseFloat(secondValue);
  const resetState = {
    operator: null,
    secondValue: null,
  };
  switch (operator) {
    case "+":
      return {
        showValue: first + second,
        ...resetState,
      };
    case "-":
      return {
        showValue: first - second,
        ...resetState,
      };
    case "*":
      return {
        showValue: first * second,
        ...resetState,
      };
    case "/":
      return {
        showValue: first / second,
        ...resetState,
      };
    default:
  }
  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator": {
      if (state.operator !== null) {
        return (state.operator = value);
      }if (state.showValue === null) {
        return state;
      }
      return {
        showValue: null,
        operator: value,
        secondValue: state.showValue,
      };
    }
    case "equal": {
      if(state.showValue === null) {
        return state;
      }
      HistoryState.push(state);
      return handleEqual(state);
    }
    case "clear":
      return defaultCaculator;
    case "changeValue":
      return {
        showValue: `${parseFloat(state.showValue) * -1}`,
      };
    case "percent":
      return {
        showValue: `${parseFloat(state.showValue) / 100}`,
      };
    case "deleteLastValue":
      return {
        showValue: `${
          (parseInt(state.showValue) - (parseInt(state.showValue) % 10)) / 10
        }`,
      };
    default:
      return state;
  }
};

export default calculator;
