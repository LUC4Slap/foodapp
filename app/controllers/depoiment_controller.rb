class DepoimentController < ApplicationController
  def index
  end

  def new
    @depoiment = Depoiment.new
  end

  def create
    debugger
    @depoiment = Depoiment.new(name: params[:name], depoiment: params[:depoiment])
    respond_to do |format|
      if @depoiment.save
        format.html { redirect_to root_path, notice: "Comentario Adicionado" }
        format.json { render :show, status: :created, location: @admin_category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @depoiment.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def depoiments_params
    params.require(:depoiment).permit(:name, :depoiment)
  end
end
