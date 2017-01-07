require 'rails_helper'

RSpec.describe "tours/index", type: :view do
  before(:each) do
    assign(:tours, [
      Tour.create!(
        :name => "Name",
        :description => "MyText",
        :latitude => "9.99",
        :longitude => "9.99",
        :user_id => "User",
        :foreign_key => "Foreign Key"
      ),
      Tour.create!(
        :name => "Name",
        :description => "MyText",
        :latitude => "9.99",
        :longitude => "9.99",
        :user_id => "User",
        :foreign_key => "Foreign Key"
      )
    ])
  end

  it "renders a list of tours" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "User".to_s, :count => 2
    assert_select "tr>td", :text => "Foreign Key".to_s, :count => 2
  end
end
