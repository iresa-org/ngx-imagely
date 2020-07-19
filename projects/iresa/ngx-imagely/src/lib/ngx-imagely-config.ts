export interface NgxImagelyConfig {
  default?: string;
  loadingType?: 'lazy' | 'eager';
  retryCount?: number;
}

export const DEFAULT_CONFIG = {
  default: '',
  loadingType: 'lazy',
  retryCount: 0,
};
