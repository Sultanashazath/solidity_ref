import { Component } from '@angular/core';
import {ContractsService} from './contracts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
public balance:number;

constructor(cs: ContractsService){
	cs.getuserbalance().then(balance=>this.balance=balance);
	}
}
