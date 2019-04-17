class QuestionsGenerator
  attr_reader :category, :difficulty, :type
  def initialize(category,difficulty,type)
    @category = category
    @difficulty = difficulty
    @type = type
    @trivia = OpentriviaService.new(@category,@difficulty,@type).get_questions
  end

  def questions
    questions = @trivia
    questions[:results].map do |trivia_data|
      Questions.new(trivia_data)
    end
  end

end