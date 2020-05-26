function PostFixEvaluation(sequence) {
  
    let operands = ['+', '-', '*', '/' ];
    let stack = [];
    let i = 0;
  
    stack.push(sequence[i]);
    i++;
  
    while(i <= sequence.length)
    {
      let item = sequence[i];
      let index = operands.indexOf(item);
      if (index < 0) 
      {
        stack.push(sequence[i]);
      } else 
        {
            if (index == 0) 
            {
                let a = parseInt(stack.splice(-1)[0], 10);
                let b = parseInt(stack.splice(-1)[0], 10);
                stack.push(a+b)
            }

            if (index == 1) 
            {
                let a = parseInt(stack.splice(-1)[0], 10);
                let b = parseInt(stack.splice(-1)[0], 10);
                stack.push(b-a);
            }

            if (index == 2) 
            {
                let a = parseInt(stack.splice(-1)[0], 10);
                let b = parseInt(stack.splice(-1)[0], 10);
                stack.push(a*b);
            }

        
            if (index == 3) 
            {
                let a = parseInt(stack.splice(-1)[0], 10);
                let b = parseInt(stack.splice(-1)[0], 10);
                stack.push(b/a);
            }
      }

      i++;
    }

    return parseInt(stack[0],10);
};
  
  // 9
  console.log(PostFixEvaluation(["2", "1", "+", "3", "*"])); 

  // 6
  console.log(PostFixEvaluation(["4", "13", "5", "/", "+"])); 

  // 22
  console.log(PostFixEvaluation(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); 