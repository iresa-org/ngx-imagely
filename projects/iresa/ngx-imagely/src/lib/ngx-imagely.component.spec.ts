import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NgxImagelyComponent } from './ngx-imagely.component';

describe('NgxImagelyComponent', () => {
  let spectator: Spectator<NgxImagelyComponent>;
  const createComponent = createComponentFactory(NgxImagelyComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
