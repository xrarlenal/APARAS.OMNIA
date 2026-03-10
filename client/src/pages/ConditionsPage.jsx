import { Link } from 'react-router-dom';

const conditionSeeds = [
  '抑郁症',
  '焦虑症',
  '双相情感障碍',
  'ADHD',
  '阿斯伯格',
  '易性症',
  '性别焦虑',
];

function ConditionsPage() {
  return (
    <section className="glass subpage-card">
      <p className="eyebrow">Conditions</p>
      <h1>疾病词条板块</h1>
      <p className="lead">
        本页只提供前端结构与接口占位，具体词条正文、诊断标准与更新记录由后端管理。
      </p>

      <div className="sub-grid">
        <article className="sub-block">
          <h3>首批词条范围</h3>
          <div className="tag-list">
            {conditionSeeds.map((item) => (
              <span key={item} className="tag frontend">{item}</span>
            ))}
          </div>
        </article>
        <article className="sub-block">
          <h3>后端字段契约</h3>
          <p>conditionId, name, aliases, symptoms, criteria, differential, medications, references, updatedAt</p>
        </article>
      </div>

      <div className="sub-grid">
        <article className="sub-block">
          <h3>前端实现</h3>
          <p>词条列表、关键词检索、详情页骨架、关联药物跳转入口。</p>
        </article>
        <article className="sub-block">
          <h3>数据状态</h3>
          <p>当前为占位阶段，等待后端 API 接入后填充真实内容。</p>
        </article>
      </div>

      <Link className="sub-back" to="/">返回首页</Link>
    </section>
  );
}

export default ConditionsPage;