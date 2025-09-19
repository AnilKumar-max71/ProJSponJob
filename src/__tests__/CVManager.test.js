import { render, screen, fireEvent } from '@testing-library/react';
import CVManager from '../components/CVManager';

describe('CVManager', () => {
  it('renders upload and generate buttons', () => {
    render(<CVManager />);
    expect(screen.getByText(/Upload CV/i)).toBeInTheDocument();
    expect(screen.getByText(/Generate New/i)).toBeInTheDocument();
  });

  it('renders the CV manager header', () => {
    render(<CVManager />);
    expect(screen.getByText(/CV\/Cover Letter Manager/i)).toBeInTheDocument();
  });

  it('shows CV/CL History section', () => {
    render(<CVManager />);
    expect(screen.getByText(/CV\/CL History/i)).toBeInTheDocument();
  });

  it('displays empty state message when no files are uploaded', () => {
    render(<CVManager />);
    expect(screen.getByText(/No files uploaded yet/i)).toBeInTheDocument();
  });

  it('handles file upload input', () => {
    render(<CVManager />);
    const fileInput = screen.getByLabelText(/Upload CV/i);
    expect(fileInput).toBeInTheDocument();
    expect(fileInput.getAttribute('type')).toBe('file');
    expect(fileInput.getAttribute('accept')).toBe('.pdf,.doc,.docx');
  });

  it('calls generate new CV handler when button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<CVManager />);
    
    fireEvent.click(screen.getByText(/Generate New/i));
    expect(consoleSpy).toHaveBeenCalledWith('Generate new CV clicked');
    
    consoleSpy.mockRestore();
  });

  it('allows multiple file selection', () => {
    render(<CVManager />);
    const fileInput = screen.getByLabelText(/Upload CV/i);
    expect(fileInput.hasAttribute('multiple')).toBe(true);
  });

  it('simulates file upload and displays file information', () => {
    render(<CVManager />);
    const fileInput = screen.getByLabelText(/Upload CV/i);
    
    // Create mock file
    const mockFile = new File(['test content'], 'test-cv.pdf', { type: 'application/pdf' });
    
    // Simulate file upload
    fireEvent.change(fileInput, { target: { files: [mockFile] } });
    
    // Check if file appears in the list
    expect(screen.getByText('test-cv.pdf')).toBeInTheDocument();
    expect(screen.getByText(/View/i)).toBeInTheDocument();
    expect(screen.getByText(/Download/i)).toBeInTheDocument();
    expect(screen.getByText(/ATS Score: 85%/i)).toBeInTheDocument();
    expect(screen.getByText(/AI Detection: Low/i)).toBeInTheDocument();
  });
});