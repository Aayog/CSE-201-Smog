export class Game{
    public Title: string;
    public Descript: string;
    public Developer: string;
    public Version: string;
    public Link: string;
    public Price: string;
    public Img: string;
    constructor(Title: string, Descript: string, Developer: string, Version: string, Link: string, Price: string, Img: string) {
        this.Title = Title;
        this.Descript = Descript;
        this.Developer = Developer;
        this.Version = Version;
        this.Link = Link;
        this.Price = Price;
        this.Img = Img;
    }
}