const db = require('../models');

module.exports = {
    index: (req, res) => {
        db.Player.find({}, (err, allPlayers) =>{
            if (err){
                return console.log(err);
            }
            res.json(allPlayers);
        });
    },
    create: (req, res) => {
        let newDodger = req.body;
    
        db.Player.create(newDodger, (err, savedDodger) => {
            if (err) {
                return console.log(err);
            }
            res.json(savedDodger);
        });
    },
    find: (req, res) => {
        let dodgerId = req.params.id;
    
        db.Player.findOne({_id: dodgerId}, (err, foundDodger) => {
            if (err) {
                return console.log(err);
            }
            res.json(foundDodger);
        });
    },
    update: (req, res) => {
        let dodgerId = req.params.id;
        let updateDodger = req.body;
    
        db.Player.findByIdAndUpdate({_id: dodgerId}, updateDodger, (err, updatedDodger) => {
            if (err) {
                return console.log(err);
            }
            res.json(updatedDodger);
        });
    },
    delete: (req, res) => {
        let dodgerId = req.params.id;
    
        db.Player.deleteOne({_id: dodgerId}, (err, deletedDodger) => {
            if (err) {
                return console.log(err);
            }
            res.json(deletedDodger);
        });
    }
}