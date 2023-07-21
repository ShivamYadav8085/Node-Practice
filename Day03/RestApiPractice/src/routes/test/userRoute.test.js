import request from "supertest";
import { app } from "../../../app.js";
import { expect } from "chai";
import { User } from "../../shared/database/models/user.js";
describe("user routes test", () => {
  describe("Register new User", () => {
    const user = {
      name: "testUser",
      email: "test@gm.com",
      password: "test12345",
    };
    after(async () => {
      await User.deleteOne({ email: "test@gm.com" });
    });
    it("Should register new user", async () => {
      try {
        const response = await request(app).post("/user/register").send(user);
        expect(response.body)
          .to.be.an("object")
          .and.have.keys("status", "data", "error");
        expect(response.statusCode).to.be.equal(201);
        expect(response.body.error).to.be.equal(null);
      } catch (error) {
        throw error;
      }
    });
    it("Should not register new user", async () => {
      try {
        const wrongCred = {
          email: "test@gm.com",
          password: "test12345",
        };
        const response = await request(app).post("/user/register").send(wrongCred);
        expect(response.body)
          .to.be.an("object")
          .and.have.keys("status", "data", "error");
        expect(response.statusCode).to.be.equal(422);
        expect(response.body.error).to.be.not.equal(null);
      } catch (error) {
        throw error;
      }
    });
  });
});
