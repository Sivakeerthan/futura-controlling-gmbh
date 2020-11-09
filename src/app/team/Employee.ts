export class Employee
{
    public readonly FirstName:string;
    public readonly LastName:string;
    public readonly Position:string;
    public readonly Education:string[];
    public readonly Hobbies:string[];    
    public readonly ImgPath:string;
    public readonly Email?:string;
    public readonly Tel?:string;

    public constructor( private fName:string,
                        private lName:string,
                        private position:string,
                        private education:string[],
                        private hobbies:string[],
                        private imgPath:string,
                        private email?:string,
                        private tel?:string) 
    {
        this.FirstName = fName;
        this.LastName  = lName;
        this.Position  = position;
        this.Education = education;
        this.Hobbies   = hobbies;
        this.ImgPath   = imgPath;
        this.Email     = email;
        this.Tel       = tel;
    }
}