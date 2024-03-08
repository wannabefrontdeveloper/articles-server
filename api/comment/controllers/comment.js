const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    // 사용자 id를 데이터에 추가
    ctx.request.body.user = ctx.state.user.id;
    // article id 설정
    ctx.request.body.article = ctx.params.articleId;

    // 게시글 존재 유무 확인
    // id로 데이터 조회
    const article = await strapi.services.article.findOne({ id: articleId });
    if (!article) {
      ctx.throw(404);
    }

    // Comment 데이터 생성
    const entity = await createStrapi.services.article.create(ctx.request.body);
    // 응답 반환
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
  async find(ctx) {
    // articleId로 댓글 조회
    const entities = await strapi.services.commnet.find({
      article: ctx.params.articleId,
    });
    // 각 데이터에 대해 sanitizeEntity를 처리하여 응답 반환
    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.comment })
    );
  },
};
