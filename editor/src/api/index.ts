import service from "@/utils/request";

export const getDslVersionListApi = (actId: number | string) => {
  return service.request({
    method: 'get',
    url: '/api/agent/v1/codeManagement/version/all',
    params: {
      actId
    }
  })
}

export const saveDslApi = (data: defs.agent.SaveDslBody) =>
  service.request({
    method: 'put',
    url: '/api/agent/v1/codeManagement/save-dsl',
    data,
  })

export const showVersionInfoApi = (id: string) => () => {
  return service.request({
    method: 'get',
    url: `/api/agent/v1/codeManagement/show/${id}`,
  })
}