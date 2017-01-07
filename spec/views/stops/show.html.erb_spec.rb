require 'rails_helper'

RSpec.describe "stops/show", type: :view do
  before(:each) do
    @stop = assign(:stop, Stop.create!(
      :tour => nil,
      :latitude => "9.99",
      :longitude => "9.99",
      :name => "Name",
      :description => "MyText",
      :image => ""
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(//)
  end
end
