class BookRecord {
    static listAll() {
        return [
            {
                id: 1234,
                title: '2586 kroków',
                author: 'Andrzej Pilipiuk',
                year: 2007,
                cover: 'hard',
                isReading: true,
            },
            {
                id: 5566,
                title: 'Bieguni',
                author: 'Olga Tokarczuk ',
                year: 2007,
                cover: 'soft',
                isReading: true,
            },
            {
                id: 4443,
                title: 'Opóźnienie może ulec zmianie',
                author: 'Marcin Antosz',
                year: 2021,
                cover: 'soft',
                isReading: true,
            }
        ]
    }
}

module.exports = {
    BookRecord,
}