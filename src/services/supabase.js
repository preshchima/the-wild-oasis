import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://htnlztsbmpblftezwxfh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0bmx6dHNibXBibGZ0ZXp3eGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMDA3ODgsImV4cCI6MjA3ODc3Njc4OH0.7fR2kbjm1-aiWLX8W7rISSXnMHv-Xp7KYSXwbwHGv08";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
