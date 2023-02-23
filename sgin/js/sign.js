window.onload=function(){
    var User=document.getElementById('usernameup');
    var Pwd=document.getElementById('passwordup');
    var zcBtn=document.getElementById('zhuce');

    var oUser=document.getElementById('username');
    var oPwd=document.getElementById('password');
    var dlBtn=document.getElementById('denglu');
    
    zcBtn.onclick=function(){
        var upData=null;
        var repeat=null;
        if (User.value&&Pwd.value) {
            if (window.localStorage.getItem('list')) {
                upData={'username':User.value,'password':Pwd.value};
                var dataJson=window.localStorage.getItem('list');
                dataJson=eval('('+dataJson+')');
                for (var i=0;i<dataJson.length;i++) {
                    if (dataJson[i].username==upData.username) {
                        alert('用户名重复');
                        repeat=1;
                    }
                }
                var text= document.getElementById("passwordup").value;
                var i=8;
                if (i>text.length){
                    alert('密码不能小于八位');
                    repeat=1;
                }
                var re =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{0,32}$/;
                var result=  re.test(text);
                if(result)
                {
                }else
                {
                    alert("密码至少包含大写字母，小写字母");
                    repeat=1;
                }

                if (repeat==null) {
                    alert('注册成功');
                    dataJson.push(upData);
                    dataJson=JSON.stringify(dataJson);
                    window.localStorage.setItem('list',dataJson);
                    console.log(window.localStorage.getItem('list'));
                }
            } else {
                upData={'usernameup':User.value,'passwordup':Pwd.value};
                console.log(upData);
                var data=[];
                data.push(upData);
                data=JSON.stringify(data);
                window.localStorage.setItem('list',data);
                alert('注册成功');
                console.log(window.localStorage.getItem('list'));
            }
        }
    }

    dlBtn.onclick=function(){
        var login={'username':oUser.value,'password':oPwd.value};
        var dataJson=window.localStorage.getItem('list');
        var success=null;
        var d =new Date();
        dataJson=eval('(' + dataJson + ')');
        for (var i=0;i<dataJson.length;i++) {
            if (dataJson[i].username==login.username&&dataJson[i].password==login.password) {
                success=1;
                function jump(){
                    window.location.href='../sgin/loading2.html';
                }
                setTimeout(jump,0);
            }
        }
        if (success==null) {
            alert('用户名或密码错误');
        }
    }
}