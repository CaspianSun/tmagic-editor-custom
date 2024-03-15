import { service } from "@/utils/request"

export const getFormSubmitApi = (params: { targetKey?: string; formCode?: string }) => {
  return service.get<any>({
    url: "/api/h5/v1/form",
    params
  })
}

export const getFormFieldsApi = (code: string) => {
  return service.get<defs.h5.FormFieldsRes>({
    url: "/api/h5/v1/form/getForm",
    params: {
      formCode: code
    }
  })
}

export const saveFormApi = (data: defs.h5.SubmitContent) => {
  return service.post<defs.h5.Submit>({
    url: "/api/h5/v1/form/save",
    data
  })
}

export const ossUploadApi = (data: FormData) => {
  return service.post<string>({
    url: "/api/h5/v1/form/uploadFile",
    data: data,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}
