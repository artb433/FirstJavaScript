import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const todoSchema = Schema({
  todoTitle:{
     type:String, 
     required:true
  },

  category:{
      type:String,
      required:true

  },
})

const todoModel = model('todo',todoSchema);

export default todoModel;
export {todoModel as todoModel};


// const userSchema = Schema({
//   username:{
//     type:dynamic,
//     required:true
//   },
//   email:{
//     type:String,
//     required:true
//   },
//   password:{
//     type:String, 
//     required:true
//   }
// })