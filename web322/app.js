var Web3=require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/0a18690429ba470fa684b4eefd0d96b2"));

/*

contract Auth {      
    function verify( bytes32 hash, uint8 v, bytes32 r, bytes32 s) constant returns(address retAddr) {
        retAddr= ecrecover(hash, v, r, s);
    }
}
*/
var authContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"verify","outputs":[{"name":"retAddr","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],'0x6da197752d62174f2b6c518de801e87f3ae83361');



function as(){

var msghex = web3.utils.toHex("str");
console.log("msghex"+msghex)
 
priv='0xde7742a859a9c65cc1e79645c3c30d1f7fbca04b63b9214d71cf245201e68737'
    var signature = web3.eth.accounts.sign(msghex,priv);
    var sig=signature.signature
    var r = sig.slice(0, 66);
    var s = '0x' + sig.slice(66, 130);
    var v = '0x' + sig.slice(130, 132);
    console.log(v)
    v = web3.utils.toDecimal(v);
    return [signature.messageHash, v, r, s]

}
aa=as()
console.log(aa)
authContract.methods.verify(aa[0],aa[1],aa[2],aa[3]).call().then(function(res){
console.log(res)
})




