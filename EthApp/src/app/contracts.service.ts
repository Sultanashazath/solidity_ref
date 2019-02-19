import { Injectable } from '@angular/core';
import  Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi=require('./tokenContract.json');

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

private _account: string=null;
private _web3:any;
private _tokenContract:any;
private _tokenContractAddress: string="0x80967e56de33f29a98e216d6b485d2af8bd9589e";

  constructor() {

	if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 =  new Web3(new Web3.providers.HttpProvider("http://18.191.165.67:8545/"));

      if (this._web3.version.network !== '3') {
        alert('Please connect to the Rinkeby network');
      }
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }

    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }

 

	private async getAccount():Promise<string>{
	if(this._account==null){
		this._account=await new Promise((resolve,reject)=>{
		this._web3.eth.getAccounts((err,res)=>{
			if(err !=null){
			alert('thre was an error');
			return;	
			}
			if(this._account.length===0){
				alert("couldn't get yor account");
				return;
			}
		resolve(this._account);			
		})

	
	})as string;
	this._web3.eth.defaultAccount=this._account;
	
	return Promise.resolve(this._account);
 }
}

	public async getuserbalance():Promise<number>{
	let account= await this.getAccount();
	return new Promise((resolve,reject)=>{
		let  _web3=this._web3;
	this._tokenContract.balanceOf.call(account,function(err,res){
	if(err){
		reject(err);		
		}
		resolve(_web3.fromWei(res));
		});
	}) as Promise<number>
	
	}


}
