export interface carDataType {
  color: string;
  feature: {
    열선: boolean;
    썬루프: boolean;
  };
  number: string;
  latitude: number;
  longitude: number;
  available: boolean;
  charge: number;
  actualReturnedZone: number;
  smartKey: string;
  frameInfo: {
    createDate: string | null;
    updateDate: string | null;
    id: number;
    carBrand: string;
    foreignCar: boolean;
    carName: string;
    capacity: string;
    recommend: boolean;
    defaultPrice: number;
    distancePrice: number;
    carType: string;
    appearance: string;
    manuel: string;
    image: string;
  };
  washTime: string;
  place: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    zoneAddress: string;
  };
}

export interface carListType {
  carName: string;
  carBrand: string;
  carImage: string;
  billitaZone: string;
  defaultPrice: number;
  canBook: boolean;
  purchaseStatus: string;
}

export interface carListbyBrandDataType {
  vehicleId: number;
  carName: string;
  imageUrl: string;
  charge: number;
  defaultPrice: number;
  distancePrice: number;
  carBrand: string;
  zoneAddress: string;
  billitaZone: string;
}

export interface carInMapType {
  vehicleId: number;
  carName: string;
  carBrandName: string;
  canBook: boolean;
  defaultPrice: number;
  vehicleImage: string;
  distancePrice: number;
  currentCharge: number;
}
