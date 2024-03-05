<!-- https://play.vuejs.org/#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 -->
<script>
export default {
  data() {
    return {
      categories: [],
      questions: {},
      currentQuestion: null,
      currentCategory: "",
      currentCategoryId: 0,
      currentValue: 0,
      currentPlayer: 1,
      players: [0, 0, 0],
      message: ""
    };
  },
  created() {
    const excludedCategoryIds = [10, 13, 21, 26, 27, 29, 30, 32];
    fetch("https://opentdb.com/api_category.php")
      .then(response => response.json())
      .then(data => {
        this.categories = this.shuffle(data.trivia_categories)
          .filter(category => !excludedCategoryIds.includes(category.id))
          .slice(0, 4);
        for (let category of this.categories) {
          this.questions[category.id] = [
            { difficulty: "easy", answered: false, correctAnswer: false },
            { difficulty: "easy", answered: false, correctAnswer: false },
            { difficulty: "medium", answered: false, correctAnswer: false },
            { difficulty: "medium", answered: false, correctAnswer: false },
            { difficulty: "hard", answered: false, correctAnswer: false }
          ];
        }
      });
  },

  methods: {
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    fetchQuestion(categoryId, index) {
      const difficulty = this.questions[categoryId][index - 1].difficulty;

      fetch(`https://opentdb.com/api.php?amount=1&category=${categoryId}&difficulty=${difficulty}&type=boolean`)
        .then(response => response.json())
        .then(data => {
          this.currentQuestion = data.results[0];
          this.currentCategory = this.categories.find(cat => cat.id === categoryId).name;
          this.currentCategoryId = this.categories.find(cat => cat.id === categoryId).id;
          this.currentValue = index * 100;
        });
    },
    checkAnswer(currentCategoryId, answer) {
      if ((this.currentQuestion.correct_answer === "True" && answer) || (this.currentQuestion.correct_answer === "False" && !answer)) {
        this.message = "Correct!";
        this.players[this.currentPlayer - 1] += this.currentValue;
        this.questions[this.currentCategoryId][(this.currentValue / 100) - 1].correctAnswer = true;
      } else {
        this.message = "Incorrect!";
        this.players[this.currentPlayer - 1] -= this.currentValue;
        this.currentPlayer = this.currentPlayer % 3 + 1;
      }

      this.questions[this.currentCategoryId][(this.currentValue / 100) - 1].answered = true;
      this.currentQuestion = null;

      if (Object.values(this.questions).every(cat => cat.every(q => q.answered))) {
        this.endGame();
      }
    },
    endGame() {
      const maxScore = Math.max(...this.players);
      const winner = this.players.indexOf(maxScore) + 1;
      this.message = `Player ${winner} has won the game!`;
    }
  }
};
</script>

<template>
  <div>
    <div class="player-scores">
      <p v-for="(score, index) in players" :key="'player-' + (index + 1)">
        Player {{ index + 1 }}: ${{ score }}
      </p>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="category in categories" :key="category.id">{{ category.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in 5">
          <td v-for="category in categories" :key="category.id + index">
            <button :disabled="questions[category.id][index - 1].answered"
              :class="{ 'answered': questions[category.id][index - 1].correctAnswer, 'incorrect': (questions[category.id][index - 1].answered && !questions[category.id][index - 1].correctAnswer) }"
              @click="!questions[category.id][index - 1].answered && fetchQuestion(category.id, index)">
              {{ index * 100 }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="currentQuestion">
      <p>{{ currentCategory }} for ${{ currentValue }}</p>
      <p>{{ currentQuestion.question }}</p>
      <button @click="checkAnswer(currentCategoryId, true)">True</button>
      <button @click="checkAnswer(currentCategoryId, false)">False</button>
    </div>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style>
.player-scores {
  font: Arial;
}
button.answered {
  background-color: green;
}
button.incorrect {
  background-color: red;
}
button {
  font-size: large;
  background-color: blue;
  color: yellow;
  font-weight: 800;
}
table,
td {
  border: 2px solid black;
  border-collapse: collapse;
  padding: 15px;
  font: Arial;
  font-size: large;
  background-color: blue;
}
th {
  border: 2px solid black;
  border-collapse: collapse;
  padding: 15px;
  font: Arial;
  font-size: large;
  background-color: blue;
  color: white;
}
</style>