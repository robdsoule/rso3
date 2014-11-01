class PostsController < ApplicationController

  def index
    #Fetch all posts
    @posts = Post.all
  end

end
