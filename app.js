'use strict';
//A function to play a guessing game where the user gets 3 chances to guess someone's name
//eslint-disable-next-line
function guessMyName() {
    //counter value started at 1
    var i = 1;
    //while loop giving user 3 "guesses" (counter less than 4)
    while(i < 4) {
        //prompts the user to input a "guess" when the function is called
        var answer = prompt('Guess my name?');
        //logs console with user's guess and returns current counter value
        console.log('User guessed:', answer);
        console.log('Counter at:', i);

        var p = document.getElementById('my-name-response');
        //after trimming white space and converting to lower case, validates user guess against correct answer
        if(answer.trim().toLowerCase() === 'kevin') {
            //if correct, displays winning message; breaks
            p.textContent = 'You\'re right! My name is Kevin!';
            break;
        }
        //else returns message/hint #1; increments counter value
        else {
            if(i === 1){
                alert('Sorry, not my name. Try again. Starts with a "K"! 2 guesses left!');
                i++;
            }
            //else returns message/hint #2; increments counter value
            else {
                if(i === 2) {
                    alert('Not quite! Starts with a "K", ends with an "N", and my name is 5 letters long...1 guess left!');
                    i++;
                }
                //maximum attempts (3) reached; displays losing message; breaks
                else {
                    p.textContent = 'You died! (you ran out of guesses)';
                    break;
                }
            }
        }
    }
}
//A function to play a five-question Yes or No game
//eslint-disable-next-line
function guessYesNo() {
    //counter value started at 0
    var i = 0;

    //Question #1
    //Correct answer is NO and increments the counter by 1
    var question1 = prompt('Am I 33 years old?').trim().toLowerCase();
    console.log('User guessed:', question1);
    //eslint-disable-next-line
    var p = document.getElementById('yes-no-response');
    if(question1 === 'y' || question1 === 'yes') {
        alert('No! I\'m not 33 years old.');
        console.log('Correct answers:', i, 'out of 5');
    }
    else {
        if(question1 === 'n' || question1 === 'no') {
            alert('Correct!');
            i++;
            console.log('Correct answers:', i, 'out of 5');
        }
        else {
            alert('Wrong! You didn\'t choose "Yes" or "No"!');
            console.log('Correct answers:', i, 'out of 5');
        }
    }
    //Question #2
    //Correct answer is YES and increments the counter by 1
    var question2 = prompt('Is one of my favorite cities Tokyo?').trim().toLowerCase();
    console.log('User guessed:', question2);
    //eslint-disable-next-line
    var p = document.getElementById('yes-no-response');
    if(question2 === 'y' || question2 === 'yes') {
        alert('Correct! Tokyo is a favorite for sure!');
        i++;
        console.log('Correct answers:', i, 'out of 5');
    }
    else {
        if(question2 === 'n' || question2 === 'no') {
            alert('Incorrect! Tokyo is awesome!');
            console.log('Correct answers:', i, 'out of 5');
        }
        else {
            alert('Wrong! You didn\'t choose "Yes" or "No"!');
            console.log('Correct answers:', i, 'out of 5');
        }
    }
    //Question #3
    //Correct answer is YES and increments the counter by 1
    var question3 = prompt('Do you think I like motorcycles?').trim().toLowerCase();
    console.log('User guessed:', question3);
    //eslint-disable-next-line
    var p = document.getElementById('yes-no-response');
    if(question3 === 'y' || question3 === 'yes') {
        alert('Right on! I do love motorcycles!');
        i++;
        console.log('Correct answers:', i, 'out of 5');
    }
    else {
        if(question3 === 'n' || question3 === 'no') {
            alert('That\'s incorrect!');
            console.log('Correct answers:', i, 'out of 5');
        }
        else {
            alert('Wrong! You didn\'t choose "Yes" or "No"!');
            console.log('Correct answers:', i, 'out of 5');
        }
    }
    //Question #4
    //Correct answer is NO and increments the counter by 1
    var question4 = prompt('Have I ever worked in tech before?').trim().toLowerCase();
    console.log('User guessed:', question4);
    //eslint-disable-next-line
    var p = document.getElementById('yes-no-response');
    if(question4 === 'y' || question4 === 'yes') {
        alert('Incorrect. I have not worked in tech.');
        console.log('Correct answers:', i, 'out of 5');
    }
    else {
        if(question4 === 'n' || question4 === 'no') {
            alert('That\'s correct!');
            i++;
            console.log('Correct answers:', i, 'out of 5');
        }
        else {
            alert('Wrong! You didn\'t choose "Yes" or "No"!');
            console.log('Correct answers:', i, 'out of 5');
        }
    }
    //Question #5
    //Correct answer is NO and increments the counter by 1
    var question5 = prompt('Am I from Portland?').trim().toLowerCase();
    console.log('User guessed:', question5);
    //eslint-disable-next-line
    var p = document.getElementById('yes-no-response');
    if(question5 === 'y' || question5 === 'yes') {
        alert('Incorrect. I am not a Portland native.');
        console.log('Correct answers:', i, 'out of 5');
    }
    else {
        if(question5 === 'n' || question5 === 'no') {
            alert('That\'s correct! I\'m primarily from Southern California.');
            i++;
            console.log('Correct answers:', i, 'out of 5');
        }
        else {
            alert('Wrong! You didn\'t choose "Yes" or "No"!');
            console.log('Correct answers:', i, 'out of 5');
        }
    }
    p.textContent = ('Overall, you scored: ' + i + '/5' + ' (' + Math.floor((i / 5) * 100) + '%)');
}