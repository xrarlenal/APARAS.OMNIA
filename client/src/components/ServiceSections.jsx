import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'conditions',
    title: '疾病词条板块',
    route: '/conditions',
    summary: '提供疾病定义、核心症状、鉴别要点、并发风险等结构化信息。',
    backendFields: ['conditionId', 'name', 'aliases', 'symptoms', 'criteria', 'updatedAt'],
    frontendFields: ['列表筛选', '词条详情', '关联药物跳转'],
  },
  {
    id: 'medications',
    title: '药物板块',
    route: '/medications',
    summary: '按疾病维度管理常见药物、通用名、剂型、不良反应与禁忌提示。',
    backendFields: ['drugId', 'genericName', 'tradeNames', 'indications', 'contraindications', 'riskLevel'],
    frontendFields: ['药物卡片', '分组标签', '风险级别标记'],
  },
  {
    id: 'usage-docs',
    title: '用药方式文档板块',
    route: '/usage-docs',
    summary: '承载服药方式、随访监测、停药策略、特殊人群说明等文档。',
    backendFields: ['docId', 'topic', 'version', 'sections', 'references', 'reviewedAt'],
    frontendFields: ['章节目录', '锚点导航', '文档版本切换'],
  },
];

function ServiceSections() {
  return (
    <section className="service-sections">
      {sections.map((section) => (
        <Link key={section.id} className="service-card service-card-link" to={section.route}>
          <h2>{section.title}</h2>
          <p>{section.summary}</p>

          <h3>后端返回字段</h3>
          <div className="tag-list">
            {section.backendFields.map((field) => (
              <span key={field} className="tag backend">{field}</span>
            ))}
          </div>

          <h3>前端实现范围</h3>
          <div className="tag-list">
            {section.frontendFields.map((field) => (
              <span key={field} className="tag frontend">{field}</span>
            ))}
          </div>
        </Link>
      ))}
    </section>
  );
}

export default ServiceSections;
