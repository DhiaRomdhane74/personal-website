import './About.css'

const SKILLS = [
  {
    category: 'Data Engineering & Observability',
    tags: ['Prometheus', 'Thanos', 'Grafana', 'PromQL', 'ETL', 'Data Modeling', 'Data Orchestration', 'SQL', 'MongoDB'],
  },
  {
    category: 'Cloud & Infrastructure',
    tags: ['AWS EKS', 'Kubernetes', 'Kafka', 'Docker'],
  },
  {
    category: 'ML & Analytics',
    tags: ['scikit-learn', 'Spark MLlib', 'Deep Learning', 'Time-series forecasting', 'Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Programming',
    tags: ['Python', 'Golang', 'Java', 'SQL'],
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* ── Left col: photo + quick info ── */}
        <div className="about__left">
          <div className="about__photo-wrap">
            <img
              src="/Me.png"
              alt="Dhia Romdhane"
              className="about__photo"
            />
          </div>

          <div className="about__meta">
            <span className="about__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Hannover, Germany
            </span>

            <a href="mailto:dhia.romdhane.pro@gmail.com" className="about__meta-item about__meta-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              dhia.romdhane.pro@gmail.com
            </a>

            <span className="about__badge">
              <span className="about__badge-dot" />
              Data Engineering &amp; Analytics Intern · SYNAOS GmbH
            </span>
          </div>
        </div>

        {/* ── Right col: bio + skills ── */}
        <div className="about__right">
          <div className="about__heading-block">
            <span className="about__eyebrow">About me</span>
            <h2 className="about__name">Dhia Romdhane</h2>
            <p className="about__title">Data &amp; Analytics Engineer</p>
          </div>

          <p className="about__bio">
            Hi, I'm Dhia — a Data &amp; Analytics Engineer with a background in Computing and
            Automation, passionate about building data systems, observability pipelines, and
            machine learning solutions. I thrive in dynamic environments, whether designing ETL
            pipelines, working with cloud infrastructure, or training ML models. I'm constantly
            looking for new challenges at the intersection of data engineering, data analytics,
            and data science.
          </p>

          <div className="about__skills">
            <span className="about__skills-label">Skills</span>
            <div className="about__skill-groups">
              {SKILLS.map(({ category, tags }) => (
                <div key={category} className="about__skill-group">
                  <span className="about__skill-category">{category}</span>
                  <div className="about__tags">
                    {tags.map(tag => (
                      <span key={tag} className="about__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
