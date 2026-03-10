import { Link } from 'react-router-dom';

const medicationGroups = [
  ['抑郁/焦虑相关', ['SSRIs', 'SNRIs', 'NaSSA']],
  ['双相情感障碍相关', ['情绪稳定剂', '非典型抗精神病药']],
  ['ADHD 相关', ['中枢兴奋剂', '非兴奋剂']],
  ['其他共病支持', ['睡眠相关', '焦虑急性处理']],
];

function MedicationsPage() {
  return (
    <section className="glass subpage-card">
      <p className="eyebrow">Medications</p>
      <h1>药物板块</h1>
      <p className="lead">
        当前页面定义药物信息的展示框架，不承载具体医疗建议。药物明细将由后端按审核流程维护。
      </p>

      <div className="sub-grid">
        <article className="sub-block">
          <h3>药物分组占位</h3>
          <div className="section-stack">
            {medicationGroups.map(([title, items]) => (
              <div key={title} className="section-row">
                <strong>{title}</strong>
                <div className="tag-list">
                  {items.map((item) => (
                    <span key={item} className="tag backend">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="sub-block">
          <h3>后端字段契约</h3>
          <p>drugId, genericName, tradeNames, forms, indications, contraindications, sideEffects, interactions, monitoring</p>
        </article>
      </div>

      <div className="sub-grid">
        <article className="sub-block">
          <h3>前端实现</h3>
          <p>药物列表、分组过滤、风险标签、疾病关联跳转、详情抽屉。</p>
        </article>
        <article className="sub-block">
          <h3>状态说明</h3>
          <p>当前为前端骨架版本，具体数据与说明文本由后端接口输出。</p>
        </article>
      </div>

      <Link className="sub-back" to="/">返回首页</Link>
    </section>
  );
}

export default MedicationsPage;