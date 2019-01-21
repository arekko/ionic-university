export interface Thumbnail {
  160: string;
  320: string;
  640: string;
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
  screenshot?: string;
  thumbnails: Thumbnail;
}
