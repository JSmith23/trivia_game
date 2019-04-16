class OpentriviaService

  def initialize(category,difficulty,type)
    @category = category
    @difficulty = difficulty
    @type = type
  end

  def get_questions
    get_json("&category=#{@category}&difficulty=#{@difficulty}&type=#{@type}")
  end

  private

  def get_json(path)
    response = conn.get(path)
    JSON.parse(response.body, symbolize_names:true)
  end

  def conn
    Faraday.new(:url => "https://opentdb.com/api.php?amount=10") do |faraday|
      faraday.params['token'] = ENV['TRIVIA_TOKEN']
      faraday.adapter  Faraday.default_adapter
    end
  end
end
