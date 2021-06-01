async function esDemo(input:number):Promise<string>{
    return new Promise(function(resolve, reject){
        if(input > 5){
            resolve("input is greater than 5")
        }
        else{
            reject("input is not greater than 5")
        }

    })
}
async function demoTwo(input):Promise<string>{
    let res :string = await esDemo(input);
    return res;
}

demoTwo(0)

//test1
//test2
//tetst3
//test4
//test5
//test6dsf