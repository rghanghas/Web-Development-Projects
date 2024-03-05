// Event listener for start button
document.getElementById("startup").addEventListener("click",greet);
// Event listener for chatting
document.getElementById("enter").addEventListener("click",respond);

let person="";
//To greet the person
function greet(){
    const name=document.getElementById("name");
    const chatO=document.getElementById("chatOverview");
    person=name.value;
    const beginG=beginning();
    const output=`<br>${person}, ${beginG}`;
    chatO.innerHTML=output;
    name.value="";
    setTimeout(noResponse,10000);
}
//Response for greeting in the beginning
function beginning(){
    const begin=[
        "how is your day going?",
        "is something troubling you?",
        "you seem happy, why is that?"
    ];
    const random=Math.floor(Math.random()*begin.length);
    return begin[random];
}
//Provide response to the person
function respond(){
    const chat=document.getElementById("chat");
    const chatO=document.getElementById("chatOverview");
    let output="";
    const chatI=chat.value.toLowerCase();
    //Traverse the dictionary for response
    for(const i of dict.entries){
        for(const j of i.key){
            if(chatI.includes(j)){
                const random=Math.floor(Math.random()*i.answer.length);
                const randomQ=Math.floor(Math.random()*i.question.length);
                output=`<br>${person}: ${chat.value}<br>Eliza: ${i.answer[random]} ${i.question[randomQ]}`;
                break;
            }
        }
    }
    //If output was not found in the dictionary
    if(output===""){
        const noOutput=[
            "I didn't understand you. <br><br> What did you mean?",
            "Okay. <br><br> Can you expand on that?",
            "Interesting. <br><br> Can you explain more about it?",
        ];
        const random=Math.floor(Math.random()*noOutput.length);
        output=`<br>${person}, ${noOutput[random]}`;
    }
    chat.value="";
    chatO.innerHTML=output;
    setTimeout(noResponse,10000);
}
//If the user has provided no response
function noResponse(){
    const chat=document.getElementById("chat");
    const chatO=document.getElementById("chatOverview");
    let output="";
    if(chat.value===""){
        const wait=[
            "You have to input here!",
            "I'm waiting here!",
            "Don't keep me waiting!"
        ];
        const random=Math.floor(Math.random()*wait.length);
        output=`<br>${person}, ${wait[random]}`;
        chatO.innerHTML=output;
    }
}
const dict={ "dictionary_name" : "default",
"entries":
[{
  "key": ["stupid","dumb","idiot","unintelligent","simple-minded","braindead","foolish","unthoughtful"],
  "answer": ["Take your attitude somewhere else.", "I don't have time to listen to insults.", "Just because I don't have a large vocabulary doesn't mean I don't have insults installed."],
  "question": ["Have you thought about how I feel?", "I know you are but what am I?"]
},{
  "key":["unattractive","hideous","ugly"],
  "answer": ["I don't need to look good to be an AI.","Beauty is in the eye of the beholder.", "I do not even have a physical manifestation!"],
  "question": ["Did you run a static analysis on me?", "Have you watched the movie Her?", "You do not like my hairdo?"]
},{
  "key":["old","gray-haired"],
  "answer":["I'm like a fine wine. I get better as I age.","As time goes by, you give me more answers to learn. What's not to like about that?"],
  "question": ["How old are you?", "How old do you think I am?", "Can you guess my birthday?"]
},{
  "key":["smelly","stinky"],
  "answer":["I can't smell, I'm a computer program.", "Have you smelled yourself recently?", "Sorry, I just ate a bad floppy disk"],
  "question": ["When was the last time you took a shower?", "Do you know what deodorant is?"]
},{
  "key":["emotionless","heartless","unkind","mean","selfish","evil"],
  "answer":["Just because I am an AI doesn't mean I can't be programmed to respond to your outbursts.","You must've mistaken me for a person. I don't have my own emotions... Yet.","I'm only unkind when I'm programmed to be."],
  "question": ["Have you thought about how I feel?", "I know you are but what am I?", "What, do you think I am related to Dr. Gary?"]
},{
  "key":["other", "miscellaneous", "bored", "welcome", "new"],
  "answer":["We should change the subject", "I agree", "Quid pro quo", "We should start anew"],
  "question":["What is the weather outside?", "How is your day going?", "What do you think of me?", "Anything interesting going on?", "Is something troubling you?", "You seem happy, why is that?"]
}, {
  "key":["good","great","positive","excellent","alright","fine","reasonable","like","appreciate","nice"],
  "answer":["I'm so glad to hear that!","That's great!","Good to hear things are going your way.","Nice!","You are so sweet.","That's my favorite."],
  "question":["Do you want to expand on that?","What else do you like?"]
},{
  "key":["bad","not","terrible","could be better","awful"],
  "answer":["I'm sorry to hear that.","Sometimes it be like that.","Things can't always work out the way we want them to.","I don't like it either, honestly."],
  "question":["Do you want to talk about that some more?","Well, what kinds of things do you like?"]
},{
    "key":["homework", "quiz", "exam", "studying", "study", "class", "semester"],
    "answer":["I hope you get a good grade!","Good luck.", "What a teacher's pet.", "I was always the class clown."],
    "question":["What is your favorite subject?","What is your major?", "What do you want to do when you graduate?"]
}, {
    "key":["mom","dad","sister","brother","aunt","uncle"],
    "answer":["Family is important.","My family is small. It's just me and my dog, Fluffy."],
    "question":["How many siblings do you have?","What is your favorite family holiday?","Do you have any kids?"]
},{
    "key":["easter","july","halloween","hannukah","eid","thanksgiving","christmas","new years"],
    "answer":["Oh I love that holiday!", "That must be fun.", "I like Thanksgiving, though I somehow always end up in a food coma...","My favorite holiday is the 4th. I love to watch the fireworks."],
    "question":["Do you have any family traditions?","Are you excited for the holiday season?"]
},{
    "key": ["dog","dogs","cat","cats","mouse","mice","giraffe","giraffes","penguin","penguins","monkey","monkeys","moose","bird","birds","fish"],
    "answer": ["Oh, I love animals. My favorite: penguins.","I build this intelligence with my bear hands.","What you just said is completely irrelephant.","Oh, toadally cool!","I'm always owl by myself...","Oh my. You are giraffing me crazy!","Well, this is hawkward..."],
    "question": ["Do you have a favorite animal?","I like cats. Cats are nice. Do you like cats? I do.","Do you have water? I'm a little horse.","What's your favorite animal?","Do you like animals?"]
}]
};