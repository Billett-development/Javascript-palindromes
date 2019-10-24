// Write a JavaScript function that checks whether a passed string is palindrome or not? 

    
    btn = document.querySelector("#btn");
    btn.addEventListener('click', function(){
    userInput = document.querySelector("#answer").value;
    
    var cleanString;

        
        
    // Change the string into lower case and remove  all non-alphanumeric characters
    cleanString = userInput.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        
    //error checking
    if(cleanString === ""){
            
        console.log("Nothing was entered");

            } 
//        step 1. use the split method to return a new array
//        step 2. use the reverse method to revers the new created array
//        step 3. use the join method to join all the elements of the array back into a string
    var reverse = cleanString.split("").reverse().join("");
        
        
// check to see if the original user input is the same as the reversed version
        if(cleanString == reverse) {
            
            console.log(userInput + ": is a palindrome")
            
        } else {
            
            
            console.log(userInput + ": IS NOT A PALINDROME")
        }

        
    });
      












