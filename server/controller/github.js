module.exports = {
  my_profile: (req, res) => {
    var request = require("request");
    var options = {
      url: `http://api.github.com/user/repos`,
      headers: {
        Authorization: `token ${req.headers.access_token}`,
        "User-Agent": "request",
        Accept: "application/vnd.github.mercy-preview+json"
      }
    };

    function callback(error, response, body) {
      if (!error && res.statusCode == 200) {
        res
          .status(200)
          .json({ msg: "this is my profile", data: JSON.parse(body) });
      } else {
        res.status(500).json({ msg: "err", error: error.message });
      }
    }
    request(options, callback);
  },

  create_repo: (req, res) => {
    var request = require("request");
    var options = {
      method: "post",
      url: `https://api.github.com/user/repos`,
      headers: {
        "User-Agent": "request",
        "Content-Type": "application/json",
        Authorization: `token ${req.headers.access_token}`
        // Accept: "application/vnd.github.mercy-preview+json"
      },
      json: {
            name: req.body.name
        // name: req.body.name,
        // description: req.body.description,
        // homepage: req.body.homepage,
        // private: req.body.private,
        // has_issues: req.body.has_issues,
        // has_projects: req.body.has_projects,
        // has_wiki: req.body.has_wiki
    },
    };
    function callback(error, response, body) {
      console.log('-error--', response.body.errors)
      if (!error && res.statusCode == 200) {
        res
          .status(201)
          .json({ msg: `repo created`, data: JSON.stringify(body) });
      } else {
        res.status(500).json({ msg: "err", error: response.body.errors });
      }
    }
    request(options, callback);
  },

  search_profile: (req, res) => {
    var request = require("request");
    var user = req.params.user;

    var options = {
      url: `http://api.github.com/users/${user}`,
      headers: {
        Authorization: `token ${req.headers.access_token}`,
        "User-Agent": "request",
        Accept: "application/vnd.github.mercy-preview+json"
      }
    };

    function callback(error, response, body) {
      if (!error && res.statusCode == 200) {
        res
          .status(200)
          .json({ msg: `get profile ${user}`, data: JSON.parse(body) });
      } else {
        res.status(500).json({ msg: "err", error: error.message });
      }
    }
    request(options, callback);
  }
};
