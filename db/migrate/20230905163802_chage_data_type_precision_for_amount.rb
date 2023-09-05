class ChageDataTypePrecisionForAmount < ActiveRecord::Migration[6.1]
  def change
    change_column :donations, :amount, :decimal, precision: 10, scale: 2
  end
end
