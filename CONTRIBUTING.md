# Contributing to ProJSponJob

Welcome to the ProJSponJob project! This document outlines our contribution process and review requirements.

## Pull Request Process

### 1. Before Creating a PR
- Ensure your changes align with the project's goals for job seekers with sponsorship needs
- Test your changes locally with both frontend and backend components
- Review the deployment instructions in `DEPLOYMENT.md`
- Check UI wireframes in `UI-wireframes.md` for design consistency

### 2. Creating a Pull Request
- Use the provided PR template (automatically loaded)
- Fill out all relevant sections of the checklist
- Provide clear description of changes and their purpose
- Reference any related issues

### 3. Review Requirements

#### Technical Review Checklist
All PRs must pass the following technical requirements:

**Deployment:**
- [ ] Frontend builds successfully for Vercel deployment
- [ ] Backend starts correctly with FastAPI/uvicorn
- [ ] Environment variables properly configured
- [ ] Admin access controls maintained

**Configuration:**
- [ ] `vercel.json` validated for frontend deployment
- [ ] `requirements.txt` and `runtime.txt` updated for backend
- [ ] No hardcoded secrets or credentials
- [ ] CORS and security settings verified

**Documentation:**
- [ ] Code changes documented appropriately
- [ ] Deployment docs updated if needed
- [ ] UI wireframes updated if UI changes made
- [ ] API documentation updated if endpoints changed

**Testing:**
- [ ] Manual testing completed
- [ ] Admin functionality verified
- [ ] Error handling tested
- [ ] Integration between frontend/backend verified

### 4. Approval Process

#### Stage 1: Technical Review
- Reviewer conducts initial technical review
- All checklist items must be verified
- Feedback provided for any issues

#### Stage 2: Final Approval
- Comprehensive review using `.github/APPROVAL_REVIEW_TEMPLATE.md`
- All deployment, configuration, documentation, and testing requirements confirmed
- Security and quality standards verified
- Project-specific requirements validated

#### Stage 3: Ready to Merge
- Final approval comment posted confirming all requirements met
- PR marked as ready for merge
- Post-merge deployment process outlined

## Project-Specific Guidelines

### Job Search Tool Requirements
- Maintain focus on sponsorship visa job opportunities
- Follow UK job market standards and terminology
- Implement STAR method for CV/CL generation features
- Ensure ATS compatibility for generated documents

### UI/UX Standards
- Follow clean, modern design principles outlined in wireframes
- Maintain human-centric, UK-standard language
- Ensure responsive design for mobile and desktop
- One to two-click access for major actions

### Security Requirements
- Admin authentication must be secure
- No sensitive data in frontend code
- Environment variables properly managed
- CORS configured appropriately

### Deployment Standards
- Initial deployment must be in admin-only mode
- Public access only after admin verification
- Monitor application performance post-deployment
- Follow switching process to membership/public mode

## Getting Help

- Review existing documentation in `DEPLOYMENT.md`, `UI-wireframes.md`, and `wireframe-spec.md`
- Check the FastAPI backend at `app.py` for API structure
- Review admin authentication in `src/AdminLogin.js`
- Ask questions in PR comments for clarification

## Code of Conduct

- Be respectful and constructive in reviews
- Focus on helping job seekers achieve their goals
- Maintain professional communication
- Support the community-driven nature of the project

Thank you for contributing to ProJSponJob and helping job seekers find sponsorship opportunities!