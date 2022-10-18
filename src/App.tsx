import { useReducer } from 'react';

import DigitButton from './components/DigitButton';
import { ACTIONS, Payload, State } from './models';

import './styles.css';

const initialState: State = {
  currentOperand: '',
  previousOperand: '',
  operation: null,
};

function reducer(state: State, { type, payload }: Payload): State {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        // TODO: fix
        // currentOperand: `${currentOperand || ''}${payload.digit}`,
        currentOperand: `${payload.digit}`,
      };

    default: {
      return state;
    }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch]: [State, any] = useReducer(reducer, initialState);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}{' '}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>Del</button>
      <button>÷</button>
      <DigitButton digit={1} dispatch={dispatch} />
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
