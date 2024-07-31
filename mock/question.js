const Mock = require("mockjs");

const Random = Mock.Random;

const getQuestionList = require("./data/getQuestionList");

module.exports = [
  {
    // 获取单个问卷信息
    url: "/api/question/:id",
    method: "get",
    response: (ctx) => {
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
    // 创建问卷
    url: "/api/question",
    method: "post",
    response: (ctx) => {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // 获取问卷列表
    url: "/api/question",
    method: "get",
    response: (ctx) => {
      const { page, pageSize, isStar, isDeleted } = ctx.query;
      return {
        errno: 0,
        data: {
          list: getQuestionList({
            page: parseInt(page),
            pageSize: parseInt(pageSize),
            isStar: isStar === "true",
            isDeleted,
          }),
          total: 100,
        },
      };
    },
  },
];
