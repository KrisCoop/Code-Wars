const data = [
    {
      name:'Josh',
      age: '26',
      position: 'Instructor'
    },
    {
      name:'Sam',
      age: '27',
      position: 'Mentor'
    },
    {
      name:'Jon',
      age: '24',
      position: 'Mentor'
    },
    {
      name:'Dan',
      age: '25',
      position: 'Instructor'
    },
    {
      name:'Luis',
      age: '35',
      position: 'Student'
    },
  ]
//remember to keep everything
  
  
  let firstInitial = "";

  function getNames(arr) {
    let names = [];
      for (var i = 0; i < arr.length; i++) {
          names.push(arr[i].name);
      }
      return names;
  }

  function getAge25(arr) {
    let ageOver25 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age > 25) {
            ageOver25.push(arr[i]);
        }
    }
    return getAge25
  }
function getInitials(arr) {
    for (var i = 0; i < arr.length; i++) {
        var first = arr[i].name[0];
        firstInitial += first;
    }
    return firstInitial;
}

console.log(getInitials(data))
