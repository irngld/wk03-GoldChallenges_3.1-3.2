/* 
    - Using the html and js files provided, write a webpage that asks the user for input on a store, a quantity, and a product.  
    
    - Save the user input in 3 separate variables. 
        - Once the user has input their information, your webpage should console.log a sentence using those 3 variables. Using dom manipulation, you should also display the user input to the screen. For example: 'I shopped at *Target* for *5* *apples*' may be output to the console & screen. 
        
    - Do not alter the HTML doc.

    - This does not need to be styled in any sort of fashion, but feel free to if you would like!
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let display = (data) => {
    pTag = document.querySelector('p');
    pTag.innerText = data;
    pTag.style = 'color: red;';
}


function setVar() {
    let store = document.getElementById('store').value
    let prod = document.getElementById('product').value
    let qty = document.getElementById('quantity').value
    
    let sentence = `I shopped at ${store} for *${qty}* *${prod}*`;
    
    display(sentence);
    console.log(sentence);
}
