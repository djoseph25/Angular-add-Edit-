export interface IContact {
  addresses:         IAddress[];
  name:              string;
}

export interface IAddress {
  addressType:        string;
  city:               string;
  postalCode:         string;
}
export interface IAdrType {
  value: string;
  viewValue: string;
}