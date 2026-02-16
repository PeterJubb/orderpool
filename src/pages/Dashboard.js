import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

function Dashboard() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="section">
          <h1>Dashboard</h1>
          <p>
            A quick overview of your active briefs, projects and notifications.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;

