
var con = require('../database/db.js')


const Mgetallorders = async()=>{

    return new Promise((resolve,reject)=>{
        var sql = 'SELECT * FROM orders';
        con.query(sql,function(err,result){
            if(err){
                resolve({error:err,resul:null})
            }
            else{
                resolve({err:null,result:result})
            }
        })

    })

} 


const Maddorders = async(client,product,createdBy,updatedBy,createdOn)=>{
    return new Promise((resolve,reject)=>{
        
        var sql = "INSERT INTO orders (client,product,createdBy,updatedBy,createdOn) VALUES(?,?,?,?,?)";
        con.query(sql,[client,product,createdBy,updatedBy,createdOn],function(err,result){
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
            }
        })

    })
}

const Mupdateorders = async(id,client,product,createdBy,updatedBy,createdOn) =>{

   
    return new Promise((resolve,reject)=>{
        var sql = "UPDATE orders set client=?,product=?,createdBy=?,updatedBy=?,createdOn = ? where id = ?"
        con.query(sql,[client,product,createdBy,updatedBy,createdOn,id],function(err,result){
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
            }
        })
    })
}

const Mdeleteorders = async(id)=>{
    return new Promise((resolve,reject)=>{
        var sql="DELETE FROM orders where id=?";
        con.query(sql,[id],function(err,result){
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
            }
        })
    })
}

module.exports = {
    Mgetallorders,
    Maddorders,
    Mupdateorders,
    Mdeleteorders
}