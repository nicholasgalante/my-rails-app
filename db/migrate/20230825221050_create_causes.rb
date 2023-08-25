class CreateCauses < ActiveRecord::Migration[6.1]
  def change
    create_table :causes do |t|
      t.string :title
      t.text :description
      t.string :school_name
      t.string :city
      t.string :state
      t.string :image_url

      t.timestamps
    end
  end
end
