var inquirer = require("inquirer");
var mysql = require("mysql");
var Product = require("./productconstructor");
const cTable = require('console.table');
var productsArr = [];
var productObjectsArr = []

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "rootroot",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    
    build_productsARR()
    
  });

function queryDB(id, unitsrequested){
    connection.query("SELECT * FROM products WHERE item_id = ?", [id], function(err, rows){

    if(parseInt(unitsrequested) <= parseInt(rows[0].stock_quantity)){
        var cost = parseInt(unitsrequested) * parseFloat(rows[0].price)
        inquirer.prompt([
            {
                type: "confirm",
                message: "The cost of you purchase will be $" + cost + ". Would you like to follow through with your purchase?",
                name: "confirm"
            }
        ]).then(function(answer){
            if (answer.confirm){
                updateDB(id, unitsrequested)
                console.log("Purchase Successful")
                restart()
            }
            else{
                startApp()
            }
        })
            
    }
    else{
        console.log("There is not enough product in inventory to fulfill your order.")
        startApp()
    }
        
    })
}

function updateDB(id, unitsrequested){
connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [unitsrequested, id], function(err, rows){
    
})
};

function build_productsARR(){
connection.query("SELECT item_id AS ID, product_name AS Product, department_name AS Department, price AS Price FROM products", function (err, rows){
    // Building objects and arrays in case they're needed at later stages
    for (var i = 0; i < rows.length; i++){
        var product = new Product(rows[i].product_name, rows[i].item_id, rows[i].price, rows[i].department_name, rows[i].stock_quantity)
        var newstring = rows[i].product_name + "\nID: " + rows[i].item_id + "\nPrice: $" + rows[i].price + "\n";
        productsArr.push(newstring);
        productObjectsArr.push(product)
    }
    console.table(rows)
    startApp()
    })      
}

function restart(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to continue shopping?",
            name: "confirm"
        }
    ]).then(function(answer){
        if (answer.confirm){
            startApp()
        }
        else{
            console.log("Thanks for shopping at bamazon!")
            connection.end()
        }
        
    })
}
  
  
  
  
  
  
  
  
function startApp(){
    inquirer.prompt([
        {
        type: "input",
        message: "Enter the ID of the product you would like to purchase:",
        name: "id",
            
        },
        {
        type: "input",
        message: "How many units would you like to buy?",
        name: "units"
        }
    ]).then(function(answer){
        switch (answer.id){
            case "11": queryDB(answer.id, answer.units); 
            break;

            case "12": queryDB(answer.id, answer.units); 
            break;

            case "13": queryDB(answer.id, answer.units); 
            break;

            case "14": queryDB(answer.id, answer.units); 
            break;

            case "15": queryDB(answer.id, answer.units); 
            break;

            case "16": queryDB(answer.id, answer.units);
            break;

            case "17": queryDB(answer.id, answer.units);
            break;

            case "18": queryDB(answer.id, answer.units);
            break;

            case "19": queryDB(answer.id, answer.units);
            break;

            case "20": queryDB(answer.id, answer.units);
            break;

            default: console.log("Please enter a valid ID"); startApp();
            break;
        }
        

        
    })
}


