const request = require("supertest");
const app = require("../src/server");

describe("GET /", () => {
  test("returns Hello from DevOps", async () => {
    const response = await request(app).get("/");

    // console.log("RESPONSE:", response);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello from DevOps!");
  });
});
