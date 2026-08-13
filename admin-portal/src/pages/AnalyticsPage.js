import React from 'react';

export const AnalyticsPage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800' }}>Admin Telemetry & Analytics</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
            Submission trends, approval rates, class-wise performance, and daily active student analytics.
          </p>
        </div>
      </div>

      {/* Analytics KPI Overview */}
      <div className="dashboard-grid" style={{ marginBottom: '24px' }}>
        <div className="metric-card">
          <div className="metric-icon blue"><i className="fa-solid fa-chart-area"></i></div>
          <div className="metric-info">
            <h3>86%</h3>
            <p>Submission Approval Rate</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon green"><i className="fa-solid fa-graduation-cap"></i></div>
          <div className="metric-info">
            <h3>91.2%</h3>
            <p>Class 5 Highest Completion</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon amber"><i className="fa-solid fa-stopwatch"></i></div>
          <div className="metric-info">
            <h3>14 mins</h3>
            <p>Avg Review Turnaround</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon purple"><i className="fa-solid fa-users"></i></div>
          <div className="metric-info">
            <h3>118</h3>
            <p>Daily Active Students</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Submission Trend Visual Canvas */}
        <div className="panel-card">
          <div className="panel-header">
            <h3 className="panel-title">
              <i className="fa-solid fa-chart-line text-blue"></i> Submission Volume Trend (7 Days)
            </h3>
          </div>
          <div style={{ padding: '20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '220px', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            {[
              { day: 'Mon', count: 18, height: '40%' },
              { day: 'Tue', count: 24, height: '55%' },
              { day: 'Wed', count: 32, height: '75%' },
              { day: 'Thu', count: 28, height: '65%' },
              { day: 'Fri', count: 42, height: '95%' },
              { day: 'Sat', count: 30, height: '70%' },
              { day: 'Sun', count: 22, height: '50%' }
            ].map((bar, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '12%' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>{bar.count}</span>
                <div style={{ width: '100%', height: bar.height, background: 'linear-gradient(180deg, #3b82f6, #1e40af)', borderRadius: '6px 6px 0 0' }}></div>
                <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '8px', color: 'var(--text-secondary)' }}>{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Approval vs Rejection Breakdown */}
        <div className="panel-card">
          <div className="panel-header">
            <h3 className="panel-title">
              <i className="fa-solid fa-chart-pie text-purple"></i> Approval vs Rejection Ratio
            </h3>
          </div>
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span><i className="fa-solid fa-circle text-green"></i> Approved Submissions (86%)</span>
                <strong>43 Submissions</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.08)', height: '10px', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '86%', background: 'var(--success)', height: '100%' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span><i className="fa-solid fa-circle text-red"></i> Rejected Submissions (14%)</span>
                <strong>7 Submissions</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.08)', height: '10px', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '14%', background: 'var(--danger)', height: '100%' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span><i className="fa-solid fa-circle text-amber"></i> Pending Submissions</span>
                <strong>3 Submissions</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.08)', height: '10px', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '8%', background: 'var(--warning)', height: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
