# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
require "bcrypt"

puts "Clearing the database..."
[Cause, Donation].each do |model|
  model.delete_all
end

puts "🌱 Seeding users..."

u1 = User.create(
  username: "user1", 
  email_address: "user1@example.com", 
  password_digest: BCrypt::Password.create("password1"),
)

u2 = User.create(
  username: "user2", 
  email_address: "user2@example.com", 
  password_digest: BCrypt::Password.create("password2"),
)

u3 = User.create(
  username: "user3", 
  email_address: "user3@example.com", 
  password_digest: BCrypt::Password.create("password3"),
)

u4 = User.create(
   username: "user4", 
   email_address: "user4@example.com", 
   password_digest: BCrypt::Password.create("password4"),
 )

puts "🌱 Seeding causes..."

c1 = Cause.create!(
  title: "Equipping Artistic Explorers: Classroom Supplies Drive",
  description: "Fuel the creativity of our students by supporting our classroom supplies drive. Your contribution will provide paints, brushes, and canvases, allowing young artists to explore their imagination and express themselves through art.",
  school_name: "Harmony Elementary School",
  city: "New York",
  state: "NY",
  image_url: "https://unsplash.com/photos/3DkouQeZjp4",
  goal: 300.00,
)
c2 = Cause.create!(
  title: "Helping Hands: Supporting a Student's Medical Needs",
  description: "Join us in providing vital support for Sarah, a brave student battling health challenges. Your generosity will help cover medical expenses, ensuring Sarah can continue her education with a smile on her face.",
  school_name: "Sunshine Middle School",
  city: "New York",
  state: "NY",
  image_url: "https://unsplash.com/photos/RYABMCLP7aM",
  goal: 750.00,
)
c3 = Cause.create!(
  title: "Empowering Literacy: School-wide Reading Event",
  description: "Ignite the love for reading by sponsoring our school-wide reading event. Your contribution will enable us to host book clubs, author talks, and provide books for every student, fostering a lifelong passion for learning.",
  school_name: "Storyville High School",
  city: "New York",
  state: "NY",
  image_url: "https://unsplash.com/photos/kcT-7cirBEw",
  goal: 650.00,
)
c4 = Cause.create!(
  title: "Path to Robotic Ingenuity: Classroom Robotics Fund",
  description: "Embark on a journey of technological innovation by supporting our classroom robotics fund. Your donation will bring robotic mechanical equipment to our students, empowering them to explore the exciting world of robotics and engineering.",
  school_name: "Innovation Academy",
  city: "New York",
  state: "NY",
  image_url: "https://unsplash.com/photos/wCVNhNnI_2s",
  goal: 800.00,
)
c5 = Cause.create!(
  title: "Tablets for Literary Adventures: Igniting Reading Passion",
  description: "Join us in providing tablets to our classroom, transforming reading into an immersive journey. With these tablets, students will have access to a digital library, interactive stories, and educational apps, fostering a lifelong love for reading.",
  school_name: "Discovery Elementary",
  city: "New York",
  state: "NY",
  image_url: "https://example.com/images/reading_tablets.jpg",
  goal: 1200.00,
)

puts "🌱 Seeding donations..."

Donation.create!(user_id: u2.id, cause_id: c1.id, amount: 25.00)
Donation.create!(user_id: u1.id, cause_id: c2.id, amount: 100.00)
Donation.create!(user_id: u4.id, cause_id: c3.id, amount: 15.00)
Donation.create!(user_id: u3.id, cause_id: c4.id, amount: 30.00)
Donation.create!(user_id: u4.id, cause_id: c5.id, amount: 250.00)
Donation.create!(user_id: u4.id, cause_id: c1.id, amount: 50.00)
Donation.create!(user_id: u4.id, cause_id: c2.id, amount: 75.00)
Donation.create!(user_id: u3.id, cause_id: c3.id, amount: 25.00)
Donation.create!(user_id: u2.id, cause_id: c2.id, amount: 40.00)
Donation.create!(user_id: u1.id, cause_id: c2.id, amount: 20.00)

puts "✅ Done seeding!"
