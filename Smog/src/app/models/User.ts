export class User{
    public Id: number;
    public userName: string;
    public Password:string;
    public Email:string;
    public Admin: string;

    constructor(Id:number, userName: string, Password:string, Email:string, Admin: string) {
      this.Id = Id;
      this.userName = userName;
      this.Password = Password;
      this.Email = Email;
      this.Admin = Admin;
    }
}