let current = 0;
const questions = [
  {
    question: "Which country won the FIFA World Cup 2022?",
    ans: "Argentina",
  },
  {
    question: "2, 6, 12, 20, 30, ?",
    ans: "42",
  },
  {
    question: "Which treaty ended the Anglo-Nepal War?",
    ans: "Sugauli Treaty",
  },
  {
    question: "Which game hosts The International tournament?",
    ans: "Dota 2",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    ans: "Diamond",
  },
  {
    question: "AZ, BY, CX, DW, ?",
    ans: "EV",
  },
  {
    question: "Who painted the Mona Lisa?",
    ans: "Leonardo da Vinci",
  },
  {
    question: "What does FPS stand for in gaming?",
    ans: "First Person Shooter",
  },
  {
    question: "What has keys but cannot open locks?",
    ans: "Piano",
  },
  {
    question: "Which king started the unification of Nepal?",
    ans: "Prithvi Narayan Shah",
  },
  {
    question: "1, 1, 2, 3, 5, 8, 13, ?",
    ans: "21",
  },
  {
    question: "Which planet rotates on its side?",
    ans: "Uranus",
  },
  {
    question: "What is the maximum break in snooker?",
    ans: "147",
  },
  {
    question:
      "If all BLOPS are RINS and all RINS are TAPS, then all BLOPS are?",
    ans: "TAPS",
  },
  {
    question: "Who was the first President of Nepal?",
    ans: "Ram Baran Yadav",
  },
  {
    question: "Which game features agents named Jett and Sage?",
    ans: "Valorant",
  },
  {
    question: "What gets wetter as it dries?",
    ans: "Towel",
  },
  {
    question: "Which gas makes up most of Earth's atmosphere?",
    ans: "Nitrogen",
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    ans: "France",
  },
  {
    question: "64, 32, 16, 8, 4, ?",
    ans: "2",
  },
  {
    question: "Which company developed Valorant?",
    ans: "Riot Games",
  },
  {
    question: "A clock shows 3:00. What is the angle between the hands?",
    ans: "90 Degrees",
  },
  {
    question: "Which city is the birthplace of Lord Buddha?",
    ans: "Lumbini",
  },
  {
    question: "Which blood group is called the universal donor?",
    ans: "O Negative",
  },
  {
    question: "Find the odd one out: Cube, Sphere, Cylinder, Triangle",
    ans: "Triangle",
  },
  {
    question: "Which city hosted the 2025 Esports World Cup?",
    ans: "Riyadh",
  },
  {
    question: "What belongs to you but is used more by others?",
    ans: "Your Name",
  },
  {
    question: "Which battle ended Napoleon's rule?",
    ans: "Battle of Waterloo",
  },
  {
    question: "What is the SI unit of electric current?",
    ans: "Ampere",
  },
  {
    question: "A, C, F, J, O, ?",
    ans: "U",
  },
  {
    question: "Which country invented cricket?",
    ans: "England",
  },
  {
    question: "Who discovered the electron?",
    ans: "J. J. Thomson",
  },
  {
    question: "What can travel around the world while staying in a corner?",
    ans: "Stamp",
  },
  {
    question: "In which year did Nepal become a republic?",
    ans: "2008",
  },
  {
    question: "3, 9, 27, 81, ?",
    ans: "243",
  },
  {
    question: "Which planet is closest to the Sun?",
    ans: "Mercury",
  },
  {
    question: "Which company owns League of Legends?",
    ans: "Riot Games",
  },
  {
    question: "How many months have exactly 28 days?",
    ans: "12",
  },
  {
    question: "Who was the first human on the Moon?",
    ans: "Neil Armstrong",
  },
  {
    question: "What is the chemical symbol of Silver?",
    ans: "Ag",
  },
  {
    question: "If CAT = DBU, then DOG = ?",
    ans: "EPH",
  },
  {
    question: "What is the national sport of Japan?",
    ans: "Sumo",
  },
  {
    question: "Which revolution began in 1789?",
    ans: "French Revolution",
  },
  {
    question: "What has one eye but cannot see?",
    ans: "Needle",
  },
  {
    question: "Which organ pumps blood throughout the body?",
    ans: "Heart",
  },
  {
    question: "Which number is both a square and a cube?",
    ans: "64",
  },
  {
    question: "In which year did the Berlin Wall fall?",
    ans: "1989",
  },
  {
    question: "Which game has champions, lanes and a Nexus?",
    ans: "League of Legends",
  },
  {
    question: "Divide 30 by half and add 10.",
    ans: "70",
  },
  {
    question: "What is H2O commonly known as?",
    ans: "Water",
  },
  {
    question: "What word is spelled incorrectly in every single dictionary?",
    ans: "Incorrectly",
  },
  {
    question:
      "A farmer has 17 sheep. All but 9 run away. How many sheep are left?",
    ans: "9",
  },
  {
    question:
      "If you pass the person in second place in a race, what place are you in?",
    ans: "Second",
  },
  {
    question:
      "Brothers and sisters I have none, but this man's father is my father's son. Who is it?",
    ans: "My son",
  },
  {
    question:
      "You enter a dark room with a match, a lamp, a stove, and a candle. What do you light first?",
    ans: "The match",
  },
  {
    question: "What has keys but opens no locks, and space but has no room?",
    ans: "A keyboard",
  },
  { question: "Which month has 28 days?", ans: "All of them" },
  {
    question: "What can travel around the world while staying in a corner?",
    ans: "A stamp",
  },
  {
    question:
      "If a doctor gives you 3 pills and tells you to take one every half hour, how long do they last?",
    ans: "1 hour",
  },
  {
    question:
      "A clerk at a butcher shop is 6 feet tall and wears size 10 shoes. What does he weigh?",
    ans: "Meat",
  },
  { question: "What goes up but never comes down?", ans: "Your age" },
  {
    question:
      "Give me food and I will live. Give me water and I will die. What am I?",
    ans: "Fire",
  },
  { question: "What has a head and a tail but no body?", ans: "A coin" },
  {
    question:
      "The more of them you take, the more you leave behind. What are they?",
    ans: "Footsteps",
  },
  {
    question: "What belongs to you, but other people use it more than you do?",
    ans: "Your name",
  },
  {
    question:
      "Two fathers and two sons go fishing. They catch 3 fish and each gets one. How?",
    ans: "Grandfather, father, and son",
  },
  {
    question:
      "If there are 3 apples and you take away 2, how many apples do you have?",
    ans: "2",
  },
  { question: "What has hands but cannot clap?", ans: "A clock" },
  { question: "What building has the most stories?", ans: "The library" },
  { question: "What can you catch but never throw?", ans: "A cold" },
   { question: "A man walks 4 km North, turns right and walks 3 km. How far is he from his starting point in a straight line?", ans: "5 km" },
  { question: "If you face North and turn 90 degrees clockwise, then 180 degrees counter-clockwise, which direction face?", ans: "West" },
  { question: "A girl walks South for 5 miles, turns left, and walks 5 miles. Which direction is she from her starting point?", ans: "Southeast" },
  { question: "At sunrise, you stand facing a tree. Your shadow falls exactly to your left. Which direction are you facing?", ans: "North" },
  { question: "You drive 10 km West, turn right and drive 10 km, then turn right and drive 10 km. How far are you from the start?", ans: "10 km" },
  { question: "What word is spelled incorrectly in every single dictionary?", ans: "Incorrectly" },
  { question: "A farmer has 17 sheep. All but 9 run away. How many sheep are left?", ans: "9" },
  { question: "If you pass the person in second place in a race, what place are you in?", ans: "Second" },
  { question: "Brothers and sisters I have none, but this man's father is my father's son. Who is it?", ans: "My son" },
  { question: "You enter a dark room with a match, a lamp, a stove, and a candle. What do you light first?", ans: "The match" },
  { question: "What has keys but opens no locks, and space but has no room?", ans: "A keyboard" },
  { question: "A large triangle is divided vertically down the middle by one line. How many triangles are there in total?", ans: "3" },
  { question: "A large triangle has two vertical lines inside splitting it, and one horizontal line through the middle. How many total triangles?", ans: "12" },
  { question: "A standard 4-pointed star (made of two overlapping large triangles) contains how many total triangles?", ans: "8" },
  { question: "A regular 5-pointed star geometric shape drawn with 5 straight intersecting lines contains how many total triangles?", ans: "10" },
  { question: "A square is divided by both of its diagonal lines. How many total triangles are formed inside the square?", ans: "8" },
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", ans: "An echo" },
  { question: "A man pushes his car to a hotel and tells the owner he's bankrupt. Why?", ans: "He is playing Monopoly" },
  { question: "What is full of holes but still holds water?", ans: "A sponge" },
  { question: "What has to be broken before you can use it?", ans: "An egg" },
  { question: "I am tall when I am young, and I am short when I am old. What am I?", ans: "A candle" },
  { question: "A large triangle is divided vertically down the middle by one line. How many triangles are there in total?", ans: "3" },
   { question: "Which ancient civilization started the Olympic Games in 776 BC?", ans: "Ancient Greece" },
  { question: "What historical event in 1914 was triggered by the assassination of Archduke Franz Ferdinand?", ans: "World War I" },
  { question: "Which empire built the Colosseum in Rome to host gladiator combat sports?", ans: "The Roman Empire" },
  { question: "In 1930, which South American country hosted and won the very first FIFA World Cup?", ans: "Uruguay" },
  { question: "Which French military leader crowned himself Emperor in 1804 and was later defeated at Waterloo?", ans: "Napoleon Bonaparte" }
];
questions.sort(() => Math.random() - 0.5);
function showQuestion() {
  document.getElementsByClassName("question")[0].innerText =
    questions[current].question;

  document.getElementsByClassName("counter")[0].innerText =
    `Question ${current + 1} / ${questions.length}`;
}

document.getElementsByClassName("btn")[0].onclick = function () {
  const revel = questions[current].ans;
  alert(revel);
};

document.getElementsByClassName("next")[0].onclick = function () {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  }
};
showQuestion();
