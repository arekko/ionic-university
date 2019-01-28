export interface Thumbnails {
  w160: string;
  w320: string;
  w640: string;
}
export interface MediaResponse {
  file_id: number;
  filename: string;
  filesize: number;
  title: string;
  description: string;
  user_id: number;
  media_type: string;
  mime_type: string;
  time_added: string;
  screenshots?: string;
  thumbnails?: Thumbnails;
}
