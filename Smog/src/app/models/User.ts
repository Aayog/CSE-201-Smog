export class User{
    public Id: number;
    public username: string;
    public password:string;
    public email:string;

    constructor(Id:number, username: string, password:string, email:string) {
      this.Id = Id;
      this.username = username;
      this.password = password;
      this.email = email;
    }
}