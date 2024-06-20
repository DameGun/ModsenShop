export type AlertType = 'success' | 'error';

export type Alert = {
  id: string;
  name: string;
  text: string;
  type: AlertType;
};
