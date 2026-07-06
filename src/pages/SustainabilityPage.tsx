import { motion } from 'framer-motion'
import {
  Gauge, Recycle, Droplets, TreePine, Sun, Truck, FileText,
  ShieldCheck, Users, FileBarChart, Leaf, ArrowUpRight, Sprout,
} from 'lucide-react'
import { Header } from '../components/Header/Header'
import { FlyFooter } from '../components/FlyFooter'
import { PageHero, Eyebrow, NAVY, GREEN, MUTED, EASE } from '../components/PageKit'

/* ── Section 1: Environmental Responsibility ── */
const PILLARS = [
  { Icon: Gauge,    title: 'Carbon reduction',      text: 'Measuring and cutting emissions across Scope 1, 2 and 3, with clear milestones toward net zero.' },
  { Icon: Recycle,  title: 'Waste & circularity',   text: 'Reuse, recycling and packaging redesign that keeps materials in productive use for longer.' },
  { Icon: Droplets, title: 'Resource efficiency',   text: 'Less water, energy and raw material per unit of output through smarter, modern processes.' },
  { Icon: TreePine, title: 'Nature & biodiversity', text: 'Protecting ecosystems near our sites and backing reforestation and habitat projects.' },
]

/* ── Section 2: Sustainability Initiatives ── */
const INITIATIVES = [
  { no: '01', Icon: Sun,         title: 'Renewable energy transition', text: 'Moving our facilities to solar and certified green electricity, with on-site generation where it is feasible.' },
  { no: '02', Icon: Truck,       title: 'Green fleet & logistics',     text: 'Route optimisation, low-emission vehicles and shipment consolidation to cut the emissions behind every delivery.' },
  { no: '03', Icon: FileText,    title: 'Paperless operations',        text: 'Digitising documents, invoicing and workflows to remove paper across all five companies in the group.' },
  { no: '04', Icon: ShieldCheck, title: 'Responsible sourcing',        text: 'Partnering with suppliers who meet ethical and environmental standards and favour recycled, responsible inputs.' },
  { no: '05', Icon: TreePine,    title: 'Community & tree planting',   text: 'Local clean-ups, tree-planting drives and education programs that give back to the communities we operate in.' },
  { no: '06', Icon: Droplets,    title: 'Water stewardship',           text: 'Rainwater harvesting, leak monitoring and efficient fixtures to conserve water across our sites and offices.' },
]

/* ── Section 3: Reports & Updates ── (first entry is the featured one) */
const REPORTS = [
  { Icon: FileBarChart, title: 'Annual Sustainability Report', meta: '2024 - Coming soon', text: 'A full account of our environmental and social performance, targets and year-on-year progress across the entire group - published in one place, in plain language.' },
  { Icon: ShieldCheck,  title: 'ESG & Governance Statement',  meta: 'Updated yearly',    text: 'How ethics, transparency and accountability are embedded into the way every company operates.' },
  { Icon: Gauge,        title: 'Carbon Footprint Disclosure', meta: 'In progress',       text: 'Our measured emissions baseline across Scope 1, 2 and 3, and the reduction pathway we have committed to.' },
  { Icon: Users,        title: 'Community Impact Update',      meta: 'Quarterly',         text: 'Stories and figures from the programs, partnerships and volunteering that support the communities we serve.' },
]

