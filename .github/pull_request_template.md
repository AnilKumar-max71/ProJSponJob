# Pull Request Checklist

## Description
Brief description of the changes made in this PR.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Configuration change
- [ ] Deployment related change

## Testing Checklist
- [ ] Unit tests added/updated and passing
- [ ] Integration tests added/updated and passing
- [ ] Manual testing completed
- [ ] Admin login functionality verified (if applicable)
- [ ] Frontend components render correctly
- [ ] Backend API endpoints respond correctly
- [ ] Error handling tested

## Documentation Checklist
- [ ] Code changes are documented
- [ ] README updated (if applicable)
- [ ] UI wireframes updated (if applicable)
- [ ] Deployment instructions updated (if applicable)
- [ ] API documentation updated (if applicable)

## Configuration Checklist
- [ ] Environment variables properly configured
- [ ] Vercel configuration validated (`vercel.json`)
- [ ] Render configuration validated (backend deployment)
- [ ] Admin access controls properly configured
- [ ] CORS settings validated
- [ ] Dependencies updated in `requirements.txt` (Python) or `package.json` (Node.js)

## Deployment Checklist
- [ ] Frontend builds successfully
- [ ] Backend starts without errors
- [ ] Environment variables set correctly for production
- [ ] Admin-only access mode configured initially
- [ ] Database connections tested (if applicable)
- [ ] External API integrations tested (if applicable)
- [ ] Performance testing completed
- [ ] Security review completed

## Quality Checklist
- [ ] Code follows project style guidelines
- [ ] No hardcoded secrets or sensitive data
- [ ] Error handling implemented
- [ ] Logging implemented where appropriate
- [ ] Code is optimized for performance
- [ ] Accessibility considerations addressed (for UI changes)

## Reviewer Notes
Please ensure all boxes are checked before approving this PR. Additional notes:

---

**Final Approval**: 
- [ ] All deployment requirements met
- [ ] All configuration requirements met  
- [ ] All documentation requirements met
- [ ] All testing requirements met
- [ ] PR is ready to merge after final verification