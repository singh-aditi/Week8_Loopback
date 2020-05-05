export interface employee
{
    firstName:string,
    middleName:string,
    lastName:string,
    email: string,
    phoneNo:string,
    role_id: number,
    address: string,
    customerId: number,
    roleId: number,
    id: number

}
export interface role{
    role_name: string,
    role_id:number,
    description: string
}
export interface customer{
    name:string,
    address: string,
    description:string,
    c_id: number
}