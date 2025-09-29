const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log('🔍 Testing Database Connection');
console.log('==============================');

async function testConnection() {
    try {
        console.log('⏳ Connecting to MongoDB Atlas...');
        
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000
        });
        
        console.log('✅ SUCCESS: MongoDB connection established');
        console.log(`📊 Database: ${mongoose.connection.db.databaseName}`);
        
        // Test creating a simple document
        const testSchema = new mongoose.Schema({ test: String });
        const TestModel = mongoose.model('Test', testSchema);
        
        const testDoc = new TestModel({ test: 'connection test' });
        await testDoc.save();
        console.log('✅ Write operation successful');
        
        await TestModel.deleteOne({ test: 'connection test' });
        console.log('✅ Delete operation successful');
        
        await mongoose.disconnect();
        console.log('🔌 Disconnected successfully');
        
        return true;
    } catch (error) {
        console.log('❌ Connection failed:', error.message);
        return false;
    }
}

testConnection().then(success => {
    if (success) {
        console.log('\n🎉 Database is ready for the backend server!');
    } else {
        console.log('\n💥 Fix the database connection first');
    }
    process.exit(success ? 0 : 1);
});