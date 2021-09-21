const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sentence = "";
let activity = "";


rl.question("What's your name? ", (answer) => {
  sentence += "my name is " + answer + ". ";

  rl.question('What do you think of Node.js? ', (answer) => {
    sentence += "As far as Node goes, " + answer + ". ";

    rl.question("What's an activity you like doing? ", (answer) => {
      activity = answer;
      sentence += "my favourite activity is " + answer + ". ";

      rl.question("What do you listen to while doing that? ", (answer) => {
        sentence += "I like listening to " + answer + " while doing my favourite activity " + activity + ". ";

        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
          sentence += "I particularly enjoy eating " + answer + ". ";

          rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
            sentence += "During that meal, I like eating " + answer + " ";

            rl.question("Which sport is your absolute favourite? ", (answer) => {
              sentence += ", which gives me energy to play my favourite sport " + answer + ". ";

              rl.question("What is your superpower?  ", (answer) => {
                sentence += "If I had a  superpower, it would be " + answer + ". ";

                rl.question("In a few words, tell us what you are amazing at! ", (answer) => {
                  sentence += answer + ". ";

                  console.log(sentence);

                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });
});
