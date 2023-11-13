import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bocvaupkvqdongjidvir.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvY3ZhdXBrdnFkb25namlkdmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNzg1MjksImV4cCI6MjAxMzY1NDUyOX0.k6QN0D0ZeTTlsbJo-6vHKLz7I5QAxf9xm-TuNaS43As";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
