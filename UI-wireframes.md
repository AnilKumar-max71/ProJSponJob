# Sponsorship Job Search Community Tool — Wireframes & UX Structure

## Main Screens

1. **Dashboard (Job Tracker & Progress)**
   - Table: Job Title | Company | Sponsorship | Status | Deadline | Contact
   - Filters: Sponsorship, Status, Deadline
   - Add Job Button (top right)
   - **Progress Panel:**  
     - Weekly/monthly jobs applied  
     - Responses: Interview scheduled, rejected, offer  
     - Accuracy metrics (e.g., response rate)
     - Admin view: Aggregated statistics for all users

2. **Add Job Modal**
   - Fields: Job Title, Company, Link, Sponsorship (Yes/No), Deadline, Notes
   - Source Detection: LinkedIn, Indeed, Company Site (auto-fill if possible)
   - Validation: Required fields are highlighted

3. **CV/CL Manager**
   - Upload CV/CL
   - Generate New (Job-Tailored)
   - View/Download History
   - ATS Score Chip, AI Detection Chip

4. **CV/CL Generation Modal**
   - **Instructions Panel:**  
     - "Your CV/CL will be tailored using the STAR method (Situation, Task, Action, Result), prioritizing action verbs and key skills from the job description."
     - "Manual editing is only recommended if you wish to further personalize content or adjust length."
   - Job Selection Dropdown
   - Experience Level: Less than 8 years or 8 years and above (sets length logic)
   - Generate Button
   - ATS Score & Suggestions

5. **Notification Modal**
   - Manual Editing Recommended (with actionable feedback)
   - Resume Length Advisory (condense or retain two pages)
   - **Daily Goal Reminder:**  
     - If the user has not accessed the site, notify with a motivational message about job search goals.

## UX Principles
- Clean, modern, responsive design
- One to two-click access to all major actions
- Simple, clear error and success messages
- Human-centric, UK-standard language throughout

---

## STAR Method Guidance (for Resume/CV Generator)
- **Situation:** Brief context for each achievement or role
- **Task:** What needed to be accomplished
- **Action:** What you did, using strong action verbs (led, created, improved, launched, etc.)
- **Result:** Quantifiable benefit or impact (numbers, outcomes)

**CV/CL generation will always:**
- Use action verbs and key skills from the job description as priority
- Structure experience bullets via the STAR method
- Advise the user where manual input is optimal

---

## Example Wireframe Boxes

[ ] Dashboard: Job Tracker Table & Progress Panel  
[ ] Add Job Modal  
[ ] CV/CL Manager  
[ ] CV/CL Generation Modal (with STAR/action verb/skills-first logic)  
[ ] Notification Modal (Advisories, Daily Goal Reminder)