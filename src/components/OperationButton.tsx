import { ACTION, Payload } from '../models';

type Props = {
  dispatch: (payload: Payload) => void;
  operation: string;
};

const OperationButton = (props: Props) => {
  return (
    <button onClick={() => props.dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation: props.operation } })}>
      {props.operation}
    </button>
  );
};

export default OperationButton;
