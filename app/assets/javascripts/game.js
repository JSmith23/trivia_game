document.addEventListener("DOMContentLoaded", () => {
  const NOT_STARTED = "NOT_STARTED";
  const STARTED = "STARTED";
  const FAILED = "FAILED";
  const FINISHED = "FINISHED";
  const NO_QUESTIONS = "NO_QUESTIONS";

  const GAME = {
    state: NOT_STARTED,
    questions: [],
    currentQuestionIndex: -1,
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  };

  const START_GAME_FORM = document.getElementById("start_game_form");
  const QUESTION_FROM = document.getElementById("question_form");
  const FAIL_VIEW = document.getElementById("fail_view");
  const SUCCESS_VIEW = document.getElementById("success_view");
  const NO_QUESTIONS_VIEW = document.getElementById("no_questions_view");

  const STATE_VIEW_MAP = {
    [NOT_STARTED]: START_GAME_FORM,
    [STARTED]: QUESTION_FROM,
    [FAILED]: FAIL_VIEW,
    [FINISHED]: SUCCESS_VIEW,
    [NO_QUESTIONS]: NO_QUESTIONS_VIEW
  };

  function buildAnswerRadioButton(answer, index) {
    const wrapper = document.createElement("div");
    const input = document.createElement("input");
    input.id = `question_answer_${index}`;
    input.setAttribute("type", "radio");
    input.setAttribute("value", answer);
    input.setAttribute("name", "answer");
    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.innerHTML = answer;
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    return wrapper;
  }

  function fillQuestionFormWithNext() {
    if (GAME.currentQuestionIndex < 0) {
      GAME.currentQuestionIndex = 0;
    } else {
      GAME.currentQuestionIndex++;
    }
    const currentQuestion = GAME.currentQuestion();
    QUESTION_FROM.querySelector("#question_category").innerText =
      currentQuestion.category;
    QUESTION_FROM.querySelector("#question_difficulty").innerText =
      currentQuestion.difficulty;
    QUESTION_FROM.querySelector("#question_question").innerHTML =
      currentQuestion.question;
    const answers = QUESTION_FROM.querySelector("#question_answers");
    while (answers.firstChild) {
      answers.removeChild(answers.firstChild);
    }
    const shufledAnswers = shuffle(
      currentQuestion.incorrect_answer.concat([currentQuestion.correct_answer])
    );
    shufledAnswers
      .map((a, i) => buildAnswerRadioButton(a, i))
      .forEach(radioButton => answers.appendChild(radioButton));
  }

  function showCurrentStateView() {
    document
      .querySelectorAll(".game-view")
      .forEach(form => form.classList.add("hidden"));
    STATE_VIEW_MAP[GAME.state].classList.remove("hidden");
  }

  function startGameWith(questions) {
    if (!questions || !questions.length) {
      GAME.state = NO_QUESTIONS;
      showCurrentStateView();
      return;
    }
    GAME.questions = questions;
    GAME.state = STARTED;
    showCurrentStateView();
    fillQuestionFormWithNext();
  }

  function failTheGame() {
    GAME.state = FAILED;
    showCurrentStateView();
  }

  function finishTheGame() {
    GAME.state = FINISHED;
    showCurrentStateView();
  }

  function handleCorrentAnswer() {
    if (GAME.currentQuestionIndex >= GAME.questions.length - 1) {
      finishTheGame();
    } else {
      fillQuestionFormWithNext();
    }
  }

  function getStartGameFormParams() {
    return {
      category: START_GAME_FORM.querySelector('[name="category"]').value,
      difficulty: START_GAME_FORM.querySelector('[name="difficulty"]').value,
      type: START_GAME_FORM.querySelector('[name="type"]').value
    };
  }
  START_GAME_FORM.addEventListener("submit", e => {
    e.preventDefault();

    fetch("/api/v1/questions?" + serialize(getStartGameFormParams()))
      .then(response => response.json())
      .then(json => startGameWith(json.data.attributes.questions));
  });
  QUESTION_FROM.addEventListener("submit", e => {
    e.preventDefault();

    const answerValue = QUESTION_FROM.querySelector('[name="answer"]:checked')
      .value;
    const currentQuestion = GAME.currentQuestion();
    if (currentQuestion.correct_answer === answerValue) {
      handleCorrentAnswer();
    } else {
      failTheGame();
    }
  });
});
