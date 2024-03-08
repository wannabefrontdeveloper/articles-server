const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    // 사용자 id를 데이터에 추가
    ctx.request.body.user = ctx.state.user.id;
    // article id 설정
    ctx.request.body.article = ctx.params.articleId;
    // Comment 데이터 생성
    const entity = await createStrapi.services.article.create(ctx.request.body);
    // 응답 반환
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
};
