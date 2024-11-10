//Simple Script to identify if there are any users with unhashed passwords
// If there are , then they will be identified and 'hashed' using bycrypt by running this script



const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userModel = require('../Models/users.model');

const hashUnhashedPasswords = async () =>  {
  
    
    const users = await userModel.find({ password: { $exists: true, $type: 'string',  
    $not: /^(\$2[abxy]?\$).{56}$/  } });
  if(!users) {
    console.log("No Such Users who have dont have hashed passwords !!");
    return;
  }
    
  for(let user of users) {
const hashedPassword = await bcrypt.hash(user.password,10);
//changing user password to hashed one:

user.password = hashedPassword;
await user.save();
console.log(`Password Hashed for: ${user.email}` );

  }


}





mongoose.connect("mongodb+srv://anmolbatra2014:3oikpfnDV9TRWaYf@cluster0.tz5yn.mongodb.net/")   
.then( ()=> {
    console.log("DB Connected for Haspassword script")
    hashUnhashedPasswords();
}

)
.catch((err) => {
    console.log("DB Connect Error in  Haspassword script: ",err)
})
