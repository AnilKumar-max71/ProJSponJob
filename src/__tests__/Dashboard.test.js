import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard', () => {
  it('renders the job tracker table and Add Job button', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Job Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Job/i)).toBeInTheDocument();
  });

  it('shows the progress panel', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Progress/i)).toBeInTheDocument();
  });

  it('renders all table headers correctly', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Job Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Company/i)).toBeInTheDocument();
    expect(screen.getByText(/Sponsorship/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Deadline/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('displays progress statistics', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Weekly Applications:/i)).toBeInTheDocument();
    expect(screen.getByText(/Monthly Applications:/i)).toBeInTheDocument();
    expect(screen.getByText(/Response Rate:/i)).toBeInTheDocument();
  });

  it('shows empty state message when no jobs are present', () => {
    render(<Dashboard />);
    expect(screen.getByText(/No jobs added yet/i)).toBeInTheDocument();
  });
});