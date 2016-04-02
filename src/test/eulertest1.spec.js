var Question6= require('../question6');
var assert = require('assert');

//import {Forecast} from '../fake/forecast';

describe('Can pass euler', () => {
   
   var sut;
   var ans;
    
     beforeEach(() => {
   //   var forecast = new Forecast();
        sut = new Question6();
       
     });
     
   it('the answer is ', () => {
       ans = sut.getAnswer(100);
       assert.equal(ans , 25164150);
    //  assert.equal(ans , 1001 );
     
                
    });
    
    it('the answer is 7 ', () => {
       ans = sut.getAnswerSeventeen(1000);
       assert.equal(ans , 23);
    //  assert.equal(ans , 1001 );
     
                
    });
});