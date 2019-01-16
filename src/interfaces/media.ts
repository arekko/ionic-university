export interface Media {
  file_count: FileCount;
  files: Files[];
}

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
