import ImageKit from "imagekit";

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || process.env.IMAGEKIT_PUBLIC_KEY || "public_uzSklsoDFlGNoIPGFtTdcYJU32Y=";
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY || "private_Zgjm0jSmxe2S76y3kkULZ5nzEvo=";
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/avdarinn";
const defaultFolder = process.env.IMAGEKIT_DEFAULT_FOLDER || "workforce";

export const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});

export const imagekitConfig = {
  publicKey,
  urlEndpoint,
  defaultFolder,
};

export interface UploadResult {
  fileId: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  height: number;
  width: number;
  size: number;
  filePath: string;
  tags?: string[];
}

export async function uploadToImageKit({
  file,
  fileName,
  folder = defaultFolder,
  tags,
}: {
  file: string | Buffer;
  fileName: string;
  folder?: string;
  tags?: string[];
}): Promise<UploadResult> {
  const normalizedFolder = folder.startsWith("/") ? folder : `/${folder}`;
  const res = await imagekit.upload({
    file,
    fileName,
    folder: normalizedFolder,
    tags,
    useUniqueFileName: true,
  });

  return {
    fileId: res.fileId,
    name: res.name,
    url: res.url,
    thumbnailUrl: res.thumbnailUrl || res.url,
    height: res.height || 0,
    width: res.width || 0,
    size: res.size || 0,
    filePath: res.filePath,
    tags: res.tags,
  };
}

export async function listImageKitFiles(folder: string = defaultFolder, limit: number = 50) {
  const normalizedFolder = folder.startsWith("/") ? folder : `/${folder}`;
  return await imagekit.listFiles({
    path: normalizedFolder,
    limit,
  });
}

export async function deleteFromImageKit(fileId: string) {
  return await imagekit.deleteFile(fileId);
}

export function getImageKitAuthParameters() {
  return imagekit.getAuthenticationParameters();
}
