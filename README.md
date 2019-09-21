User Registration
http://localhost:5657/registration

user_name:Gita Katigar
email:gitakatigar@gmail.com
mobile_no:8888888888
address:170 parvat gam surat
access:1 (1 for User and 2 for Admin)

Show all Products
http://localhost:5657/view-products

Add Cart
http://localhost:5657/cart

user_name:Gita Katigar
product_name:PRODUCT_ONE
quantity:2
product_price:520
flag:1
action:add-cart

Edit Cart
http://localhost:5657/cart

user_name:Gita Katigar
product_name:PRODUCT_ONE
quantity:2
product_price:520
flag:1
action:edit-cart

Remove Cart
http://localhost:5657/cart

user_name:Gita Katigar
product_name:PRODUCT_ONE
quantity:2
product_price:520
flag:1
action:delete-cart

View Cart
http://localhost:5657/cart

user_name:Gita Katigar
product_name:PRODUCT_ONE
quantity:2
product_price:520
flag:1
action:view-cart

Store Order
http://localhost:5657/cart

user_name:Gita Katigar
product_name:PRODUCT_ONE
quantity:2
product_price:520
flag:1
action:confirm-cart

Login API
http://localhost:5657/login

user_name:Premal Katigar
password:pskpsk
login_type:user (user for user login and admin for admin login)


Add Product
http://localhost:5657/products

user_name:Premal Katigar
product_name:PRODUCT_TWO
quantity:2
product_price:520
password:pskpsk
action:insert

Edit Product
http://localhost:5657/products

user_name:Premal Katigar
product_name:PRODUCT_TWO
quantity:2
product_price:520
password:pskpsk
action:update

Delete Product
http://localhost:5657/products

user_name:Premal Katigar
product_name:PRODUCT_TWO
quantity:2
product_price:520
password:pskpsk
action:delete

View Orders for Admin
http://localhost:5657/orders

action:select
password:pskpsk
login_type:admin
order_date:2019-09-21

View Orders for User
http://localhost:5657/orders

action:select
password:pskpsk
login_type:admin
order_by:Premal Katigar