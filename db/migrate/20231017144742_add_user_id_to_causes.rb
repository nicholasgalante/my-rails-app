class AddUserIdToCauses < ActiveRecord::Migration[6.1]
  def change
    add_column :causes, :user_id, :integer
  end
end
