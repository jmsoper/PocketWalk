class FixAddressColumnNameInStops < ActiveRecord::Migration[5.0]
  def change
    rename_column :stops, :address, :full_street_address
  end
end
