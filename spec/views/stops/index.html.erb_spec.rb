require 'rails_helper'

RSpec.describe "stops/index", type: :view do
  before(:each) do
    assign(:stops, [
      Stop.create!(
        :tour => nil,
        :latitude => "9.99",
        :longitude => "9.99",
        :name => "Name",
        :description => "MyText",
        :image => ""
      ),
      Stop.create!(
        :tour => nil,
        :latitude => "9.99",
        :longitude => "9.99",
        :name => "Name",
        :description => "MyText",
        :image => ""
      )
    ])
  end

  it "renders a list of stops" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
  end
end
