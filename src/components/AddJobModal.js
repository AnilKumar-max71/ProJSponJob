import React, { useState } from 'react';

const AddJobModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    link: '',
    sponsorship: '',
    deadline: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job Title is Required';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company is Required';
    }
    if (!formData.sponsorship) {
      newErrors.sponsorship = 'Sponsorship selection is Required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', formData);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Job</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="job-form">
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title *</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className={errors.jobTitle ? 'error' : ''}
            />
            {errors.jobTitle && <span className="error-message">{errors.jobTitle}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Company *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={errors.company ? 'error' : ''}
            />
            {errors.company && <span className="error-message">{errors.company}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="link">Job Link</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sponsorship">Sponsorship *</label>
            <select
              id="sponsorship"
              name="sponsorship"
              value={formData.sponsorship}
              onChange={handleInputChange}
              className={errors.sponsorship ? 'error' : ''}
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.sponsorship && <span className="error-message">{errors.sponsorship}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobModal;