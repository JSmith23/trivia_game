class Api::V1::QuestionsController < ApplicationController
  def index
    render json: QuestionsSerializer.new(
      QuestionsGenerator.new(
        params[:category],
        params[:difficulty],
        params[:type]
      )
    )
  end
end
