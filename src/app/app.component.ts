import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practise for Angular Pipes';
  today = Date();
  userData = [
    {name: "nikunj", email:"nikunj@gmail.com"},
    {name: "poojan", email:"poojan@gmail.com"},
    {name: "vaibhv", email:"vaibhv@gmail.com"},
    {name: "john", email:"john@gmail.com"},
  ]
  toUp(arg: string){
    return arg.toUpperCase();
  }

  // inputField : any = document.getElementById("inpt");
  // getData(value: string){
  //   this.show.push(value);
  // }
  // show:any[]=[];
  // logAp(value: any){
  //   console.log(value);
  // }
  // passedShow: any = this.show;
    // console.log(show:any);



  // userDetails = [
  //   {name:"nikunj",email:"nikunj@gmail.com"},
  //   {name:"anil",email:"anil@gmail.com"},
  //   {name:"abc",email:"abc@gmail.com"},
  //   {name:"pojan",email:"pojan@gmail.com"},
  //   {name:"karan",email:"karan@gmail.com"},
  //   {name:"vaibhv",email:"vaibhv@gmail.com"},
  // ]
  dollrr : number = 0;
  ruppss : number = 0;
  getNumber(arg: number){
      this.dollrr = arg;
  }
  getNumber1(arg: number){
    // console.log(arg);
    this.ruppss = arg;
  }

  // data: number = 10;
  // changeData(){
  //   this.data = Math.floor(Math.random()*100);
  // }

  // list:any[]=[];
  // addTodo(item:any)
  // {
  //  this.list.push({id:this.list.length,name:item})
  // }
  // removeLine(id:number)
  // {
  //   this.list = this.list.filter(item => item.id!==id)
  //   console.log(id);
  // }
  //   check = document.getElementById("dd");
  // getValue(){
  //   console.log(this.check);
  // }

  // name: any;

}
