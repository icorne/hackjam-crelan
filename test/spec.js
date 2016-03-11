describe('Controller', function () {

    angular.module('bookstore', [])
    .controller('BookListController', function() {

    });

    var $controller, ctrl;
//    bookFactory = function () {
//        return {
//            getBooks: function () {
//                return [
//                    {
//                        title: 'moo'
//                    }
//                ];
//            }
//        }
//    }
//};
    beforeEach(inject(function ($injector, BookFactory) {
        $controller = $injector.get('$controller');
        ctrl = $controller('BookListController', {BookFactory: BookFactory});

    }));

    it('Should work', function () {
        expect(3).toEqual(3);
    });

    it ('should exist', function() {
        expect(!!ctrl).toBeTruthy();
    });
})
;


