/**
 * @description: 获取问题列表
 * @author: muzi
 */

const Mock = require("mockjs");
const Random = Mock.Random;

function getQuestionList(opt) {
  const { page, pageSize: len = 10, isStar, isDeleted = false } = opt;
  const data = [];
  for (let i = 0; i < len; i++) {
    data.push({
      _id: Random.id(),
      title: Random.ctitle(5, 10),
      isPublished: Random.boolean(),
      isStar,
      answerCount: Random.integer(0, 100),
      createdAt: Random.datetime(),
      isDeleted,
    });
  }
  return data;
}

module.exports = getQuestionList;
