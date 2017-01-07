require 'rails_helper'

RSpec.describe "tours/edit", type: :view do
  before(:each) do
    @tour = assign(:tour, Tour.create!(
      :name => "MyString",
      :description => "MyText",
      :latitude => "9.99",
      :longitude => "9.99",
      :user_id => "MyString",
      :foreign_key => "MyString"
    ))
  end

  it "renders the edit tour form" do
    render

    assert_select "form[action=?][method=?]", tour_path(@tour), "post" do

      assert_select "input#tour_name[name=?]", "tour[name]"

      assert_select "textarea#tour_description[name=?]", "tour[description]"

      assert_select "input#tour_latitude[name=?]", "tour[latitude]"

      assert_select "input#tour_longitude[name=?]", "tour[longitude]"

      assert_select "input#tour_user_id[name=?]", "tour[user_id]"

      assert_select "input#tour_foreign_key[name=?]", "tour[foreign_key]"
    end
  end
end
