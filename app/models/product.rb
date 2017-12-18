class Product < ApplicationRecord
  has_many :orders
  has_many :comments

  # define scope for fetching products that have images
  scope :products_with_images, -> {where.not(image_url: nil)}

  def self.search(search_term)
    # sqllite and postgres are excute search query differently, sqllite uses 'LIKE', postgres uses 'ilike'
    query_env = Rails.env.production? ? 'ilike' : 'LIKE'
    Product.where("name #{query_env} ?", "%#{search_term}%")
  end

  def self.dynamic_indicator
    products_with_images.count
  end

  def highest_rating_comment
    comments.rating_desc.first
  end

  def avg_rating_comment
    comments.average('rating')
  end

  def lowest_rating_comment
    comments.rating_asc.first
  end
end
