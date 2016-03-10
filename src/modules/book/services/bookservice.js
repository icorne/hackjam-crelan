BookFactory.$inject = ['$http'];

function BookFactory($http) {
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

    return {
        getBook: getBook,
        getBooks: getBooks,
        addBook: addBook,
        deleteBook: deleteBook
    };
}


let factoryName = 'BookFactory';
let module = angular.module('book.service', [])
    .factory(factoryName, BookFactory);

export {factoryName};

export default module.name;
