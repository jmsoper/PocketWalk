class ToursController < ApplicationController
  skip_before_action :require_login, only: [:index, :show]
  before_action :set_tour, only: [:show, :edit, :update, :destroy]

  # GET /tours
  # GET /tours.json
  def index
    @tours = Tour.all
    @hash = Gmaps4rails.build_markers(@tours) do |tour, marker|
      tour_path = view_context.link_to tour.name, tour_path(tour)
      marker.lat tour.latitude
      marker.lng tour.longitude
      marker.title tour.name
      marker.infowindow "<b>#{tour_path}, <br> #{tour.location}</b>"
    end
  end

  # GET /tours/1
  # GET /tours/1.json
  def show
    @tour = Tour.find(params[:id])
    @stops = @tour.stops
    if @stops.length > 0
      @hash = Gmaps4rails.build_markers(@stops) do |stop, marker|
        stop_path = view_context.link_to stop.name, stop_path(stop)
        marker.lat stop.latitude
        marker.lng stop.longitude
        marker.title stop.name
        marker.infowindow "<b>#{stop_path}, <br> #{stop.description}</b>"
      end
    else
      @hash = Gmaps4rails.build_markers(@tour) do |tour, marker|
        tour_path = view_context.link_to tour.name, tour_path(tour)
        marker.lat tour.latitude
        marker.lng tour.longitude
        marker.title tour.name
        marker.infowindow "<b>#{tour_path}, <br> #{tour.location}</b>"
      end
    end

  end

  # GET /tours/new
  def new
    @tour = Tour.new
  end

  # GET /tours/1/edit
  def edit
    @stop = Stop.new
  end

  # POST /tours
  # POST /tours.json
  def create
    @tour = Tour.new(tour_params)

    respond_to do |format|
      if @tour.save
        format.html { redirect_to @tour, notice: 'Tour was successfully created.' }
        format.json { render :show, status: :created, location: @tour }
      else
        format.html { render :new }
        format.json { render json: @tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tours/1
  # PATCH/PUT /tours/1.json
  def update
    respond_to do |format|
      if @tour.update(tour_params)
        format.html { redirect_to @tour, notice: 'Tour was successfully updated.' }
        format.json { render :show, status: :ok, location: @tour }
      else
        format.html { render :edit }
        format.json { render json: @tour.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tours/1
  # DELETE /tours/1.json
  def destroy
    @tour.destroy
    respond_to do |format|
      format.html { redirect_to tours_url, notice: 'Tour was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def show_stops
    @tour = Tour.find(params[:tour_params])
    @stops = @tour.stops
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tour
      @tour = Tour.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tour_params
      params.require(:tour).permit(:name, :description, :location, :latitude, :longitude, :user_id)
    end
end
