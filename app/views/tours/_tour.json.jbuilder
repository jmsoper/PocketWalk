json.extract! tour, :id, :name, :description, :location, :user_id, :created_at, :updated_at
json.url tour_url(tour, format: :json)
