function countDown(secs,surl){        
    if(--secs>0){     
        setTimeout("countDown("+secs+",'"+surl+"')",1600);     
        }     
    else{       
        location.href=surl;     
        }     
    }     