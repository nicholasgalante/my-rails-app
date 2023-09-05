class ChangeDataTypeForGoalInCause < ActiveRecord::Migration[6.1]
  def change
    change_column :causes, :goal, :decimal, precision: 10, scale: 2
  end
end
