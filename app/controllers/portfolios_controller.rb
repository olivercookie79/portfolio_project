class PortfoliosController < ApplicationController
  before_action :set_portfolio, only: [:show, :edit, :update, :destroy]

  # GET /portfolios
  # GET /portfolios.json
  def index
    @portfolios = Portfolio.all
  end

  # GET /portfolios/1
  # GET /portfolios/1.json
  def show

    # Cloudinary::Api.resources resource_type: 'raw', type: 'upload',  prefix: 't7'

    # binding.pry
    @portfolio = Portfolio.find params[:id]
    # @files = Cloudinary::Api.resources type: 'raw', prefix: 't7'
    @files = Cloudinary::Api.resources resource_type: 'raw', type: 'upload',  prefix:  @portfolio.title
    p @files

  end

  # GET /portfolios/new
  def new
    @portfolio = Portfolio.new
  end

  # GET /portfolios/1/edit
  def edit
  end

  # POST /portfolios
  # POST /portfolios.json
  def create

    # Cloudinary::Api.resources type: 'upload', prefix: 'testo'

    @portfolio = Portfolio.new(portfolio_params)

    p params

    # binding.pry

    if params[:portfolio][:files].present?
      folder = params[:portfolio][:title]
      params[:portfolio][:files].each do |file|
        req = Cloudinary::Uploader.upload(
          file,
          resource_type: 'raw',
          unique_filename: false,
          folder: folder,
          use_filename: true,
          tags: [ folder ]
        )
        # animal.image = req["public_id"]
        puts "UPLOAD! ========================================", req['public_id']
        p req
      end
      @portfolio.sketch = true  # this portfolio item DOES use a 3D sketch
    end


    respond_to do |format|
      if @portfolio.save
        format.html { redirect_to @portfolio, notice: 'Portfolio was successfully created.' }
        format.json { render :show, status: :created, location: @portfolio }
      else
        format.html { render :new }
        format.json { render json: @portfolio.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /portfolios/1
  # PATCH/PUT /portfolios/1.json
  def update
    respond_to do |format|
      if @portfolio.update(portfolio_params)
        format.html { redirect_to @portfolio, notice: 'Portfolio was successfully updated.' }
        format.json { render :show, status: :ok, location: @portfolio }
      else
        format.html { render :edit }
        format.json { render json: @portfolio.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /portfolios/1
  # DELETE /portfolios/1.json
  def destroy
    @portfolio.destroy
    respond_to do |format|
      format.html { redirect_to portfolios_url, notice: 'Portfolio was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_portfolio
      @portfolio = Portfolio.find(params[:id])


      end

    # Only allow a list of trusted parameters through.
    def portfolio_params
      params.require(:portfolio).permit(:title, :subtitle, :content, :main_image, :thumb_image, :files)
    end
end
