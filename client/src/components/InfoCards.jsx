const cards = [
  {
    title: '疾病词条板块',
    description: '覆盖抑郁症、焦虑症、双相情感障碍、ADHD、阿斯伯格、易性症、性别焦虑等条目。',
  },
  {
    title: '药物资料板块',
    description: '按疾病建立药物列表、剂型、适应证与风险提示的结构化占位。',
  },
  {
    title: '用药方式文档',
    description: '用于承载服药方式、监测建议、注意事项等后端文档内容。',
  },
];

function InfoCards() {
  return (
    <section className="grid-panels">
      {cards.map((card) => (
        <article key={card.title} className="glass info-card">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </article>
      ))}
    </section>
  );
}

export default InfoCards;
