// cal,bind,apply

/*
let userDetails={
                name:"sandeep",
                age:28,
                Designation:"software",
                printDetails:function()    // funtion inside object
                {
                   console.log(this);
                }
                }
                userDetails.printDetails(); 


                let userDetails2={
                    name:"ravs",
                    age:27,
                    Designation:"software",
                     
                    }
                    
                    // function borrowed
                   userDetails.printDetails.call(userDetails2);

*/

                   //...if function is outside  userdetails object 



                   let userDetails={
                    name:"sandeep",
                    age:28,
                    Designation:"software",
                   }
                    let printDetails=function(state,country)    // funtion outside object
                    {
                       console.log(this.name  +  "  "  +state + "  " +country );
                    }
                    
                    printDetails.call(userDetails,"delhi","india"); //call
                    printDetails.apply(userDetails,["rome","paris"]); //apply 

                  



                    let userDetails2={
                        name:"ravs",
                        age:27,
                        Designation:"software",
                         
                        }
                        printDetails.call(userDetails2,"delhi","india");
                        printDetails.apply(userDetails2,["cali","usa"]); 


                        // bind func is similar to call but create a copy and cal function when ever is useful
 
 
                       let newfunc = printDetails.bind(userDetails,"delhi","india");  
                       newfunc();        
                       console.log(newfunc);                                           
        //we are storing call function in func to understand bind function





    
    