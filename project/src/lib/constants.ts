export const SITE_NAME = 'e露營';
export const SITE_DESCRIPTION = 'Discover and book the best camping spots in Taiwan';

export const CAMPSITE_TYPES = [
  { id: 'tent', label: '帳篷露營' },
  { id: 'rv', label: 'RV露營車' },
  { id: 'cabin', label: '露營小屋' },
] as const;

export const AMENITIES = [
  { id: 'wifi', label: 'WiFi', icon: 'wifi' },
  { id: 'shower', label: '淋浴設施', icon: 'shower' },
  { id: 'toilet', label: '廁所', icon: 'toilet' },
  { id: 'parking', label: '停車場', icon: 'parking' },
  { id: 'bbq', label: 'BBQ設施', icon: 'flame' },
  { id: 'pets', label: '寵物友善', icon: 'paw' },
  { id: 'electricity', label: '電源供應', icon: 'zap' },
  { id: 'water', label: '自來水', icon: 'droplet' },
] as const;