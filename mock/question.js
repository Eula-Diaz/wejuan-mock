const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/question/:id",
    method: "get",
    response: (config) => {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
      };
    },
  },
  {
    url: "/api/question",
    method: "post",
    response: (config) => {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
];
