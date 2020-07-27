import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  
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

  name = 'Angular ' + VERSION.major;
}
