import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Employee, EmployeeRelations, Customer, Role} from '../models';
import {PgDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CustomerRepository} from './customer.repository';
import {RoleRepository} from './role.repository';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.id,
  EmployeeRelations
> {

  public readonly customer: BelongsToAccessor<Customer, typeof Employee.prototype.id>;

  public readonly role: BelongsToAccessor<Role, typeof Employee.prototype.id>;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>,
  ) {
    super(Employee, dataSource);
    this.role = this.createBelongsToAccessorFor('role', roleRepositoryGetter,);
    this.registerInclusionResolver('role', this.role.inclusionResolver);
    this.customer = this.createBelongsToAccessorFor('customer', customerRepositoryGetter,);
    this.registerInclusionResolver('customer', this.customer.inclusionResolver);
  }
}
