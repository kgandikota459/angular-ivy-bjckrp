import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  
  constructor(private http: HttpClient){

  }

  public name:string;
  public mvd:number;
  public mve:number;
  public ctr:number;
  public ce:number;
  public cd:number;
  public ebit:number;
  public amd:number;
  public ama:number;
  public capEx:number;
  public ebitda:number;
  public wacc:number;
  public cashFlow:number;
  public y1:number;
  public y2:number;
  public y3:number;
  public y4:number;
  public y5:number;
  public finalValue:number;
  public ticker:string = "";
  public response:any;

  search() {
    let obs = this.http.get('https://financialmodelingprep.com/api/v3/profile/' + this.ticker + '?apikey=368129475084ccd62b8902c798789a3a')
    obs.subscribe((response) => { 
      this.response = response;
      console.log(this.response);
    })
  }

  ngOnInit() {
    let obs = this.http.get('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=368129475084ccd62b8902c798789a3a')
    obs.subscribe((response) => console.log(response))
  }

  dcfCalc(){
    this.wacc=((this.mvd/(this.mve+this.mvd)*this.cd*(1-this.ctr))+(this.mve/(this.mve+this.mvd)*this.ce));
    this.cashFlow=(this.ebit*(1-this.ctr))+this.amd+this.ama-this.capEx;
    this.y1=this.cashFlow/(1+this.wacc);
    this.y2=this.cashFlow/((1+this.wacc)*(1+this.wacc));
    this.y3=this.cashFlow/((1+this.wacc)*(1+this.wacc)*(1+this.wacc));
    this.y4=this.cashFlow/((1+this.wacc)*(1+this.wacc)*(1+this.wacc)*(1+this.wacc));
    this.y5=(this.cashFlow*this.ebitda)/((1+this.wacc)*(1+this.wacc)*(1+this.wacc)*(1+this.wacc)*(1+this.wacc));
    this.finalValue=(this.y1)+(this.y2)+(this.y3)+(this.y4)+(this.y5);
  }
  

}
