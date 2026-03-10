import { Link } from 'react-router-dom';

const docSections = [
  '给药方式与频次',
  '漏服处理与补服规则',
  '不良反应监测',
  '复诊与剂量调整',
  '停药与换药流程',
  '特殊人群说明',
];

function UsageDocsPage() {
  return (
    <section className="glass subpage-card">
      <p className="eyebrow">Usage Docs</p>
      <h1>用药方式文档板块</h1>
      <p className="lead">
        本页用于承载标准化用药文档。页面只实现文档容器、目录和版本位，实际正文由后端返回。
      </p>

      <div className="sub-grid">
        <article className="sub-block">
          <h3>文档章节占位</h3>
          <div className="tag-list">
            {docSections.map((item) => (
              <span key={item} className="tag frontend">{item}</span>
            ))}
          </div>
        </article>
        <article className="sub-block">
          <h3>后端字段契约</h3>
          <p>docId, topic, version, audience, sections, references, updatedAt, reviewer</p>
        </article>
      </div>

      <div className="sub-grid">
        <article className="sub-block">
          <h3>前端实现</h3>
          <p>目录锚点、正文渲染、版本切换、关联药物跳转、打印样式。</p>
        </article>
        <article className="sub-block">
          <h3>状态说明</h3>
          <p>已完成前端结构化布局，待后端接口填充文档内容。</p>
        </article>
      </div>

      <Link className="sub-back" to="/">返回首页</Link>
    </section>
  );
}

export default UsageDocsPage;