//https://play.vuejs.org/#eNqNVW1v2zYQ/is3AYPTxZaSuNsAzS6yFQXWFuhrvhRxP9DS2WZDkQpJyXEN/fceSUmW3SCoAcPk3XPPvfK8j/4ty7iuMEqjhZxZLErBLL5YSKDPLOd1ewwXqCd8NV9E91LN7is0litpYoFybTeLqIcSuIRMMGMIu1LS/k/KL6rSkFVao7RgMqUxhf3eH5oGVGVBrUhwSts0s6R8mvlja+KspTq/bBrH3BPdkvDrTzSCLVFQPiulieos2yie4ZjLHB+eAZcQBGYRQXqHO4J4FV077z1gwEq8XJaUit2VSBjNcq4cRc1E5QTBiCT1pFA5ChIxabaoF1FyxLPfByjFvdTDuBMf+FCyrKyl5K8zwbM7IjTVsuCW4nr/dpYE5aGJySMtRWG6jp9WmEsmPrsWhQbChtUImaIpQYs52A3CfcW//wYzUzIqWmtHPy4A33LfYdgy86vddkwvht0aBn04z5KjaaXpNZnmpaUbPpRKW8hxxSphYR9Mc2bZ2bPuBqDRVpqG5pA5DUoKF+OBoAsvhdvRX/AH/A3z0RhGV1M4h8uLcLmhIoQmglWANeqd3XC5Bm5g9HXIFlCe7PnVaDyaTp09HYeodq4c6IIwl+5LOA8+xQbCFGQlxEDcvq5DJs0/4dS0kgLtRuXko08+DM2wPAB8BWeUiYmDm/l87m9dGrfhRo/ryApoKkjuYzg/bx1754djZ3mkH7pyCfWq1tD/uExoRLpOh77bnXBDEPuF0MXiLpMt8vXGprBUIm/5vNzw71Sgy6uL30lKxHFb9SPjFSu42KUweklzzKm973A7avGHl/G4yQ0viI0M4JMqmHRmp87/9M59y5VQ1MW1RpQtv3tBQ2KfYwrcMnrlAUNl8IlH48hSteWKr+NvRkla5d6Stg09VC5Qvy/9EC+ivuG0doRQ2zdeZnWF7WC4DYXZ3SPyb4aWX0qHDxoN6po2Qq+zTK+RHrxTv/r8Dh/o3Ctpz1WC0E8oP6FRonIxBth/lcwp7AHOR/u6cM+aXtaNefVgUZouKReoHw6PX0T0f/byidQP4U7jqbejelIVueefFKw8qWNQHJOQjxDsxtrSpEmS5ZLMaKfzWscSbSLLIrkmWKIraWkcJrkqrslj/Jx2mLFDcYymmCy12lJliWSQuLP35dYT+uPMUbuy/JrbE7Oh6xPVT+77ojQ/AKUxlpA=
<template>
    <div>
      <div v-if="qno<questions.length">
        <p class="fontH">Your current score: {{score}} out of {{questions.length}}</p>
        <p class="fontH">Question {{qno+1}}: {{questions[qno]}}</p>
        <label v-for="(choice,index) in choices" :key="index" class="choices">
          <input type="radio" :value="choice" v-model="answer"/>
          {{choice}}<br>
        </label>
        <button @click="submit">OK</button>
      </div>
      <div v-else>
        <p class="finalScore">You have completed the quiz! <span class="last">Your score was {{score}} out of {{questions.length}}</span></p>
      </div>
    </div>
  </template>
  
<script>
export default {
    data() {
      return {
        qno: 0,
        questions: ['6 * 7 =', '23 + 10 =', 'The answer to everything is '],
        qanswers: ['42','33', '42'],
        choices: ['0','1','13','33','42'],
        answer: null,
        score: 0,
      };
    },
    methods: {
      submit() {
        if (this.answer===this.qanswers[this.qno]) {
          this.score++;
        }
        this.qno++;
        this.answer=null;
      }
    }
  };
</script>
  
<style>
.fontH {
    font-weight: bold;
    font-size: 120%;
}
.choices {
    font-family: 'Courier New';
}
.finalScore {
    font-family: 'Times New Roman';
    font-size: 150%;
    color: green;
}
.last{
    font-style: italic;
}
</style>