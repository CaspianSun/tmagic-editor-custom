import service from "@/utils/request";

export const getDslVersionListApi = (actId: number | string) =>
  service.request<Pick<defs.agent.CodeManagement, 'id' | 'version'>[]>({
    method: 'get',
    url: '/api/agent/v1/codeManagement/version/all',
    params: {
      actId
    }
  })

export const saveDslApi = (data: defs.agent.SaveDslBody) =>
  service.request<defs.agent.CodeManagement>({
    method: 'put',
    url: '/api/agent/v1/codeManagement/save-dsl',
    data,
  })

export const getVersionInfoApi = (id: number) =>
  service.request<defs.agent.CodeManagement>({
    method: 'get',
    url: `/api/agent/v1/codeManagement/show/${id}`,
  })