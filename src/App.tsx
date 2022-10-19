import { useReducer } from 'react';

import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import { ACTION, Payload, State } from './models';

import './styles.css';

const INITIAL_STATE: State = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
  overwrite: false,
};

const computeResult = (a: number, b: number, operation: string): number => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '÷':
      return a / b;
    default:
      return 0;
  }
};

const evaluate = (state: State): string => {
  const previousValue: number = Number(state.previousOperand);
  const currentValue: number = Number(state.currentOperand);

  if (isNaN(previousValue) || isNaN(currentValue)) return '';

  return String(computeResult(previousValue, currentValue, state.operation as string));
};

function reducer(state: State, { type, payload }: Payload): State {
  switch (type) {
    case ACTION.ADD_DIGIT:
      // edge cases
      if (payload.digit === '0' && state.currentOperand === '0') return state;
      if (payload.digit === '.' && state.currentOperand?.includes('.')) return state;
      if (state.overwrite) {
        return {
          ...INITIAL_STATE,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };

    case ACTION.CLEAR:
      return INITIAL_STATE;

    case ACTION.CHOOSE_OPERATION:
      if (state.currentOperand === null && state.previousOperand === null) return state;

      if (state.currentOperand === null) {
        return { ...state, operation: payload.operation };
      }

      if (state.previousOperand === null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
          overwrite: false,
        };
      }

      return {
        ...state,
        operation: payload.operation,
        previousOperand: evaluate(state),
        currentOperand: null,
      };

    case ACTION.DELETE_DIGIT:
      if (state.overwrite) return INITIAL_STATE;
      if (state.currentOperand === null) return state;
      if (state.currentOperand.length === 1) return { ...state, currentOperand: null };
      return { ...state, currentOperand: state.currentOperand.slice(0, -1) };

    case ACTION.EVALUATE:
      if (state.currentOperand === null || state.previousOperand === null || state.operation === null) return state;

      return {
        operation: null,
        previousOperand: null,
        currentOperand: evaluate(state),
        overwrite: true,
      };

    default: {
      return state;
    }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch]: [State, any] = useReducer(reducer, INITIAL_STATE);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}{' '}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button type="button" className="span-two" onClick={() => dispatch({ type: ACTION.CLEAR })}>
        AC
      </button>
      <button type="button" onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}>
        Del
      </button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button type="button" className="span-two" onClick={() => dispatch({ type: ACTION.EVALUATE })}>
        =
      </button>
    </div>
  );
}

export default App;
