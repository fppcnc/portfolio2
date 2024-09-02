const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('your_mongoDB_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for your data
const SectionSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Section = mongoose.model('Section', SectionSchema);

// CRUD routes
app.post('/api/sections', async (req, res) => {
    const newSection = new Section(req.body);
    await newSection.save();
    res.status(201).send(newSection);
});

app.get('/api/sections', async (req, res) => {
    const sections = await Section.find();
    res.send(sections);
});

app.put('/api/sections/:id', async (req, res) => {
    const updatedSection = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedSection);
});

app.delete('/api/sections/:id', async (req, res) => {
    await Section.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
