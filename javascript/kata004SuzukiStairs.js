function stairsIn20(s){
    let sum = 0;
    // s = array of 7 arrays
    // Each of those arrays have numbers to add up
    // find the total, then mult the total by 20
    for (i = 0; i < s.length; i++) {
        for (j = 0; j < s[i].length; j++) {
            sum += s[i]
        }
    }
    sum *= 20;
    return sum;
  }