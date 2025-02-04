import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    setInterval(() => {
      this.changeText('h1',this.changeTime());
    }, 1000);
  }

  changeTime():string{
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    return `T: ${this.addZero(hours)}:${this.addZero(minutes)}:${this.addZero(seconds)}`;
  }

  addZero(time:number){
    return time.toString().padStart(2,'0');
  }

  changeText(element:any,text:any) {
    let el = document.querySelector(element);
    el.innerHTML = text;
  }

}
