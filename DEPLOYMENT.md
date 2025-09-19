# Deployment Instructions

## Frontend Deployment (Vercel)

1. **Set Up Vercel Account**:
   - Create an account at [Vercel](https://vercel.com/signup) if you don't have one.
   - Link your GitHub account to Vercel.

2. **Deploy the Frontend**:
   - Import the repository into Vercel.
   - Choose the appropriate branch (usually `main`).
   - Set any required environment variables in the Vercel dashboard.

3. **Admin-Only Access**:
   - In the Vercel project settings, navigate to the 'Access' section.
   - Set the access to "Restricted" and add specific team members for admin access.

## Backend Deployment (Render)

1. **Set Up Render Account**:
   - Create an account at [Render](https://render.com/signup) if you don't have one.
   - Link your GitHub account to Render.

2. **Deploy the Backend**:
   - Create a new web service on Render and connect it to the backend repository.
   - Choose the appropriate branch (usually `main`).
   - Configure environment variables and build settings as required.

3. **Admin-Only Access**:
   - In Render, restrict access to the service to admin users only through the team settings.

## Switching to Membership/Public Mode

1. **Admin Review**:
   - After deployment, the application will be in admin-only mode. An admin review will be conducted to ensure everything is functioning as expected.

2. **Switch to Membership/Public Mode**:
   - Once approved, change the access settings in Vercel and Render to allow public access.
   - Inform users via the application updates or community announcements.

## Additional Guidelines
- Regularly review access permissions.
- Monitor application performance and user feedback.
