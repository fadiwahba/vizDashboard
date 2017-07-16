export interface Pod {
  isActive: boolean,
  process: number,
  cpu: number,
  status: string,
  instances: number,
  memory: number,
  upTime: string,
  restarts: object
}