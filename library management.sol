pragma solidity ^0.4.0;
contract lib{
     uint public totalcount;
       uint   stime;
         uint   etime;
           uint fine;
           uint f1;
       
    struct bdetails{
        bytes14  bname;
       uint bisbn;
     uint bcount;
    }
    mapping(uint=>bdetails)public b;
    struct udetails{
        bytes14 uname;
        uint id;
        uint ucount;
        uint time;
        }
    mapping(uint=>udetails)user;
    
    function addbookdetails(uint bisbn,bytes14 bname)public  returns(bytes14,uint,uint){
    b[bisbn].bname=bname;
    b[bisbn].bisbn=bisbn;
    b[bisbn].bcount=b[bisbn].bcount+1;
    totalcount++;
    return ( b[bisbn].bname,b[bisbn].bisbn,b[bisbn].bcount);
    
    }
    function adduserdetails(uint id,bytes14 uname)public{
    
   
    user[id].id=id;
     user[id].uname=uname;
    user[id].ucount;
    user[id].time;
    }
    
    function getbook(uint bisbn,uint id)public  returns(uint){
    stime=now;
        etime = now + 1 *  1 minutes ;
         
       user[id].ucount++;
         
        b[bisbn].bcount--;
     return stime;   
    }
 function search(uint bisbn)public view returns(bool){
     
         if(b[bisbn].bcount>0)
         {
             return true;
             
         }
 }
         function suser(uint id)public view returns(uint,bytes14,uint){
             return (user[id].id,user[id].uname,user[id].ucount);
         }
    function returnbook(uint bisbn,uint id)public  returns(uint){
                //uint takentime=now- user[id].time;
        //uint validity=1*1 minutes;
        //uint extratime=takentime-validity;
        //uint fine=extratime*1;
        
        b[bisbn].bcount++;
        user[id].ucount--;
         uint fine=1;
      
        if(now>etime){
            uint diff=now-etime;
            uint diff1=diff/60;
            
             f1=diff1*fine;
        
        
            

        return f1;
    } }
    function fineamount()public  returns(uint){
    
        return f1;
    }
}
         