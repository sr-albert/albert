export interface IContactRequest {
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface IContactInitialValues {
  name: string;
  email: string;
  message: string;
  reason: string;
}
