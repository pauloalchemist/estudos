const { readFile, writeFile } = require('fs').promises;

class HeroRepository {
	constructor({ file }) {
		this.file = file;
	}

	async _currentFileContent() {
		return JSON.parse(await readFile(this.file));
	}

	async find(itemId) {
		const all = await this._currentFileContent();
		if (!itemId) return all;

		return all.find(({ id }) => itemId === id);
	}

	async create(data) {
		const currentFile = await this._currentFileContent();
		currentFile.push(data);

		await writeFile(this.file, JSON.stringify(currentFile));

		return data.id;
	}
}

module.exports = HeroRepository;

//const peopleRepository = new HeroRepository({
//	file: './../../database/data.json',
//});

//peopleRepository
//	.create({ id: 2, name: 'George Polya' })
//	.then(console.log())
//	.catch((error) => console.log('error', error));

//peopleRepository
//	.find(1)
//	.then(console.log)
//	.catch((error) => console.log('error', error));
