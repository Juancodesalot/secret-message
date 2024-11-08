let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 
  'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

  console.log(secretMessage)

  // .pop removes the last string from the array
  secretMessage.pop()

  // .length checks the length of the array
console.log(secretMessage.length)

// .push add to the end of your array
secretMessage.push('to','Program')

console.log(secretMessage)
//removes easily and replaces with 'right'
secretMessage.splice(7,1,'right')

console.log(secretMessage)

// removes the left most string \
secretMessage.shift()

console.log(secretMessage)

secretMessage.splice(0,0,'Programming')

console.log(secretMessage)

secretMessage.splice(6,5,'know,')

console.log(secretMessage.join())
