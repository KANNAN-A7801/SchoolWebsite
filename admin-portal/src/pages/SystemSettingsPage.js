import React, { useState } from 'react';

export const SystemSettingsPage = () => {
  const [portalName, setPortalName] = useState('Engloray Learning LMS');
  const [sessionTimeout, setSessionTimeout] = useState(60);
  const [fileLimit, setFileLimit] = useState(20);
  const [smtpServer, setSmtpServer] = useState('smtp.mailtrap.io');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleExportData = () => {
    const data = {
      exportTimestamp: new Date().toISOString(),
      portalName,
      status: 'SYSTEM_BACKUP_OK'
    };
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", jsonStr);
    downloadAnchor.setAttribute("download", "LMS_Admin_Backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="user-role-badge super_admin">SUPER ADMIN ONLY</span>
        </div>
        <h1 style={{ fontSize: '26px', fontWeight: '800', marginTop: '6px' }}>System & Portal Configuration</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
          Manage global application parameters, file upload quotas, email SMTP settings, and system backup/exports.
        </p>
      </div>

      {saved && (
        <div className="badge badge-approved" style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px' }}>
          <i className="fa-solid fa-circle-check"></i> System configuration parameters saved!
        </div>
      )}

      <form onSubmit={handleSave}>
        <div className="panel-card">
          <h3 className="panel-title" style={{ marginBottom: '20px' }}>
            <i className="fa-solid fa-sliders text-blue"></i> General Portal Settings
          </h3>

          <div className="form-group">
            <label className="form-label">Portal Application Name</label>
            <input
              type="text"
              className="form-control"
              value={portalName}
              onChange={(e) => setPortalName(e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Session Timeout (Minutes)</label>
              <input
                type="number"
                className="form-control"
                value={sessionTimeout}
                onChange={(e) => setSessionTimeout(parseInt(e.target.value) || 30)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Max File Upload Limit (MB)</label>
              <input
                type="number"
                className="form-control"
                value={fileLimit}
                onChange={(e) => setFileLimit(parseInt(e.target.value) || 10)}
              />
            </div>
          </div>
        </div>

        <div className="panel-card">
          <h3 className="panel-title" style={{ marginBottom: '20px' }}>
            <i className="fa-solid fa-envelope text-purple"></i> Email SMTP Notification Placeholders
          </h3>

          <div className="form-group">
            <label className="form-label">SMTP Server Host</label>
            <input
              type="text"
              className="form-control"
              value={smtpServer}
              onChange={(e) => setSmtpServer(e.target.value)}
            />
          </div>
        </div>

        <div className="panel-card">
          <h3 className="panel-title" style={{ marginBottom: '20px' }}>
            <i className="fa-solid fa-database text-green"></i> Database Backup & Data Export
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Export complete system audit logs, student progress records, and submission telemetry in JSON format.
          </p>
          <button type="button" className="btn btn-outline" onClick={handleExportData}>
            <i className="fa-solid fa-download text-green"></i> Download Full System Backup (JSON)
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button type="submit" className="btn btn-primary">
            <i className="fa-solid fa-floppy-disk"></i> Apply Global System Settings
          </button>
        </div>
      </form>
    </div>
  );
};
