import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      pinCode: '',
      country: '',
      state: '',
      city: '',
    },
  });

  const onSubmit = (data) => {
    Swal.fire({
      title: 'Success',
      text: 'Profile updated Successfully',
      icon: 'success',
    });
    reset();
  };

  return (
    <div className=" bg-gray-100 mt-11 ml-11">
      <div className=" bg-white p-8 rounded-lg shadow-lg">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-lg">
          <h2 className="text-2xl font-bold">Personal Details</h2>
          <p>
            Make changes to your Profile Account here.{' '}
            <span className="font-semibold">
              Click save when you're done.
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">First Name *</label>
              <input
                type="text"
                {...register('firstName', { required: 'First Name is required' })}
                placeholder="First Name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Middle Name</label>
              <input
                type="text"
                {...register('middleName')}
                placeholder="Middle Name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name *</label>
              <input
                type="text"
                {...register('lastName', { required: 'Last Name is required' })}
                placeholder="Last Name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email *</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Phone *</label>
              <input
                type="tel"
                {...register('phone', { required: 'Phone number is required' })}
                placeholder="Phone"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Address *</label>
            <input
              type="text"
              {...register('address', { required: 'Address is required' })}
              placeholder="Type your address here."
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700">Pin Code *</label>
              <input
                type="text"
                {...register('pinCode', { required: 'Pin Code is required' })}
                placeholder="Pin Code"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.pinCode && (
                <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Country *</label>
              <input
                type="text"
                {...register('country', { required: 'Country is required' })}
                placeholder="Country"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">State *</label>
              <input
                type="text"
                {...register('state', { required: 'State is required' })}
                placeholder="State"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">City *</label>
              <input
                type="text"
                {...register('city', { required: 'City is required' })}
                placeholder="City"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
