'use client';

import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { initPlannerRuntime } from '../lib/plannerRuntime';

export default function CoursePlanner() {
  const cleanupRef = useRef(null);
  const [mobileView, setMobileView] = useState('courses');

  useEffect(() => {
    cleanupRef.current = initPlannerRuntime(html2canvas);
    return () => {
      if (typeof cleanupRef.current === 'function') cleanupRef.current();
    };
  }, []);

  return (
    <>
      <header id="appHeader">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">◈</div>
          <div className="brand-text">
            <h1>Course Planner — IUB by IMZ</h1>
            <div className="sub">Independent University, Bangladesh • by IMZ</div>
          </div>
        </div>
        <div className="spacer" />
        <div className="header-actions">
          <div id="authBox" className="auth-box">
            <button id="btnIRASLoginHeader" className="btn small iras" type="button">IRAS Login</button>
            <div id="authInfo" className="auth-info" style={{ display: 'none' }}>
              <span id="authChip" className="auth-chip" />
              <button id="btnIRASLogout" className="btn small ghost" type="button">Logout</button>
            </div>
          </div>
          <button id="themeToggleBtn" className="theme-switch" aria-label="Toggle theme" title="Toggle theme">
            <span className="ts-icon ts-moon" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"/></svg>
            </span>
            <span className="ts-icon ts-sun" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            </span>
            <span className="ts-knob" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="app-shell">
        <div className="info-bar">
          <span className="label">Timetable Builder</span>
          <span className="dot" aria-hidden="true"/>
          <span className="small">Conflict-free • Prerequisite-aware • Export JPG</span>
          <div className="meta">
            <span className="kbd">ST</span> Sun–Tue
            <span className="dot"/><span className="kbd">MW</span> Mon–Wed
            <span className="dot"/><span className="kbd">AR</span> Sat–Thu
          </div>
        </div>

        <div className="view-switch" role="tablist" aria-label="Mobile view">
          <button type="button" role="tab" aria-selected={mobileView==='courses'} className={mobileView==='courses'?'active':''} onClick={()=>setMobileView('courses')}>Courses</button>
          <button type="button" role="tab" aria-selected={mobileView==='plans'} className={mobileView==='plans'?'active':''} onClick={()=>setMobileView('plans')}>Timetable</button>
        </div>

        <div className="layout" id="mainLayout" data-mobile-view={mobileView}>
          {/* Courses */}
          <div className="panel courses" id="coursesPanel">
            <div className="panel-head">
              <h2><span className="h2-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span> Courses</h2>
              <span className="small" style={{fontWeight:600}}>IRAS-connected</span>
            </div>
            <div className="panel-body">
              <div className="mobile-hint mobile-only small">Tip: search by code / title / faculty. The list is long — filters are faster than scrolling.</div>

              <div className="toolbar">
                <div className="search-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.2-3.2"/></svg>
                  <input type="text" id="search" placeholder="Search code, title, faculty…" autoComplete="off" spellCheck={false} />
                </div>
                <button className="btn" id="btnToggleFilters" type="button" aria-expanded="false" aria-controls="filtersWrap">Filters</button>
              </div>

              <div id="filtersBackdrop" aria-hidden="true" />
              <div className="filtersWrap" id="filtersWrap">
                <select id="filterDay" aria-label="Filter by schedule">
                  <option value="">All schedules</option>
                  <option value="ST">ST — Sun/Tue</option>
                  <option value="MW">MW — Mon/Wed</option>
                  <option value="AR">AR — Sat/Thu</option>
                </select>
                <select id="filterStatus" className="desktop-only" aria-label="Filter by status">
                  <option value="">All eligibility</option>
                  <option value="eligible">Eligible only</option>
                  <option value="blocked">Prereq blocked</option>
                  <option value="gradeA">Grade A</option>
                </select>
                <select id="filterAvail" aria-label="Filter by availability">
                  <option value="">Any seats</option>
                  <option value="open">Open seats</option>
                  <option value="full">Full</option>
                </select>
                <div className="filters-sheet-actions mobile-only">
                  <button className="btn ghost" id="btnCloseFilters" type="button">Done</button>
                </div>
                <div className="desk-auth-wrap">
                  <button id="btnIRASLoginDesk" className="btn iras" type="button" style={{display:'none'}}>IRAS Login</button>
                </div>
              </div>

              <div className="row" style={{gap:'8px', marginTop:'10px', flexWrap:'wrap'}}>
                <div id="courseRefreshInfo" className="small" />
                <div id="loadingSpinner" className="loading" style={{display:'none'}}><span className="spinner"/><span>Loading courses…</span></div>
                <div id="backupBadge" className="pill small backup-badge" style={{display:'none'}}>Showing last saved backup</div>
              </div>

              <div id="courseError" className="footnote" style={{display:'none', color:'var(--danger)', background:'var(--danger-soft)'}} />

              <div className="course-legend" aria-label="Course status legend">
                <div className="legend-item"><span className="legend-swatch legend-eligible"/> Eligible</div>
                <div className="legend-item"><span className="legend-swatch legend-blocked"/> Prerequisite not done</div>
                <div className="legend-item"><span className="legend-swatch legend-gradea"/> Grade A</div>
                <span className="small desktop-only" style={{marginLeft:'auto'}}>Add to build conflict-free plans</span>
              </div>

              <div className="table-wrap" id="tableWrap">
                <table className="table" id="courseTable" aria-label="Courses">
                  <colgroup>
                    <col className="col-course"/><col className="col-sec"/><col className="col-time"/><col className="col-faculty"/><col className="col-title"/><col className="col-seats"/><col className="col-actions"/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Course</th><th>Sec</th><th>Days / Time</th><th>Faculty</th><th>Title</th><th className="right">Enrolled</th><th></th>
                    </tr>
                  </thead>
                  <tbody id="courseTbody">
                    <tr><td colSpan={7}><div className="empty-state"><span className="spinner"/><p>Loading courses…</p></div></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="cards" id="courseCards" aria-live="polite" />

              <div className="footnote">Plans are stored locally in this browser. Logout clears them so the next user starts clean.</div>
            </div>
          </div>

          {/* Plans / Timetable */}
          <div className="panel" id="planPanel">
            <div className="panel-head">
              <h2><span className="h2-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg></span> Timetable</h2>
              <span className="small">Unlimited · Local</span>
            </div>
            <div className="panel-body">
              <div className="plans" id="plans" style={{marginBottom:'10px'}} />
              <div style={{display:'flex', gap:'6px', marginBottom:'10px'}}>
                <button className="plan new" id="btnQuickAddPlan" type="button">+ New Plan</button>
              </div>

              <div className="plan-actions">
                <input type="text" id="newPlanName" placeholder="New plan name (optional)" autoComplete="off"/>
                <button className="btn accent" id="btnAddPlan" type="button">Add</button>
                <button className="btn" id="btnRenamePlan" type="button">Rename</button>
                <button className="btn" id="btnDuplicatePlan" type="button">Duplicate</button>
                <button className="btn danger" id="btnDeletePlan" type="button">Delete</button>
              </div>

              <div className="legend" aria-label="Day keys">
                <div className="pill">A · Sat</div><div className="pill">S · Sun</div><div className="pill">M · Mon</div><div className="pill">T · Tue</div><div className="pill">W · Wed</div><div className="pill">R · Thu</div>
              </div>

              <div className="plan-title" id="planTitle">Plan A</div>
              <div className="day-tabs" id="dayTabs" aria-label="Select day" />
              <div className="timetable-scroll">
                <div className="schedule desktop" id="schedule" />
              </div>
              <div className="m-schedule" id="mSchedule" style={{display:'none'}} />

              <div className="export-row">
                <div className="hint">Conflicts are blocked on add. One section per course.</div>
                <div style={{display:'flex', gap:'8px'}}>
                  <button className="btn" id="btnClearActive" type="button">Clear</button>
                  <button className="btn accent" id="btnExportPlan" type="button">Export JPG</button>
                </div>
              </div>

              <div className="section-list" id="planList" style={{marginTop:'10px'}} />
              <div className="footnote" style={{marginTop:'10px'}}>Export saves the weekly grid + selected sections as a single JPG.</div>
            </div>
          </div>
        </div>

        <div style={{textAlign:'center', marginTop:'14px'}} className="small">Built for IUB students • Not official • No tracking • Logout wipes local data</div>
      </div>

      <div id="toast" role="status" aria-live="polite" />
    </>
  );
}
