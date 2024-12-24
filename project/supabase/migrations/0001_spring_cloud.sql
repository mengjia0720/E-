/*
  # Initial Schema Setup for e露營 (eCamping)

  1. New Tables
    - users (extends Supabase auth)
      - profile information
      - preferences
    - campsites
      - basic campsite information
      - location and amenities
    - bookings
      - reservation details
    - reviews
      - user reviews and ratings
    - checklists
      - customizable camping checklists

  2. Security
    - Enable RLS on all tables
    - Add appropriate access policies
*/

-- Users Profile Extension
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  location TEXT,
  bio TEXT,
  is_premium BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Campsites
CREATE TABLE IF NOT EXISTS campsites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  location_address TEXT NOT NULL,
  latitude DECIMAL,
  longitude DECIMAL,
  price_per_night DECIMAL NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('tent', 'rv', 'cabin')),
  amenities TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  max_capacity INTEGER,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Bookings
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  campsite_id uuid REFERENCES campsites(id),
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  total_price DECIMAL NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Reviews
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  campsite_id uuid REFERENCES campsites(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  images TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Checklists
CREATE TABLE IF NOT EXISTS checklists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  name TEXT NOT NULL,
  items JSONB NOT NULL DEFAULT '[]',
  is_template BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE campsites ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE checklists ENABLE ROW LEVEL SECURITY;

-- Policies
-- Profiles
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Campsites
CREATE POLICY "Campsites are viewable by everyone"
  ON campsites FOR SELECT
  USING (true);

-- Bookings
CREATE POLICY "Users can view own bookings"
  ON bookings FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookings"
  ON bookings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Reviews
CREATE POLICY "Reviews are viewable by everyone"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Users can create own reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Checklists
CREATE POLICY "Users can manage own checklists"
  ON checklists FOR ALL
  USING (auth.uid() = user_id);