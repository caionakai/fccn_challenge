class Comment
    include Mongoid::Document
  
    field :name, type: String
    field :email, type: String
    field :description, type: String
  
end