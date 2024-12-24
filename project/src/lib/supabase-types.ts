export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          display_name: string | null
          avatar_url: string | null
          location: string | null
          bio: string | null
          is_premium: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          display_name?: string | null
          avatar_url?: string | null
          location?: string | null
          bio?: string | null
          is_premium?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          display_name?: string | null
          avatar_url?: string | null
          location?: string | null
          bio?: string | null
          is_premium?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      campsites: {
        Row: {
          id: string
          name: string
          description: string | null
          location_address: string
          latitude: number | null
          longitude: number | null
          price_per_night: number
          type: 'tent' | 'rv' | 'cabin'
          amenities: string[]
          images: string[]
          max_capacity: number | null
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          location_address: string
          latitude?: number | null
          longitude?: number | null
          price_per_night: number
          type: 'tent' | 'rv' | 'cabin'
          amenities?: string[]
          images?: string[]
          max_capacity?: number | null
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          location_address?: string
          latitude?: number | null
          longitude?: number | null
          price_per_night?: number
          type?: 'tent' | 'rv' | 'cabin'
          amenities?: string[]
          images?: string[]
          max_capacity?: number | null
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}