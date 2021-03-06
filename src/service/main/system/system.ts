import hyRequest from '../../index'
import { IDataType } from '@/service/types'

export function getPageListDate(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
