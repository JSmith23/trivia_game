class Questions
  attr_reader :category, :difficulty, :question, :correct_answer, :incorrect_answer
  def initialize(data)
    @category = data[:category]
    @difficulty = data[:difficulty]
    @question = data[:question]
    @correct_answer = data[:correct_answer]
    @incorrect_answer = data[:incorrect_answers]
  end
end
