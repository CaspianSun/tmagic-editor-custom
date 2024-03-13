import { service } from "@/utils/request"

export const getFormFields = (code: string) => {
  return service.get<defs.h5.FormFieldsRes>({
    url: "/api/h5/v1/form/getForm",
    params: {
      formCode: code
    }
  })
}

export const ossUpload = (file: File) => {
  service.post({
    url: "/api/h5/v1/oss/upload",
    data: file,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}
