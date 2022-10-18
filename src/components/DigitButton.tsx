import { ACTION, Payload } from '../models';

type Props = {
  dispatch: (payload: Payload) => void;
  digit: string;
};

const DigitButton = (props: Props) => {
  return (
    <button onClick={() => props.dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: props.digit } })}>
      {props.digit}
    </button>
  );
};

export default DigitButton;
