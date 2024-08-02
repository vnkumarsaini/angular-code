export class Register {
  userName: string = '';
  email: string = '';
  gender: number = 0;
  countryId: number = 0;
  stateId: number = 0;
  cityId: number = 0;
  subscribe: boolean = false;
  password: string = '';
  confirmPassword: string = '';
}

export enum GenderType {
  Male = 0,
  Female = 1,
}
