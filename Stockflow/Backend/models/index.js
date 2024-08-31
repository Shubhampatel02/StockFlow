const mongoose = require("mongoose");
const uri = "mongodb+srv://shubhampatel7865:Spatel7869@cluster0.4zdt1rg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };