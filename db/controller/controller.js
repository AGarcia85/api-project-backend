const Character = require('../Characters');

module.exports = {
    index: (req, res) => {
        Character.find({}).then( (character) => {
            res.json(character)
        })
    },
    create: (req, res) => {
        Character.create(req.body).then(character => {
            res.json(character)
          })
    },
    delete: (req, res) => {
        Character.findOneAndDelete(req.body).then(character => {
            res.json(character)
          })
    },
    update: (req, res) => {
        Character.findOneAndUpdate(req.body).then(character => {
            res.json(character)
          })
    },  
    findById: (req, res) => {
        Character.findById({ _id: req.params._id})
            .then(character => {
                res.json(character)
            })
    },
    showCharId: (req, res) => {
        Character.find({ char_id: req.params.char_id})
            .then(character => {
                res.json(character)
            })
    },
    showName: (req, res) => {
        Character.find({ name: req.params.name})
            .then(character => {
                res.json(character)
            })
    },
    showStatus: (req, res) => {
        Character.find({ status: req.params.status})
            .then(character => {
                res.json(character)
            })
    },
}