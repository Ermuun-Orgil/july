export interface MomentDataType {
  id: string;
  date: string;
  hour: string;
  photos: PhotoDataType[];
}
export interface PhotoDataType {
  imageUrl: string;
  title: string;
  time: string;
}
