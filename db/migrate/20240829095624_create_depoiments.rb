class CreateDepoiments < ActiveRecord::Migration[7.1]
  def change
    create_table :depoiments do |t|
      t.string :name
      t.text :depoiment

      t.timestamps
    end
  end
end
