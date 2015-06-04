/**
 * Created by silasmartinez on 6/3/15.
 */
var code = require('../Grader.js');

describe('letterGrader():', function() {
    it('test:', function() {
        expect(code.letterGrader(98)).toEqual("A+");
        expect(code.letterGrader(75)).toEqual("C");
        expect(code.letterGrader(81)).toEqual("B-");
    });
});

describe('averageScore():', function() {
    it('test:', function() {
        expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
    });
});

describe('medianScore():', function() {
    it('test:', function() {
        expect(code.medianScore([52,80,80,86,94])).toEqual(80);
    });
});

describe('modeScore():', function() {
    it('test:', function() {
        expect(code.modeScore([82, 92, 75, 91, 92, 91, 89, 95, 100, 86])).toEqual([91,92]);
    });
});