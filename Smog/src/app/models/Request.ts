export class Request{
    public Title: string;
    public Descript: string;
    public Username: string;
    constructor(Title: string, Descript: string, Username: string) {
        this.Title = Title;
        this.Descript = Descript;
        this.Username = Username;
    }
}