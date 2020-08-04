const Workout = require("../models/workout.js")

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        Workout.find({}).then(data => {
            console.log(data);
            res.json(data);
        });
    });

    app.get('/api/workouts/range', (req, res) => {
        Workout.find({}).then(data => {
            res.json(data);
        }).catch(err => {
            res.status(404).json(err.message);
        });
    });

    app.put('/api/workouts/:id', (req, res) => {
        Workout.findByIdAndUpdate(req.params.id,
            { $push: { exercises: req.body } }, (err, data) => {
                if (err) console.log(err);
                else res.json(data);
            })
    });

    app.post('/api/workouts', (req, res) => [
        Workout.create(req.body, (err, data) => {
            if (err) console.log(err);
            else res.json(data);
        })
    ]);
}