const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.listen(5000,() => {
    console.log('Server running at port 5000');
});
app.get('/api/calc',(req,res) => {
    const  x=parseInt(req.query.n1);
    const  y=parseInt(req.query.n2);
    const op=req.query.op;
    let operator ="";
    let result=0;
    if(op=="add"){
        operator="+";
        result=x+y;
    }
    else if(op=="div"){
        operator="/";
        const res1=x/y;
        result=res1.toFixed(2);
    }
     else if(op=="sub"){
        operator="-";
        result=x-y;
    }
    else if(op=="mul"){
        operator="*";
        result=x*y;
    }
    else{
        res.send("This parameter not mentioned");
    }
    res.send(`${x} ${operator} ${y}= ${result}`);
});

app.get('/api/fact',(req,res) => {
    const  x=parseInt(req.query.n1);
    let a=1;
    for(let i=2;i<=x;i++){
        a*=i;
    }
    res.send(`Factorial of ${x} is : ${a}`);
});

app.get('/api/gcd',(req,res) => {
    let x=parseInt(req.query.n1);
    let y=parseInt(req.query.n2);
    const a=x;
    const b=y;
    while(y!=0){
        let temp=y;
        y=x%y;
        x=temp;
    }
    // while(x!=y){
    //     if(x>y){
    //         x-=y;
    //     }
    //     else{
    //         y-=x;
    //     }
    // }
    res.send(`GCD of ${a} and ${b} is : ${x}`);
});

app.get('/api/lcm',(req,res) => {
    let x=parseInt(req.query.n1);
    let y=parseInt(req.query.n2);
    const a=x;
    const b=y;
    while(y!=0){
        let temp=y;
        y=x%y;
        x=temp;
    }

    res.send(`LCM of ${a} and ${b} is : ${(a*b)/x}`);
    //res.send(`GCD of ${a} and ${b} is : ${x}`);//unreachable 
});