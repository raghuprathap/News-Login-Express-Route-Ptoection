var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("Hello",res.text, "res.text is not matching with Hello!");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle and send the computed info", function(done){
    url
        .get("/product/5/6")
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          assert.equal(30,res.text, parseFloat(res.text));

          done();
        });

  });
});

/*
describe("Testing the third route", function(err){
  it("should handle and send the JSON data Part 1", function(done){
    url
        .get("/data")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.name.should.be.equal("Amit");
          myObj.age.should.be.equal("26");
          myObj.location.should.be.equal("Bangalore");
          done();
        });

  });
  it("should handle and send the JSON data", function(done){
    url
        .get("/data/js")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.product.should.be.equal("Mobile");
          myObj.price.should.be.equal("12000");
          done();
        });

  });
});*/
