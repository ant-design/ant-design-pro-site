import request from '../utils/request';

export async function queryProgressList() {
  return request('/api/project/progressList');
}

export async function queryTrendList() {
  return request('/api/trend/list');
}

