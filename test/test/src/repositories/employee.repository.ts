import {DefaultCrudRepository} from '@loopback/repository';
import {Employee, EmployeeRelations} from '../models';
import {PgDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.id,
  EmployeeRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Employee, dataSource);
  }
}
