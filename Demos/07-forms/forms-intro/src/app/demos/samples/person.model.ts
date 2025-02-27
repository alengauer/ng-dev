export class Person {
  age: number = 0;
  name: string = '';
  email: string = '';
  wealth: string = '';
  state?: 'HappySheep' | 'Unsatisfied' | 'ReadyForRevolution';
  lastname?: string;
  gender: string = 'male';
  married?: boolean;
  imgUrl?: string;
  address?: Address;
}

export class Address {
  street: string = '';
  city: string = '';
  postalCode: string = '';
}

export const wealthOptsValues = ['poor', 'rich', 'middle_class'];
