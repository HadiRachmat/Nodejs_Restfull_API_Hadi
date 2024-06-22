import {
  createTestUser,
  removeTestAllContact,
  removeTestUser,
} from "./test-util";
import supertest from "supertest";
import { web } from "../src/application/web.js";

describe(" POST /api/users/contact", function () {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestAllContact();
    await removeTestUser();
  });
  it("should can create new Contact ", async () => {
    const result = await supertest(web)
      .post("/api/users/contact")
      .set("Authorization", "test")
      .send({
        first_name: "hadi",
        last_name: "rachmat",
        email: "test@gmail.com",
        phone: "0898797123",
      });
    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.first_name).toBe("hadi");
    expect(result.body.data.last_name).toBe("rachmat");
    expect(result.body.data.email).toBe("test@gmail.com");
    expect(result.body.data.phone).toBe("0898797123");
  });

  it("should cann't create new Contact ", async () => {
    const result = await supertest(web)
      .post("/api/users/contact")
      .set("Authorization", "test")
      .send({
        first_name: "",
        last_name: "rachmat",
        email: "test",
        phone: "08987971232313123123",
      });
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});
