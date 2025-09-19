# ProJSponJob - Sponsorship Job Search Community Tool

A comprehensive job search tool specifically designed for job seekers requiring visa sponsorship. This tool helps users track job applications, generate tailored CVs and cover letters, and provides insights on sponsorship opportunities.

## Features

- **Job Tracker**: Track job applications, statuses, and deadlines
- **CV/CL Generation**: Generate customized resumes and cover letters using STAR method
- **ATS Scoring**: Analyze documents for ATS compatibility  
- **Sponsorship Check**: Identify sponsorship opportunities
- **Admin Controls**: Secure admin access for initial deployment

## Tech Stack

- **Frontend**: React (deployed on Vercel)
- **Backend**: FastAPI with Python (deployed on Render)
- **Admin Authentication**: Environment-based secure login

## Quick Start

### Backend (FastAPI)
```bash
pip install -r requirements.txt
python -m uvicorn app:app --reload
```

### Frontend
Deployed via Vercel with configuration in `vercel.json`

## Documentation

- [`DEPLOYMENT.md`](DEPLOYMENT.md) - Deployment instructions for Vercel and Render
- [`UI-wireframes.md`](UI-wireframes.md) - UI wireframes and UX structure
- [`wireframe-spec.md`](wireframe-spec.md) - Detailed feature specifications
- [`CONTRIBUTING.md`](CONTRIBUTING.md) - Contribution guidelines and review process

## Contributing

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for our contribution process and review requirements. All PRs must pass comprehensive deployment, configuration, documentation, and testing checks before approval.

## Admin Access

Initial deployment uses admin-only access mode. After successful deployment and verification, access can be switched to public/membership mode following the process in `DEPLOYMENT.md`.

## License

This project is focused on helping job seekers find sponsorship opportunities in the UK job market.