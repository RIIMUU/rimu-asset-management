export const validateAssetForm = (formData) => {
    const errors = {};
  
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.type) {
      errors.type = 'Type is required';
    }
    if (!formData.status) {
      errors.status = 'Status is required';
    }
    if (!formData.location) {
      errors.location = 'Location is required';
    }
  
    return errors;
  };
  