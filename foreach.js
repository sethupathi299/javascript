function func() { 
  
    // Original array 
    let items = [1, 29, 47]
    let copy = []
  
    items.forEach(function(item)
    { 
        copy.push(item*item) 
    }) 
  
    console.log(copy)
} 
func(); 