require 'rails_helper'

describe 'Open Trivia Service' do

  before(:each) do
    @category = "Animals"
    @difficulty = "Easy"
    @type = ' '
    @trivia = OpentriviaService.new(@category,@difficulty,@type)
  end

  describe "Open Trivia API" do
    it "is an instance" do
      expect(@trivia).to be_an_instance_of(OpentriviaService)
    end
  end

    it ".questions", :vcr do
      data = @trivia.get_questions
      expect(data).to have_key(:response_code)
      expect(data).to have_key(:results)
    end

end
