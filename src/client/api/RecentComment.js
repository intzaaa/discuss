import request from 'xhr-ajax'

/**
 * 获取最新评论
 * @param {String} url 请求地址
 * @param {Boolean} reply 是否请求回复评论 默认: true
 * @returns {Array}
 */
async function RecentComment(url, reply) {
  if (!url) return
  const options = {
    url,
    method: 'post',
    data: {
      type: 'RECENT_COMMENT',
      reply
    }
  }

  const { data } = await request(options)
  return data
}

export default RecentComment
