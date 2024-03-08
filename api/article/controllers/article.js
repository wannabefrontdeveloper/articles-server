module.exports = {
  async create(ctx) {
    // 사용자의 id를 데이터에 추가
    ctx.request.body.user = ctx.state.user.id;
    // article 데이터 생성
    const entity = await strapi.services.article.create(ctx.request.body);
    // 잘못된 필드 및 Private 값 제외하고 반환
    return sanitizeEntitiy(entity, { model: strapi.models.article });
  },
};
