import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      username: "test",
    },
  });
};

export const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      username: "test",
      password: await bcrypt.hash("sangatrahasia", 10),
      name: "test",
      token: "test",
    },
  });
};

export const getTestUser = async () => {
  return prismaClient.user.findUnique({
    where: {
      username: "test",
    },
  });
};

export const removeTestAllContact = async () => {
  await prismaClient.contact.deleteMany({
    where: {
      username: "test",
    },
  });
};

export const createTestContact = async () => {
  await prismaClient.contact.create({
    data: {
      username: "test",
      first_name: "test",
      last_name: "test",
      email: "test@gmail.com",
      phone: "0809093123",
    },
  });
};
export const createManyTestContact = async () => {
  for (let index = 0; index < 15; index++) {
    await prismaClient.contact.create({
      data: {
        username: "test",
        first_name: `test${index}`,
        last_name: `test${index}`,
        email: `test${index}@gmail.com`,
        phone: `0809093123${index}`,
      },
    });
  }
};
export const getTestContact = async () => {
  return prismaClient.contact.findFirst({
    where: {
      username: "test",
    },
  });
};
