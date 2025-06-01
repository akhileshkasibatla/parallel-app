import { useRef, useState } from 'react';
import axios from 'axios';
import InvestorForm from '../../presentational/AddInvestorForm';
import './AddInvestor.scss';

interface Investor {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  streetAddress: string;
  state: string;
  zipcode: string;
  fileURL: string;
}

const API_SERVICE_URL = 'http://localhost:3000/addInvestor';

export const AddInvestor = () => {
  const fileInputRef = useRef('');
  const [formData, setFormData] = useState<Investor>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    streetAddress: '',
    state: '',
    zipcode: '',
    fileURL: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      fileURL: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    //Added this timeout just to showcase loading functionality.
    setTimeout(async () => {
      const form = new FormData();
      form.append('firstName', formData.firstName);
      form.append('lastName', formData.lastName);
      form.append('dateOfBirth', formData.dateOfBirth);
      form.append('phoneNumber', formData.phoneNumber);
      form.append('streetAddress', formData.streetAddress);
      form.append('state', formData.state);
      form.append('zipcode', formData.zipcode);
      form.append('file', formData.fileURL);

      try {
        const response = await axios.post(API_SERVICE_URL, form, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200 || response.status === 201) {
          fileInputRef.current.value = '';
          setSuccess(true);
          setSuccessMessage('Investor added successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            phoneNumber: '',
            streetAddress: '',
            state: '',
            zipcode: '',
            fileURL: '',
          });
          setTimeout(() => setSuccess(false), 4000);
        }
      } catch (error) {
        setError('Something went wrong. Please check your data and try again.');
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <InvestorForm
      formData={formData}
      title="Add an Investor"
      buttonMessage="Add Investor"
      fileInputRef={fileInputRef}
      handleInputChange={handleInputChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
      successMessage={successMessage}
    />
  );
};
