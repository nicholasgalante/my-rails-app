class AddGoalToCauses < ActiveRecord::Migration[6.1]
  def change
    add_column :causes, :goal, :integer
  end
end