export function SustainabilityPage() {
  const [featured, ...rest] = REPORTS

  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Header />

      <PageHero
        badge="Sustainability"
        line1="Responsible"
        line2="by design."
        description="At Eloma Group, sustainability isn't a department - it's how we operate and grow. Across every vertical we work to minimise our impact, act ethically and build a more resilient future."
        stats={[
          { n: '-30%', label: 'Emissions reduction target' },
          { n: '100%', label: 'Renewable energy ambition' },
          { n: '5', label: 'Companies aligned' },
          { n: '2040', label: 'Net-zero horizon' },
        ]}
      />

      {/* ══════════════════════════════════════════════
          1 · Environmental Responsibility  ·  bento
          ══════════════════════════════════════════════ */}
      <section className="su-sec" style={{ background: 'linear-gradient(180deg,#ffffff,#f3faf7)' }}>
        <span className="su-orb su-orb-a" aria-hidden />
        <div className="su-in" style={{ position: 'relative', zIndex: 1 }}>
          <div className="su-lead">
            <div>
              <Eyebrow label="01 - Environmental Responsibility" />
              <h2 className="su-h">Treading lightly on <span className="su-g">the planet.</span></h2>
            </div>
            <p className="su-lead-p">
              We treat the environment as a stakeholder in every decision. From the energy that powers our
              offices to the way goods move across our network, we measure our impact, cut what we can and
              take responsibility for the rest.
            </p>
          </div>

          <div className="su-bento">
            {/* feature tile */}
            <motion.div className="su-feature"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
            >
              <span className="su-feature-ic"><Sprout size={26} /></span>
              <h3 className="su-feature-h">Every decision, weighed against the planet.</h3>
              <p className="su-feature-x">
                Impact is designed in from the start - not bolted on later. We set targets, report openly and
                improve them year on year across all five companies.
              </p>
              <div className="su-prog">
                <div className="su-prog-top">
                  <span>Net-zero pathway</span><span className="su-prog-yr">2040</span>
                </div>
                <div className="su-prog-track"><span className="su-prog-fill" /></div>
              </div>
            </motion.div>

            {/* four pillars */}
            {PILLARS.map((p, i) => (
              <motion.div key={p.title} className="su-pill"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.06 * (i + 1), ease: EASE }}
              >
                <span className="su-pill-ic"><p.Icon size={21} /></span>
                <h3 className="su-pill-t">{p.title}</h3>
                <p className="su-pill-x">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2 · Sustainability Initiatives  ·  roadmap
          ══════════════════════════════════════════════ */}
      <section className="su-sec" style={{ background: '#fff' }}>
        <div className="su-in">
          <div className="su-lead">
            <div>
              <Eyebrow label="02 - Sustainability Initiatives" />
              <h2 className="su-h">Turning intent into <span className="su-g">action.</span></h2>
            </div>
            <p className="su-lead-p">
              Real programs, running today across the group - each one measured, reviewed and improved so
              our commitments show up in practice, not just on paper.
            </p>
          </div>

          <div className="su-road">
            {INITIATIVES.map((it, i) => (
              <motion.div key={it.no} className="su-step"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 * i, ease: EASE }}
              >
                <div className="su-step-side">
                  <span className="su-step-dot" />
                  <span className="su-step-no">{it.no}</span>
                </div>
                <div className="su-step-main">
                  <span className="su-step-ic"><it.Icon size={20} /></span>
                  <div>
                    <h3 className="su-step-t">{it.title}</h3>
                    <p className="su-step-x">{it.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3 · Reports & Updates  ·  featured + list
          ══════════════════════════════════════════════ */}
      <section className="su-sec" style={{ background: 'linear-gradient(180deg,#f3faf7,#ffffff)' }}>
        <span className="su-orb su-orb-b" aria-hidden />
        <div className="su-in" style={{ position: 'relative', zIndex: 1 }}>
          <div className="su-lead">
            <div>
              <Eyebrow label="03 - Reports & Updates" />
              <h2 className="su-h">Progress, in <span className="su-g">the open.</span></h2>
            </div>
            <p className="su-lead-p">
              Accountability means sharing the numbers - the wins and the work still ahead. Our reporting
              brings together performance, governance and community impact across all five companies.
            </p>
          </div>

          <div className="su-rep-wrap">
            <motion.div className="su-rep-feature"
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="su-rep-feature-top">
                <span className="su-rep-feature-ic"><featured.Icon size={26} /></span>
                <span className="su-report-meta">{featured.meta}</span>
              </div>
              <h3 className="su-rep-feature-t">{featured.title}</h3>
              <p className="su-rep-feature-x">{featured.text}</p>
              <span className="su-rep-link">
                Request a copy <ArrowUpRight size={17} strokeWidth={2.4} />
              </span>
            </motion.div>

            <div className="su-rep-list">
              {rest.map((r, i) => (
                <motion.div key={r.title} className="su-report"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 * i, ease: EASE }}
                >
                  <span className="su-report-ic"><r.Icon size={20} /></span>
                  <div className="su-report-body">
                    <div className="su-report-top">
                      <h4 className="su-report-t">{r.title}</h4>
                      <span className="su-report-meta">{r.meta}</span>
                    </div>
                    <p className="su-report-x">{r.text}</p>
                  </div>
                  <span className="su-report-go"><ArrowUpRight size={17} strokeWidth={2.4} /></span>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="su-note">
            <Leaf size={15} strokeWidth={2.2} style={{ color: GREEN, flexShrink: 0 }} />
            Reports are published as they are finalised. Reach out to our team for the latest figures and documentation.
          </p>
        </div>
      </section>

      <FlyFooter />

      <style>{`
        .su-sec { position: relative; overflow: hidden; padding: clamp(64px,8vw,128px) clamp(24px,5vw,80px); }
        .su-in { max-width: 1760px; margin: 0 auto; }
        @media (min-width: 1920px) { .su-in { max-width: 1900px; } }

        .su-orb { position:absolute; border-radius:50%; pointer-events:none; z-index:0; filter:blur(10px); }
        .su-orb-a { top:-140px; right:-100px; width:520px; height:520px; background:radial-gradient(circle, rgba(60,185,140,0.14), transparent 62%); }
        .su-orb-b { bottom:-160px; left:-120px; width:560px; height:560px; background:radial-gradient(circle, rgba(19,41,61,0.06), transparent 62%); }

        /* shared heading + editorial lead ── */
        .su-h { font-family:'Poppins',sans-serif; font-weight:700; font-size:clamp(30px,4.4vw,60px); color:${NAVY}; letter-spacing:-0.03em; line-height:1.04; margin:16px 0 0; }
        .su-g { color:${GREEN}; }
        .su-lead { display:grid; grid-template-columns:1.05fr 0.95fr; gap:clamp(24px,4vw,72px); align-items:end; margin-bottom:clamp(40px,5vw,60px); }
        .su-lead-p { font-family:'Inter',sans-serif; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:${MUTED}; margin:0; max-width:58ch; }

        /* ── Section 1: bento ── */
        .su-bento { display:grid; grid-template-columns:1.35fr 1fr 1fr; grid-auto-rows:1fr; gap:16px; }
        .su-feature { grid-row:span 2; position:relative; overflow:hidden; display:flex; flex-direction:column;
          padding:clamp(30px,3vw,48px); border-radius:26px; border:1px solid rgba(60,185,140,0.22);
          background:linear-gradient(158deg, #f3fbf7 0%, #e6f6ee 100%);
          box-shadow:0 40px 80px -46px rgba(60,185,140,0.5), inset 0 1px 0 rgba(255,255,255,0.7); }
        .su-feature::after { content:''; position:absolute; top:-30%; right:-20%; width:70%; height:70%; border-radius:50%;
          background:radial-gradient(circle, rgba(60,185,140,0.2), transparent 66%); pointer-events:none; }
        .su-feature-ic { display:inline-flex; align-items:center; justify-content:center; width:60px; height:60px; border-radius:18px;
          background:${GREEN}; color:#fff; box-shadow:0 14px 26px -12px rgba(60,185,140,0.8); margin-bottom:clamp(20px,2vw,28px); }
        .su-feature-h { font-family:'Poppins',sans-serif; font-weight:700; font-size:clamp(24px,2.4vw,34px); color:${NAVY}; letter-spacing:-0.02em; line-height:1.12; margin:0 0 14px; }
        .su-feature-x { font-family:'Inter',sans-serif; font-size:clamp(14px,1vw,16px); line-height:1.72; color:${MUTED}; margin:0 0 auto; max-width:40ch; }
        .su-prog { margin-top:clamp(24px,3vw,36px); }
        .su-prog-top { display:flex; justify-content:space-between; align-items:baseline; font-family:'Inter',sans-serif; font-size:13px; font-weight:600; color:${NAVY}; margin-bottom:10px; }
        .su-prog-yr { font-family:'Poppins',sans-serif; font-weight:700; color:${GREEN}; letter-spacing:-0.02em; }
        .su-prog-track { height:8px; border-radius:99px; background:rgba(19,41,61,0.08); overflow:hidden; }
        .su-prog-fill { display:block; height:100%; width:62%; border-radius:99px; background:linear-gradient(90deg,#3CB98C,#5fd3a8); box-shadow:0 2px 8px rgba(60,185,140,0.5); }

        .su-pill { position:relative; overflow:hidden; background:#fff; border:1px solid rgba(26,43,60,0.08); border-radius:22px;
          padding:clamp(24px,2.2vw,32px); transition:transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease, border-color 0.45s ease; }
        .su-pill:hover { transform:translateY(-6px); border-color:${GREEN}; box-shadow:0 30px 60px -38px rgba(60,185,140,0.5); }
        .su-pill-ic { display:inline-flex; align-items:center; justify-content:center; width:48px; height:48px; border-radius:14px;
          background:rgba(60,185,140,0.12); color:${GREEN}; margin-bottom:16px; transition:transform 0.45s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, color 0.4s ease; }
        .su-pill:hover .su-pill-ic { transform:translateY(-3px) scale(1.08) rotate(-5deg); background:${GREEN}; color:#fff; }
        .su-pill-t { font-family:'Poppins',sans-serif; font-weight:600; font-size:clamp(16px,1.4vw,20px); color:${NAVY}; letter-spacing:-0.01em; margin:0 0 8px; }
        .su-pill-x { font-family:'Inter',sans-serif; font-size:14px; line-height:1.62; color:${MUTED}; margin:0; }

        /* ── Section 2: roadmap ── */
        .su-road { position:relative; }
        .su-step { display:grid; grid-template-columns:clamp(70px,8vw,132px) 1fr; gap:clamp(16px,2.4vw,44px);
          align-items:start; padding:clamp(24px,2.8vw,40px) 0; border-top:1px solid rgba(26,43,60,0.1);
          transition:opacity 0.4s ease; }
        .su-step:last-child { border-bottom:1px solid rgba(26,43,60,0.1); }
        .su-step-side { position:relative; display:flex; align-items:center; gap:12px; }
        .su-step-dot { flex-shrink:0; width:11px; height:11px; border-radius:50%; background:${GREEN}; box-shadow:0 0 0 5px rgba(60,185,140,0.14); }
        .su-step-no { font-family:'Poppins',sans-serif; font-weight:700; font-size:clamp(30px,3.2vw,50px); line-height:1; letter-spacing:-0.04em; color:rgba(19,41,61,0.14); transition:color 0.4s ease; }
        .su-step:hover .su-step-no { color:${GREEN}; }
        .su-step-main { display:flex; align-items:flex-start; gap:clamp(14px,1.6vw,22px); }
        .su-step-ic { flex-shrink:0; display:inline-flex; align-items:center; justify-content:center; width:50px; height:50px; border-radius:15px;
          background:rgba(60,185,140,0.1); color:${GREEN}; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, color 0.4s ease; }
        .su-step:hover .su-step-ic { background:${GREEN}; color:#fff; transform:scale(1.06) rotate(-4deg); }
        .su-step-t { font-family:'Poppins',sans-serif; font-weight:600; font-size:clamp(18px,1.7vw,26px); color:${NAVY}; letter-spacing:-0.02em; margin:2px 0 8px; }
        .su-step-x { font-family:'Inter',sans-serif; font-size:clamp(14px,1vw,16px); line-height:1.7; color:${MUTED}; margin:0; max-width:62ch; }

        /* ── Section 3: featured + list ── */
        .su-rep-wrap { display:grid; grid-template-columns:1.05fr 0.95fr; gap:16px; align-items:stretch; }
        .su-rep-feature { position:relative; overflow:hidden; display:flex; flex-direction:column;
          padding:clamp(30px,3vw,48px); border-radius:26px; border:1px solid rgba(26,43,60,0.08);
          background:linear-gradient(158deg,#ffffff,#f1f9f5); box-shadow:0 40px 80px -46px rgba(19,41,61,0.3); }
        .su-rep-feature-top { display:flex; align-items:center; justify-content:space-between; gap:14px; margin-bottom:clamp(24px,3vw,40px); }
        .su-rep-feature-ic { display:inline-flex; align-items:center; justify-content:center; width:60px; height:60px; border-radius:18px; background:rgba(60,185,140,0.12); color:${GREEN}; }
        .su-rep-feature-t { font-family:'Poppins',sans-serif; font-weight:700; font-size:clamp(24px,2.4vw,36px); color:${NAVY}; letter-spacing:-0.02em; line-height:1.1; margin:0 0 14px; }
        .su-rep-feature-x { font-family:'Inter',sans-serif; font-size:clamp(14px,1vw,16px); line-height:1.74; color:${MUTED}; margin:0 0 auto; max-width:46ch; }
        .su-rep-link { display:inline-flex; align-items:center; gap:8px; margin-top:clamp(24px,3vw,36px);
          font-family:'Poppins',sans-serif; font-weight:600; font-size:15px; color:${GREEN}; cursor:pointer; transition:gap 0.35s ease; width:fit-content; }
        .su-rep-feature:hover .su-rep-link { gap:14px; }

        .su-rep-list { display:flex; flex-direction:column; gap:16px; }
        .su-report { flex:1; display:flex; align-items:flex-start; gap:clamp(14px,1.4vw,20px); padding:clamp(20px,2vw,28px);
          border:1px solid rgba(26,43,60,0.08); border-radius:22px; background:#fff; cursor:pointer;
          transition:transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.4s ease; }
        .su-report:hover { transform:translateY(-4px); border-color:${GREEN}; box-shadow:0 28px 54px -36px rgba(60,185,140,0.45); }
        .su-report-ic { flex-shrink:0; display:inline-flex; align-items:center; justify-content:center; width:48px; height:48px; border-radius:14px;
          background:rgba(60,185,140,0.12); color:${GREEN}; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, color 0.4s ease; }
        .su-report:hover .su-report-ic { background:${GREEN}; color:#fff; transform:scale(1.06); }
        .su-report-body { flex:1; min-width:0; }
        .su-report-top { display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; margin-bottom:6px; }
        .su-report-t { font-family:'Poppins',sans-serif; font-weight:600; font-size:clamp(16px,1.3vw,20px); color:${NAVY}; letter-spacing:-0.01em; margin:0; }
        .su-report-x { font-family:'Inter',sans-serif; font-size:13.5px; line-height:1.62; color:${MUTED}; margin:0; }
        .su-report-meta { font-family:'Inter',sans-serif; font-weight:600; font-size:11px; letter-spacing:0.6px; text-transform:uppercase; color:${GREEN}; background:rgba(60,185,140,0.1); padding:5px 11px; border-radius:99px; white-space:nowrap; }
        .su-report-go { flex-shrink:0; display:inline-flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:50%; color:${NAVY}; background:rgba(26,43,60,0.05); transition:transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, color 0.4s ease; }
        .su-report:hover .su-report-go { background:${GREEN}; color:#fff; transform:translate(3px,-3px); }

        .su-note { display:flex; align-items:center; gap:10px; justify-content:center; margin:clamp(32px,4vw,48px) auto 0; max-width:600px; text-align:center; font-family:'Inter',sans-serif; font-size:13.5px; line-height:1.6; color:${MUTED}; }

        /* ── responsive ── */
        @media (max-width: 1023px) {
          .su-lead { grid-template-columns:1fr; align-items:start; gap:20px; }
          .su-bento { grid-template-columns:1fr 1fr; }
          .su-feature { grid-row:auto; grid-column:1 / -1; }
          .su-rep-wrap { grid-template-columns:1fr; }
        }
        @media (max-width: 560px) {
          .su-bento { grid-template-columns:1fr; }
          .su-step { grid-template-columns:1fr; gap:14px; }
          .su-step-side { gap:14px; }
          .su-report { flex-wrap:nowrap; }
        }
        @media (prefers-reduced-motion: reduce) {
          .su-pill, .su-report, .su-report-ic, .su-report-go, .su-step-ic, .su-pill-ic { transition:none; }
        }
      `}</style>
    </div>
  )
}
