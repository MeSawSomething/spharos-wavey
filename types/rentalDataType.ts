export interface RentalDataType {
  rentalId: number;
  carName: string;
  carBrand: string;
  capacity: number;
  defaultPrice: number;
  distancePrice: number;
  charge: number;
  imageUrl: string;
  startDate: string;
  endDate: string;
  billitazone: string;
  purchaseState: string;
}

export interface timeType {
  startTime: string;
  endTime: string;
}

export interface billitaZoneType {
  billitaZoneLat: number;
  billitaZoneName: string;
  billitaZoneLng: number;
  billitaZoneId: number;
  rentAbleAmount: number;
}

export interface BillitaZoneListType extends Array<billitaZoneType> {}

export interface IsUserRentalNowDataType {
  imageUrl: string;
  brandName: string;
  carName: string;
}

export interface MyRentalCarType {
  rentalId: number;
  vehicleId: number;
  startDate: Date;
  endDate: Date;
}
