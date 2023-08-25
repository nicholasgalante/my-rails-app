class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.string :amount
      t.integer :user_id
      t.integer :cause_id

      t.timestamps
    end
  end
end
