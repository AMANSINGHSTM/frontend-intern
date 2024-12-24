"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FormData {
  fullName: string;
  email: string;
  streetAddress: string;
  city: string;
  receiveNewsletters: boolean;
  enableNotifications: boolean;
}

const MultiStepForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    streetAddress: "",
    city: "",
    receiveNewsletters: false,
    enableNotifications: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [currentStep, setCurrentStep] = useState<string>("step1");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission logic (e.g., sending data to the server)
      alert("Form submitted successfully");
    }
  };

  const validateForm = (): boolean => {
    const newErrors: any = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.streetAddress)
      newErrors.streetAddress = "Street address is required";
    if (!formData.city) newErrors.city = "City is required";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <Tabs
      value={currentStep}
      onValueChange={setCurrentStep}
      className="max-w-2xl mx-auto"
    >
      {/* Navigation Tabs */}
      <TabsList className="mb-4 flex justify-between">
        <TabsTrigger value="step1">Step 1: Personal Info</TabsTrigger>
        <TabsTrigger value="step2">Step 2: Address Details</TabsTrigger>
        <TabsTrigger value="step3">Step 3: Preferences</TabsTrigger>
        <TabsTrigger value="step4">Step 4: Review & Submit</TabsTrigger>
      </TabsList>

      {/* Step 1: Personal Information */}
      <TabsContent value="step1">
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName}</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
        </form>
      </TabsContent>

      {/* Step 2: Address Details */}
      <TabsContent value="step2">
        <h2 className="text-xl font-bold mb-4">Address Details</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              placeholder="Enter your street address"
              required
              className="w-full p-2 border rounded"
            />
            {errors.streetAddress && (
              <span className="text-red-500 text-sm">
                {errors.streetAddress}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full p-2 border rounded"
            />
            {errors.city && (
              <span className="text-red-500 text-sm">{errors.city}</span>
            )}
          </div>
        </form>
      </TabsContent>

      {/* Step 3: Preferences */}
      <TabsContent value="step3">
        <h2 className="text-xl font-bold mb-4">Preferences</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="receiveNewsletters"
                checked={formData.receiveNewsletters}
                onChange={handleChange}
                required
                className="form-checkbox"
              />
              <span>Receive Newsletters</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="enableNotifications"
                checked={formData.enableNotifications}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>Enable Notifications</span>
            </label>
          </div>
        </form>
      </TabsContent>

      {/* Step 4: Review & Submit */}
      <TabsContent value="step4">
        <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
        <p className="mb-2">Review your details before submitting:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full Name: {formData.fullName}</li>
          <li>Email: {formData.email}</li>
          <li>
            Address: {formData.streetAddress}, {formData.city}
          </li>
          <li>
            Preferences: {formData.receiveNewsletters ? "Newsletters" : ""},{" "}
            {formData.enableNotifications ? "Notifications" : ""}
          </li>
        </ul>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </TabsContent>
    </Tabs>
  );
};

export default MultiStepForm;
