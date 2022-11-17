const express=require("express")
const mysql=require("mysql")
const bodyparser=require("body-parser")
const { process_params } = require("express/lib/router")
let mail1;
const app=express() 
const encoder=bodyparser.urlencoded({ extended: true });
app.use(express.urlencoded({ extended: true }));
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"zoo",
    insecureAuth:true
})
con.connect(function(error){
    if (error){
        throw error
    }
    else{
        console.log("   database connected") 
    }
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/1",(req,res)=>{
    res.sendFile(__dirname+"/index2.html")
})
app.get("/2",(req,res)=>{
    res.sendFile(__dirname+"/sponsorhome.html")
})
app.get("/logout",(req,res)=>{
    res.sendFile(__dirname+"/animals.html")
})
app.get("/index.html",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/animals.html",(req,res)=>{
    res.sendFile(__dirname+"/animals.html")
})
app.get("/gallery.html",(req,res)=>{
    res.sendFile(__dirname+"/gallery.html")
})
app.get("/ticket.html",(req,res)=>{
    res.sendFile(__dirname+"/ticket.html")
})
app.get("/vacancies.html",(req,res)=>{
    res.sendFile(__dirname+"/vacancies.html")
})
app.get("/jobapply.html",(req,res)=>{
    res.sendFile(__dirname+"/jobapply.html")
})
app.get("/registersponsor.html",(req,res)=>{
    res.sendFile(__dirname+"/registersponsor.html")
})
app.get("/index2.html",(req,res)=>{
    res.sendFile(__dirname+"/index2.html")
})
app.get("/animals2.html",(req,res)=>{
    res.sendFile(__dirname+"/animals2.html")
})
app.get("/gallery2.html",(req,res)=>{
    res.sendFile(__dirname+"/gallery2.html")
})
app.get("/ticket2.html",(req,res)=>{
    res.sendFile(__dirname+"/ticket2.html")
})
app.get("/updateuser2.html",(req,res)=>{
    res.sendFile(__dirname+"/updateuser2.html")
})
app.get("/register.html",(req,res)=>{
    res.sendFile(__dirname+"/register.html")
})
app.get("/loginuser.html",(req,res)=>{
    res.sendFile(__dirname+"/loginuser.html")
})
app.get("/loginsponsor.html",(req,res)=>{
    res.sendFile(__dirname+"/loginsponsor.html")
})
app.get("/sponsoranimals.html",(req,res)=>{
    res.sendFile(__dirname+"/sponsoranimals.html")
})
app.get("/sponsorgallery.html",(req,res)=>{
    res.sendFile(__dirname+"/sponsorgallery.html")
})
app.get("/sponsorhome.html",(req,res)=>{
    res.sendFile(__dirname+"/sponsorhome.html")
})
app.get("/sponsorupdate.html",(req,res)=>{
    res.sendFile(__dirname+"/sponsorupdate.html")
})
app.get("/3",(req,res)=>{
    res.sendFile(__dirname+"/sponsorhome.html")
})
app.get("/sponsorship.html",(req,res)=>{
    res.sendFile(__dirname+"/sponsorship.html")
})
app.get("/admin",(req,res)=>{
    res.sendFile(__dirname+"/admin.html")
})
app.get("/adminhome.html",(req,res)=>{
    res.sendFile(__dirname+"/adminhome.html")
})
app.get("/adminticket.html",(req,res)=>{
    res.sendFile(__dirname+"/adminticket.html")
})
app.get("/adminjob.html",(req,res)=>{
    res.sendFile(__dirname+"/adminjob.html")
})
app.get("/adminsponsor.html",(req,res)=>{
    res.sendFile(__dirname+"/adminsponsor.html")
})
app.get("/adminadd.html",(req,res)=>{
    res.sendFile(__dirname+"/adminadd.html")
})
app.get("/admindelete.html",(req,res)=>{
    res.sendFile(__dirname+"/admindelete.html")
})
app.get("/adminedit.html",(req,res)=>{
    res.sendFile(__dirname+"/adminedit.html")
})

app.listen(3000,function(){
    console.log("server created sucessfully")
})

