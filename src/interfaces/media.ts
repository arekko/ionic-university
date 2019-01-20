// export interface Media {
//   file_count: FileCount;
//   files: Files[];
// }

export interface Files {
  file_id: number;
  media_type: string;
}

interface FileCount {
  total: number;
  image: number;
  video: number;
  audio: number;
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
}

export interface FullMediaData {
  response: MediaResponse;
  thumbnailUrl: string;
}
