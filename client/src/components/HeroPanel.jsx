import { Link } from 'react-router-dom';

function HeroPanel() {
  return (
    <section className="glass hero-panel">
      <p className="eyebrow">APARAS.OMNIA</p>
      <h1>精神健康词条与药物信息框架</h1>
      <p className="lead">
        当前版本专注于前端信息架构：疾病词条、药物资料、用药方式文档三大板块。
        实际条目内容预留给后端接口返回。
      </p>
      <div className="hero-actions">
        <Link to="/conditions" className="cta primary">进入词条</Link>
        <Link to="/medications" className="cta ghost">查看药物</Link>
        <Link to="/usage-docs" className="cta ghost">用药文档</Link>
      </div>
    </section>
  );
}

export default HeroPanel;
