export const enum ACTION {
  ADD_DIGIT = 'add-digit',
  CHOOSE_OPERATION = 'choose-operation',
  CLEAR = 'clear',
  DELETE_DIGIT = 'delete-digit',
  EVALUATE = 'evaluate',
}

export interface State {
  currentOperand: string | null;
  previousOperand: string | null;
  operation: ACTION | null;
}

export interface Payload {
  type: ACTION;
  payload: any;
}
