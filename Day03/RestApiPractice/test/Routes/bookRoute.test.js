import request from "supertest";
import { app } from "../../app.js";
import { expect } from "chai";
describe("Book routes test", () => {
  let server;

  before(() => {
    server = request(app);
  });
  after((done) => {
    server.close(err=>{
      if(err)
      done(err)
      else
      done()
    });
  });
  describe("GET: /books", () => {
    it("should get all books", () => {});
  });
  describe("GET: /books/:id", () => {
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
          language: "English",
          pages: 209,
          title: "Things Fall Apart",
          year: 1958,
        };
        expect(response.statusCode).to.be.equal(200);
        expect(response.header["content-type"]).to.be.equal(
          "application/json; charset=utf-8"
        );
        expect(response.body)
          .to.be.an("object")
          .and.has.keys("data", "error", "status");

        expect(response.body.data).to.be.an("array");
        expect(response.body.data[0].author).to.be.equal(
          expectedResponse.author
        );
        expect(response.body.data[0].title).to.be.equal(expectedResponse.title);
        expect(response.body.data[0].pages).to.be.equal(expectedResponse.pages);
        expect(response.body.data[0].year).to.be.equal(expectedResponse.year);
        expect(response.body.data[0].language).to.be.equal(
          expectedResponse.language
        );
        expect(response.body.data[0].country).to.be.equal(
          expectedResponse.country
        );
        expect(response.body.error).to.be.equal(null);
        response;
      } catch (error) {
        throw error;
      }
    });
    it("should not get data", (done) => {
      server
        .get("/books/64b50b041bce448f4ea66260")
        .expect(403)
        .end((err, response) => {
          if (err) return done(err);
          expect(response.body.error).to.be.not.equal(null);
          done()
        });
    });
  });
});
