import { ACTIONS, Payload } from '../models';

type Props = {
  dispatch: (payload: Payload) => void;
  digit: number;
};

const DigitButton = (props: Props) => {
  return (
    <button onClick={() => props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: props.digit } })}>
      {props.digit}
    </button>
  );
};

export default DigitButton;
