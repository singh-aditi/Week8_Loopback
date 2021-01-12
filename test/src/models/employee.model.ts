import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Customer, CustomerWithRelations} from './customer.model';
import {Role, RoleWithRelations} from './role.model';

@model()
export class Employee extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: false,
  })
  middleName: string;

  @property({
    type: 'string',
    required: false,
  })
  lastName: string;

  @property({
    type: 'string',
    required: false,
  })
  email: string;

  @property({
    type: 'string',
    required: false,
  })
  phoneNo: string;

  @property({
    type: 'number',
    required: false,
  })
  role_id: number;

  @property({
    type: 'string',
    required: false,
  })
  address: string;

  // @property({
  //   type: 'number',
  //   required: false,
  // })
  // c_id: number;

  @belongsTo(() => Customer)
  customerId: number;

  @belongsTo(() => Role)
  roleId: number;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
  role: RoleWithRelations
  customer: CustomerWithRelations;

}

export type EmployeeWithRelations = Employee & EmployeeRelations;
