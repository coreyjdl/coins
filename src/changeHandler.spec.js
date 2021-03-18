const changeHandler = require('./changeHandler');

describe('changeHandler', () => { 

    it('should return correct change for .99', async() => {

        const testInput = '.99';
        
        const expectedResults = {
            'silver-dollar': 0,
            'half-dollar': 1,
            'quarter': 1,
            'dime': 2,
            'nickel': 0,
            'penny': 4
        };

        const response = changeHandler.makeChange(testInput);
        expect(response).toEqual(expectedResults);
    });

    it('should return correct change for 1.56', async() => {

        const testInput = '1.56';
        
        const expectedResults = {
            'silver-dollar': 1,
            'half-dollar': 1,
            'quarter': 0,
            'dime': 0,
            'nickel': 1,
            'penny': 1
        };

        const response = changeHandler.makeChange(testInput);
        expect(response).toEqual(expectedResults);
    });

    it('should return correct change for 12.85', async() => {

        const testInput = '12.85';
        
        const expectedResults = {
            'silver-dollar': 12,
            'half-dollar': 1,
            'quarter': 1,
            'dime': 1,
            'nickel': 0,
            'penny': 0
        };

        const response = changeHandler.makeChange(testInput);
        expect(response).toEqual(expectedResults);
    });

    it('should return correct change for $12.85 with dollar sign', async() => {

        const testInput = '$12.85';
        
        const expectedResults = {
            'silver-dollar': 12,
            'half-dollar': 1,
            'quarter': 1,
            'dime': 1,
            'nickel': 0,
            'penny': 0
        };

        const response = changeHandler.makeChange(testInput);
        expect(response).toEqual(expectedResults);
    });

    it('should return \'invalid input\' for non number input', async() => {

        const testInput = 'garbage input';
        const expectedResults = 'invalid input';

        const response = changeHandler.makeChange(testInput);
        expect(response).toEqual(expectedResults);
    });
});