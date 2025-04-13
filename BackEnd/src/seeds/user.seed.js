import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "rahul@gmail.com",
    fullName: "Rahul Sen",
    password: "123456",
    profilePic: "download.jpeg",
  },
  {
    email: "ritesh@gmail.com",
    fullName: "Ritesh Kumar",
    password: "123456",
    profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.openart.ai%2Fpublished%2F4Z2vWsDD0lLbwQba8Vxr%2FKVhylTmz_NhNn_1024.webp&tbnid=Y02Jh8nyfp9cpM&vet=10CAQQxiAoA2oXChMI6Nay3dW4jAMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fopenart.ai%2Fcommunity%2FAjZrHT4ZytmJMG6LYQEu&docid=idlHLVdBzY9VOM&w=1024&h=1024&itg=1&q=some%20male%20profile%20pic%20of%20cartoon&ved=0CAQQxiAoA2oXChMI6Nay3dW4jAMVAAAAAB0AAAAAEAc",
  },
  {
    email: "anish@gmail.com",
    fullName: "Anish Panja",
    password: "123456",
    profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064831924606&tbnid=_ZhbAWkX-c03QM&vet=10CAwQxiAoBGoXChMI6Nay3dW4jAMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FCartoonCaricaturePortrait%2F&docid=JkiGmffVPVdrUM&w=2048&h=2048&itg=1&q=some%20male%20profile%20pic%20of%20cartoon&ved=0CAwQxiAoBGoXChMI6Nay3dW4jAMVAAAAAB0AAAAAEAc",
  },
  {
    email: "sunil@gmail.com",
    fullName: "Sunil Singh",
    password: "123456",
    profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20230610%2Fpngtree-cartoon-image-of-a-boy-with-glasses-image_2905666.jpg&tbnid=WBIvx7eyYByheM&vet=10CBAQxiAoC2oXChMI6Nay3dW4jAMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fcartoon-boy-pictures&docid=shk9m8cGuKnxLM&w=640&h=359&itg=1&q=some%20male%20profile%20pic%20of%20cartoon&ved=0CBAQxiAoC2oXChMI6Nay3dW4jAMVAAAAAB0AAAAAEAc",
  },
  {
    email: "soumyadip@gmail.com",
    fullName: "Soumyadip Roy",
    password: "123456",
    profilePic: "https://www.google.com/imgres?q=some%20male%20profile%20pic%20of%20cartoon&imgurl=https%3A%2F%2Feasy-peasy.ai%2Fcdn-cgi%2Fimage%2Fquality%3D80%2Cformat%3Dauto%2Cwidth%3D700%2Fhttps%3A%2F%2Fmedia.easy-peasy.ai%2F77106652-5e5b-4063-ab1c-312a04246222%2F82d8c885-ab64-4dcb-8019-94ba100ce366.png&imgrefurl=https%3A%2F%2Feasy-peasy.ai%2Fai-image-generator%2Fimages%2Fcheerful-mature-male-late-night-show-host-cartoon&docid=7__79J_6vKw2XM&tbnid=KsfdDxCYN0LREM&vet=12ahUKEwj81cG51riMAxUes1YBHaSxHksQM3oECFkQAA..i&w=700&h=700&hcb=2&itg=1&ved=2ahUKEwj81cG51riMAxUes1YBHaSxHksQM3oECFkQAA",
  },
  {
    email: "aditya@gmail.com",
    fullName: "Aditya Kumar",
    password: "123456",
    profilePic: "https://www.google.com/imgres?q=some%20male%20profile%20pic%20of%20cartoon&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F14%2Fac%2Fcf%2F14accf0ae870b126b5cffdc687d805e7.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fah618442%2Fdownload%2F&docid=UZ-OiqcKgm77cM&tbnid=D8BZkmlWxTf7MM&vet=12ahUKEwj81cG51riMAxUes1YBHaSxHksQM3oECB0QAA..i&w=736&h=736&hcb=2&itg=1&ved=2ahUKEwj81cG51riMAxUes1YBHaSxHksQM3oECB0QAA",
  },

  // Male Users
  // {
  //   email: "james.anderson@example.com",
  //   fullName: "James Anderson",
  //   password: "123456",
  //   profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  // },
  // {
  //   email: "william.clark@example.com",
  //   fullName: "William Clark",
  //   password: "123456",
  //   profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  // },
  // {
  //   email: "benjamin.taylor@example.com",
  //   fullName: "Benjamin Taylor",
  //   password: "123456",
  //   profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   email: "lucas.moore@example.com",
  //   fullName: "Lucas Moore",
  //   password: "123456",
  //   profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  // },
  // {
  //   email: "henry.jackson@example.com",
  //   fullName: "Henry Jackson",
  //   password: "123456",
  //   profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   email: "alexander.martin@example.com",
  //   fullName: "Alexander Martin",
  //   password: "123456",
  //   profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  // },
  // {
  //   email: "daniel.rodriguez@example.com",
  //   fullName: "Daniel Rodriguez",
  //   password: "123456",
  //   profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  // },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();