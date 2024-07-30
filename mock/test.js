const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/test",
    method: "get",
    response: (config) => {
      return {
        errno: 0,
        data: {
          name: Random.cname(),
        },
      };
    },
  },
];
