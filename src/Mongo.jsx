
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = import.meta.env.VITE_MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const ItinerarySchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    travelPlan: {
      type: String,
      required: true
    },
    accommodations: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    isPublic: {
      type: Boolean,
      default: false
    }
  });
  
  export default mongoose.model('Itinerary', ItinerarySchema);
  
  // Example save function
  async function saveItinerary(userId, itineraryData) {
    try {
      const newItinerary = new Itinerary({
        userId,
        destination: itineraryData.destination,
        startDate: itineraryData.startDate,
        endDate: itineraryData.endDate,
        travelPlan: itineraryData.travelPlan,
        accommodations: itineraryData.accommodations
      });
  
      await newItinerary.save();
      return newItinerary;
    } catch (error) {
      console.error('Error saving itinerary:', error);
      throw error;
    }
  }
  
  // Example retrieval function
  async function getUserItineraries(userId) {
    try {
      return await Itinerary.find({ userId }).sort({ createdAt: -1 });
    } catch (error) {
      console.error('Error retrieving itineraries:', error);
      throw error;
    }
  }