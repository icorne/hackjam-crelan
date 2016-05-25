BookFactory.$inject = ['$http', '$q'];

function BookFactory($http, $q) {
    function getBook(id) {
        // TIPS: template literals
        return $http.get('/api/books/' + id)
            .then(function (response) {
                return response.data;
            });
    }

    function getBooks() {
        return $http.get('/api/books')
            .then(function (response) {
                return response.data;
            });
    }

    function addBook(book) {
        // Not implemented yet
        throw new Error('Method not implemented');
    }

    function deleteBook(id) {
        // Not implemented yet
        throw new Error('Method not implemented');
    }
    function getBookCovers() {
        let deffered = $q.defer();
        getBooks().then( (books) => {
            let covers = [];
            angular.forEach(books, (book) => {
                covers.push(book.cover);
            });
            deffered.resolve(covers);
        });
        return deffered.promise;
    }

    return {
        getBook: getBook,
        getBooks: getBooks,
        addBook: addBook,
        deleteBook: deleteBook,
        getBookCovers: getBookCovers
    };
}


let factoryName = 'BookFactory';
let module = angular.module('book.service', [])
    .factory(factoryName, BookFactory);

export {factoryName};

export default module.name;
