# Deployment Instructions

## Frontend Deployment (Vercel)

1. **Set Up Vercel Account**:
   - Create an account at [Vercel](https://vercel.com/signup) if you don't have one.
   - Link your GitHub account to Vercel.

2. **Deploy the Frontend**:
   - Import the repository into Vercel.
   - Choose the appropriate branch (usually `main`).
   - Vercel will automatically detect this is a React app and configure build settings.

3. **Environment Variables Setup**:
   Set the following environment variables in the Vercel dashboard:
   
   **Required Variables:**
   - `REACT_APP_API_URL`: Backend API URL (e.g., `https://projsponjob-backend.onrender.com`)
   
   **Optional Variables:**
   - `REACT_APP_ADMIN_SECRET`: Admin password for restricted access mode
     - If set: App requires admin login before access
     - If not set: App is publicly accessible
     - Example value: `your_secure_admin_password`

4. **Admin-Only Mode Configuration**:
   - **For Admin-Only Access**: Set `REACT_APP_ADMIN_SECRET` to a secure password
   - **For Public Access**: Leave `REACT_APP_ADMIN_SECRET` empty or remove it
   - The app automatically detects the mode based on this environment variable

5. **Vercel Project Settings**:
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `build` (auto-detected)
   - Install Command: `npm install` (auto-detected)

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

## Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Ensure `package.json` exists with correct dependencies
   - Check that all required files are present: `src/index.js`, `public/index.html`
   - Verify environment variables are set correctly

2. **Admin Login Not Working**:
   - Check that `REACT_APP_ADMIN_SECRET` is set in Vercel environment variables
   - Ensure the secret matches exactly (case-sensitive)
   - Clear browser cache and try again

3. **API Connection Issues**:
   - Verify `REACT_APP_API_URL` is set correctly
   - Check that the backend is deployed and accessible
   - Ensure CORS is configured properly on the backend

### Testing Deployment:

1. **Local Testing**:
   ```bash
   npm install
   npm run build
   npm install -g serve
   serve -s build
   ```

2. **Environment Variable Testing**:
   - Create `.env.local` file with your variables for local testing
   - Test both admin and public modes
   - Verify API connectivity

### Environment Variables Reference:

Copy `.env.example` to `.env.local` for local development:
```bash
cp .env.example .env.local
```

Edit the values as needed for your environment.
