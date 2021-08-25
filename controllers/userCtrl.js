const Users = require('../models/userModel')

const userCtrl = {
    

    getUser: async (req, res) => {

        try {
            const user = await Users.findById(req.params.id)

            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json({user})
            console.log(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
            
        }

    },

    updateUser: async (req, res) => {
        try {
            const { serviceprovider, typesofservice, gymserviceprovider 
            } = req.body
             

            await Users.findOneAndUpdate({_id: req.user._id},{
                 serviceprovider, typesofservice, gymserviceprovider
            })

            res.json({msg: "Update Success"})

        } catch (err) {
            return res.status(500).json({msg: err.message })
        }

    },

   

 

    

    
}

module.exports = userCtrl