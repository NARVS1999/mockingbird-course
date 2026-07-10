// ============================================================
// SINGLE SOURCE OF TRUTH — All lessons in order
//
// Edit this file to add, remove, or reorder lessons.
// The sidebar, prev/next nav, and sequence tracker
// all derive from this list automatically.
//
// Each entry:
//   id     — unique prefix (used as the filename prefix and ID)
//   title  — display name in sidebar / nav
//   file   — filename of the lesson HTML (no directory prefix)
//   status — "completed" | "in-progress" | "pending"
//
// IMPORTANT: Do NOT include a "lessons/" directory prefix in `file`.
// The sidebar.js and lesson-nav.js scripts derive the correct path
// automatically from the current page location.
// ============================================================
window.LESSONS = [
  // Phase 1: Introduction & Pre-Reading
  { id: '0001', title: 'Introduction & Pre-Reading', file: '0001-introduction-pre-reading.html', status: 'completed' },

  // Phase 2: Guided Reading — Chapters 1–31 (one per chapter)
  { id: '0002', title: 'Ch.1: The Radley Place', file: '0002-chapter-1.html', status: 'completed' },
  { id: '0003', title: 'Ch.2: First Day of School', file: '0003-chapter-2.html', status: 'completed' },
  { id: '0004', title: 'Ch.3: The Compromise', file: '0004-chapter-3.html', status: 'completed' },
  { id: '0005', title: 'Ch.4: Mysterious Gifts', file: '0005-chapter-4.html', status: 'completed' },
  { id: '0006', title: 'Ch.5: Miss Maudie\'s Secret', file: '0006-chapter-5.html', status: 'completed' },
  { id: '0007', title: 'Ch.6: Jem Loses His Pants', file: '0007-chapter-6.html', status: 'completed' },
  { id: '0008', title: 'Ch.7: The Knothole Closes', file: '0008-chapter-7.html', status: 'completed' },
  { id: '0009', title: 'Ch.8: The Snow and the Fire', file: '0009-chapter-8.html', status: 'completed' },
  { id: '0010', title: 'Ch.9: Christmas at Finch\'s Landing', file: '0010-chapter-9.html', status: 'completed' },
  { id: '0011', title: 'Ch.10: The Mad Dog', file: '0011-chapter-10.html', status: 'completed' },
  { id: '0012', title: 'Ch.11: Mrs. Dubose', file: '0012-chapter-11.html', status: 'completed' },
  { id: '0013', title: 'Ch.12: First Purchase Church', file: '0013-chapter-12.html', status: 'completed' },
  { id: '0014', title: 'Ch.13: Aunt Alexandra', file: '0014-chapter-13.html', status: 'completed' },
  { id: '0015', title: 'Ch.14: Dill Runs Away', file: '0015-chapter-14.html', status: 'completed' },
  { id: '0016', title: 'Ch.15: The Jailhouse Mob', file: '0016-chapter-15.html', status: 'completed' },
  { id: '0017', title: 'Ch.16: The People Gather', file: '0017-chapter-16.html', status: 'completed' },
  { id: '0018', title: 'Ch.17: Bob Ewell Testifies', file: '0018-chapter-17.html', status: 'completed' },
  { id: '0019', title: 'Ch.18: Mayella\'s Story', file: '0019-chapter-18.html', status: 'completed' },
  { id: '0020', title: 'Ch.19: Tom Robinson\'s Side', file: '0020-chapter-19.html', status: 'completed' },
  { id: '0021', title: 'Ch.20: Atticus\'s Closing', file: '0021-chapter-20.html', status: 'completed' },
  { id: '0022', title: 'Ch.21: The Verdict', file: '0022-chapter-21.html', status: 'completed' },
  { id: '0023', title: 'Ch.22: Gratitude and Grief', file: '0023-chapter-22.html', status: 'completed' },
  { id: '0024', title: 'Ch.23: Justice and Threats', file: '0024-chapter-23.html', status: 'completed' },
  { id: '0025', title: 'Ch.24: The Missionary Circle', file: '0025-chapter-24.html', status: 'completed' },
  { id: '0026', title: 'Ch.25: Tom\'s Death', file: '0026-chapter-25.html', status: 'completed' },
  { id: '0027', title: 'Ch.26: Hitler and Maycomb', file: '0027-chapter-26.html', status: 'completed' },
  { id: '0028', title: 'Ch.27: Three Threats', file: '0028-chapter-27.html', status: 'completed' },
  { id: '0029', title: 'Ch.28: The Halloween Attack', file: '0029-chapter-28.html', status: 'completed' },
  { id: '0030', title: 'Ch.29: Boo Radley Appears', file: '0030-chapter-29.html', status: 'completed' },
  { id: '0031', title: 'Ch.30: Atticus vs. Heck Tate', file: '0031-chapter-30.html', status: 'completed' },
  { id: '0032', title: 'Ch.31: The Radley Porch', file: '0032-chapter-31.html', status: 'completed' },

  // Phase 3: Character Analysis
  { id: '0033', title: 'Character Analysis', file: '0033-character-analysis.html', status: 'completed' },

  // Phase 4: Themes & Symbolism
  { id: '0034', title: 'Themes & Symbolism', file: '0034-themes-symbolism.html', status: 'completed' },

  // Phase 5: Historical Context
  { id: '0035', title: 'Historical Context', file: '0035-historical-context.html', status: 'completed' },

  // Phase 6: Writing & Response
  { id: '0036', title: 'Writing & Response', file: '0036-writing-response.html', status: 'completed' },

  // Phase 7-8: Assessment & Reflection
  { id: '0037', title: 'Assessment & Reflection', file: '0037-assessment-reflection.html', status: 'completed' },
];
