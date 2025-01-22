import { useEffect, useState } from 'react';
import axios from 'axios';
import {  EnvelopeIcon,  MapPinIcon, BriefcaseIcon,UserCircleIcon } from "@heroicons/react/24/outline";

export default function ProfileCard({ employeeId ,employee}) {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      if (employeeId) {
        try {
          const response = await axios.get(`http://localhost:8080/api/employees/${employeeId}`);
          setEmployeeData(response.data);
        } catch (error) {
          console.error('Error fetching employee data:', error);
        }
      }
    };

    fetchEmployeeData();
  }, [employeeId]);

  if (!employeeData) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
  {employeeData.firstName.charAt(0)}
</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{employeeData.firstName} {employeeData.lastName}</h2>        
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3 text-gray-700">
            <EnvelopeIcon className="w-5 h-5" />
            <span>{employeeData.email}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <BriefcaseIcon className="w-5 h-5" />
            <span>{employeeData.role}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
          <UserCircleIcon className="w-5 h-5" />
            <span>{employeeData.employeeId}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

