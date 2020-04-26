import { BasicUsageComponent } from './examples/basic-usage/basic-usage.component';
import { LazyLoadingComponent } from './examples/lazy-loading/lazy-loading.component';
import { EagerLoadingComponent } from './examples/eager-loading/eager-loading.component';
import { MissingAltAttrComponent } from './examples/missing-alt-attr/missing-alt-attr.component';
import { FallbackImageComponent } from './examples/fallback-image/fallback-image.component';

export const IMG_FEATURES = [
  {
    id: 'basic',
    label: 'imagely.docs.basicUsage',
    outlet: BasicUsageComponent,
    html: require('!!raw-loader!./examples/basic-usage/basic-usage.component.html'),
    component: require('!!raw-loader!./examples/basic-usage/basic-usage.component.ts'),
    scss: require('!!raw-loader!./examples/basic-usage/basic-usage.component.scss')
  },
  {
    id: 'lazy-loading',
    label: 'imagely.docs.lazyLoading',
    outlet: LazyLoadingComponent,
    html: require('!!raw-loader!./examples/lazy-loading/lazy-loading.component.html'),
    component: require('!!raw-loader!./examples/lazy-loading/lazy-loading.component.ts'),
    scss: require('!!raw-loader!./examples/lazy-loading/lazy-loading.component.scss'),
    description: 'imagely.docs.lazyLoading.description'
  },
  {
    id: 'eager-loading',
    label: 'imagely.docs.eagerLoading',
    outlet: EagerLoadingComponent,
    html: require('!!raw-loader!./examples/eager-loading/eager-loading.component.html'),
    component: require('!!raw-loader!./examples/eager-loading/eager-loading.component.ts'),
    scss: require('!!raw-loader!./examples/eager-loading/eager-loading.component.scss')
  },
  {
    id: 'missing-alt',
    label: 'imagely.docs.missingAlt',
    outlet: MissingAltAttrComponent,
    html: require('!!raw-loader!./examples/missing-alt-attr/missing-alt-attr.component.html'),
    component: require('!!raw-loader!./examples/missing-alt-attr/missing-alt-attr.component.ts'),
    scss: require('!!raw-loader!./examples/missing-alt-attr/missing-alt-attr.component.scss'),
    description: 'imagely.docs.missingAlt.description'
  },
  {
    id: 'fallback-img',
    label: 'imagely.docs.fallbackImg',
    outlet: FallbackImageComponent,
    html: require('!!raw-loader!./examples/fallback-image/fallback-image.component.html'),
    component: require('!!raw-loader!./examples/fallback-image/fallback-image.component.ts'),
    scss: require('!!raw-loader!./examples/fallback-image/fallback-image.component.scss'),
    description: 'imagely.docs.fallbackImg.description'
  }
];
