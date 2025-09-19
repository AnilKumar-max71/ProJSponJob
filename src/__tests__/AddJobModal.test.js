import { render, screen, fireEvent } from '@testing-library/react';
import AddJobModal from '../components/AddJobModal';

describe('AddJobModal', () => {
  it('validates required fields and shows error on submit', () => {
    render(<AddJobModal isOpen={true} />);
    fireEvent.click(screen.getByText(/Submit/i));
    expect(screen.getByText(/Job Title is Required/i)).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<AddJobModal isOpen={false} />);
    expect(screen.queryByText(/Add New Job/i)).not.toBeInTheDocument();
  });

  it('renders all form fields when open', () => {
    render(<AddJobModal isOpen={true} />);
    expect(screen.getByLabelText(/Job Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Job Link/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sponsorship/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Deadline/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Notes/i)).toBeInTheDocument();
  });

  it('shows validation errors for all required fields', () => {
    render(<AddJobModal isOpen={true} />);
    fireEvent.click(screen.getByText(/Submit/i));
    
    expect(screen.getByText(/Job Title is Required/i)).toBeInTheDocument();
    expect(screen.getByText(/Company is Required/i)).toBeInTheDocument();
    expect(screen.getByText(/Sponsorship selection is Required/i)).toBeInTheDocument();
  });

  it('clears errors when user starts typing', () => {
    render(<AddJobModal isOpen={true} />);
    
    // Trigger validation errors
    fireEvent.click(screen.getByText(/Submit/i));
    expect(screen.getByText(/Job Title is Required/i)).toBeInTheDocument();
    
    // Start typing to clear error
    const jobTitleInput = screen.getByLabelText(/Job Title/i);
    fireEvent.change(jobTitleInput, { target: { value: 'Software Engineer' } });
    
    expect(screen.queryByText(/Job Title is Required/i)).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const mockOnClose = jest.fn();
    render(<AddJobModal isOpen={true} onClose={mockOnClose} />);
    
    fireEvent.click(screen.getByText(/×/));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onClose when cancel button is clicked', () => {
    const mockOnClose = jest.fn();
    render(<AddJobModal isOpen={true} onClose={mockOnClose} />);
    
    fireEvent.click(screen.getByText(/Cancel/i));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('includes sponsorship dropdown options', () => {
    render(<AddJobModal isOpen={true} />);
    const sponsorshipSelect = screen.getByLabelText(/Sponsorship/i);
    expect(sponsorshipSelect).toBeInTheDocument();
    
    // Check for the Yes option specifically by value
    expect(screen.getByDisplayValue('Select...')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Yes' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'No' })).toBeInTheDocument();
  });
});