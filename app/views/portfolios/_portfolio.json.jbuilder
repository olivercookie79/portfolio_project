json.extract! portfolio, :id, :title, :subtitle, :content, :main_image, :thumb_image, :media, :created_at, :updated_at
json.url portfolio_url(portfolio, format: :json)
