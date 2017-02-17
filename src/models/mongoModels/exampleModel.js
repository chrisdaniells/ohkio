import mongoose from 'mongoose';

let exampleSchema = new mongoose.Schema({
	title: String,
	date: { type: Date, default: Date.now }
});

let exampleModel = mongoose.model('Example', exampleSchema);

function examplePost() {
    // Needs Authentication
    
	let data = new exampleModel({title: 'hello'});

	data.save((err) => {
		if (err) {
			res.status(500).send('Error Saving');
		} else {
			res.status(200).send('Data Saved');
		}
	});
}

function exampleGet(callback) {
    exampleModel.find({}).exec((err, docs) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, docs);
        }
    });
}

function exampleGetByParam(param, value, callback) {
    console.log(param + ' ' + value);
    exampleModel.find({[param]: value}).exec((err, docs) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, docs);
        }
    });
}

function examplePut(req, res, id) {
    // Needs Authentication
    // Not tested.
    let tmpTitle = 'Example Change';
    exampleModel.findOneAndUpdate({'_id': id}, {title: tmpTitle})
        .exec((err) => {
            if (err) {
                res.status(500).send('Error Updating');
            } else {
                res.status(200).send('Data Updated');
            }
        });
}

function exampleDelete(req, res, id) {
    // Needs Authentication
    // Not tested.

    exampleModel.remove({'_id': id})
        .exec((err) => {
            if (err) {
                res.status(500).send('Error Deleting');
            } else {
                res.status(200).send('Data Deleted');
            }
        });
}

export { exampleGet, examplePost, examplePut, exampleDelete, exampleGetByParam };