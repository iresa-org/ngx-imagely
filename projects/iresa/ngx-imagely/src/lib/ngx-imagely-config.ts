export interface NgxImagelyConfig {
  default?: string;
  loadingType?: 'lazy' | 'eager';
}

export const DEFAULT_CONFIG = {
  default: '',
  loadingType: 'lazy',
};
