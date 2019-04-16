document.addEventListener("DOMContentLoaded", () => {
  const NOT_STARTED = "NOT_STARTED";
  const STARTED = "STARTED";
  const FAILED = "FAILED";
  const FINISHED = "FINISHED";

  const GAME = {
    state: NOT_STARTED,
    questions: [],
    currentQuestionIndex: -1
  };

  const START_GAME_FORM = document.getElementById("start_game_form");
  const QUESTION_FROM = document.getElementById("question_form");

  const STATE_VIEW_MAP = {
    [NOT_STARTED]: START_GAME_FORM,
    [STARTED]: QUESTION_FROM
  };

  function showCurrentStateView() {
    document
      .querySelectorAll(".game-form")
      .forEach(form => form.classList.add("hidden"));
    STATE_VIEW_MAP[GAME.state].classList.remove("hidden");
  }

  function startGameWith(questions) {
    GAME.questions = questions;
    GAME.state = STARTED;
    GAME.currentQuestionIndex = 0;
    showCurrentStateView();
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
});
