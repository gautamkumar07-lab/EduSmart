'use client';
import {useState} from "react";
export default function Home(){
 const [tab,setTab]=useState("Dashboard");
 return <main>
 <header><div className="brand"><span>🎓</span>EduSmart</div>
 <nav><button onClick={()=>setTab("Dashboard")}>Dashboard</button><button onClick={()=>setTab("Analytics")}>Analytics</button><button onClick={()=>setTab("Admin")}>Admin</button></nav></header>
 <section className="hero"><div><small>ENTERPRISE PLATFORM</small><h1>EduSmart</h1><p>Enterprise learning management platform for students, teachers, parents and administrators.</p><button className="primary">Open {tab}</button></div>
 <div className="panel"><b>Platform Status</b><strong>Operational</strong><span>REST API • RBAC • PostgreSQL • Docker</span></div></section>
 <section className="grid"><article className="card"><div className="icon">✓</div><h3>Student Portal</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Teacher Portal</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Course Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Video Learning</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Live Classes</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Assignment System</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Quiz Module</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Automatic Evaluation</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Attendance Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Student Analytics</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Teacher Analytics</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Learning Progress Tracking</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Note Sharing</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Discussion Forum</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Certificates</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Notification System</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Admin Dashboard</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>File Manager</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Academic Reports</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Parent Monitoring Panel</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Gradebook</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Course Enrollment</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Question Bank</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Learning Calendar</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Content Moderation</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Teacher Scheduling</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Fee Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Helpdesk</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Audit Logs</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>API Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article></section>
 </main>}
