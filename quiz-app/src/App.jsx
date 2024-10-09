import React from "react";
import {userState} from "react";
import "./App.css";
const App = () => {
  const answers={
    q1 : "All of these",
    q2 : "Mars",
    q3 : "3",
    q4 : "Matt Black",
    q5 : "Mater",
    q6 : "4"
};


const calc_result = () =>{
    event.preventDefault();
    let score = 0;
    for (const [ques, ans] of Object.entries(answers)) {
        const selectedAns = document.querySelector('input[name="'+ques+'"]:checked').value;
        if (selectedAns === ans) {
            score += 10;
        }
    }
    document.getElementById('score').innerText = "Your Score: " + score;
}


  return(
    <div>
      <h1>Quiz Time...</h1>
    <div id="quiz-container">
        <form action="#" method="get" id="quiz-form" onSubmit={calc_result}>
            <div class="ques-grid">
                <div class="question">
                    <p class="ques-text">Who is Simrat's favouritee sisterrr?🫶🏻</p>
                    <label><input type="radio" name="q1" value="Tanu" onclick="check(this.value)" />
                        <span class="checkmark"></span>Tanu</label>
                    <label><input type="radio" name="q1" value="Ofcourse Tanu" onclick="check(this.value)"/><span class="checkmark"></span>Ofcourse Tanu</label>
                    <label><input type="radio" name="q1" value="Aur koi option nahi haii" onclick="check(this.value)"/><span class="checkmark"></span>Aur koi option nahi haii</label>
                    <label><input type="radio" name="q1" value="All of these" onclick="check(this.value)"/><span class="checkmark"></span>All of these</label>
                </div>
                <div class="question">
                    <p class="ques-text">Which planet is called red planet?</p>
                    <label><input type="radio" name="q2" value="Mars" /><span class="checkmark"></span>Mars</label>
                    <label><input type="radio" name="q2" value="Earth" /><span class="checkmark"></span>Earth</label>
                    <label><input type="radio" name="q2" value="Venus"/><span class="checkmark"></span>Venus</label>
                    <label><input type="radio" name="q2" value="Jupiter"/><span class="checkmark"></span>Jupiter</label>
                </div>
                <div class="question">
                    <p class="ques-text">How many movies are in the Cars series?</p>
                    <label><input type="radio" name="q3" value="5"/><span class="checkmark"></span>5</label>
                    <label><input type="radio" name="q3" value="4"/><span class="checkmark"></span>4</label>
                    <label><input type="radio" name="q3" value="1"/><span class="checkmark"></span>1</label>
                    <label><input type="radio" name="q3" value="3"/><span class="checkmark"></span>3</label>
                </div>
                <div class="question">
                    <p class="ques-text">Which is the best colour of a car?</p>
                    <label><input type="radio" name="q4" value="Matt Black"/><span class="checkmark"></span>Matt black</label>
                    <label><input type="radio" name="q4" value="Red"/><span class="checkmark"></span>Red</label>
                    <label><input type="radio" name="q4" value="Pink"/><span class="checkmark"></span>Pink</label>
                    <label><input type="radio" name="q4" value="White"/><span class="checkmark"></span>White</label>
                </div>
                <div class="question">
                    <p class="ques-text">Who is best friend of McQueen?</p>
                    <label><input type="radio" name="q5" value="Mater"/><span class="checkmark"></span>Mater</label>
                    <label><input type="radio" name="q5" value="Sally"/><span class="checkmark"></span>Sally</label>
                    <label><input type="radio" name="q5" value="Otis"/><span class="checkmark"></span>Otis</label>
                    <label><input type="radio" name="q5" value="Guido"/><span class="checkmark"></span>Guido</label>
                </div>
                <div class="question">
                    <p class="ques-text">How many movies are in the Cars series?</p>
                    <label><input type="radio" name="q6" value="5"/><span class="checkmark"></span>5</label>
                    <label><input type="radio" name="q6" value="4"/><span class="checkmark"></span>4</label>
                    <label><input type="radio" name="q6" value="1"/><span class="checkmark"></span>1</label>
                    <label><input type="radio" name="q6" value="3"/><span class="checkmark"></span>3</label>
                </div>
            </div>
            <input  id="submit" type="Submit" value="submit"/>
        </form>
        <div id="result">
            <h2 id="score"></h2>

        </div>
        
    </div>
    </div>
  );
};
export default App;