import { stub } from "sinon";
import { expect } from "chai";
import { bookService } from "../../src/services/book.js";
import * as bookController from "../../src/controllers/book.js";

describe("Book controller tests", () => {
  const mockResponse = () => {
    const res = {};
    res.json = stub().returns(res);
    res.status = stub().returns(res);
    return res;
  };

  const mockRequest = (query, body) => {
    const req = {};
    req.query = { ...query };
    req.body = { ...body };
    return req;
  };
  it("should return all books response", async () => {
    const res = mockResponse();
    const req = mockRequest({}, {});
    stub(bookService, "getAllBooks").resolves([]);
    try {
      await bookController.getAllBooks(req, res);
      expect(res.status.calledWith(200)).true;
      expect(res.json.calledWith([])).true;
    } catch (error) {
      throw error;
    }
  });
  it("Should get book by Id", () => {
    const req = mockRequest({ id: 1 });
    const res = mockResponse();
    stub(bookService, "getBookById").resolves({});
  });
});
