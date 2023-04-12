import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);
chai.should();

describe("User API", () => {
  // valid login
  it("POST /login should retrun  message and token", () => {
    const user = { userName: "pravin", password: "pravin123" };
    chai
      .request(app)
      .post("/login")
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have
          .property("message")
          .eql(`${user.userName} Logged in`);
        res.body.should.have.property("token");
      });
  });
  //invalid login
  it("POST /login should retrun  error message ", () => {
    const user = { userName: "nancy", password: "random" };
    chai
      .request(app)
      .post("/login")
      .send(user)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a("object");
        res.body.should.have
          .property("message")
          .eql("Invalid username or Password");
      });
  });

  //valid registration
  it("POST /register should return a messsage and token", () => {
    const newUser = { userName: "test1", password: "random12" };
    chai
      .request(app)
      .post("/register")
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have
          .property("message")
          .eql(`${newUser.userName} registered successfully`);
        res.body.should.have.property("token");
      });
  });
  //invalid registration
  it("POST /register should return a error messsage", () => {
    const newUser = { userName: "pravin", password: "pravin123" };
    chai
      .request(app)
      .post("/register")
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have.property("message").eql("User already exists");
      });
  });
});
