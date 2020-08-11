module Api
    module V1
        class Api::V1::CommentsController < ApplicationController
            def index
                @comments = Comment.all
                render json: @comments
                
            end

            def create
                @comment = Comment.create({name: params['name'], email: params['email'], description: params['description']})
                render json: @comment 
            end
        end
    end
end