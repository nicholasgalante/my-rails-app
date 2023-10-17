class RemoveUserIdFromCauses < ActiveRecord::Migration[6.1]
  def change
    remove_column :causes, :user_id, :integer
  end
end
