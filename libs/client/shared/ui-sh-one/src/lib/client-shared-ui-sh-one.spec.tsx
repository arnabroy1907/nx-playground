import { render } from '@testing-library/react';

import ClientSharedUiShOne from './client-shared-ui-sh-one';

describe('ClientSharedUiShOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientSharedUiShOne />);
    expect(baseElement).toBeTruthy();
  });
});
