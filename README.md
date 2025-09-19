# ProJSponJob - Sponsorship Job Search Community Tool

A comprehensive tool designed to assist job seekers in navigating the complexities of the job market, specifically focusing on sponsorship opportunities.

## Features

- **Job Tracker Dashboard**: Track job applications, statuses, and deadlines
- **Add Job Modal**: Manually add job postings with validation
- **CV/Cover Letter Manager**: Upload, generate, and manage CVs and cover letters
- **Progress Analytics**: Monitor application success rates and metrics
- **ATS Compatibility Scoring**: Analyze documents for ATS compatibility

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnilKumar-max71/ProJSponJob.git
cd ProJSponJob
```

2. Install dependencies:
```bash
npm install
```

## Testing

This project uses Jest and React Testing Library for comprehensive frontend testing.

### Running Tests

To run all tests:
```bash
npm test
```

To run tests in watch mode (automatically re-runs when files change):
```bash
npm run test:watch
```

To run tests with coverage report:
```bash
npm run test:coverage
```

### Test Structure

Tests are located in the `src/__tests__/` directory and follow the naming convention `ComponentName.test.js`.

Current test suites include:

- **Dashboard.test.js**: Tests for the main dashboard component
  - Renders job tracker table and Add Job button
  - Shows progress panel with statistics
  - Handles empty state correctly

- **AddJobModal.test.js**: Tests for the job addition modal
  - Form validation for required fields
  - Error handling and user feedback
  - Modal open/close functionality
  - Input field interactions

- **CVManager.test.js**: Tests for CV/Cover Letter management
  - File upload functionality
  - CV generation features
  - File history display
  - ATS scoring display

### Test Coverage

Current test coverage:
- **Overall**: 91.89% statements, 75% branches, 100% functions
- **Dashboard**: 100% coverage across all metrics
- **CVManager**: 100% coverage across all metrics
- **AddJobModal**: 88.46% statements, 91.66% lines

### Expanding Test Coverage

To expand test coverage, consider adding tests for:

1. **Integration Tests**: Test component interactions
2. **API Tests**: Mock backend API calls
3. **User Journey Tests**: Complete user workflows
4. **Accessibility Tests**: Screen reader and keyboard navigation
5. **Performance Tests**: Component rendering performance

#### Adding New Tests

1. Create test files in `src/__tests__/` directory
2. Follow the existing naming convention: `ComponentName.test.js`
3. Use React Testing Library best practices:
   - Query by accessible roles and labels
   - Test user interactions, not implementation details
   - Use `screen` queries for better debugging

#### Example Test Structure

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import YourComponent from '../components/YourComponent';

describe('YourComponent', () => {
  it('should render correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText(/expected text/i)).toBeInTheDocument();
  });

  it('should handle user interactions', () => {
    render(<YourComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/success message/i)).toBeInTheDocument();
  });
});
```

### Test Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the user sees and does
2. **Use Semantic Queries**: Prefer `getByRole`, `getByLabelText`, `getByText`
3. **Mock External Dependencies**: Keep tests isolated and fast
4. **Write Descriptive Test Names**: Make test failures easy to understand
5. **Test Error States**: Ensure proper error handling and user feedback

## UI/UX Design

The application follows the wireframes specified in `UI-wireframes.md`, implementing:

- Clean, modern, responsive design
- One to two-click access to major actions
- Simple, clear error and success messages
- Human-centric, UK-standard language

For detailed UI specifications, see:
- `UI-wireframes.md`: Complete wireframe specifications
- `wireframe-spec.md`: Technical implementation details

## Tech Stack

- **Frontend**: React, JavaScript
- **Testing**: Jest, React Testing Library
- **Backend**: FastAPI (Python)
- **Database**: TBD (MongoDB proposed)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

This project is licensed under the ISC License.