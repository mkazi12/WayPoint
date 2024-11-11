import React, { useState } from 'react';

const Calendar = ({ startDate, endDate, onDateChange }) => {
  // ... Calendar component remains the same ...
};

const Dashboard = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({ start: null, end: null });
  const [accommodations, setAccommodations] = useState('');
  const [loading, setLoading] = useState(false);
  const [travelPlan, setTravelPlan] = useState('');

  const generateTravelPlan = async () => {
    if (!destination || !dates.start || !dates.end) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/generate-travel-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination,
          dateFrom: dates.start,
          dateTo: dates.end,
          accommodations,
        }),
      });

      const data = await response.json();
      setTravelPlan(data.travelPlan);
    } catch (error) {
      console.error('Error generating travel plan:', error);
      alert('Failed to generate travel plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#DADED4' }} className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-[#F0F4F1] rounded-lg border-2 border-[#A3B18A] shadow-lg">
          <div className="bg-[#DADED4] p-4 rounded-t-lg">
            <h1 className="text-2xl font-bold text-[#3C493F]">Travel Planner</h1>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#3C493F]">Destination</label>
              <input
                type="text"
                placeholder="Where are you going?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-2 rounded-lg border-2 border-[#A3B18A] focus:border-[#588157] focus:ring-2 focus:ring-[#588157] bg-[#DADED4] bg-opacity-50 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#3C493F]">Travel Dates</label>
              <Calendar
                startDate={dates.start}
                endDate={dates.end}
                onDateChange={setDates}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#3C493F]">Accommodations & Preferences</label>
              <textarea
                placeholder="Any specific accommodation requirements or preferences?"
                value={accommodations}
                onChange={(e) => setAccommodations(e.target.value)}
                className="w-full p-2 min-h-[100px] rounded-lg border-2 border-[#A3B18A] focus:border-[#588157] focus:ring-2 focus:ring-[#588157] bg-[#DADED4] bg-opacity-50 outline-none"
              />
            </div>

            <div className="p-4 border-2 border-[#A3B18A] rounded-lg">
              <button
                onClick={generateTravelPlan}
                disabled={loading}
                className="w-full py-2 px-4 bg-[#588157] hover:bg-[#3A5A40] text-white rounded-lg transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Plan...
                  </span>
                ) : (
                  'Generate Travel Plan'
                )}
              </button>
            </div>
          </div>
        </div>

        {travelPlan && (
          <div className="bg-[#F0F4F1] rounded-lg border-2 border-[#A3B18A] shadow-lg">
            <div className="bg-[#DADED4] p-4 rounded-t-lg">
              <h2 className="text-xl font-bold text-[#3C493F]">Your Travel Plan</h2>
            </div>
            <div className="p-6">
              <div className="whitespace-pre-wrap text-[#3C493F]">{travelPlan}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;