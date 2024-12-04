import React, { useState } from 'react';
import { format } from 'date-fns';
import OpenAI from 'openai';
import { Autocomplete, TextField, Button, CardContent, CardHeader, Card, CircularProgress, Typography } from '@mui/material';
import MarkdowIt from 'markdown-it';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: false 
});

const md = new MarkdowIt();


const Dashboard = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });
  const [accommodations, setAccommodations] = useState('');
  const [travelPlan, setTravelPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateTravelPlan = async () => {
    // Validate inputs
    if (!destination || !date.from || !date.to) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      if (!import.meta.env.VITE_OPENAI_API_KEY) {
        throw new Error("API key not configured");
      }

      // Prepare prompt
      const prompt = `Create a detailed travel itinerary for a trip to ${destination} from ${format(date.from, 'PPP')} to ${format(date.to, 'PPP')}.${
        accommodations ? ` Consider these special requirements: ${accommodations}.` : ''
      }

      Please include:
      1. Daily activities and attractions
      2. Recommended restaurants and local cuisine
      3. Transportation tips
      4. Important local customs or considerations
      5. Weather-appropriate clothing suggestions
      6. Safety tips if applicable

      Format the response in a clear, day-by-day structure.`;

      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-4o",
        temperature: 0.7,
        max_tokens: 1000,
      });

      // Set the generated travel plan
      setTravelPlan(completion.choices[0].message.content || 'No plan generated');
    } catch (err) {
      console.error('Error generating travel plan:', err);
      setError(err.message || 'Failed to generate travel plan. Please try again.');
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <div className="container mx-auto p-6">
      <Typography variant="h4" component="h1" gutterBottom>
        Travel Planner
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Plan Your Trip" />
          <CardContent className="space-y-4">
            <Autocomplete
              value={destination || ''}
              onChange={(event, newValue) => setDestination(newValue) || ''}
              inputValue={destination || ''}
              onInputChange={(event, newInputValue) => setDestination(newInputValue || '')}
              options={[]} 
              renderInput={(params) => (
                <TextField {...params} label="Destination" variant="outlined" />
              )}
            />

            <TextField
              label="Start Date"
              type="date"
              value={date.from ? format(date.from, 'yyyy-MM-dd') : ''}
              onChange={(e) => setDate({ ...date, from: new Date(e.target.value) })}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />

            <TextField
              label="End Date"
              type="date"
              value={date.to ? format(date.to, 'yyyy-MM-dd') : ''}
              onChange={(e) => setDate({ ...date, to: new Date(e.target.value) })}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />

            <TextField
              label="Special Accommodations"
              multiline
              rows={2}
              value={accommodations}
              onChange={(e) => setAccommodations(e.target.value)}
              fullWidth
            />

            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={generateTravelPlan}
              disabled={isLoading}
              fullWidth
            >
              {isLoading ? <CircularProgress size={24} /> : 'Generate Travel Plan'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Your Travel Plan" />
          <CardContent>
            {travelPlan ? (
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: md.render(travelPlan) }} />
              </div>
            ) : (
              <Typography color="textSecondary">
                Fill in your travel details and click "Generate Travel Plan" to get your personalized itinerary.
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
