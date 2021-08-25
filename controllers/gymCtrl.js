const Gyms = require('../models/gymModel')

const gymCtrl = {
    createGym: async (req, res) => {
        try {
            const { gymname, yearsofexperience, mobile, gender, location, openingtime, closingtime, about,
                subscriptionprice, descriptionofservice, informationaboutgym, servicesyouprovide, images } = req.body
                


            const newGym = new Gyms({
                gymname, yearsofexperience, mobile, gender, location, openingtime, closingtime, about,
                subscriptionprice, descriptionofservice, informationaboutgym, servicesyouprovide, images, user: req.user._id
            })
             
            await newGym.save()

            

            res.json({
                msg: 'Created Gym',
                newGym: {
                    ...newGym._doc,
                    user: req.user
                }
            })    
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },


    getGym: async (req, res) => {

        try {
            const gyms = await Gyms.find({user: req.user._id})

            if(!gyms) return res.status(400).json({msg: "Gym does not exist."})

            res.json({gyms})
            
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
            
        }

    },


    getGymById: async (req, res) => {

        try {
            const gym = await Gyms.findById(req.params.id)

            if(!gym) return res.status(400).json({msg: "Gym does not exist."})

            res.json({gym})
             
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
            
        }

    },


    updateGym: async (req, res) => {
        try {
            const { gymname, yearsofexperience, mobile, gender, location, openingtime, closingtime, about,
                subscriptionprice, descriptionofservice, informationaboutgym, servicesyouprovide, images 
            } = req.body
             

            await Gyms.findOneAndUpdate({user: req.user._id},{
                gymname, yearsofexperience, mobile, gender, location, openingtime, closingtime, about,
                subscriptionprice, descriptionofservice, informationaboutgym, servicesyouprovide, images
            })

            res.json({msg: "Update Success"})

        } catch (err) {
            return res.status(500).json({msg: err.message })
        }

    },

      
      
    

    

    
   
    
}

module.exports = gymCtrl