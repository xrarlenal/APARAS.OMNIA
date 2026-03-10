const metrics = [
  { value: '03', label: '核心业务板块' },
  { value: '07', label: '首批疾病词条' },
  { value: 'API', label: '后端内容注入' },
];

function FeatureStrip() {
  return (
    <section className="glass feature-strip">
      {metrics.map((metric) => (
        <div key={metric.label} className="feature-item">
          <span className="feature-number">{metric.value}</span>
          <span className="feature-label">{metric.label}</span>
        </div>
      ))}
    </section>
  );
}

export default FeatureStrip;
