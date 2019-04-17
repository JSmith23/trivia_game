require 'rails_helper'

describe 'Questions Endpoint' do
  it 'returns list of questions' do
    get "/api/v1/questions"

    questions_json = JSON.parse(response.body)
    expect(response).to be_successful
    expect(questions_json).to have_key("data")
    expect(questions_json["data"]).to have_key("type")
  end
end