app.post("/register",encoder,(req,res)=>{
    var name=req.body.r1;
    var mblno=req.body.r2;
    var email=req.body.r3;
    var pwd=req.body.r4;
    var sql="INSERT INTO register(name,number,email,password)VALUES("+con.escape(name)+","+con.escape(mblno)+","+con.escape(email)+","+con.escape(pwd)+")"
    con.query(sql,function(error,result){
        if(error){
            throw error;
        }
        console.log(result)
    })
    res.redirect("/")
})
app.post("/loginuser",encoder,(req,res)=>{
    var mail=req.body.l1;
    var pwd=req.body.l2;
    var sql="select * from register where email="+con.escape(mail)+"and password="+con.escape(pwd)+"";
    //var sql="select * from sponsor where mail="+con.escape(mail)+"and password="+con.escape(pwd)+"";
    con.query(sql,function(err,result){
        if(err)throw err;
        if(result.length>0)
        {
            mail1=mail;
            res.redirect("/1")
        }
        else{
            res.send("invald")
        }
        res.end();
    })
})
app.post("/loginsponsor",encoder,(req,res)=>{
    var mail=req.body.l1;
    var pwd=req.body.l2;
    var sql="select * from sponsor where mail="+con.escape(mail)+"and password="+con.escape(pwd)+"";
    con.query(sql,function(err,result){
        if(err)throw err;
        if(result.length>0)
        {
            mail1=mail;
            res.redirect("/2")
        }
        else{
            res.send("invald")
        }
        res.end();
    })
})
app.post("/registersponsor",encoder,(req,res)=>{
    var name=req.body.s1;
    var mobile=req.body.s2;
    var mail=req.body.s3;
    var password=req.body.s4;
    var address=req.body.s5;
    var income=req.body.s6;
    var sql="INSERT INTO sponsor(name,mobile,mail,password,address,income)VALUES("+con.escape(name)+","+con.escape(mobile)+","+con.escape(mail)+","+con.escape(password)+","+con.escape(address)+","+con.escape(income)+")"
    con.query(sql,function(error,result){
        if(error)
            throw error;
            console.log(result)
        
    })
    res.redirect("/")
})
// app.post("/sponsor",encoder,(req,res)=>{
//     var mail=req.body.l1;
//     var pwd=req.body.l2;
//     var sql="select * from sponsor where email="+con.escape(mail)+"and password="+con.escape(pwd)+"";
//     con.query(sql,function(err,result){
//         if(err)throw err;
//         if(result.length>0)
//         {
//             mail1=mail;
//             res.redirect("/")
//         }
//         else{
//             res.send("invald")
//         }
//         res.end();
//     })
// })
app.get('/logout',(req,res)=>{
    res.redirect('/logout');
})
app.post("/booktic",encoder,(req,res)=>{
    var name=req.body.n1;
    var regular=req.body.n2;
    var student=req.body.n3;
    var child=req.body.n4;
    var date=req.body.n5;
    var sql="insert into ticketbooking(name,regular,student,child,date) values(" +con.escape(name)+","+con.escape(regular)+","+con.escape(student)+","+con.escape(child)+","+con.escape(date)+")"
    con.query(sql,function(error,result){
        if(error)
        throw error;
        console.log(result)
    })
    
})


app.get('/showticket',(req,res)=>{
    var sql = "Select * from ticketbooking";

    console.log("working");
    con.query(sql,function(err,result){
        console.log(result.length);
        if (err) throw err;
        if(result.length>0)
        {  
            res.json(result);
       }
        else{
            res.send("cant insert due to server issue");
        }
        res.end();
    })
})

app.post("/jobapply",encoder,(req,res)=>{
    var name=req.body.j1;
    var jobname=req.body.j2;
    var mail=req.body.j3;
    var phone=req.body.j4;
    var uploadcv=req.body.j5;
    var verified=req.body.j6;
    var sql="insert into vacancies(name,jobname,mail,phone,uploadcv,verified) values(" +con.escape(name)+","+con.escape(jobname)+","+con.escape(mail)+","+con.escape(phone)+","+con.escape(uploadcv)+","+con.escape(verified)+")"
    con.query(sql,function(error,result){
        if(error)
        throw error;
        console.log(result);
    })
    res.redirect("/")
})
app.get('/showjob',(req,res)=>{
    var sql = "Select * from vacancies";

    console.log("working");
    con.query(sql,function(err,result){
        console.log(result.length);
        if (err) throw err;
        if(result.length>0)
        {  
            res.json(result);
       }
        else{
            res.send("cant insert due to server issue");
        }
        res.end();
    })
})

app.get("/sample",async(req,res)=>{
    res.json(data)
})

app.get('/showvacancies',(req,res)=>{
    var sql = "Select * from vacancies";

    console.log("working");
    con.query(sql,function(err,result){
        console.log(result.length);
        if (err) throw err;
        if(result.length>0)
        {  
            res.json(result);
       }
        else{
            res.send("cant insert due to server issue");
        }
        res.end();
    })
})


