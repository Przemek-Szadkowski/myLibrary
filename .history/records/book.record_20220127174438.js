class BookRecord {
    static listAll() {
        return [
            {
                id: 1234,
                author: 'Andrzej Pilipiuk',
                title: '2586 kroków',
                year: 2007,
                cover: 'hard',
                image: null,
                isReading: true,
            },
            {
                id: 5566,
                author: 'Olga Tokarczuk ',
                title: 'Bieguni',
                year: 2007,
                cover: 'soft',
                image: null,
                isReading: true,
            },
            {
                id: 4443,
                author: 'Marcin Anntosz',
                title: 'Opóźnienie może ulec zmianie',
                year: 2021,
                cover: 'soft',
                image: null,
                isReading: true,
            }
        ]
    }
}

module.exports = {
    BookRecord,
}