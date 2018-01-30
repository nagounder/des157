function madLibs() {
    var story1 = document.getElementById("story1");
    var story2 = document.getElementById("story2");
    var story3 = document.getElementById("story3");

    var time = document.getElementById("time").value;
    var restaurant = document.getElementById("restaurant").value;
    var building = document.getElementById("building").value;
    var number1 = document.getElementById("number1").value;
    var TVshow = document.getElementById("TVshow").value;
    var verb1 = document.getElementById("verb1").value;
    var verb2 = document.getElementById("verb2").value;
    var number2 = document.getElementById("number2").value;
    var noun = document.getElementById("noun").value;

    story1.innerHTML = "Your alarm rings at " + time + " A.M. and you feel like what Tercero smells like because you just needed that extra minute to have a good day. You consider skipping your first class, but attendance is 25% and you somehow already have a D even though its only week 2. Running out the door, you decide to grab breakfast at " + restaurant + ". You bike back with one hand, chewing on your food and you look away for just a second.... Suddenly, BAM! you hit someone. You are horrified, you've never even hit a squirrel during your time in Davis. You help the person up, and you're suprised to see ex-chancellor Linda Katehi. Just as you're about to apologize, a flock of wild downtown turkeys " + verb1 + " and you immediately " + verb2 + " it out of there. You're in the clear but you realize that you forgot your bike back in the middle of 3rd Street.";

   story2.innerHTML = "You want to go back and get it, but no can do, you're late for class. You run as fast as you can to " + building + ", but by the time you get there, your lungs feel like they are permanently filled with pepper spray. You promise yourself you'll go to the ARC and workout, but you secretly know that will never happen. You make it through class, only dozing off " + number1 + " times - a new personal achievement! After class, you go home and just as you begin to relax to an episode of " + TVshow + ", it hits you like Unitrans - you forgot to turn in your essay!!! Frantically, you email your professor asking for an extension. This is your professor's response:";

   story3.innerHTML = "You're about to have a breakdown, your " + number2 + "th one this week. Suddenly, your eyes jerk open and you see your " + noun + " poster staring back at you - it was all a dream, you had already turned in your essay last night. You breathe a sigh of relief and go back to bed. However, the next day you learn that you forgot to cite a source (whoops!) and end up getting sent to SJA.";

   story4.innerHTML = "The End";

   show_image("images/katehi.jpg", 220, 200, "katehi", "picture1");
   show_image("images/turkeys.jpg", 220, 200, "turkeys", "picture1");

   show_image("images/arc.jpg", 350, 250, "arc", "picture2");
   show_image("images/essay.jpg", 400, 200, "essay", "picture2");

  }

  var libButton = document.getElementById('lib-button');
  libButton.addEventListener('click', madLibs);



function show_image(src, width, height, alt, imgID) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.getElementById(imgID).appendChild(img);
}


function validateForm() {
    var x = document.forms["myForm"]["blank"].value;
    if (x == "") {
        alert("Blank must be filled out");
        return false;
    }
}
