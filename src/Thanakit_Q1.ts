1.1
let employees : [number,string,number,number,number,string] [];

employees = [
    [1001,"Kongpop",5,20000,0,""],
    [1002,"Jakrit",1,15000,0,""],
    [1003,"Wasok",3,15000,0,""],
    [1004,"Thanakit",4,15000,0,""],
    [1005,"Chalermchai",7,20000,0,""]
];

employees.forEach((e) =>{
    //1.2
    if(e[2]>=6){
        e[4] = e[3] * 3
    }else if(e[2]>=4){
        e[4] = e[3] * 2
    }else if(e[2]>=2){
        e[4] = e[3] * 1
    }else{
        e[4] = 0
    }

    if(e[2]>=4){
        e[5] = "Microwave Oven";
    }else{
        e[5] = "Rice Cooker"
    }
    console.log("=================");
    console.log(`    ID: ${e[0]} 
    Name: ${e[1]} 
    WorkYear: ${e[2]} 
    Salary: ${e[3]}
    Bonus: ${e[4]}
    Gift: ${e[5]}`);
    console.log("=================");
});