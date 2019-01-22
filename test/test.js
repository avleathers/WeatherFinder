const Nightmare = require("nightmare");
const assert = require("assert");

//Test 1 Load home page without error

describe("Load a Page", function() {
  // Recommended: 5s locally, 10s to remote server *2
  this.timeout("30s");

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  describe("/ (Home Page)", () => {
    it("should load without error", done => {
      nightmare
        .goto("http://localhost:8080")
        .wait(5000) //let page stay up for 5 sec
        .end()
        .then(function(result) {
          done();
        })
        .catch(done);
    });
  });
});

//Test 2

let nightmare = null
beforeEach(() => {
  // show true lets you see wth is actually happening :)
  nightmare = new Nightmare({ show: true })
})

describe("test that browser goes to posts after new post submit", () => {
  it("should load without error", done => {
    nightmare
      // Visit blog post page
      .goto("http://localhost:8080")
      .click("#new-blog")
      .wait(2000)
      // Enter blog title (skipping dropdown)
      .type("#blogTitle", "Sunny Southern CA!")
      // Enter username
      .type("#userName", "Mickey Mouse")
      // Enter cityname
      .type("#cityName", "Disneyland")
      // Enter statename
      .type("#stateName", "CA")
      // Enter countryname
      .type("#countryName", "USA")
      // Enter weather blog
      .type(
        "#weatherInput",
        "At the happiest place on earth, it is sunny and in the mid 60s."
      )
      // Take a screenshot of the blog form
      .wait(3000)
      .screenshot("newblog.png")
      // Click submit button.
      .click("#new-blog")
      .wait(2000)
      // Take a screenshot and save it to the current directory.
      .screenshot("blogs.png")
      .wait(5000)
      .end()
      .then(result => {
        done();
      })
      .catch(done);
  });
});
