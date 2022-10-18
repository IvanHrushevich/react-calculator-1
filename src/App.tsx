import { useReducer } from 'react';

import './styles.css';

export const enum ACTIONS {
  ADD_DIGIT = 'add-digit',
  CHOOSE_OPERATION = 'choose-operation',
  CLEAR = 'clear',
  DELETE_DIGIT = 'delete-digit',
  EVALUATE = 'evaluate',
}

interface State {
  currentOperand: string;
  previousOperand: string;
  operation: ACTIONS | null;
}

interface Payload {
  type: string;
  payload: any;
}

const initialState: State = {
  currentOperand: '',
  previousOperand: '',
  operation: null,
};

function App() {
  function reducer(state: State, { type, payload }: Payload): State {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        return {
          ...state,
          currentOperand: `${currentOperand || ''}${payload.digit}`,
        };

      default: {
        return state;
      }
    }
  }

  const [{ currentOperand, previousOperand, operation }, dispatch]: [State, any] = useReducer(reducer, initialState);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">123,456 *</div>
        <div className="current-operand">345,567</div>
      </div>
      <button className="span-two">AC</button>
      <button>Del</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
