export const Image = `
fragment Image on UploadFileEntityResponse{
  data {
    id
    attributes {
      name
      alternativeText
      caption
      width
      height
      formats
      hash
      ext
      mime
      size
      url
      previewUrl
      provider_metadata
    }
  }
}
`
