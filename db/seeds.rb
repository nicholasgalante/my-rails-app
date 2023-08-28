# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "🌱 Seeding causes..."

Cause.create!([
  {
    title: "Equipping Artistic Explorers: Classroom Supplies Drive",
    description: "Fuel the creativity of our students by supporting our classroom supplies drive. Your contribution will provide paints, brushes, and canvases, allowing young artists to explore their imagination and express themselves through art.",
    school_name: "Harmony Elementary School",
    city: "New York",
    state: "NY",
    image_url: "https://unsplash.com/photos/3DkouQeZjp4"
  },
  {
    title: "Helping Hands: Supporting a Student's Medical Needs",
    description: "Join us in providing vital support for Sarah, a brave student battling health challenges. Your generosity will help cover medical expenses, ensuring Sarah can continue her education with a smile on her face.",
    school_name: "Sunshine Middle School",
    city: "New York",
    state: "NY",
    image_url: "https://unsplash.com/photos/RYABMCLP7aM"
  },
  {
    title: "Empowering Literacy: School-wide Reading Event",
    description: "Ignite the love for reading by sponsoring our school-wide reading event. Your contribution will enable us to host book clubs, author talks, and provide books for every student, fostering a lifelong passion for learning.",
    school_name: "Storyville High School",
    city: "New York",
    state: "NY",
    image_url: "https://unsplash.com/photos/kcT-7cirBEw"
  },
  {
   title: "Path to Robotic Ingenuity: Classroom Robotics Fund",
   description: "Embark on a journey of technological innovation by supporting our classroom robotics fund. Your donation will bring robotic mechanical equipment to our students, empowering them to explore the exciting world of robotics and engineering.",
   school_name: "Innovation Academy",
   city: "New York",
   state: "NY",
   image_url: "https://unsplash.com/photos/wCVNhNnI_2s"
  },  
  {
   title: "Tablets for Literary Adventures: Igniting Reading Passion",
   description: "Join us in providing tablets to our classroom, transforming reading into an immersive journey. With these tablets, students will have access to a digital library, interactive stories, and educational apps, fostering a lifelong love for reading.",
   school_name: "Discovery Elementary",
   city: "New York",
   state: "NY",
   image_url: "https://example.com/images/reading_tablets.jpg"
 },
])

puts "✅ Done seeding!"