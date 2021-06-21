export class Category
{
    public readonly ID:number;
    public readonly Name:string;

    public constructor (id:number, name:string)
    {
        this.ID = id;
        this.Name = name;
    }
}