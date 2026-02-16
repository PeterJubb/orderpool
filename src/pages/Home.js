import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import HomeFooter from '../components/HomeFooter';
import '../styles.css';

function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <h1>Aggregated wholesaling,<br />made executable.</h1>
          <p className="subtitle">
            Throw your production brief into the pool. Manufacturers grab what fits their machines.
            Packaging, production runs, tooling — whatever you need made, someone's ready to make it.
          </p>
          <p className="explainer">
            No bidding wars. No endless email threads. Just manufacturers pulling work when they have capacity,
            and you tracking it live until it ships.
          </p>

          <div className="cta-buttons">
            <Link to="/get-started" className="btn btn-primary">Post a production brief</Link>
            <Link to="/get-started" className="btn btn-secondary">I make things →</Link>
          </div>
        </section>

        {/* IMAGE SHOWCASE */}
        <section className="showcase" aria-label="Manufacturing examples">
          <div className="showcase-grid">
            <div className="shot tall">
              <img
                src="/Production.jpg"
                alt="Busy factory floor with rows of workstations and workers producing goods."
                loading="lazy"
              />
              <div className="cap">Production</div>
            </div>

            <div className="shot small">
              <img
                src="/3D.jpg"
                alt="Packaging dieline alongside a 3D rendered red box mockup."
                loading="lazy"
              />
              <div className="cap">Dielines & 3D</div>
            </div>

            <div className="shot small">
              <img
                src="/Packaging.jpg"
                alt="A collection of colorful printed packaging samples including boxes, labels, and cards."
                loading="lazy"
              />
              <div className="cap">Packaging</div>
            </div>
          </div>
        </section>

        {/* LIVE PROOF */}
        <section className="examples-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Live from the factory floor</h2>
              <p>Real orders, real manufacturing — visible and trackable.</p>
              <Link to="/public-orders" className="view-link">Browse all public orders →</Link>
            </div>

            <div className="examples-grid">
              <article className="example-card">
                <div className="example-media">
                  <img
                    src="/Production.jpg"
                    alt="Factory production line."
                    loading="lazy"
                  />
                </div>
                <div className="example-body">
                  <h3>Multi-station assembly line</h3>
                  <div className="example-meta">
                    <span className="meta-tag">5 stations</span>
                    <span className="meta-tag">In production</span>
                    <span className="meta-tag">Throughput tracked</span>
                  </div>
                  <Link to="/public-orders" className="view-link">View order →</Link>
                </div>
              </article>

              <article className="example-card">
                <div className="example-media">
                  <img
                    src="/3D.jpg"
                    alt="Packaging dieline and 3D mockup."
                    loading="lazy"
                  />
                </div>
                <div className="example-body">
                  <h3>Packaging dielines & mockups</h3>
                  <div className="example-meta">
                    <span className="meta-tag">Dieline</span>
                    <span className="meta-tag">3D mock</span>
                    <span className="meta-tag">Ready for approval</span>
                  </div>
                  <Link to="/public-orders" className="view-link">View order →</Link>
                </div>
              </article>

              <article className="example-card">
                <div className="example-media">
                  <img
                    src="/Packaging.jpg"
                    alt="Printed packaging prototypes."
                    loading="lazy"
                  />
                </div>
                <div className="example-body">
                  <h3>Custom packaging run</h3>
                  <div className="example-meta">
                    <span className="meta-tag">Short-run</span>
                    <span className="meta-tag">Color matched</span>
                    <span className="meta-tag">Sampling</span>
                  </div>
                  <Link to="/public-orders" className="view-link">View order →</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works" id="how-it-works">
          <div className="section-container">
            <div className="section-header">
              <h2>Here's exactly how it works</h2>
              <p>Simple mechanics. Clear incentives. Public progress.</p>
            </div>

            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>You post a brief</h3>
                <p>Standardized specs, quantities, timelines, and budget — submitted once.</p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h3>It hits the pool</h3>
                <p>Your request becomes visible to manufacturers who can actually fulfill it.</p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h3>Work is pulled</h3>
                <p>Manufacturers accept when it fits capacity. You approve terms and timing.</p>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <h3>Tracked to delivery</h3>
                <p>Milestones update from production through fulfillment — fewer emails, more truth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="audience-section">
          <div className="section-container">
            <div className="audience-grid">
              <div className="audience-card">
                <h3>For publishers</h3>
                <p>
                  Post once, reach many. Reduce quote-chasing and replace "checking in" emails with a
                  single source of truth.
                </p>
                <Link to="/for-publishers" className="btn btn-primary">Learn more</Link>
              </div>

              <div className="audience-card">
                <h3>For manufacturers</h3>
                <p>
                  Pull work when it fits. Clear briefs, real budgets, and the ability to fill downtime
                  with jobs that match your equipment.
                </p>
                <Link to="/for-manufacturers" className="btn btn-primary">Learn more</Link>
              </div>
            </div>
          </div>
        </section>

        {/* TAGLINE */}
        <section className="tagline-section">
          <div className="section-container">
            <h2>Briefs in. Orders out.</h2>
            <p>
              Aggregated wholesaling manufacturing — where demand is pooled, work is pulled, and progress is visible.
            </p>
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}

export default Home;

