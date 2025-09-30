class Person {
   public name:string;
   private age:number
    protected gender: boolean;
    readonly point:number;


    constructor(name: string, age: number, gender: boolean, point:number) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.point = point;
    }

    say():string{
        return `hello ${this.name}`;
    }
}
const p1 = new Person("lamnt", 22, true, 10)
const result = p1.say()
console.log(result);

//ke thua:extends
class User extends Person{
    public role :string;
    constructor( name: string, age: number, gender: boolean, point:number,role: string){
        super(name,age,gender,point)
        this.role = role;
    }
    
    say():string{
        return `hello ${this.name}`;
    }
}
const u1 = new User("nguyenlam", 21, true , 9,"admin")
u1.name;
console.log(u1.say());
