require('dotenv').config();

const {
    VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY
} = process.env;

// Connect to the database 
const { createClient } = require('@supabase/supabase-js');

module.exports = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);