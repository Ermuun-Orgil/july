export interface MomentDataType {
  id: string;
  date: string;
  hour: string;
  photos: PhotoDataType[];
  setPhoto: Function;
  setOpen: Function;
}
export interface PhotoDataType {
  imageUrl: string;
  title: string;
  time: string;
}

export interface CarouselPopUpType {
  open: boolean;
  close: () => void;
  data: any;
}
