export class Request{
    public Id: string;
    public Title: string;
    public Descript: string;
    public Username: string;
    public Approved: boolean;

    constructor(Id: string, Title: string, Descript: string, Username: string, Approved: boolean) {
        this.Id = Id;
        this.Title = Title;
        this.Descript = Descript;
        this.Username = Username;
        this.Approved = Approved;
    }
}