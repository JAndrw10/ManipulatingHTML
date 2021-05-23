document.addEventListener("DOMContentLoaded", function () {
    // 1. Make a button appear on the page when it's first loaded.
    let Button = document.createElement("button");
    Button.textContent = "Click for message";
    document.body.appendChild(Button);

    // When the button is clicked, you should display an Alert box with any (nice) message.
    Button.addEventListener("click", function () {
        alert('You clicked the button ');
    });

    //2.  When the button (from html) is clicked, display an alert with the message that is typed in the text box.
    const btn2 = document.querySelector("#btn-2");
    const btn2text = document.getElementById("2btn-text")
    btn2.addEventListener("click", function () {
        alert(btn2text.value);
    });

    // 3. Make the div (from html) change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
    const num3Div = document.getElementById("num3-div");
    num3Div.addEventListener("mouseenter", function () {
        num3Div.style.backgroundColor = "red";
    });

    num3Div.addEventListener("mouseleave", function () {
        num3Div.style.backgroundColor = "blue";
    })

    // #4 When you click on the paragraph, the color of the text switches to a random color.


    // 4. Put some text in a paragraph. 
    const num4p = document.getElementById("num4-p");
    num4p.addEventListener("click", function () {
        num4p.style.color = random_rgba();

    });
    // 5. Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
    const num5Btn = document.getElementById("num5-btn");
    const num5Div = document.getElementById("num5-Div");
    num5Btn.addEventListener("click", function () {
        const span = document.createElement('span');
        span.textContent = "Joseph ";
        num5Div.appendChild(span)
    });

    // 6. create an array containing the names of your friends
    const num6btn = document.getElementById("num6-btn");
    const num6ul = document.getElementById("num6-ul");
    let friendzArry = ["Blakely", "Demetrius", "Bryan", "Anna", "Natalie", "Aryonna"];
    let counter = 0;

    num6btn.addEventListener("click", function () {
        if (counter < friendzArry.length) {
            const newLi = document.createElement("li");
            newLi.textContent = friendzArry[counter];
            num6ul.appendChild(newLi);
            
            counter++;
        }
        else {
            num6btn.disabled = "true"
            //alert("You're all out of friends");
        }

    });
});

// enables random colors to generate when paragraph is clicked
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

//.value give you the value of the input, specific to input tags text area tags... they come with a value property
//to comment out a line you can click the line then CTRL? 