import React from 'react';

const InvestorForm = ({
  formData,
  title,
  buttonMessage,
  fileInputRef,
  handleInputChange,
  handleFileChange,
  handleSubmit,
  loading,
  error,
  success,
  successMessage,
}: any) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-6">
      <div className="investor-form">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Tail wind logo"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {title}
          </h2>
        </div>

        <div className="mt-10 lg:mx-auto lg:w-full md:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-testid="investor-form"
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  id="dateOfBirth"
                  data-testid="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  data-testid="phoneNumber"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Format: 123-456-7890"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  autoComplete="tel"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Street Address
              </label>
              <div className="mt-2">
                <input
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="Street Address"
                  type="text"
                  required
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex">
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  State
                </label>
                <div className="mt-2">
                  <input
                    id="state"
                    name="state"
                    placeholder="State"
                    type="text"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="zipcode"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Zip Code
                </label>
                <div className="mt-2">
                  <input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    required
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    placeholder="5 Digits only"
                    pattern="[0-9]{5}"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="fileURL"
                className="block text-sm/6 font-medium text-gray-900"
              >
                File Upload
              </label>
              <div className="mt-2">
                <input
                  id="fileURL"
                  name="fileURL"
                  data-testid="fileInput"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {error && (
              <p data-testid="error" className="text-sm text-red-500">
                {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-green-500">{successMessage}</p>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? 'Submitting...' : buttonMessage}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvestorForm;
