import { Office } from './office';

export class Person {
  id: Number;
  firstName: String;
  lastName: String;
  birthDate: Date;
  hireDate: Date;
  officeLocation?: Office;
  phone?: String;
  role: String;
}
