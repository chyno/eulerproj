var r = require('ramda');

var sqr = function(x) { return x * x };


function Question6() {
}

function getNumberLength(N) {
        var hundredbase = "hundredand";
        var ones = ["one", 'two', 'three', 'four', 'five', 'six', 'seve', 'eight', 'nine'];
        var tens = ["ten", "twenty", 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        var hundredbase = "hundredand";
        var hundreds = [ones[0] + hundredbase, ones[1] + hundredbase, ones[2] + hundredbase, ones[3] + hundredbase, ones[4] + hundredbase, ones[5] + hundredbase, ones[6] + hundredbase, ones[7] + hundredbase, ones[8] + hundredbase, ones[9] + hundredbase, 'one thousand'];
        var data = [ones,tens,hundreds];
        var working = N
        var  num,i=0;
        var ans = 0;
        
        if (N === 100)
        {return 7}
        
       if (N === 1000)
        {return 8}
        
        do {
             num = working % 10;
             ans = ans + data[i][num - 1].length;
             working = parseInt(working /10)
             i++;
             
        } while ( working > 0)
        return ans;
    }

Question6.prototype = {

    getAnswer: function(N) {
        var nums = [];

        for (var i = 1; i <= N; i++) {
            nums.push(i);
        }
        var sumofsqr = r.sum(r.map(sqr, nums));
        var sqrofsum = sqr(r.sum(nums));
        return sqrofsum - sumofsqr;
    },

    getAnswerSeventeen: function(N) {
       var i;
       var ans = 0;
        for ( i = 1; i <= N; i++)
        {
            ans = ans + getNumberLength(i);
            
        }
        return ans
    } ,    
    
    
}

module.exports = Question6;
