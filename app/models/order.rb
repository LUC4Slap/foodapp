class Order < ApplicationRecord
  has_many :order_products
  validates :customer_email, presence: true
  # validates :fullfiled, presence: true
  validates :total, presence: true
  validates :address, presence: true
end
