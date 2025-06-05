import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://njhrevlyruuwkhpdblvy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qaHJldmx5cnV1d2tocGRibHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5NjA0NjMsImV4cCI6MjA2MzUzNjQ2M30.k6iVC8Vin8GjqZFumdsAmkdjzxiMRLlXd6LUxG9LAdw";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;