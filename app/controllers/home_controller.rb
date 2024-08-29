class HomeController < ApplicationController
  def index
    @main_categories = Category.take(5)
    @depoimentos = Depoiment.all
  end
end
