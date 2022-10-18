export const enum ACTIONS {
  ADD_DIGIT = 'add-digit',
  CHOOSE_OPERATION = 'choose-operation',
  CLEAR = 'clear',
  DELETE_DIGIT = 'delete-digit',
  EVALUATE = 'evaluate',
}

export interface State {
  currentOperand: string;
  previousOperand: string;
  operation: ACTIONS | null;
}

export interface Payload {
  type: string;
  payload: any;
}
