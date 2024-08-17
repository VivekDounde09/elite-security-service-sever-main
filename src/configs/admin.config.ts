import { registerAs } from "@nestjs/config";

export const adminConfigFactory = registerAs("admin", () => ({
  passwordSaltLength: 16,
  passwordHashLength: 32,
  profileImagePath: "admin/profile",
  // email1: process.env.ADMIN_EMAIL1 || "rohit.arlekar@elitesec.in",
  // email2: process.env.ADMIN_EMAIL2 || "rohit.arlekar@gmail.com",
  email1: process.env.ADMIN_EMAIL1 || "solankisatyam3105@gmail.com",
  email2: process.env.ADMIN_EMAIL2 || "khushboorathore774.@gmail.com",
}));
