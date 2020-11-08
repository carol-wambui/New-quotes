export class Quote {
    id:number;
    author:string;
    description:string;
    user:string;
    day:Date;
    likes:number;
    unlikes:number;
    constructor(id:number,author:string,description:string,user:string,day:Date){
        this.id=id;
        this.author=author;
        this. description=description;
        this. user=user;
        this.day=day;
        this.likes=0;
        this.unlikes=0;

    }
}
