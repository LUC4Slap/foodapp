class Depoiment < ApplicationRecord
  validates :name, presence: true
  validates :depoiment, presence: true
end
