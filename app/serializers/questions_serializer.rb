class QuestionsSerializer
  include FastJsonapi::ObjectSerializer
  set_id :category
  attributes :questions
end
