import {
  createTestContact,
  createTestUser,
  getTestContact,
  removeTestAllContact,
  removeTestUser,
} from "./test-util";
import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";

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

describe("GET  /api/users/contact/:contactId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
  });

  afterEach(async () => {
    await removeTestAllContact();
    await removeTestUser();
  });
  it("should can doing get contact ", async () => {
    const testContact = await getTestContact();
    const result = await supertest(web)
      .get("/api/users/contact/" + testContact.id)
      .set("Authorization", "test");
    logger.info(result);
    expect(result.status).toBe(200);
    expect(result.body.data.id).toBe(testContact.id);
    expect(result.body.data.first_name).toBe(testContact.first_name);
    expect(result.body.data.last_name).toBe(testContact.last_name);
    expect(result.body.data.email).toBe(testContact.email);
    expect(result.body.data.phone).toBe(testContact.phone);
  });
  it("should cann't get contact ", async () => {
    const testContact = await getTestContact();
    const result = await supertest(web)
      .get("/api/users/contact/" + (testContact.id + 1))
      .set("Authorization", "test");
    logger.info(result);
    expect(result.status).toBe(404);
  });
});

describe("PUT /api/users/contact/:contactId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
  });

  afterEach(async () => {
    await removeTestAllContact();
    await removeTestUser();
  });

  it("should can doing update existing contact", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .put("/api/users/contact/" + testContact.id)
      .set("Authorization", "test")
      .send({
        first_name: "hadi",
        last_name: "rachmat",
        email: "test@gmail.com",
        phone: "0898797123",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.first_name).toBe("hadi");
    expect(result.body.data.last_name).toBe("rachmat");
    expect(result.body.data.email).toBe("test@gmail.com");
    expect(result.body.data.phone).toBe("0898797123");
  });
  it("should can doing update existing contact", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .put("/api/users/contact/" + testContact.id)
      .set("Authorization", "test")
      .send({
        first_name: "",
        last_name: "",
        email: "test@gmail.com",
        phone: "",
      });

    expect(result.status).toBe(400);
  });
  it("should can doing update existing contact", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .put("/api/users/contact/" + (testContact.id + 1))
      .set("Authorization", "test")
      .send({
        first_name: "hadi",
        last_name: "rachmat",
        email: "test@gmail.com",
        phone: "0898797123",
      });

    expect(result.status).toBe(404);
  });
});

describe("DELETE /api/users/contact/:contactId ", function () {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
  });

  afterEach(async () => {
    await removeTestAllContact();
    await removeTestUser();
  });

  it("should can doing remove contact ", async () => {
    let testContact = await getTestContact(); 
    const result = await supertest(web)
      .delete("/api/users/contact/" + testContact.id)
      .set("Authorization", "test");

    // logger.log(result);
    expect(result.status).toBe(200);
    expect(result.body.data).toBe("OKE");

    testContact = await getTestContact();
    expect(testContact).toBeNull();
  });

  it("should can doing remove contact ", async () => {
    let testContact = await getTestContact(); 
    const result = await supertest(web)
      .delete("/api/users/contact/" +( testContact.id+1))
      .set("Authorization", "test");

    // logger.log(result);
    expect(result.status).toBe(404);
  });
});
