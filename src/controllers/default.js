module.exports = (app) => {
		app.get('/', (req, res) => {
		res.status(400).send('Error, incorrect request.');
	});

	app.use((req, res) => {
		res.status(404).send("Error, Request Not Found");
	});
}