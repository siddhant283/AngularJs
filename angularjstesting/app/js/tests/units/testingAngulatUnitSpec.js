describe('Testing AngularJS Test Suite', function(){

    beforeEach(module('testingAngularApp'));

    describe('Tesing AngularJS Controller', function(){

        var scope, ctrl;

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('testingAngularController', {$scope: scope});
        }));

        afterEach(function(){
            //Cleanup Code
        })

        it('should intialize the title in the scope', function(){
            
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing AngularJS Applications");

        });

        it('should add 2 destinations to the destinations list', function(){
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);

            scope.newDestinantion = {
                city: "London",
                country: "England"
            }

            scope.addDestination();

            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");

            scope.newDestinantion.city = "Frankfurt",
            scope.newDestinantion.country = "Germany"

            scope.addDestination();

            expect(scope.destinations.length).toBe(2);
            expect(scope.destinations[1].city).toBe("Frankfurt");
            expect(scope.destinations[1].country).toBe("Germany");
        })
    })
})