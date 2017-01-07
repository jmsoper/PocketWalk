require 'rails_helper'

RSpec.describe "stops/edit", type: :view do
  before(:each) do
    @stop = assign(:stop, Stop.create!(
      :tour => nil,
      :latitude => "9.99",
      :longitude => "9.99",
      :name => "MyString",
      :description => "MyText",
      :image => ""
    ))
  end

  it "renders the edit stop form" do
    render

    assert_select "form[action=?][method=?]", stop_path(@stop), "post" do

      assert_select "input#stop_tour_id[name=?]", "stop[tour_id]"

      assert_select "input#stop_latitude[name=?]", "stop[latitude]"

      assert_select "input#stop_longitude[name=?]", "stop[longitude]"

      assert_select "input#stop_name[name=?]", "stop[name]"

      assert_select "textarea#stop_description[name=?]", "stop[description]"

      assert_select "input#stop_image[name=?]", "stop[image]"
    end
  end
end
