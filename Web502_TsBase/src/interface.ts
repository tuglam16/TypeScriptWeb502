interface IPerson{
    name: string;
    age: number;
}
interface IUser{
    role: string;
}
//C1:type
type IEmloyee = IPerson & IUser;
const e1: IEmloyee= {
    name: "NV1",
    age:20,
    role:"user"
}
//C2:extends
interface IEmloyee2 extends IPerson,IUser{}



//2.Discriminated Unions (Liên minh Phân biệt)

type IStaff = IPerson | IUser;
const staff1: IStaff ={
    name:"staff1",
    age:22,
}

//3.extends : Interface
interface IManager extends IPerson{
    role:string;
    dept:string;
}

const m1: IManager={
    name:"M1",
    age:30,
    role:"manager",
    dept:"HR"
}


// Generics trong TypeScript
function printArray<T>(array: T[]): T[] {
  console.log(array);
  return array;
}

const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ["a", "b", "c"];

printArray(numberArray); // [1, 2, 3]
printArray(stringArray); // ["a", "b", "c"]

interface IProduct{
    title:string;
}
interface ICategory{
    name:string;
}
interface ApiResponse<T>{
    message:string;
    code:number;
    success:boolean;
    data:T;
}
const productRes: ApiResponse<IProduct>={
    message:"OK",
    code:200,
    success:true,
    data:{
        title:"sp1",
    } 
}

enum OrderStatus {
    PENDIND ="PENDIND",
    CONFIRMED = "CONFIRMED",
    SHIPPING = "SHIPPING"
}
const orderStatus : OrderStatus = "SHIPPING" as OrderStatus;
if (orderStatus == OrderStatus.CONFIRMED){
    console.log(OrderStatus.SHIPPING);
    
}
enum PaymentStatus {
    SUCCESS = "SUCCESS",
    FAILED ="FAILED"
}
console.log(PaymentStatus.SUCCESS);
