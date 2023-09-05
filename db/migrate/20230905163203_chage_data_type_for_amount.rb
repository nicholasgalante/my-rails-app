class ChageDataTypeForAmount < ActiveRecord::Migration[6.1]
  def change
    change_column :donations, :amount, 'numeric USING CAST(amount AS numeric)'
  end
end
