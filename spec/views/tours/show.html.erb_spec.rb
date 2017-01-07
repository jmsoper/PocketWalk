require 'rails_helper'

RSpec.describe "tours/show", type: :view do
  before(:each) do
    @tour = assign(:tour, Tour.create!(
      :name => "Name",
      :description => "MyText",
      :latitude => "9.99",
      :longitude => "9.99",
      :user_id => "User",
      :foreign_key => "Foreign Key"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/User/)
    expect(rendered).to match(/Foreign Key/)
  end
end
