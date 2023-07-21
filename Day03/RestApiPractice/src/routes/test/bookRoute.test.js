import request from "supertest";
import { app } from "../../../app.js";
import { expect } from "chai";
describe("Book routes test", () => {
  let server = request(app);

  describe("Get: /books/:id", () => {
    it("should get book by id ", async () => {
      try {
        const response = await server
          .get("/books/64b50b041bce448f4ea66260")
          .set({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.YXJ5QGdtYWlsLmNvbQ.zfUM6x_I5N1aGMnQZrdsAmy9u8mbUXspmB8kbJzOSH8",
          });
        const expectedResponse = {
          author: "Chinua Achebe",
          country: "Nigeria",
          imageLink: "images/things-fall-apart.jpg",
          language: "English",
          link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
          pages: 209,
          title: "Things Fall Apart",
          year: 1958,
          createdAt: "2023-07-21T04:52:07.920Z",
        };
        expect(response.statusCode).to.be.equal(200);
        expect(response.header["content-type"]).to.be.equal(
          "application/json; charset=utf-8"
        );
        expect(response.body).to.be.an('object').and.has.keys('data','error','status')
        expect(response.body.data[0].author).to.be.deep.equal(
          expectedResponse.author
        );
        expect(response.body.error).to.be.equal(null);
      } catch (error) {
        throw error;
      }
    });
    it("should not get data", async () => {
      try {
        const response = await server.get("/books/64b50b041bce448f4ea66260");

        expect(response.statusCode).to.be.equal(403);
        expect(response.body.error).to.be.not.equal(null);
      } catch (error) {
        throw error;
      }
    });
  });

});
