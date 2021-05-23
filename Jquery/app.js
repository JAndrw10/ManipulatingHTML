$('document').ready(function () {
    
//  1. Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
let newBtn = $('<button>Click me!</button>')
newBtn.click(function() {
    alert('here is another message');
})

$('body').append(newBtn)

        // 2. When the button is clicked, display an alert with the message that is typed in the text box.
        $('#submitBtn').click(function() {
            alert($('#textbox').val())
        })

// 3. Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
$('#changeColor').mouseover(function(){
    $('#changeColor').css('background-color', 'red');
});


$('#changeColor').mouseout(function(){
    $('#changeColor').css('background-color', 'transparent');
});


//number4
$('#num4p').click(function (){
$('#num4p').css('color', getRandomColor())
});


//number5 
$('#myNameButton').click(function(){
    let span = $('<span>Joseph </span>')
    $('#nameDiv').append(span)
})

//number 6
let friendsArray = ['Bryan', 'Demetrius', 'Camille', 'Landon', 'Steely','Ian', 'Aryonna','Gabe', 'Blakely','Barcley'];
let counter = 0;
$('#friendBtn').click(function() {
    if(friendsArray[counter] != undefined ) {
        let newLi = $(`<li>${friendsArray[counter]}</Li>`)
        $('#friendslist').append(newLi)
    } else {
        alert('Friends you have no more!')
    }
    counter++
});



}) 



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = "#";
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }


 //.val is a function in jquery not just .value