app.get("/public/:files",async(req,res)=>{
    res.sendFile(__dirname+"/public/"+req.params.files)
})

app.post('/updateuser',(req,res)=>{
    var name=req.body.u1;
    var num=req.body.u2;
    var email=req.body.u3;
    var pwd=req.body.u4;
    var sql="UPDATE register SET name="+con.escape(name)+",number="+con.escape(num)+",password="+con.escape(pwd)+"where email="+con.escape(email)+"";
    con.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/')
    })
})
app.post('/updatesponsor',(req,res)=>{
    var name=req.body.u1;
    var mobile=req.body.u2;
    var mail=req.body.u3;
    var password=req.body.u4;
    var address=req.body.u5;
    var income=req.body.u6;
    var sql="UPDATE sponsor SET name="+con.escape(name)+",mobile="+con.escape(mobile)+",mail="+con.escape(mail)+",password="+con.escape(password)+",address="+con.escape(address)+",income="+con.escape(income)+" where mail="+con.escape(mail)+"";
    con.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/2')
    })
})

app.post("/sponsorship",encoder,(req,res)=>{
    var name=req.body.j1;
    var animalname=req.body.j2;
    var email=req.body.j3;
    var phone=req.body.j4;
    var salary=req.body.j5;
    var sql="insert into sponsorship(company_name,animal_name,email,phone,salary) values(" +con.escape(name)+","+con.escape(animalname)+","+con.escape(email)+","+con.escape(phone)+","+con.escape(salary)+")"
    con.query(sql,function(error,result){
        if(error)
        throw error;
        console.log(result)
    })
    res.redirect("/3")
})
app.get('/showsponsorship',(req,res)=>{
    var sql = "Select * from sponsorship";

    console.log("working");
    con.query(sql,function(err,result){
        console.log(result.length);
        if (err) throw err;
        if(result.length>0)
        {  
            res.json(result);
       }
        else{
            res.send("cant insert due to server issue");
        }
        res.end();
    })
})


app.post("/admin",encoder,(req,res)=>{
    var mail=req.body.a1;
    var password=req.body.a2;
    var sql="select * from admin where email="+con.escape(mail)+"and password="+con.escape(password)+"";
    //var sql="select * from sponsor where mail="+con.escape(mail)+"and password="+con.escape(pwd)+"";
    con.query(sql,function(err,result){
        if(err)throw err;
        if(result.length>0)
        {
            mail1=mail;
            res.redirect("/adminhome.html")
        }
        else{
            res.send("invald")
        }
        
        res.end();
    })
})
app.post("/add",encoder,(req,res)=>{
    var animalname=req.body.r1;
    var speciesname=req.body.r2;
    var dob=req.body.r3;
    var gender=req.body.r4;
    var diet=req.body.r5;
    var sql="insert into animal(given_name,species_name,date,gender,diet) values(" +con.escape(animalname)+","+con.escape(speciesname)+","+con.escape(dob)+","+con.escape(gender)+","+con.escape(diet)+")"
    con.query(sql,function(error,result){
        if(error)
        throw error;
        console.log(result)
    })
    res.redirect("/adminhome.html")
})
app.post("/edit",encoder,(req,res)=>{
    var animalname=req.body.r1;
    var speciesname=req.body.r2;
    var dob=req.body.r3;
    var gender=req.body.r4;
    var diet=req.body.r5;
    var sql="UPDATE animal SET given_name="+con.escape(animalname)+",species_name="+con.escape(speciesname)+",date="+con.escape(dob)+",gender="+con.escape(gender)+",diet="+con.escape(diet)+"where species_name="+con.escape(speciesname)+"";
    con.query(sql,function(error,result){
        if(error)
        throw error;
        console.log(result)
    })
    res.redirect("/adminhome.html")
})
app.post("/delete",encoder,(req,res)=>{
    var speciesname=req.body.r2;
    var sql="DELETE  from  animal where species_name="+con.escape(speciesname)+"";
    con.query(sql,function(error,result){
        if(error)
        throw error;
        console.log(result)
    })
    res.redirect("/adminhome.html")
})
app.get('/addanimal',(req,res)=>{
    var sql = "Select * from animal";

    console.log("working");
    con.query(sql,function(err,result){
        console.log(result.length);
        if (err) throw err;
        if(result.length>0)
        {  
            res.json(result);
       }
        else{
            res.send("cant insert due to server issue");
        }
        res.end();
    })
})